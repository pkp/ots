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
        'bibtex' => 'BibtexConversion\Model\Queue\Job\BibtexJob',
        'bibtexreferences' => 'BibtexreferencesConversion\Model\Queue\Job\BibtexreferencesJob',
        'html' => 'HtmlConversion\Model\Queue\Job\HtmlJob',
        'pdf' => 'PdfConversion\Model\Queue\Job\PdfJob',
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

        $this->logger->infoTranslate(
            'manager.queue.receivedProcessingLog',
            $job->id
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
        // Don't requeue completed jobs
        if ($job->status == JOB_STATUS_COMPLETED) return;

        // Reset the job status for jobs that can fail
        if (
            $job->status == JOB_STATUS_FAILED and
            in_array($job->conversionStage, array(JOB_CONVERSION_STAGE_REFERENCES))
        ) {
            $job->status = JOB_STATUS_PROCESSING;
            $job->conversionStage = JOB_CONVERSION_STAGE_HTML;
        }

        // Stop if the job has failed
        if ($job->status == JOB_STATUS_FAILED) {
            $this->logger->infoTranslate(
                'manager.queue.jobFailedLog',
                $job->id
            );
            return;
        }

        // Queue the job in the queue for the next processing step
        switch ($job->conversionStage) {
            case JOB_CONVERSION_STAGE_UNCONVERTED:
                $this->queueJob($job, 'docx');
                break;
            case JOB_CONVERSION_STAGE_DOCX:
                $this->queueJob($job, 'nlmxml');
                break;
            case JOB_CONVERSION_STAGE_REFERENCES:
                $this->queueJob($job, 'bibtex');
                break;
            case JOB_CONVERSION_STAGE_BIBTEX:
                $this->queueJob($job, 'bibtexreferences');
                break;
            case JOB_CONVERSION_STAGE_BIBTEXREFERENCES:
                $this->queueJob($job, 'html');
                break;
            case JOB_CONVERSION_STAGE_HTML:
                $this->queueJob($job, 'pdf');
                break;
            case JOB_CONVERSION_STAGE_PDF:
                $this->queueJob($job, 'zip');
                break;
            default:
                $this->logger->infoTranslate(
                    'manager.queue.jobCompletedLog',
                    $job->id
                );

                $job->status = JOB_STATUS_COMPLETED;
                $this->jobDAO->save($job);
                break;
        }
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

        $this->logger->infoTranslate(
            'manager.queue.receivedQueueLog',
            $job->id,
            $queue
        );

        $queueJob = $this->jobManager->get($this->queueMap[$queue]);
        $queueJob->setContent(array('jobId' => $job->id));
        $this->queueManager->get($queue)->push($queueJob);
    }
}
