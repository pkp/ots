<?php

namespace Cermine\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Extracts information from PDF documents using CERMINE
 */
class CermineJob extends AbstractQueueJob
{
    /**
     * Extract content
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $cermine = $this->sm->get('Cermine\Model\Converter\Cermine');

        // Fetch the document to convert
        if ($job->inputFileFormat == JOB_INPUT_TYPE_PDF) {
            $pdfDocument = $job->getStageDocument(JOB_CONVERSION_STAGE_PDF_IN);
        } else {
            $pdfDocument = $job->getStageDocument(JOB_CONVERSION_STAGE_WP_PDF);
        }

        if (!$pdfDocument) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        // Convert the document
        $cermine->setInputFile($pdfDocument->path);
        $outputPath = $job->getDocumentPath() . '/document_from_pdf.xml';
        $cermine->setOutputFile($outputPath);
        $cermine->convert();

        if (!$cermine->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $xmlDocument = $documentDAO->getInstance();
        $xmlDocument->path = $outputPath;
        $xmlDocument->mimeType = 'application/xml';
        $xmlDocument->job = $job;
        $xmlDocument->conversionStage = JOB_CONVERSION_STAGE_PDF_EXTRACT;

        $job->documents[] = $xmlDocument;
        $job->conversionStage = JOB_CONVERSION_STAGE_PDF_EXTRACT;

        return $job;
    }
}
