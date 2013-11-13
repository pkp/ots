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
    // TODO: this should come from the config
    protected $queueMap = array(
        'docx' => 'DocxConversion\Model\Queue\Job\DocxJob',
        'nlmxml' => 'NlmxmlConversion\Model\Queue\Job\NlmxmlJob',
        'references' => 'ReferencesConversion\Model\Queue\Job\ReferencesJob',
        'zip' => 'ZipConversion\Model\Queue\Job\ZipJob',
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
        $job = $this->jobDAO->find($jobId);

        if (empty($job)) {
           throw new \Exception('Invalid job id');
        }

        $this->logger->info(
            sprintf(
                $this->translator->translate(
                    'manager.queue.receivedProcessingLog'
                ),
                $job->id
            )
        );

        // Queue the job
        $this->queue($job);
    }

    /**
     * Implements the queueing logic and distributes jobs to the queues
     * depending on their conversion state
     *
     * @param mixed $job Job to queue
     *
     * @return void
     */
    public function queue($job)
    {
        // Stop if the job is completed or failed
        if (in_array($job->status, array(JOB_STATUS_COMPLETED, JOB_STATUS_FAILED))) {
            if ($job->status == JOB_STATUS_FALIED) {
                $this->logger->info(
                    sprintf(
                        $this->translator->translate(
                            'manager.queue.jobFailedLog'
                        ),
                        $job->id
                    )
                );
            }
            return;
        }

        if ($job->conversionStage == JOB_CONVERSION_STAGE_UNCONVERTED) {
            $this->docxJob($job);
        }
        elseif ($job->conversionStage == JOB_CONVERSION_STAGE_DOCX) {
            $this->nlmxmlJob($job);
        }
        elseif ($job->conversionStage == JOB_CONVERSION_STAGE_NLMXML) {
            $this->referencesJob($job);
        }
        elseif (
            $job->conversionStage == JOB_CONVERSION_STAGE_REFERENCES or
            $job->conversionStage == JOB_CONVERSION_STAGE_BIBTEX
        ) {
            $this->zipJob($job);
        }
        else {
            $this->logger->info(
                sprintf(
                    $this->translator->translate(
                        'manager.queue.jobCompletedLog'
                    ),
                    $job->id
                )
            );

            $job->status = JOB_STATUS_COMPLETED;
            $this->jobDAO->save($job);
        }
    }

    /**
     * Queue a docX conversion job
     *
     * @param mixed $job Job to queue
     * @return void
     */
    protected function docxJob($job)
    {
        $this->queueJob($job, 'docx');
    }

    /**
     * Queue a NLMXML conversion job
     *
     * @param mixed $job Job to queue
     * @return void
     */
    protected function nlmxmlJob($job)
    {
        $this->queueJob($job, 'nlmxml');
    }

    /**
     * Queue a reference parsing job
     *
     * @param mixed $job Job to queue
     * @return void
     */
    protected function referencesJob($job)
    {
        $this->queueJob($job, 'references');
    }

    /**
     * Queue a Zip conversion job
     *
     * @param mixed $job Job to queue
     * @return void
     */
    protected function zipJob($job)
    {
        $this->queueJob($job, 'zip');
    }


    /**
     * Queues a job in its corresponding queue
     *
     * @param mixed $job Job to queue
     * @param mixed $queue Queue to use
     *
     * @return void
     */
    protected function queueJob($job, $queue) {
        if (!isset($this->queueMap[$queue])) {
           throw new \Exception('Invalid queue');
        }

        $this->logger->info(
            sprintf(
                $this->translator->translate(
                    'manager.queue.receivedQueueLog'
                ),
                $job->id,
                $queue
            )
        );

        $queueJob = $this->jobManager->get($this->queueMap[$queue]);
        $queueJob->setContent(array('jobId' => $job->id));
        $this->queueManager->get($queue)->push($queueJob);
    }
}
