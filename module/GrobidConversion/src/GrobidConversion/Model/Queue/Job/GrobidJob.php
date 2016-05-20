<?php

namespace GrobidConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Generates Grobid documents
 */
class GrobidJob extends AbstractQueueJob
{
    /**
     * Generate document
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $grobid = $this->sm->get('GrobidConversion\Model\Converter\GrobId');

        // Fetch the document to convert
        if (!$pdfDocument = $job->getStageDocument(JOB_CONVERSION_STAGE_PDF_IN)) {
            $pdfDocument = $job->getStageDocument(JOB_CONVERSION_STAGE_WP_PDF);
        }
        
        if (!$pdfDocument) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        $outputPath = $job->getDocumentPath() . '/grobid.xml';
        
        $job->conversionStage = JOB_CONVERSION_STAGE_GROBID;
        
        // Convert the document
        $grobid->setInputFile($pdfDocument->path);
        $grobid->setOutputFile($outputPath);
        $grobid->convert();
        

        if (!$grobid->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $teiDocument = $documentDAO->getInstance();
        $teiDocument->path = $outputPath;
        $teiDocument->job = $job;
        $teiDocument->conversionStage = JOB_CONVERSION_STAGE_GROBID;

        $job->documents[] = $teiDocument;
        $job->conversionStage = JOB_CONVERSION_STAGE_GROBID;

        return $job;
    }
}
