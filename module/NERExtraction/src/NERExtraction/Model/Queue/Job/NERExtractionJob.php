<?php 

namespace NERExtraction\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Extracts named entities from xml document 
 */
class NERExtractionJob extends AbstractQueueJob
{
    /**
     * Extract named entities
     * 
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $extractor = $this->sm->get('NERExtraction\Model\Converter\NERExtractor');

        // fetch xml document
        $doc = $job->getStageDocument(JOB_CONVERSION_STAGE_XML_MERGE);
        
        if (!$doc) {
            throw new \Exception("Couldn't find the stage document");
        }
        
        // generate named entities document
        $extractor->setInputFile($doc->path);
        $outputPath = $job->getDocumentPath() . '/named-entities.json'; 
        $extractor->setOutputFile($outputPath);
        $extractor->convert();
        
        if (!$extractor->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }
        
        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $jsonDocument = $documentDAO->getInstance();
        $jsonDocument->path = $outputPath;
        $jsonDocument->mimeType = 'application/json';
        $jsonDocument->job = $job;
        $jsonDocument->conversionStage = JOB_CONVERSION_STAGE_NER_EXTRACT;
        
        $job->documents[] = $jsonDocument;
        $job->conversionStage = JOB_CONVERSION_STAGE_NER_EXTRACT;
        
        return $job;
    }
}