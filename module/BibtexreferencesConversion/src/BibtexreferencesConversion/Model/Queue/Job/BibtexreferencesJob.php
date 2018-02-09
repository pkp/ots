<?php

namespace BibtexreferencesConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Preplaces reference list in NLMXML document with a reference list parsed
 * from the Bibtex conversion output using biblatex2xml
 */
class BibtexreferencesJob extends AbstractQueueJob
{
    /**
     * Replace reference list
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $bibtexreferences = $this->sm->get('BibtexreferencesConversion\Model\Converter\Bibtexreferences');

        // Fetch the NLMXML document in which the references will be
        // replaced.
        $xmlDocument = $job->getStageDocument(JOB_CONVERSION_STAGE_XML_MERGE);
        
        if (!$xmlDocument) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        // Fetch the bibtex document which will be converted to NLMXML
        $bibtexDocument = $job->getStageDocument(JOB_CONVERSION_STAGE_REFERENCES);
        if (!$bibtexDocument) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        // backup xml document from previous stage before conversion
        $stageDocumentName = $xmlDocument->getConversionStageSpecificName();
        $destDir = dirname($xmlDocument->path);
        $backupXmlDocumentPath = "{$destDir}/{$stageDocumentName}";
        copy($xmlDocument->path, $backupXmlDocumentPath);

        // Do the reference list replacement
        $bibtexreferences->setInputFileNlmxml($xmlDocument->path);
        $bibtexreferences->setInputFileBibtex($bibtexDocument->path);
        $bibtexreferences->convert();

        if (!$bibtexreferences->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            // delete backup xml document in case of failure
            unlink($backupXmlDocumentPath);
            return $job;
        }

        // current path to xml document
        $xmlDocumentCurrentPath = $xmlDocument->path;

        // point existing document to backup document and save change
        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $xmlDocument->path = $backupXmlDocumentPath;
        $documentDAO->save($xmlDocument);

        // create a new document
        $newXmlDocument = $documentDAO->getInstance();
        $newXmlDocument->path = $xmlDocumentCurrentPath;
        $newXmlDocument->job = $job;
        $newXmlDocument->conversionStage = JOB_CONVERSION_STAGE_BIBTEXREFERENCES;
        $documentDAO->save($newXmlDocument);

        $job->conversionStage = JOB_CONVERSION_STAGE_BIBTEXREFERENCES;

        return $job;
    }
}
