<?php

namespace Manager\Model\Queue\Job;

use Manager\Entity\Job;

/**
 * Interface for queue jobs
 */
interface JobInterface
{
    public function process(Job $job);
}
