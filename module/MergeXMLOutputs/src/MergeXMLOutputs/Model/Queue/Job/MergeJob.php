<?php

namespace MergeXMLOutputs\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Merges meTypeset and CERMINE XML outputs
 */
class MergeJob extends AbstractQueueJob
{
    /**
     * Merges meTypeset and CERMINE XML outputs
     * TODO: finish changing the below
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $pdf = $this->sm->get('PdfConversion\Model\Converter\Merge');

        // Fetch the two XML files output by meTypeset and CERMINE
        // Not sure this will work gracefully at the moment,
        // As both WpPdf conversion and Docx conversion are set to
        // work from "unconverted" state; might need to configure
        // a linear execution order for meTypeset and CERMINE?
        // Need to do some more work here to handle two separate
        // inputs, as well as removing the mentions of "pdf"
        if (
            !($document = $job->getStageDocument(JOB_CONVERSION_STAGE_PDF_EXTRACT)) and
            !($document = $job->getStageDocument(JOB_CONVERSION_STAGE_NLMXML))
        ) {
            throw new \Exception('CERMINE and meTypeset outputs not ready');
        }

        $outputFile = $job->getDocumentPath() . '/document.pdf';
        $pdf->setInputFile($document->path);
        $pdf->setOutputFile($outputFile);
        $pdf->convert();

        $job->conversionStage = JOB_CONVERSION_STAGE_MERGE;

        if (!$pdf->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $pdfDocument = $documentDAO->getInstance();
        $pdfDocument->path = $outputFile;
        $pdfDocument->job = $job;
        $pdfDocument->conversionStage = JOB_CONVERSION_STAGE_MERGE;

        $job->documents[] = $pdfDocument;

        return $job;
    }
}
