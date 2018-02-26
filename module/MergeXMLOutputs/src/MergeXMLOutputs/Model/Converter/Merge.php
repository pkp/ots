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

        // Find the new front matter.
        $cermineFronts = $cermineDom->getElementsByTagName('front');
        if (!$cermineFronts->length) {
            $this->logger->debugTranslate(
                'mergexmloutputs.converter.merge.noCermineFront'
            );
            return false;
        }
        $cermineFront = $cermineFronts->item(0);

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

        // Find the old front matter.
        $meTypesetFronts = $meTypesetDom->getElementsByTagName('front');
        if (!$meTypesetFronts->length) {
            $this->logger->debugTranslate(
                 'mergexmloutputs.converter.merge.noMeTypesetFront'
            );
            return false;
        }
        $meTypesetFront = $meTypesetFronts->item(0);

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

        // Rearrange label and caption within fig elements
        $k = 0;
        $figElements = $meTypesetDom->getElementsByTagName('fig');
        foreach ($figElements as $figure) {
          $figItem = $figElements->item($k);
          $graphic = $figItem->getElementsByTagName('graphic');
          foreach ($graphic as $g) {
            $children = [];
            foreach ($g->childNodes as $gNode) {
              if ($gNode->nodeType == XML_ELEMENT_NODE) {
                $children[] = $gNode;
              }
            }
            foreach ($children as $child) {
              $figItem->insertBefore($child, $g);
            }
          }
          $k++;
        }

        // Bring aff out of contrib-group & remove label to make Texture happy
        $articleMetaElements = $meTypesetDom->getElementsByTagName('article-meta');
        $articleMetaItem = $articleMetaElements->item(0);
        $contribGroup = $articleMetaItem->getElementsByTagName('contrib-group');
        $children = [];
        foreach ($contribGroup->item(0)->childNodes as $gNode) {
          if ($gNode->nodeType == XML_ELEMENT_NODE and $gNode->localName == "aff") {
            $children[] = $gNode;
          }
        }
        $pubDate = $articleMetaItem->getElementsByTagName('pub-date')->item(0);
        foreach ($children as $child) {
          $label = $child->getElementsByTagName('label')->item(0);
          $child->removeChild($label);
          $articleMetaItem->insertBefore($child, $pubDate);
        }
        // Remove contrib-group in case it's empty now
        if (ctype_space($contribGroup->item(0)->childNodes->item(0)->textContent)) {
          $articleMetaItem->removeChild($contribGroup->item(0));
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
          $newXml = preg_replace('/<\/journal-meta>/', '<publisher><publisher-name>Academic Publisher</publisher-name></publisher></journal-meta>', $newXml);
          $newXml = preg_replace('/<journal-meta\/>/', '<journal-meta><publisher><publisher-name>Academic Publisher</publisher-name></publisher></journal-meta>', $newXml);
        }

        // Populate //journal-meta/journal-id if it's empty for compatibility
        $frontXPath = new DOMXPath($meTypesetDom);
        $frontJournalIDQuery = '//journal-meta/journal-id';
        $frontJournalIDElements = $frontXPath->query($frontJournalIDQuery);
        if ($frontJournalIDElements->length == 0) {
          $newXml = preg_replace('/<journal-meta>/', '<journal-meta><journal-id journal-id-type="other">Journal</journal-id>', $newXml);
        }

        // Populate //pub-date/year if it's empty for compatibility
        $frontXPath = new DOMXPath($meTypesetDom);
        $frontYearQuery = '//pub-date/year';
        $frontYearElements = $frontXPath->query($frontYearQuery);
        if ($frontYearElements->length == 0) {
          $newXml = preg_replace('/<pub-date>/', '<pub-date><year>20XX</year>', $newXml);
          $newXml = preg_replace('/<pub-date\/>/', '<pub-date><year>20XX</year></pub-date>', $newXml);
        }

        // Change string-names to given-names to make Texture happy
        $newXml = preg_replace('/<string-name>(.*?)<\/string-name>/', '<name><given-names>\1</given-names></name>', $newXml);

        // Tag contrib-group with content-type="author" to make Texture happy
        $newXml = preg_replace('/<contrib-group>/', '<contrib-group content-type="author">', $newXml);

        // Get rid of TO_LINK if we couldn't link the reference
        $newXml = preg_replace('/rid="TO_LINK"/', '', $newXml);

        // Use a current JATS DTD
        $newXml = preg_replace('/<!DOCTYPE article PUBLIC "-\/\/NLM\/\/DTD JATS \(Z39\.96\) Journal Archiving and Interchange DTD v1\.0 20120330\/\/EN" "JATS-archivearticle1\.dtd">/', '<!DOCTYPE article PUBLIC "-//NLM//DTD JATS (Z39.96) Journal Archiving and Interchange DTD v1.1 20151215//EN" "http://jats.nlm.nih.gov/archiving/1.1/JATS-archivearticle1.dtd">', $newXml);
        $newXml = preg_replace('/<!DOCTYPE article PUBLIC "-\/\/NLM\/\/DTD Journal Publishing DTD v3\.0 20080202\/\/EN" "http:\/\/dtd\.nlm\.nih\.gov\/publishing\/3\.0\/journalpublishing3\.dtd">/', '<!DOCTYPE article PUBLIC "-//NLM//DTD JATS (Z39.96) Journal Archiving and Interchange DTD v1.1 20151215//EN" "http://jats.nlm.nih.gov/archiving/1.1/JATS-archivearticle1.dtd">', $newXml);

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
		$locale = !empty($metadata['locale']) ? strtoupper(substr($metadata['locale'], 0, 2)) : '';
		
		
        $xml = "<front>";
		
		/* Journal meta */
		$xml .= "<journal-meta>";
		$xml .= !empty($metadata['journal-id']) ? "<journal-id journal-id-type=\"other\">".$metadata['journal-id']."</journal-id>" : "";
		
		$xml .= "<journal-title-group>";
                if(!empty($metadata['journal-titles']) && is_object($metadata['journal-titles'])) { $metadata['journal-titles'] = (array) $metadata['journal-titles']; }
		$xml .= !empty($metadata['journal-titles'][$locale]) ? "<journal-title>".$metadata['journal-titles'][$locale]."</journal-title>" : "";
			if (count($metadata['journal-titles']) > 1){				

				foreach ($metadata['journal-titles'] as $loc => $title) {
					if ($loc == $locale) continue;
                    $xml .= "<trans-title-group xml:lang=\"" . $loc . "\">";
					$xml .= "<trans-title>" . $title . "</trans-title>\n";
                    $xml .= "</trans-title-group>";
				}
			}
			
		$xml .= "</journal-title-group>";
		
		$xml .= !empty($metadata['online-ISSN']) ? "<issn pub-type=\"epub\">".$metadata['online-ISSN']."</issn>" : "<issn pub-type=\"epub\">ISSN</issn>";
		$xml .= !empty($metadata['print-ISSN']) ? "<issn pub-type=\"ppub\">".$metadata['print-ISSN']."</issn>" : "";
	     
		$xml .= !empty($metadata['institution']) ? "<publisher><publisher-name>".$metadata['institution']."</publisher-name></publisher>" : "";
		
		$xml .= "</journal-meta>";
		
		/* Article meta */
		$xml .= "<article-meta>";
		$xml .= !empty($metadata['article-id']) ? "<article-id pub-id-type=\"other\">".$metadata['article-id']."</article-id>" : "";
		$xml .= !empty($metadata['doi']) ? "<article-id pub-id-type=\"doi\">".$metadata['doi']."</article-id>" : "";

		$xml .= "<title-group>";
                if(!empty($metadata['article-titles']) && is_object($metadata['article-titles'])) { $metadata['article-titles'] = (array) $metadata['article-titles']; }
		$xml .= !empty($metadata['article-titles'][$locale]) ? "<article-title>".$metadata['article-titles'][$locale]."</article-title>" : "";
			if (count($metadata['article-titles']) > 1){
				$xml .= "<trans-title-group>";
				
				foreach ($metadata['article-titles'] as $loc => $title) {
					if ($loc == $locale) continue;
					$xml .= "<trans-title xml:lang=\"" . $loc . "\">" . $title . "</trans-title>\n";
				}
				
				$xml .= "</trans-title-group>";
			}
			
		$xml .= "</title-group>";		

		/* Contributors */
		$xml .= '<contrib-group content-type="author">';		
		$contributors = !empty($metadata['contributors']) ? $metadata['contributors'] : array();
		$count = 0;
		foreach ($contributors as $c) {
			$count++;
			$c = (array) $c;
			$xml .= '<contrib id="A'.$count.'" contrib-type="'.$c['contribType'].'">';			
			$xml .= '<name>';
			$xml .= '<surname>'.$c['lastName'].'</surname>';
			$xml .= '<given-names>'.$c['firstName'].'</given-names>';
			$xml .= '</name>';
			$xml .= !empty($c['orcid']) ? '<contrib-id contrib-id-type="orcid">'.$c['orcid'].'</contrib-id>' : "";
			$xml .= '<email>'.$c['email'].'</email>';
			$xml .= '<aff>'.$c['affiliation'].'</aff>';	
			$xml .= '<bio><p>'.$c['bio'].'</p></bio>';
			$xml .= "</contrib>\n";
		}	
		$xml .= "</contrib-group>";

		/* Issue details */
		if (!empty($metadata['issue-details'])){
			$issueDetails = (array) $metadata['issue-details'];
			$xml .=  !empty($issueDetails['issue-year']) ? "<pub-date pub-type=\"collection\"><year>" . $issueDetails['issue-year'] . "</year></pub-date>" : "<pub-date pub-type=\"collection\"><year>" . date("Y") . "</year></pub-date>";
			if (!empty($issueDetails['issue-volume'])) $xml .=  "<volume>" . $issueDetails['issue-volume'] . "</volume>";
			if (!empty($issueDetails['issue-number'])) $xml .=  "<issue>" . $issueDetails['issue-number'] . "</issue>";
			if (!empty($issueDetails['issue-title'])) $xml .=  "<issue-title>" . $issueDetails['issue-title'] . "</issue-title>";
		}		
	
		/* Pages */
		$xml .= !empty($metadata['fpage']) ? "<fpage>".$metadata['fpage']."</fpage>" : "";
		$xml .= !empty($metadata['lpage']) ? "<lpage>".$metadata['lpage']."</lpage>" : "";
		
		if (!empty($metadata['copyright-statement']) || !empty($metadata['copyright-year']) || !empty($metadata['license'])){
			$xml .= "<permissions>";
			$xml .= !empty($metadata['copyright-statement']) ? "<copyright-statement>".$metadata['copyright-statement']."</copyright-statement>" : "";
			$xml .= !empty($metadata['copyright-year']) ? "<copyright-year>".$metadata['copyright-year']."</copyright-year>" : "";
			
			$xml .= !empty($metadata['licence']) ? "<license xlink:href=\"" . $metadata['licence-url'] . "\"><license-p>". $metadata['licence'] ."</license-p>" : "";
			
			$xml .= "</permissions>";
		}
		
		/* Abstracts */
                if(!empty($metadata['abstracts']) && is_object($metadata['abstracts'])) { $metadata['abstracts'] = (array) $metadata['abstracts']; }
		$xml .= !empty($metadata['abstracts'][$locale]) ? "<abstract xml:lang=\"" . $locale . "\"><p>".$metadata['abstracts'][$locale]."</p></abstract>" : "";
		
			if (count($metadata['abstracts']) > 1){
				
				foreach ($metadata['abstracts'] as $loc => $abstract) {
					if ($loc == $locale) continue;
					$xml .= !empty($metadata['abstracts'][$loc]) ? "<trans-abstract xml:lang=\"" . $loc . "\"><p>".$abstract."</p></trans-abstract>" : "";
					
				}
				
			}
		
		$xml .= !empty($metadata['page-count']) ? "<counts><page-count count=\"".$metadata['page-count']."\" /></counts>" : "";

		$xml .= "</article-meta>";
   		
		$xml .= "</front>";

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
            //$grobidAbstract = $grobidDom->getElementsByTagName('abstract');
            //if (!$grobidAbstract->length) {
            //    $this->logger->debugTranslate(
            //        'mergexmloutputs.converter.merge.noGrobidAbstract'
            //    );
            //    return false;
            //}

            //$grobidAbstract = $grobidAbstract->item(0);
            //$grobidAbstractRaw = trim(utf8_encode($grobidAbstract->nodeValue));

            // cancel if abstract is empty
            //if (empty($grobidAbstractRaw)) {
            //    return $newXml;
            //}

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
