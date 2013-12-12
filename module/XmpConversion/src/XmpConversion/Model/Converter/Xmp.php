<?php

namespace XmpConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;
use Xmlps\Libxml\Libxml;
use DOMDocument;
use DOMNodeList;
use DOMXpath;

use Manager\Model\Converter\AbstractConverter;

/**
 * Adds a XMP sidecar to the PDF document containing metadata parsed from the
 * NLMXML document
 */
class Xmp extends AbstractConverter
{
    use Libxml;

    protected $config;
    protected $logger;

    protected $inputFileNlmxml;
    protected $inputFilePdf;
    protected $outputFileXmp;

    protected $dom;
    protected $domXpath;

    protected $metadata;

    // Maps the exiftool metadata switches to Xpath paths
    protected $metadataMap = array(
        'title' => '/article/front/article-meta/title-group/article-title',
        'publicationName' => '/article/front/journal-meta/journal-title',
        'publisher' => '/article/front/journal-meta/publisher/publisher-name',
        'publicationDate' => '/article/front/article-meta/pub-date/year', // TODO shouldn't this be day and month too?
        'number' => '/article/front/article-meta/issue',
        'volume' => '/article/front/article-meta/volume',
        'copyright' => '/article/front/article-meta/permissions/copyright-statement',
        'rights' => '', // TODO ???
        'DOI' => '/article/front/article-meta/article-id[@pub-id-type="doi"]',
        'eISSN' => '', // TODO ???
        'ISSN' => '/article/front/journal-meta/issn',
        'creator' => '/article/front/article-meta/contrib-group/contrib[@contrib-type="author"]',
    );

    /**
     * Constructor
     *
     * @param mixed $config Xmp config
     * @param Logger $logger Logger
     *
     * @return void
     */
    public function __construct($config, Logger $logger)
    {
        $this->config = $config;
        $this->logger = $logger;

        $this->disableLibxmlErrorDisplay();
    }

    /**
     * Set the NLMXML input file to convert
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFileNlmxml($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception('NLMXML input file doesn\'t exist');
        }

        $this->inputFileNlmxml = $inputFile;

        // Load the NLMXML file content
        $xml = file_get_contents($this->inputFileNlmxml);

        // Load the XML into a DOMDocument
        $this->dom = new DOMDocument();
        if (!$this->dom->loadXML($xml)) {
            $this->logger->debugTranslate(
                'xmpconversion.converter.loadXML.domErrorLog',
                $this->libxmlErrors()
            );
        }

        // Create DOMXpath instance
        $this->domXpath = new DOMXpath($this->dom);

        // Set the output file for the XMP sidecar
        $this->outputFileXmp = dirname($this->inputFileNlmxml) . '/document.xmp';
    }

    /**
     * Set the PDF input file to convert
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFilePdf($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception('NLMXML input file doesn\'t exist');
        }

        $this->inputFilePdf = $inputFile;
    }

    /**
     * Create and add the XMP sidecar to the PDF document
     *
     * @return void
     */
    public function convert()
    {
        $this->logger->debugTranslate('xmpconversion.converter.startLog');

        // Parses the metadata from the NLMXML document
        $this->parseMetadata();

        if (empty($this->metadata)) {
            $this->logger->debugTranslate('xmpconversion.converter.metadataErrorLog');
            $this->status = false;
            return;
        }

        // Create the sidecar
        $this->createXmpSidecar();
        if ($this->status === false) {
            $this->logger->debugTranslate('xmpconversion.converter.sidecarCreateErrorLog');
            return;
        }

        // Add the sidecar to the PDF file
        $this->addXmpSidecar();
        if ($this->status === false) {
            $this->logger->debugTranslate('xmpconversion.converter.sidecarAddErrorLog');
        }

        // Remove temporary files
        $this->cleanup();
    }

    /**
     * Parses metadata from the NLMXML document
     *
     * @return void
     */
    protected function parseMetadata()
    {
        foreach($this->metadataMap as $key => $path) {
            $nodeList = $this->domXpath->query($path);
            if (!$nodeList) continue;
            if ($key == 'creator') {
                $this->metadata[$key] = $this->parseAuthorMeta($nodeList, $path);
            }
            else {
                $node = $nodeList->item(0);
                $this->metadata[$key] = $node->nodeValue;
            }
        }
    }

    /**
     * Parse the author metadata
     *
     * @param mixed $nodeList DOMNodeList containing the author meta data
     * @param mixed $path Path to author DOMNodeList
     *
     * @return string String containing the article authors
     */
    protected function parseAuthorMeta(DOMNodeList $nodeList, $path)
    {
        $authors = array();
        foreach ($nodeList as $node) {
            $lastName = $this->domXpath->query($path . '/name/surname');
            $lastName = $lastName->length ? $lastName->item(0)->nodeValue : '';
            $firstName = $this->domXpath->query($path . '/name/given-names');
            $firstName = $firstName->length ? $firstName->item(0)->nodeValue : '';

            if ($firstName or $lastName) {
                $authors[] = $firstName . ' ' . $lastName;
            }
        }

        return implode(', ', $authors);
    }

    /**
     * Create the XMP sidecar based on the metadata parsed from the NLMXML file
     *
     * @return void
     */
    protected function createXmpSidecar()
    {
        $command = new Command;

        // Set the base command
        $command->setCommand($this->config['exiftool']['command']);

        // Set the output file
        $command->addSwitch('-o' , $this->outputFileXmp);

        // Set the switches for the metadata
        foreach($this->metadata as $switch => $value) {
            $command->addSwitch('-' . $switch , $value, '=');
        }

        // Redirect STDERR to STDOUT to captue it in $this->output
        $command->addRedirect('2>&1');

        $this->logger->debugTranslate(
            'xmpconversion.exiftool.executeXmpCommandLog',
            $command->getCommand()
        );

        // Create the XMP sidecar
        $command->execute();
        $this->status = $command->isSuccess();
        $this->output = $command->getOutputString();

        $this->logger->debugTranslate(
            'xmpconversion.exiftool.executeXmpCommandOutputLog',
            $this->output
        );
    }

    protected function addXmpSidecar()
    {
        $command = new Command;

        // Set the base command
        $command->setCommand($this->config['exiftool']['command']);

        // Allow duplicates to be extracted
        $command->addSwitch('-duplicates');

        // Be verbose
        $command->addSwitch('-verbose');

        // Read tags from XMP sidecar
        $command->addSwitch('-TagsFromFile');

        // The XMP file
        $command->addArgument($this->outputFileXmp);

        // The PDF file
        $command->addArgument($this->inputFilePdf);

        // Redirect STDERR to STDOUT to captue it in $this->output
        $command->addRedirect('2>&1');

        $this->logger->debugTranslate(
            'xmpconversion.exiftool.executePdfCommandLog',
            $command->getCommand()
        );

        // Add the XMP sidecar
        $command->execute();
        $this->status = $command->isSuccess();
        $this->output = $command->getOutputString();

        $this->logger->debugTranslate(
            'xmpconversion.exiftool.executePdfCommandOutputLog',
            $this->output
        );
    }

    /**
     * Remove temporary files
     *
     * @return void
     */
    protected function cleanup()
    {
        @unlink($this->outputFileXmp);
        @unlink($this->inputFilePdf . '_original');
    }
}
