<?php

namespace ReferencesConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;
use Xmlps\Libxml\Libxml;
use DOMDocument;
use DOMNode;
use DOMNodeList;
use DOMXpath;
use XSLTProcessor;

use Manager\Model\Converter\AbstractConverter;

/**
 * Parses references using the ParsCit citation parser
 */
class References extends AbstractConverter
{
    use Libxml;

    protected $config;
    protected $logger;

    protected $inputFile;
    protected $outputDirectory;
    protected $outputFile;

    protected $xml;
    protected $dom;
    protected $domXpath;

    /**
     * Constructor
     *
     * @param mixed $config
     * @param Logger $logger Logger
     *
     * @return void
     */
    public function __construct($config, Logger $logger)
    {
        if (!isset($config['command'])) {
            throw new \Exception('Parscit command is not configured');
        }

        if (!isset($config['xsl'])) {
            throw new \Exception('XSL file is not configured');
        }

        $this->config = $config;
        $this->logger = $logger;

        $this->disableLibxmlErrorDisplay();
    }

    /**
     * Set the file to convert
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFile($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception('Input file doesn\'t exist');
        }

        $this->inputFile = $inputFile;

        // Populate the XML attribute with the content from the file
        $this->loadXml();

        // Parse the DOM tree from the XML
        $this->parseDom();
    }

    /**
     * Set the output directory for temporary conversion files
     *
     * @param mixed $outputDirectory
     *
     * @return void
     */
    public function setOutputDirectory($outputDirectory)
    {
        $this->outputDirectory = $outputDirectory;
    }

    /**
     * Sets the output file for the parsed references XNL
     *
     * @return void
     */
    public function setOutputFile($outputFile) {
        $this->outputFile = $outputFile;
    }

    /**
     * Loads the xml from the input file
     *
     * @return void
     */
    protected function loadXml()
    {
        $this->xml = file_get_contents($this->inputFile);
    }

    /**
     * Parses the DOM tree from the xml attribute
     *
     * @return void
     */
    protected function parseDom()
    {
        $this->dom = new DOMDocument();

        if (!$this->dom->loadXML($this->xml)) {
            $this->logger->debugTranslate(
                'referencesconversion.converter.loadXML.domErrorLog',
                $this->libxmlErrors()
            );

            return false;
        }

        $this->domXpath = new DOMXPath($this->dom);
    }

    /**
     * Parse the references
     *
     * @return void
     */
    public function convert()
    {
        $this->logger->debugTranslate('referencesconversion.converter.startLog');

        if (
            !($this->dom instanceof DOMDocument) or
            !($this->domXpath instanceof DOMXpath)
        ) {
            $this->logger->debugTranslate(
                'referencesconversion.converter.convert.inputErrorLog'
            );
            $this->status = false;
            return;
        }

        // Parse the bibliography
        if (
            !($bibliography = $this->parseBibliography()) or
            !($bibliography instanceof DOMDocument)
        ) {
            $this->status = false;
            return;
        }

        // Create an XML file containing the bibliography
        file_put_contents($this->outputFile, $bibliography->saveXML());
    }

    /**
     * Parse the bibliography from a document.
     *
     * @return DomNode CitationList dom node
     */
    protected function parseBibliography()
    {
        // Extract the bibliography from the input file
        $bibliography = $this->extractBibliography();

        // Create a temporary file for the parsCit command to process
        $referencesFile = $this->getReferenceFile($bibliography);

        // Process the temporary file with parsCit
        $this->parsCitExecute($referencesFile);

        $this->logger->debugTranslate(
            'referencesconversion.converter.parsCit.commandOutputLog',
            $this->output
        );

        // Exit if parsing failed
        if (!$this->status) { return false; }

        // Load the citation list into a DOMNodeList
        if (!($bibliography = $this->loadCitationList())) return false;

        // XSLT transform the bibliography
        return $this->transform($bibliography);
    }

    /**
     * Extract standard NLM bibliography from document. If standard NLM
     * biblography is not available fall back to TEI bibliography
     *
     * @return DOMNode Bibliography node
     */
    protected function extractBibliography()
    {
        // Fetch the NLM bibliography
        if (!$bibliography = $this->extractNlmBibliography()) {
            // Fall back to the TEI style
            $bibliography = $this->extractTeiBibliography();
        }

        if (!$bibliography) {
            $this->logger->debugTranslate(
                'referencesconversion.converter.parseBibliography.noBibliographyLog'
            );

            return false;
        }

        $bibliography = $bibliography->item(0);
        $this->stripBibliographyTitle($bibliography);

        return $bibliography;
    }

    /**
     * Extract standard NLM bibliography
     *
     * @return DOMNode Bibliography node
     */
    protected function extractNlmBibliography()
    {
        $this->logger->debugTranslate(
            'referencesconversion.converter.parseBibliography.nlmLog'
        );

        $bibliography = $this->domXpath->query('//ref-list');
        if (!$bibliography->length) return false;

        return $bibliography;
    }

    /**
     * Extract TEI bibliography
     *
     * @return DOMNode Bibliography node
     */
    protected function extractTeiBibliography()
    {
        $this->logger->debugTranslate(
            'referencesconversion.converter.parseBibliography.teiLog'
        );

        $bibliography = $this->domXpath->query('//sec');
        if (!$bibliography->length) { return false; }

        return $bibliography;
    }

    /**
     * Strip the title from the bibliography
     *
     * @param DOMNode $bibliography Bibliography
     *
     * @return void
     */
    protected function stripBibliographyTitle(DOMNode $bibliography)
    {
        $titles = $this->domXpath->query('/title', $bibliography);
        if (!$titles->length) { return false; }
        $title = $titles->item(0);
        $bibliography->removeChild($title);
    }

    /**
     * Creates a temporary reference file to be used with the parsCit command
     *
     * @param DOMNode $bibliography Bibliography file name to create a reference from
     * @return string Reference file name
     */
    protected function getReferenceFile($bibliography)
    {
        // If we got a bibliography DOM node prepare the content for ParsCit
        if ($bibliography !== false) {
            $referencesFile = $this->outputDirectory. '/referencesTmp.txt';

            // Convert bibliography DOM node to string
            $references = array('REFERENCES');
            foreach ($bibliography->childNodes as $reference) {
                $references[] = $reference->textContent;
            }
            $references = implode(PHP_EOL . PHP_EOL, $references);

            // Save the references to a file
            file_put_contents($referencesFile, $references);
        }

        // Fall back to the XML file in case the bibliography couldn't be extracted
        else {
            $referencesFile = $this->inputFile;
        }

        return $referencesFile;
    }

    /**
     * Runs the citation parser
     *
     * @param string $referencesFile Reference file to parse
     *
     * @return void
     */
    protected function parsCitExecute($referencesFile)
    {
        // Build the shell command
        $command = new Command;
        $command->setCommand($this->config['command']);
        $command->addSwitch('-m', 'extract_citations');
        $command->addArgument($referencesFile);

        $this->logger->debugTranslate(
            'referencesconversion.converter.parsCit.commandLog',
            $command->getCommand()
        );

        // Run the ParsCit conversion
        $command->execute();
        $this->status = $command->isSuccess();
        $this->output = $command->getOutputString();

        // Remove the temporary files
        $this->parsCitCleanup($referencesFile);
    }

    /**
     * Remove temporary files after ParsCit conversion
     *
     * @param string $referencesFile The reference file to clean up
     *
     * @return void
     */
    protected function parsCitCleanup($referencesFile)
    {
        $referencesBaseFile = preg_replace('/\.[^.]+$/', '', $referencesFile);
        @unlink($referencesBaseFile . '.body');
        @unlink($referencesBaseFile . '.cite');
        @unlink($referencesBaseFile . '.txt');
    }

    /**
     * Load the citation list from the parsCit XML output into a DOMNodeList
     *
     * @return DOMNodeList ParsCit output as DOMNodeList
     */
    protected function loadCitationList()
    {
        // Create DOM tree from output
        $dom = new DOMDocument;
        if (!$dom->loadXML($this->output)) {
            $this->logger->debugTranslate(
                'referencesconversion.converter.parsCit.noDOMLog',
                $this->libxmlErrors()
            );
            return false;
        }
        $domXpath = new DOMXPath($dom);

        // Fetch the citation list node
        $parsed = $domXpath->query(
            '/algorithms/algorithm[@name="ParsCit"]/citationList/*'
        );

        if (!$parsed->length) {
            $this->logger->debugTranslate(
                'referencesconversion.converter.parsCit.noListNodeLog'
            );
            return false;
        }

        $this->logger->debugTranslate(
            'referencesconversion.converter.parsCit.successLog'
        );

        return $parsed;
    }

    /**
     * XSLT transform the bibliography
     *
     * @param DOMNodeList $bibliography
     *
     * @return DOMDocument Transformed document
     */
    protected function transform(DOMNodeList $bibliography)
    {
        $this->logger->debugTranslate(
            'referencesconversion.converter.transformBibliography.startLog'
        );

        // Create a new document with citationList as root element
        $dom = new DOMDocument;
        $dom->appendChild($dom->createElement('citationList'));
        foreach ($bibliography as $reference) {
            $reference = $dom->importNode($reference, true);
            $dom->documentElement->appendChild($reference);
        }

        // Load the XSL stylesheet
        $xslt = new XSLTProcessor();
        if (!($xsl = simplexml_load_string(file_get_contents($this->config['xsl'])))) {
            $this->logger->debugTranslate(
                'referencesconversion.converter.transformBibliography.styleSheetErrorLog'
            );
            return false;
        }
        $xslt->importStylesheet($xsl);

        // Transform the citation list
        if (!($dom = $xslt->transformToDoc($dom))) {
            $this->logger->debugTranslate(
                'referencesconversion.converter.transformBibliography.transformErrorLog',
                $this->libxmlErrors()
            );

            return false;
        };

        // Clean the title elements
        $dom = $this->cleanTransformedTitles($dom);

        $this->logger->debugTranslate(
            'referencesconversion.converter.transformBibliography.successLog',
            $dom->saveXML()
        );

        return $dom;
    }

    /**
     * Clean , . or "in" from titles if necessary
     *
     * @param DOMDocument $dom
     * @return DOMDocument Document with cleaned titles
     */
    protected function cleanTransformedTitles(DOMDocument $dom)
    {
        $titles = $dom->getElementsByTagName('title');

        if ($titles->length) {
            foreach ($titles as $title) {
                $title->nodeValue = preg_replace(
                    '/(.+?)\s*\.?,?\s*(in)?$/is',
                    '\1',
                    $title->nodeValue
                );
            }
        }

        return $dom;
    }
}
