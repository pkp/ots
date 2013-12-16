<?php

namespace CitationstyleConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Converts the citation syle to the one requested by the user
 */
class CitationstyleJob extends AbstractQueueJob
{
    /**
     * Convert citation style
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $citationstyle = $this->sm->get('CitationstyleConversion\Model\Converter\Pandoc');

        // Fetch the NLMXML document; if the references step failed fall back to
        // the NLMXML document before the references conversion took place
        if (!$documentNlmxml = $job->getStageDocument(JOB_CONVERSION_STAGE_BIBTEXREFERENCES)) {
            !$documentNlmxml = $job->getStageDocument(JOB_CONVERSION_STAGE_NLMXML);
        }
        if (!$documentNlmxml) {
            throw new \Exception('Couldn\'t find the NLMXML stage document');
        }

        // Fetch the Bibtex document
        if (!$documentBibtex = $job->getStageDocument(JOB_CONVERSION_STAGE_BIBTEX)) {
            throw new \Exception('Couldn\'t find the Bibtex stage document');
        }

        // Fetch the Html document
        if (!$documentHtml = $job->getStageDocument(JOB_CONVERSION_STAGE_HTML)) {
            throw new \Exception('Couldn\'t find the HTML stage document');
        }

        // Parse the citationstyle
        $citationstyle->setInputFileNlmxml($documentNlmxml->path);
        $citationstyle->setInputFileBibtex($documentBibtex->path);
        $citationstyle->setInputFileHtml($documentHtml->path);
        $citationstyle->setCitationStyleFile($job->metadata->citationStyleFile);
        $citationstyle->convert();

        $job->conversionStage = JOB_CONVERSION_STAGE_CITATIONSTYLE;

        if (!$citationstyle->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        // Update the conversion stage of the HTML document
        $documentHtml->conversionStage = $job->conversionStage;

        return $job;
    }
}
