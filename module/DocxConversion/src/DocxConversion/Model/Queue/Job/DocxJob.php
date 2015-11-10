<?php

namespace DocxConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Generates DocX documents
 */
class DocxJob extends AbstractQueueJob
{
    /**
     * Generate document
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $unoconv = $this->sm->get('DocxConversion\Model\Converter\Unoconv');

        // Fetch the document to convert
        $unconvertedDocument =
            $job->getStageDocument(JOB_CONVERSION_STAGE_WP_IN);
        if (!$unconvertedDocument) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        // Convert the document
        $unoconv->setFilter('docx7');
        $unoconv->setInputFile($unconvertedDocument->path);
        $outputPath = $job->getDocumentPath() . '/document.docx';
        $unoconv->setOutputFile($outputPath);
        $unoconv->convert();

        if (!$unoconv->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $docxDocument = $documentDAO->getInstance();
        $docxDocument->path = $outputPath;
        $docxDocument->mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        $docxDocument->job = $job;
        $docxDocument->conversionStage = JOB_CONVERSION_STAGE_DOCX;

        $job->documents[] = $docxDocument;
        $job->conversionStage = JOB_CONVERSION_STAGE_DOCX;

        return $job;
    }
}
