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
        if ($job->inputFileFormat == JOB_INPUT_TYPE_PDF) {
            $xmlDocument =
                $job->getStageDocument(JOB_CONVERSION_STAGE_PDF_EXTRACT);
        } else {
            $xmlDocument =
                $job->getStageDocument(JOB_CONVERSION_STAGE_NLMXML);
        }
        if (!$xmlDocument) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        // Fetch the bibtex document which will be converted to NLMXML
        $bibtexDocument = $job->getStageDocument(JOB_CONVERSION_STAGE_BIBTEX);
        if (!$bibtexDocument) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        // Do the reference list replacement
        $bibtexreferences->setInputFileNlmxml($xmlDocument->path);
        $bibtexreferences->setInputFileBibtex($bibtexDocument->path);
        $bibtexreferences->convert();

        $job->conversionStage = JOB_CONVERSION_STAGE_BIBTEXREFERENCES;

        if (!$bibtexreferences->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        // We didn't create a new document; just change the conversion stage
        $xmlDocument->conversionStage = JOB_CONVERSION_STAGE_BIBTEXREFERENCES;

        return $job;
    }
}
