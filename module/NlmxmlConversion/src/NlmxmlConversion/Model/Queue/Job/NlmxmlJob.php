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
        $metypeset = $this->sm->get('NlmxmlConversion\Model\Converter\Metypeset');

        // Fetch the document to convert
        $docxDocument = $job->getStageDocument(JOB_CONVERSION_STAGE_DOCX);
        if (!$docxDocument) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        // Convert the document
        $metypeset->setInputFile($docxDocument->path);
        $outputDirectory = $job->getDocumentPath() . '/metypeset';
        $metypeset->setOutputDirectory($outputDirectory);
        $metypeset->convert();

        $xmlFile = $docxDocument->getFileName(true) . '.xml';
        $meTypesetOutputPath = $outputDirectory . '/nlm/' . $xmlFile;

        if (!$metypeset->getStatus() or !file_exists($meTypesetOutputPath)) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        $outputPath = $job->getDocumentPath() . '/' . $xmlFile;
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
