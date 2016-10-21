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
    protected $metadataFile;

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
     * Set the metadata file
     *
     * @param mixed $metadataFile
     *
     * @return void
     */
    public function setMetadataFile($metadataFile)
    {
        $this->metadataFile = $metadataFile;
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
          $newXml = preg_replace('/<article-meta>/', '<article-meta><title-group><article-title>Article Title</article-title></title-group>', $newXml);
        }

        // Populate //publisher/publisher-name if it's empty for compatibility
        $frontXPath = new DOMXPath($meTypesetDom);
        $frontPublisherQuery = '//journal-meta/publisher';
        $frontPublisherElements = $frontXPath->query($frontPublisherQuery);
        if ($frontPublisherElements->length == 0) {
          $newXml = preg_replace('/<journal-meta>/', '<journal-meta><publisher><publisher-name>Academic Publisher</publisher-name></publisher>', $newXml);
          $newXml = preg_replace('/<journal-meta\/>/', '<journal-meta><publisher><publisher-name>Academic Publisher</publisher-name></publisher></journal-meta>', $newXml);
        }


        $newXml = $this->process_grobid_xml($this->inputFileGrobid, $newXml);
        
        // @TODO create noNewXmlDomLog, noMetadataDomLog and metadataFrontSwapFail entries
        
        // check if user provided additional metadata via api
        if (file_exists($this->metadataFile)) {
            
            $fileMetadata = file_get_contents($this->metadataFile);
            $metadata = json_decode($fileMetadata);
            $articleMetaStr = $this->_buildArticleMetaNode($metadata);
            
            $metadataDom = new DOMDocument();
            if ($metadataDom->loadXML($articleMetaStr)) {
                $metaFront = $metadataDom->getElementsByTagName('front');
                $metaFront = $metaFront->item(0);
                
                $newXmlDom = new DOMDocument();
                if ($newXmlDom->loadXML($newXml)) {
                    $newXmlFront = $newXmlDom->getElementsByTagName('front');
                    $newXmlFront = $newXmlFront->item(0);
                    
                    // swap
                    $metaFrontNode = $newXmlDom->importNode($metaFront, true);
                    if (!$newXmlFront->parentNode->replaceChild($metaFrontNode, $newXmlFront)) {
                        $this->logger->debugTranslate(
                            'mergexmloutputs.converter.merge.metadataFrontSwapFail',
                            $this->libxmlErrors()
                        );
                    }
                    
                    $newXml = $newXmlDom->saveXML();
                }
                else {
                    $this->logger->debugTranslate(
                        'mergexmloutputs.converter.merge.noNewXmlDomLog',
                        $this->libxmlErrors()
                    );
                }
            }
            else {
                $this->logger->debugTranslate(
                    'mergexmloutputs.converter.merge.noMetadataDomLog',
                    $this->libxmlErrors()
                );
            }
        }

        // Write out the updated document.
        file_put_contents($this->outputFile, $newXml);

        return true;
    }
    
    protected function _buildArticleMetaNode($metadata)
    {
        $metadata = (array) $metadata;
        
        $abstract = isset($metadata['abstract']) ? $metadata['abstract'] : '';
        $articleTitle = isset($metadata['article-title']) ? $metadata['article-title'] : '';
        $institution = isset($metadata['institution']) ? $metadata['institution'] : '';
        $contributors = isset($metadata['contributors']) ? $metadata['contributors'] : array();
        $journalTitle = isset($metadata['journal-title']) ? $metadata['journal-title'] : '';
        
        $count = 0;
        $contributorsStr = '';
        foreach ($contributors as $c) {
            $count++;
            $c = (array) $c;
            
            $contributorsStr .= '<contrib id="A'.$count.'" contrib-type="author">';
            $contributorsStr .= '<name-alternatives>';
            $contributorsStr .= '<string-name>'.$c['name'].'</string-name>';
            $contributorsStr .= '</name-alternatives>';
            $contributorsStr .= '<email>'.$c['email'].'</email>';
            $contributorsStr .= "</contrib>\n";
        }
        
        $xml = <<< EOF
        
<front>
    <journal-meta>
        <journal-title>$journalTitle</journal-title>
        <publisher>
            <publisher-name>$institution</publisher-name>
        </publisher>
    </journal-meta>
    <article-meta>
        <title-group>
            <article-title>$articleTitle</article-title>
        </title-group>
        <contrib-group>
            $contributorsStr
        </contrib-group>
    </article-meta>
    <abstract>$abstract</abstract>
</front>
        
EOF;

        return $xml;
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

            /*
            // create new element
            $newAbstract = $newXmlDom->createElement('abstract');
            $newAbstract->nodeValue = $grobidAbstractRaw;

            if (($OldAbstract = $newXmlDom->getElementsByTagName('abstract')) && $OldAbstract->length) {
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
            */

            // add grobid ref list if there isn't one
            $grobidReflist = $grobidDom->getElementsByTagName('ref-list')->item(0);
            $oldBack = $newXmlDom->getElementsByTagName('back')->item(0);
            if (!is_null($grobidReflist) && ($grobidReflist->childNodes->length !== 0) && ($oldBack->childNodes->length === 0)){
              $newReflist = $newXmlDom->importNode($grobidReflist, true);
              $oldBack->appendChild($newReflist);
              $newXml = $newXmlDom->saveXML();
            }
            return $newXml;
        }

        return $newXml;
    }
}
