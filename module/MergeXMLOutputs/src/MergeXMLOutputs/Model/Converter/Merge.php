<?php

namespace MergeXMLOutputs\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Libxml\Libxml;
use DOMDocument;
use DOMXPath;

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
    protected $inputFileGrobid;
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
     * Set the input file to convert (GROBID output)
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFileGrobid($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception('GROBID input file doesn\'t exist');
        }

        $this->inputFileGrobid = $inputFile;
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

        if (!$this->status = $this->merge()) {
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

        $newXml = $meTypesetDom->saveXML();

        // Populate //front/title if it's empty for compatibility
        $frontXPath = new DOMXPath($meTypesetDom);
        $frontTitleQuery = '//article-meta/title-group';
        $frontTitleElements = $frontXPath->query($frontTitleQuery);
        if ($frontTitleElements->length == 0) {
          #$frontStubDom = new DOMDocument;
          #$frontStubDom->LoadXML("<title>Article Title</title>");
          #$frontNode = $meTypesetDom->getElementsByTagName('front')->item(0);
          #$frontNode = $frontStubDom->importNode($frontNode, true);
          #$frontStubDom->documentElement->appendChild($frontNode);
          # the above doesn't work, so
          # I'm parsing XML with regex again because I hate PHP
          $newXml = preg_replace('/<article-meta>/', '<article-meta><title-group><article-title>Article Title</article-title></title-group>', $newXml);
        }

        $newXml = $this->process_grobid_xml($this->inputFileGrobid, $newXml);

        // Write out the updated document.
        file_put_contents($this->outputFile, $newXml);

        return true;
    }

    /*
     * merges abstract from grobid
     *
     * @param grobidDocumentPath path to grobid xml
     * @param $newXml document xml content
     */
    public function process_grobid_xml($grobidDocumentPath, $newXml)
    {
        if (!is_null($grobidDocumentPath)) {

            // Get Grobid output
            $grobidXml = file_get_contents($grobidDocumentPath);
            $grobidDom = new DOMDocument();
            if (!$grobidDom->loadXML($grobidXml)) {
                $this->logger->debugTranslate(
                        'mergexmloutputs.converter.merge.noGrobidDomLog',
                        $this->libxmlErrors()
                        );
                return false;
            }

            // Find grobid abstract
            $grobidAbstract = $grobidDom->getElementsByTagName('abstract');
            if (!$grobidAbstract->length) {
                $this->logger->debugTranslate(
                    'mergexmloutputs.converter.merge.noGrobidAbstract'
                );
                return false;
            }

            $grobidAbstract = $grobidAbstract->item(0);
            $grobidAbstractRaw = trim(utf8_encode($grobidAbstract->nodeValue));

            // cancel if abstract is empty
            if (empty($grobidAbstractRaw)) {
                return $newXml;
            }

            // if new xml contains <abstract>, replace
            $newXmlDom = new DOMDocument();
            if (!$newXmlDom->loadXML($newXml)) {
                $this->logger->debugTranslate(
                    'mergexmloutputs.converter.merge.newXmlLoadFailureDomLog',
                    $this->libxmlErrors()
                );
                return false;
            }

            // create new element
            $newAbstract = $newXmlDom->createElement('abstract');
            $newAbstract->nodeValue = $grobidAbstractRaw;

            if ($OldAbstract = $newXmlDom->getElementsByTagName('abstract')) {
                $OldAbstract = $OldAbstract->item(0);

                $OldAbstract->parentNode->replaceChild($newAbstract, $OldAbstract);
                $newXml = $newXmlDom->saveXML();
            }
            // or add abstract tag
            else {
                $parent = $newXmlDom->getElementsByTagName('article-meta')->item(0);
                $parent->appendChild($newAbstract);
                $newXml = $newXmlDom->saveXML();
            }

            return $newXml;
        }

        return $newXml;
    }
}
