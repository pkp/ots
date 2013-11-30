<?php

namespace BibtexConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Parses Bibtex from references XML
 */
class BibtexJob extends AbstractQueueJob
{
    /**
     * Parse Bibtex
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $bibtex = $this->sm->get('BibtexConversion\Model\Converter\Bibtex');

        // Fetch the document to convert
        $referencesDocument = $job->getStageDocument(JOB_CONVERSION_STAGE_REFERENCES);
        if (!$referencesDocument) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        // Parse the bibtex
        $outputFile = $job->getDocumentPath() . '/document.bib.tex';
        $bibtex->setInputFile($referencesDocument->path);
        $bibtex->setOutputFile($outputFile);
        $bibtex->convert();

        $job->conversionStage = JOB_CONVERSION_STAGE_BIBTEX;

        if (!$bibtex->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $bibtexDocument = $documentDAO->getInstance();
        $bibtexDocument->path = $outputFile;
        $bibtexDocument->job = $job;
        $bibtexDocument->conversionStage = JOB_CONVERSION_STAGE_BIBTEX;

        $job->documents[] = $bibtexDocument;

        return $job;
    }
}
