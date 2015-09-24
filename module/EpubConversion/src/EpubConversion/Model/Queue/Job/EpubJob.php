<?php

namespace EpubConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Converts the NLMXML document to Epub.
 *
 * The output of this conversion is a single .epub file containing the
 * packaged epub document.
 */
class EpubJob extends AbstractQueueJob
{
    /**
     * Convert the NLMXML to Epub
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $epub = $this->sm->get('EpubConversion\Model\Converter\Epub');

        // Fetch the NLMXML document; if the references step failed fall back to
        // the NLMXML document before the references conversion took place
        if (!$document = $job->getStageDocument(JOB_CONVERSION_STAGE_BIBTEXREFERENCES)) {
            $document = $job->getStageDocument(JOB_CONVERSION_STAGE_NLMXML);
        }
        if (!$document) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        $outputFile = $job->getDocumentPath() . '/document.epub';
        $epub->setInputFile($document->path);
        $epub->setOutputFile($outputFile);
        $epub->convert();

        $job->conversionStage = JOB_CONVERSION_STAGE_EPUB;

        if (!$epub->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $epubDocument = $documentDAO->getInstance();
        $epubDocument->path = $outputFile;
        $epubDocument->job = $job;
        $epubDocument->conversionStage = JOB_CONVERSION_STAGE_EPUB;

        $job->documents[] = $epubDocument;

        return $job;
    }
}
