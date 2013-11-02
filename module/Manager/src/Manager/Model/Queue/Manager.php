<?php

namespace Manager\Model\Queue;

use Zend\Mvc\I18n\Translator;
use Xmlps\Logger\Logger;
use SlmQueue\Queue\QueuePluginManager;
use SlmQueue\Job\JobPluginManager;
use Manager\Model\DAO\JobDAO;
use Manager\Entity\Job;

/**
 * Manages the distribution of jobs to the conversion queues
 */
class Manager {
    protected $logger;
    protected $translator;
    protected $queueManager;
    protected $jobManager;
    protected $jobDAO;

    // Maps the queue name to the processing class
    protected $queueMap = array(
        'docx' => 'Manager\Model\Queue\Job\DocxJob',
    );

    /**
     * Constructor
     *
     * @param Logger $logger
     * @param Translator $translator
     * @param QueuePluginManager $queueManager
     * @param JobPluginManager $jobManager
     * @param JobDAO $jobDAO
     * @return void
     */
    public function __construct(
        Logger $logger,
        Translator $translator,
        QueuePluginManager $queueManager,
        JobPluginManager $jobManager,
        JobDAO $jobDAO
    )
    {
        $this->logger = $logger;
        $this->translator = $translator;
        $this->queueManager = $queueManager;
        $this->jobManager = $jobManager;
        $this->jobDAO = $jobDAO;
    }

    /**
     * Queue a new job
     *
     * @param mixed $jobId
     * @return void
     */
    public function addJob($jobId)
    {
        $this->logger->info(
            sprintf(
                $this->translator->translate(
                    'manager.queue.receivedProcessingLog'
                ),
                $jobId
            )
        );

        // Queue the job
        $this->queue($jobId);
    }

    /**
     * Implements the queueing logic and distributes jobs to the queues
     * depending on their conversion state
     *
     * @param mixed $jobId Job id to queue
     *
     * @return void
     */
    public function queue($jobId)
    {
        $job = $this->jobDAO->find($jobId);

        // Stop if the job is completed or failed
        if (in_array($job->status, array(JOB_STATUS_COMPLETED, JOB_STATUS_FAILED))) {
            return;
        }

        // TODO: implement queuing logic lets just go for a docxjob for now
        $this->docxJob($jobId);
    }

    /**
     * Queue a docX conversion job
     *
     * @param mixed $jobId Job id to queue
     * @return void
     */
    protected function docxJob($jobId)
    {
        $this->queueJob($jobId, 'docx');
    }

    /**
     * Queues a job in its corresponding queue
     *
     * @param mixed $jobId Job id to queue
     * @param mixed $queue Queue to use
     *
     * @return void
     */
    protected function queueJob($jobId, $queue) {
        $jobId = (int) $jobId;
        if (empty($jobId)) {
           throw new \Exception('Invalid job id');
        }

        if (!isset($this->queueMap[$queue])) {
           throw new \Exception('Invalid queue');
        }

        $this->logger->info(
            sprintf(
                $this->translator->translate(
                    'manager.queue.receivedQueueLog'
                ),
                $jobId,
                $queue
            )
        );

        $job = $this->jobManager->get($this->queueMap[$queue]);
        $job->setContent(array('jobId' => $jobId));
        $this->queueManager->get($queue)->push($job);
    }
}
