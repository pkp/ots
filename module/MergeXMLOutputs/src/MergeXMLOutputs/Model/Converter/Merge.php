<?php

namespace MergeXMLOutputs\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Libxml\Libxml;
use DOMDocument;

use Manager\Model\Converter\AbstractConverter;

/**
 * Merges the CERMINE and meTypeset XML outputs
 */
class Merge extends AbstractConverter
{
    use Libxml;

    protected $config;
    protected $logger;

    protected $inputFileNlmXml;
    protected $inputFileCermine;
    protected $outputFile;

    /**
     * Constructor
     *
     * @param mixed $config Merge config
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
     * Set the input file to convert (meTypeset output)
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFileNlmxml($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception('meTypeset input file doesn\'t exist');
        }

        $this->inputFileNlmxml = $inputFile;
    }

    /**
     * Set the input file to convert (CERMINE output)
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFileCermine($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception('CERMINE input file doesn\'t exist');
        }

        $this->inputFileCermine = $inputFile;
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
     * Merge the two XML outputs into one document.
     *
     * @return void
     */
    public function convert()
    {
        $this->logger->debugTranslate('mergexmloutputs.converter.startLog');

        if (!$this->merge()) {
            $this->status = false;
            return;
        }

        $this->logger->debugTranslate('mergexmloutputs.converter.finishLog');
    }

    /**
     * Do the actual merge.
     *
     * @return bool Whether or not the transformation was successful
     */
    protected function merge()
    {
        // Get the meTypeset output
        $meTypesetXml = file_get_contents($this->inputFileNlmxml);
        $meTypesetDom = new DOMDocument();
        if (!$meTypesetDom->loadXML($meTypesetXml)) {
            $this->logger->debugTranslate(
                'mergexmloutputs.converter.merge.noMeTypesetDomLog',
                $this->libxmlErrors()
            );
            return false;
        }

        // Get the CERMINE output
        $cermineXml = file_get_contents($this->inputFileCermine);
        $cermineDom = new DOMDocument();
        if (!$cermineDom->loadXML($cermineXml)) {
            $this->logger->debugTranslate(
                'mergexmloutputs.converter.merge.noCermineDomLog',
                $this->libxmlErrors()
            );
            return false;
        }

        // Find the old front matter.
        $meTypesetFronts = $meTypesetDom->getElementsByTagName('front');
        if (!$meTypesetFronts->length) {
            $this->logger->debugTranslate(
                'mergexmloutputs.converter.merge.noMeTypesetFront'
            );
            return false;
        }
        $meTypesetFront = $meTypesetFronts->item(0);

        // Find the new front matter.
        $cermineFronts = $cermineDom->getElementsByTagName('front');
        if (!$cermineFronts->length) {
            $this->logger->debugTranslate(
                'mergexmloutputs.converter.merge.noCermineFront'
            );
            return false;
        }
        $cermineFront = $cermineFronts->item(0);

        // Out with the old, in with the new!
        $cermineFront = $meTypesetDom->importNode($cermineFront, true);
        if (!$meTypesetFront->parentNode->replaceChild(
                $cermineFront,
                $meTypesetFront
                )) {
            $this->logger->debugTranslate(
                'mergexmloutputs.converter.merge.replacementFail',
                $this->libxmlErrors()
            );
            return false;
        }

        // Write out the updated document.
        file_put_contents($this->outputFile, $meTypesetDom->saveXML());

        return true;
    }

}
