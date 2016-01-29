<?php

namespace ParsCitConversion\Model\Converter;

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
class ParsCit extends AbstractConverter
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
     * Parse the references
     *
     * @return void
     */
    public function convert()
    {
        $this->logger->debugTranslate('referencesconversion.converter.startLog');
        
        // Process the temporary file with parsCit
        $this->parsCitExecute($this->inputFile);
        
        // Exit if parsing failed
        if (!$this->status) { return false; }

        // Load the citation list into a DOMNodeList
        if (!($bibliography = $this->loadCitationList())) return false;

        // XSLT transform the bibliography
        $bibliography = $this->transform($bibliography);

        // Create an XML file containing the bibliography
        file_put_contents($this->outputFile, $bibliography->saveXML());
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
        // @unlink($referencesBaseFile . '.txt');
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
