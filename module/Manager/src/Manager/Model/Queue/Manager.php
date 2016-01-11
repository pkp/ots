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
        'pathfinder' => 'PathFinder\Model\Queue\Job\PathFinderJob',
        'docx' => 'DocxConversion\Model\Queue\Job\DocxJob',
        'wppdf' => 'WpPdfConversion\Model\Queue\Job\WpPdfJob',
        'nlmxml' => 'NlmxmlConversion\Model\Queue\Job\NlmxmlJob',
        'references' => 'ReferencesConversion\Model\Queue\Job\ReferencesJob',
        'bibtex' => 'BibtexConversion\Model\Queue\Job\BibtexJob',
        'bibtexreferences' => 'BibtexreferencesConversion\Model\Queue\Job\BibtexreferencesJob',
        'html' => 'HtmlConversion\Model\Queue\Job\HtmlJob',
        'epub' => 'EpubConversion\Model\Queue\Job\EpubJob',
        'citationstyle' => 'CitationstyleConversion\Model\Queue\Job\CitationstyleJob',
        'pdf' => 'PdfConversion\Model\Queue\Job\PdfJob',
        'xmp' => 'XmpConversion\Model\Queue\Job\XmpJob',
        'zip' => 'ZipConversion\Model\Queue\Job\ZipJob',
        'cermine' => 'Cermine\Model\Queue\Job\CermineJob',
        'merge' => 'MergeXMLOutputs\Model\Queue\Job\MergeJob',
        'ner' => 'NERExtraction\Model\Queue\Job\NERExtractionJob',
        'parsCit' => 'ParsCitConversion\Model\Queue\Job\ParsCitJob',
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

        // If the reference parsing has failed continue with the conversion
        if (
            (
                $job->conversionStage == JOB_CONVERSION_STAGE_REFERENCES or
                $job->conversionStage == JOB_CONVERSION_STAGE_CITATIONSTYLE
            ) and
            $job->status == JOB_STATUS_FAILED
        )
        {
            $job->status = JOB_STATUS_PROCESSING;
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
            // Figure out what we’re dealing with and what path to
            // take.
            case JOB_CONVERSION_STAGE_UNCONVERTED:
                $this->queueJob($job, 'pathfinder');
                break;

            // If we have a word processing document, convert to
            // standard WP format and also to XML and PDF.
            case JOB_CONVERSION_STAGE_WP_IN:
                $this->queueJob($job, 'docx');
                break;
            case JOB_CONVERSION_STAGE_DOCX:
                $this->queueJob($job, 'nlmxml');
                break;
            case JOB_CONVERSION_STAGE_NLMXML:
                $this->queueJob($job, 'wppdf');
                break;

            // Convert our PDF (input or conversion result) to XML.
            case JOB_CONVERSION_STAGE_PDF_IN:
            case JOB_CONVERSION_STAGE_WP_PDF:
                $this->queueJob($job, 'cermine');
                break;

            // Extract information from the XML.  If we had WP input,
            // use that XML derivation preferentially; when done, or
            // if reference extraction fails, merge the two XML
            // versions together.
            // After merging, carry on to epub and HTML generation.
            case JOB_CONVERSION_STAGE_PDF_EXTRACT:
                $this->queueJob($job, 'references');
                break;
            case JOB_CONVERSION_STAGE_REFERENCES:
                $this->queueJob($job, 'parsCit');
                break;
            case JOB_CONVERSION_STAGE_PARSCIT:
                if ($job->referenceParsingSuccess) {
                    $this->queueJob($job, 'bibtex');
                } else {
                    $this->queueJob($job, 'merge');
                }
                break;
            case JOB_CONVERSION_STAGE_BIBTEX:
                $this->queueJob($job, 'bibtexreferences');
                break;
            case JOB_CONVERSION_STAGE_BIBTEXREFERENCES:
                $this->queueJob($job, 'merge');
                break;
            case JOB_CONVERSION_STAGE_XML_MERGE:
                $this->queueJob($job, 'ner');
                break;
            case JOB_CONVERSION_STAGE_NER_EXTRACT:
                $this->queueJob($job, 'epub');
                break;
            case JOB_CONVERSION_STAGE_EPUB:
                $this->queueJob($job, 'html');
                break;

            // If reference extraction was successful, clean up the
            // references in the generated HTML; either way, then
            // carry on to PDF generation.
            case JOB_CONVERSION_STAGE_HTML:
                if ($job->referenceParsingSuccess) {
                    $this->queueJob($job, 'citationstyle');
                }
                else {
                    $this->queueJob($job, 'pdf');
                }
                break;
            case JOB_CONVERSION_STAGE_CITATIONSTYLE:
                $this->queueJob($job, 'pdf');
                break;

            // If reference extraction was successful, clean up the
            // references in the PDF; either way, go on to package up
            // all the relevant output products.
            case JOB_CONVERSION_STAGE_PDF:
                if ($job->referenceParsingSuccess) {
                    $this->queueJob($job, 'xmp');
                }
                else {
                    $this->queueJob($job, 'zip');
                }
                break;
            case JOB_CONVERSION_STAGE_XMP:
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
