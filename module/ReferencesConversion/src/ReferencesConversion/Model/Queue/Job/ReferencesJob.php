<?php

namespace ReferencesConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Parses References from NLM XML document
 */
class ReferencesJob extends AbstractQueueJob
{
    /**
     * Parse references
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $references = $this->sm->get('ReferencesConversion\Model\Converter\References');

        // Fetch the document to convert
        $job->getStageDocument(JOB_CONVERSION_STAGE_XML_MERGE);

        if (!$xmlDocument) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        // Parse the references
        $outputFile = $job->getDocumentPath() . '/document.bib';
        $parsCitReferencesFile = $job->getDocumentPath() . '/references/parsCit.txt';
        $references->setInputFile($xmlDocument->path);
        $references->setParsCitReferencesFilePath($parsCitReferencesFile);
        $references->setOutputDirectory($job->getDocumentPath());
        $references->setOutputFile($outputFile);
        $references->convert();

        $job->conversionStage = JOB_CONVERSION_STAGE_REFERENCES;

        if (!file_exists($outputFile) || !$references->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        if (!file_exists($parsCitReferencesFile)) {
            $job->referenceParsingSuccess = true;
            $job->conversionStage = JOB_CONVERSION_STAGE_BIBTEX;
        }

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $referenceBibtexDocument = $documentDAO->getInstance();
        $referenceBibtexDocument->path = $outputFile;
        $referenceBibtexDocument->job = $job;
        $referenceBibtexDocument->conversionStage = JOB_CONVERSION_STAGE_REFERENCES;

        $job->documents[] = $referenceBibtexDocument;

        return $job;
    }
}
