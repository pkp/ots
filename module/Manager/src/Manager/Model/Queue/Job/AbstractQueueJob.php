<?php

namespace Manager\Model\Queue\Job;

use SlmQueue\Job\AbstractJob;
use Zend\ServiceManager\ServiceLocatorAwareInterface;
use Zend\ServiceManager\ServiceLocatorInterface;
use SlmQueue\Queue\QueueAwareInterface;
use SlmQueue\Queue\QueueInterface;
use Manager\Model\Queue\Job\JobInterface;
use Manager\Entity\Job;

/**
 * Abstract job queue class
 *
 * NOTE: SlmQueue calls the execute() method on a queue job. In this
 * implementation instances of AbstractQueueJob need to implement a process()
 * method that returns a Job object. The execute() method will return the
 * job to the JobManager after completion
 */
abstract class AbstractQueueJob extends AbstractJob implements
    ServiceLocatorAwareInterface,
    QueueAwareInterface,
    JobInterface
{
    protected $logger;

    protected $sm;
    protected $queue;

    /**
     * Set the service locator and logger.
     *
     * @param ServiceLocatorInterface $sm
     *
     * @return void
     */
    public function setServiceLocator(ServiceLocatorInterface $sm)
    {
        if ($sm instanceof \SlmQueue\Job\JobPluginManager) {
            $sm = $sm->getServiceLocator();
        }

        $this->sm = $sm;
        $this->logger = $this->sm->get('Logger');
    }

    /**
     * Get the service locator
     *
     * @return ServiceLocator ServiceLocator instance
     */
    public function getServiceLocator()
    {
        return $this->sm;
    }

    /**
     * Get the queue
     *
     * @return QueueInterface $queue
     */
    public function getQueue()
    {
        return $this->queue;
    }

    /**
     * Set the queue
     *
     * @param QueueInterface $queue
     *
     * @return void
     */
    public function setQueue(QueueInterface $queue)
    {
        $this->queue = $queue;
    }

    /**
     * Executes the job and returns it to the queue manager after execution
     *
     * @return void
     */
    public function execute()
    {
        if (!isset($this->content['jobId'])) {
            throw new \Exception('No job id provided');
        }

        // Load the job
        $jobDAO = $this->sm->get('Manager\Model\DAO\JobDAO');
        $job = $jobDAO->find((int) $this->content['jobId']);

        if (empty($job)) {
            throw new \Exception('Invalid job id');
        }

        // Process the job
        try {
            $job = $this->process($job);
        } catch (\Exception $e) {
            $this->logger->errTranslate(
                'queuejob.execute.exception',
                $e->getMessage()
                );
            $job->status = JOB_STATUS_FAILED;
        }

        if (!($job instanceof Job)) {
            throw new \Exception('process() needs to return a Manager\Entity\Job object');
        }
        $jobDAO->save($job);

        // Return the job to the queue manager
        $queueManager = $this->sm->get('Manager\Model\Queue\Manager');
        $queueManager->queue($job);
    }
}
