<?php

namespace ReferencesConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Zend\Mvc\I18n\Translator;
use DOMNode;
use DOMNodeList;
use RecursiveIteratorIterator;
use Xmlps\DOM\Iterator\RecursiveDOMIterator;

use Manager\Model\Converter\AbstractConverter;

/**
 * Parses references using the ParsCit citation parser
 */
class References extends AbstractConverter
{
    protected $logger;
    protected $translator;

    protected $inputFile;
    protected $outputPath;
    protected $outputFile;

    protected $xml;
    protected $dom;
    protected $domXpath;

    /**
     * Constructor
     *
     * @param Logger $logger Logger
     * @param Translator $translator Translator
     *
     * @return void
     */
    public function __construct(Logger $logger, Translator $translator)
    {
        $this->logger = $logger;
        $this->translator = $translator;

        // Avoid displaying of warnings/errors by libxml
        libxml_use_internal_errors(true);
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
     * Set the output path
     *
     * @param mixed $outputPath
     *
     * @return void
     */
    public function setOutputPath($outputPath)
    {
        $this->outputPath = $outputPath;
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
        $this->logger->debug(
            $this->translator->translate('referencesconversion.converter.startLog')
        );

        // Parse the bibliography
        $bibliography = $this->parseBibliography();
        if (!($bibliography instanceof DOMNodeList)) {
            $this->status = 1;
            return false;
        }

        // Create an XML file containing the bibliography
        $this->save($bibliography);

        $this->status = 0;
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
        $this->dom = \DOMDocument::loadXML($this->xml);
        $this->domXpath = new \DOMXPath($this->dom);
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
            $this->logger->debug(
                $this->translator->translate(
                    'referencesconversion.converter.parseBibliography.noBibliographyLog'
                )
            );

            return false;
        }

        return $bibliography;
    }

    /**
     * Extract standard NLM bibliography
     *
     * @return DOMNode Bibliography node
     */
    protected function extractNlmBibliography()
    {
        $this->logger->debug(
            $this->translator->translate(
                'referencesconversion.converter.parseBibliography.nlmLog'
            )
        );

        $bibliography = $this->domXpath->query('//ref-list');
        if (!$bibliography->length) return false;

        return $bibliography->item(0);
    }

    /**
     * Extract TEI bibliography
     *
     * @return DOMNode Bibliography node
     */
    protected function extractTeiBibliography()
    {
        $this->logger->debug(
            $this->translator->translate(
                'referencesconversion.converter.parseBibliography.teiLog'
            )
        );

        $bibliography = $this->domXpath->query('//sec');

        if (!$bibliography->length) { return false; }

        $bibliography = $bibliography->item(0);

        // Strip the title element
        $titles = $this->domXpath->query('/title', $bibliography);
        if (!$titles->length) { return false; }
        $title = $titles->item(0);
        $bibliography->removeChild($title);

        return $bibliography;
    }

    /**
     * Parse the bibliography from a document.
     *
     * @return DomNode CitationList dom node
     */
    protected function parseBibliography()
    {
        $bibliography = $this->extractBibliography();

        $referencesBaseFile = $this->outputPath . '/document.refs';
        $referencesFile = $referencesBaseFile . '.txt';

        // If we got a bibliography DOM node prepare the content for ParsCit
        if ($bibliography !== false) {
            // Convert bibliography DOM node to string
            $references = array('REFERENCES');
            foreach ($bibliography->childNodes as $reference) {
                $references[] = $this->domNodeValuesToString($reference);
            }
            $references = implode(PHP_EOL . PHP_EOL, $references);

            // Save the references to a file
            file_put_contents($referencesFile, $references);
        }

        // Fall back to the XML file in case the bibliography couldn't be extracted
        else {
            $referencesFile = $this->inputFile;
        }

        // Build the shell command
        $cmd = 'vendor/MichaelThessel/ParsCit/bin/citeExtract.pl';
        $cmd .= ' -m extract_citations ';
        $cmd .= ' "' . addslashes($referencesFile) . '"';
        $cmd .= ' 2> /dev/null';

        $this->logger->debug(
            sprintf(
                $this->translator->translate(
                    'referencesconversion.converter.parsCit.commandLog'
                ),
                $cmd
            )
        );

        // Run the ParsCit conversion
        $output = array();
        exec($cmd, $output, $status);
        $output = implode(PHP_EOL, $output);

        @unlink($referencesBaseFile . '.body');
        @unlink($referencesBaseFile . '.cite');
        @unlink($referencesBaseFile . '.txt');

        $this->logger->debug(
            sprintf(
                $this->translator->translate(
                    'referencesconversion.converter.parsCit.commandOutputLog'
                ),
                $output
            )
        );

        // Check if ParsCit exited sucessfully
        if ($status !== 0) {
            $this->logger->debug(
                sprintf(
                    $this->translator->translate(
                        'referencesconversion.converter.parsCit.commandStatusLog'
                    ),
                    $cmd
                )
            );
            return false;
        }

        // Create DOM tree from output
        $dom = \DOMDocument::loadXML($output, LIBXML_NOERROR);
        if (!($dom instanceof \DOMDocument)) {
            $this->logger->debug(
                $this->translator->translate(
                    'referencesconversion.converter.parsCit.noDOMLog'
                )
            );
            return false;
        }
        $domXpath = new \DOMXPath($dom);

        // Fetch the citation list node
        $parsed = $domXpath->query(
            '/algorithms/algorithm[@name="ParsCit"]/citationList/*'
        );

        if (!$parsed->length) {
            $this->logger->debug(
                $this->translator->translate(
                    'referencesconversion.converter.parsCit.noListNodeLog'
                )
            );
            return false;
        }

        $this->logger->debug(
            $this->translator->translate(
                'referencesconversion.converter.parsCit.successLog'
            )
        );

        return $parsed;
    }

    /**
     * Saves the parsed bibliography as XML to the output file
     *
     * @param DOMNode $bibliography
     *
     * @return void
     */
    protected function save(DOMNodeList &$bibliography)
    {
        $dom = new \DOMDocument;
        $dom->appendChild($dom->createElement('citationList'));
        foreach ($bibliography as $reference) {
            $reference = $dom->importNode($reference, true);
            $dom->documentElement->appendChild($reference);
        }
        $dom->save($this->outputFile);
    }

    /**
     * Parses all the node values from a DOMNode and its children into a string
     *
     * @param DOMNode $node
     * @param string $seperator
     * @return string DOMNode values
     */
    protected function domNodeValuesToString(DOMNode $node, $seperator = ' ') {
        $children = new RecursiveIteratorIterator(
            new RecursiveDOMIterator($node, RecursiveIteratorIterator::SELF_FIRST)
        );

        $childValues = array();
        foreach ($children as $child) {
            $childValues[] = $child->nodeValue;
        }

        return implode($seperator, $childValues);
    }
}
