<?php

namespace NlmxmlConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Generates NLM-XML documents
 */
class NlmxmlJob extends AbstractQueueJob
{
    /**
     * Generate document
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $metypeset = $this->sm->get('NlmxmlConversion\Model\Metypeset');

        // Fetch the document to convert
        $docxDocument = $this->getStageDocument($job, JOB_CONVERSION_STAGE_DOCX);

        // Convert the document
        $metypeset->setInputFile($docxDocument->path);
        $outputDirectory = $job->getDocumentPath() . '/metypeset';
        $metypeset->setOutputDirectory($outputDirectory);
        $metypeset->convert();

        $meTypesetOutputPath = $outputDirectory . '/document.xml';

        if ($metypeset->getStatus() !== 0 or !file_exists($meTypesetOutputPath)) {
            @unlink($outputDirectory);
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        $outputPath = $job->getDocumentPath() . '/document.xml';
        @rename($meTypesetOutputPath, $outputPath);

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $docxDocument = $documentDAO->getInstance();
        $docxDocument->path = $outputPath;
        $docxDocument->job = $job;
        $docxDocument->conversionStage = JOB_CONVERSION_STAGE_NLMXML;

        $job->documents[] = $docxDocument;
        $job->conversionStage = JOB_CONVERSION_STAGE_NLMXML;

        return $job;
    }
}
