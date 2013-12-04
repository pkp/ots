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

        // Fetch the document to convert
        $nlmxmlDocument = $job->getStageDocument(JOB_CONVERSION_STAGE_NLMXML);
        if (!$nlmxmlDocument) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        // Parse the citationstyle
        $citationstyle->setInputFile($xlmxmlDocument->path);
        $citationstyle->convert();

        $job->conversionStage = JOB_CONVERSION_STAGE_CITATIONSTYLE;

        if (!$citationstyle->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $citationstyleDocument = $documentDAO->getInstance();
        $citationstyleDocument->path = $outputFile;
        $citationstyleDocument->job = $job;
        $citationstyleDocument->conversionStage = JOB_CONVERSION_STAGE_CITATIONSTYLE;

        $job->documents[] = $citationstyleDocument;

        return $job;
    }
}
