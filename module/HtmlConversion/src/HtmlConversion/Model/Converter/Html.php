<?php

namespace HtmlConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;
use DOMDocument;
use XSLTProcessor;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;

use Manager\Model\Converter\AbstractConverter;

/**
 * Converts the NLM XML document to HTML
 */
class Html extends AbstractConverter
{
    protected $config;
    protected $logger;

    protected $inputFile;
    protected $outputFile;

    protected $nlmxmlDom;
    protected $htmlDom;

    /**
     * Constructor
     *
     * @param mixed $config Html config
     * @param Logger $logger Logger
     *
     * @return void
     */
    public function __construct($config, Logger $logger)
    {
        $this->config = $config;
        $this->logger = $logger;

        // Avoid displaying of warnings/errors by libxml
        libxml_use_internal_errors(true);
        libxml_clear_errors();
    }

    /**
     * Set the input file to convert
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFile($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception('NLM XML input file doesn\'t exist');
        }

        $this->inputFile = $inputFile;
    }

    /**
     * Set the output file
     *
     * @param mixed $outputFile
     *
     * @return void
     */
    public function setOutputFile($outputFile)
    {
        $this->outputFile = $outputFile;
    }

    /**
     * Load the input file into a DOMDocument
     *
     * @return bool Whether or not the file could be loaded
     */
    protected function loadNlmxmlDom()
    {
        $this->nlmxmlDom = new DOMDocument;
        return $this->nlmxmlDom->loadXML(file_get_contents($this->inputFile));
    }

    /**
     * Convert the NLM XML document to HTML
     *
     * @return void
     */
    public function convert()
    {
        $this->logger->debugTranslate('htmlconversion.converter.startLog');

        // Create a DOMDocument from the NLMXML input file
        if (!$this->loadNlmxmlDom()) {
            $this->logger->debugTranslate(
                'htmlconversion.converter.nlmxmlDomErrorLog',
                $this->libxmlErrors()
            );
            $this->status = false;
            return;
        }

        if (!$this->transform()) {
            $this->status = false;
            return;
        }

        // Create the zip file with the HTML and the HTML assets
        $this->package();
    }

    /**
     * Transform the NLMXML document to HTML
     *
     * @return bool Wheter or not the transformation was successful
     */
    protected function transform()
    {
        // Check if the XSL file exists
        if (!file_exists($this->config['xsl'])) {
            $this->logger->debugTranslate(
                'htmlconversion.converter.xslFileNotFoundLog'
            );
            return;
        }

        $xsl = new DOMDocument;
        if (!$xsl->load($this->config['xsl'])) {
            $this->logger->debugTranslate(
                'htmlconversion.converter.xslLoadErrorLog',
                $this->libxmlErrors()
            );
            return false;
        }

        $xslt = new XSLTProcessor;
        $xslt->importStylesheet($xsl);

        // Transform the document
        if (!($this->htmlDom = $xslt->transformToDoc($this->nlmxmlDom))) {
            $this->logger->debugTranslate(
                'htmlconversion.converter.transformErrorLog',
                $this->libxmlErrors()
            );

            return false;
        };

        return true;
    }

    /**
     * Package the HTML and its assets into a zip archive (output file)
     *
     * @return void
     */
    protected function package()
    {
        $zip = new \ZipArchive();
        if ($zip->open($this->outputFile, \ZipArchive::CREATE) !== TRUE) {
            throw new \Exception('Couldn\'t create zip archive');
        }

        $zip->addFromString('document.html', $this->htmlDom->saveHTML());

        if (
            !isset($this->config['html_includes']) or
            !is_dir($this->config['html_includes'])
        ) {
            throw new \Exception('Invalid HTML includes directory');
        }

        // Add the contents of the HTML includes directory to the ZIP file
        $it = new RecursiveDirectoryIterator($this->config['html_includes']);
        $files = new RecursiveIteratorIterator(
            $it,
            RecursiveIteratorIterator::CHILD_FIRST
        );
        foreach($files as $file) {
            if ($file->getType() == 'dir') { continue; }
            $zipPath = $file->getPathname();
            $zipPath = str_replace($this->config['html_includes'] . '/', '', $zipPath);
            $zip->addFile($file->getRealPath(), $zipPath);
        }

        $zip->close();
    }

    /**
     * Returns a string containing LIBXML errors
     *
     * @return string LIBXML errors
     */
    protected function libxmlErrors()
    {
        $errors = implode(PHP_EOL, array_map(
            function ($e) { return $e->message; },
            libxml_get_errors()
        ));
        libxml_clear_errors();

        return $errors;
    }
}
