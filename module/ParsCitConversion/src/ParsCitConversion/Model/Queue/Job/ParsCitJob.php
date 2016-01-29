<?php 

namespace ParsCitConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Parses References from NLM XML document
 */
class ParsCitJob extends AbstractQueueJob
{
    /**
     * Proceed with conversion
     * 
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $parsCit = $this->sm->get('ParsCitConversion\Model\Converter\ParsCit');

        // path to reference file
        $docpath = $job->getDocumentPath() . '/references/parsCit.txt';
        
        if (!file_exists($docpath)) {
            throw new \Exception("Couldn't find references document");
        }
        
        $outputFile = $job->getDocumentPath() . '/document.bib.xml';
        $parsCit->setInputFile($docpath);
        $parsCit->setOutputDirectory($job->getDocumentPath());
        $parsCit->setOutputFile($outputFile);
        $parsCit->convert();
        
        if (!$parsCit->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }
        
        $job->conversionStage = JOB_CONVERSION_STAGE_PARSCIT;
        
        if (!$parsCit->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }
        
        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $referenceXmlDocument = $documentDAO->getInstance();
        $referenceXmlDocument->path = $outputFile;
        $referenceXmlDocument->job = $job;
        $referenceXmlDocument->conversionStage = JOB_CONVERSION_STAGE_PARSCIT;
        $job->documents[] = $referenceXmlDocument;
        
        // Flag the reference parsing as successful. This will
        // influence which conversion steps will be executed.
        $job->referenceParsingSuccess = true;
        
        return $job;
    }
}