<?php

namespace WpPdfConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Generates PDF documents
 */
class WpPdfJob extends AbstractQueueJob
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
        $unconvertedDocument = $job->getStageDocument(JOB_CONVERSION_STAGE_WP_IN);
        if (!$unconvertedDocument) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        // Convert the document
        $unoconv->setFilter('pdf');
        $unoconv->setInputFile($unconvertedDocument->path);
        $outputPath = $job->getDocumentPath() . '/document_from_wp.pdf';
        $unoconv->setOutputFile($outputPath);
        $unoconv->convert();

        if (!$unoconv->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $pdfDocument = $documentDAO->getInstance();
        $pdfDocument->path = $outputPath;
        $pdfDocument->mimeType = 'application/pdf';
        $pdfDocument->job = $job;
        $pdfDocument->conversionStage = JOB_CONVERSION_STAGE_WP_PDF;

        $job->documents[] = $pdfDocument;
        $job->conversionStage = JOB_CONVERSION_STAGE_WP_PDF;

        return $job;
    }
}
