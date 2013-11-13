<?php

namespace ZipConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Creates a zip file of all the existing documents
 */
class ZipJob extends AbstractQueueJob
{
    /**
     * Process job
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        if (!class_exists('\ZipArchive')) {
            throw new \Exception('Zip extension is missing');
        }

        $zipFile = $job->getDocumentPath() . '/documents.zip';
        if (file_exists($zipFile)) { @unlink($zipFile); }

        $zip = new \ZipArchive();
        if ($zip->open($zipFile, \ZipArchive::CREATE) !== TRUE) {
            throw new \Exception('Couldn\'t create zip archive');
        }

        foreach ($job->documents as $document) {
            $zip->addFile($document->path, basename($document->path));
        }
        $zip->close();

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $docxDocument = $documentDAO->getInstance();
        $docxDocument->path = $zipFile;
        $docxDocument->job = $job;
        $docxDocument->conversionStage = JOB_CONVERSION_STAGE_ZIP;

        $job->documents[] = $docxDocument;
        $job->conversionStage = JOB_CONVERSION_STAGE_ZIP;

        return $job;
    }
}
