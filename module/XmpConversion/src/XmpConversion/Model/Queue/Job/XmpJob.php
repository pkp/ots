<?php

namespace XmpConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Adds a XMP sidecar to the PDF file containing metadata parsed from the
 * NLMXML document
 */
class XmpJob extends AbstractQueueJob
{
    /**
     * Create and add the XMP sidecar
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $pdf = $this->sm->get('XmpConversion\Model\Converter\Xmp');

        // Fetch the NLMXML document; if the references step failed fall back to
        // the NLMXML document before the references conversion took place
        if (!$documentNlmxml = $job->getStageDocument(JOB_CONVERSION_STAGE_BIBTEXREFERENCES)) {
            !$documentNlmxml = $job->getStageDocument(JOB_CONVERSION_STAGE_NLMXML);
        }
        if (!$documentNlmxml) {
            throw new \Exception('Couldn\'t find the NLMXML stage document');
        }

        // Fetch the PDF document
        $documentPdf = $job->getStageDocument(JOB_CONVERSION_STAGE_PDF);
        if (!$documentPdf) {
            throw new \Exception('Couldn\'t find the PDF stage document');
        }

        $pdf->setInputFileNlmxml($documentNlmxml->path);
        $pdf->setInputFilePdf($documentPdf->path);
        $pdf->convert();

        $job->conversionStage = JOB_CONVERSION_STAGE_XMP;

        if (!$pdf->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        // We didn't create a new document; just change the conversion stage of
        // the PDF document
        $documentPdf->conversionStage = JOB_CONVERSION_STAGE_XMP;

        return $job;
    }
}
