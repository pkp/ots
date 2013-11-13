<?php

namespace ReferencesConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Parses References from NLM XML document
 */
class ReferencesJob extends AbstractQueueJob
{
    /**
     * Parse references
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $references = $this->sm->get('ReferencesConversion\Model\Converter\References');

        // Fetch the document to convert
        $nlmxmlDocument = $job->getStageDocument(JOB_CONVERSION_STAGE_NLMXML);
        if (!$nlmxmlDocument) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        // Parse the references
        $outputFile = $job->getDocumentPath() . '/references.txt';
        $references->setInputFile($nlmxmlDocument->path);
        $references->setOutputFile($outputFile);
        $references->convert();

        if ($references->getStatus() !== 0) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $docxDocument = $documentDAO->getInstance();
        $docxDocument->path = $outputFile;
        $docxDocument->job = $job;
        $docxDocument->conversionStage = JOB_CONVERSION_STAGE_REFERENCES;

        $job->documents[] = $docxDocument;
        $job->conversionStage = JOB_CONVERSION_STAGE_REFERENCES;

        return $job;
    }
}
