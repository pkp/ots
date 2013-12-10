<?php

namespace PdfConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Converts the HTML to PDF
 */
class PdfJob extends AbstractQueueJob
{
    /**
     * Convert the HTML to PDF
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $pdf = $this->sm->get('PdfConversion\Model\Converter\Pdf');

        // Fetch the zip file containing the html
        if (!$document = $job->getStageDocument(JOB_CONVERSION_STAGE_HTML)) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        $outputFile = $job->getDocumentPath() . '/document.pdf';
        $pdf->setInputFile($document->path);
        $pdf->setOutputFile($outputFile);
        $pdf->convert();

        $job->conversionStage = JOB_CONVERSION_STAGE_PDF;

        if (!$pdf->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $pdfDocument = $documentDAO->getInstance();
        $pdfDocument->path = $outputFile;
        $pdfDocument->job = $job;
        $pdfDocument->conversionStage = JOB_CONVERSION_STAGE_PDF;

        $job->documents[] = $pdfDocument;

        return $job;
    }
}
