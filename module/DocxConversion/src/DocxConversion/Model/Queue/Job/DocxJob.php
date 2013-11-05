<?php

namespace DocxConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Generates DocX documents
 */
class DocxJob extends AbstractQueueJob
{
    /**
     * Generate document
     *
     * @param Job $job
     * @return Jon $job
     */
    public function process(Job $job)
    {
        // TODO: implement logic
        $job->status = JOB_STATUS_COMPLETED;

        return $job;
    }
}
