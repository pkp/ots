<?php 

namespace XmlFinal\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Extracts named entities from xml document 
 */
class XmlFinalJob extends AbstractQueueJob
{
    /**
     * Copy final XML document
     * 
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $xmlFinal = $this->sm->get('XmlFinal\Model\Converter\XmlFinal');

        // fetch xml documents
        $bibtexRefDoc = $job->getStageDocument(JOB_CONVERSION_STAGE_BIBTEXREFERENCES);
        $xmlMergeDoc = $job->getStageDocument(JOB_CONVERSION_STAGE_XML_MERGE);
        $outputPath = $job->getDocumentPath() . '/document-final.xml';
        
        if (!$bibtexRefDoc && !$xmlMergeDoc) {
            throw new \Exception("Couldn't find the XML documents");
        }
        
        if ($xmlMergeDoc) {
            $xmlFinal->setXmlMergeInputFile($xmlMergeDoc->path);
        }
        if ($bibtexRefDoc) {
            $xmlFinal->setBibtexRefInputFile($bibtexRefDoc->path);
        }
        $xmlFinal->setOutputFile($outputPath);
        $xmlFinal->convert();
        
        if (!$xmlFinal->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }
        
        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $xmlDocument = $documentDAO->getInstance();
        $xmlDocument->path = $outputPath;
        $xmlDocument->mimeType = 'application/xml';
        $xmlDocument->job = $job;
        $xmlDocument->conversionStage = JOB_CONVERSION_STAGE_XMLFINAL;
        
        $job->documents[] = $xmlDocument;
        $job->conversionStage = JOB_CONVERSION_STAGE_XMLFINAL;
        
        return $job;
    }
}