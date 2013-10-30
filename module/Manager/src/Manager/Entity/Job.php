<?php

namespace Manager\Entity;

use Doctrine\ORM\Mapping as ORM;
use Xmlps\DataObject\DataObject;

define('JOB_STATUS_PENDING', 0);
define('JOB_STATUS_PROCESSING', 1);
define('JOB_STATUS_COMPLETED', 2);
define('JOB_STATUS_FAILED', 3);

/**
 * Job
 *
 * @ORM\Entity
 * @ORM\Table(name="job")
 * @ORM\HasLifecycleCallbacks
 */
class Job extends DataObject
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\ManyToOne(targetEntity="User\Entity\User")
     * @ORM\JoinColumn(name="userId", referencedColumnName="id")
     */
    protected $user;

    /**
     * @ORM\ManyToOne(targetEntity="Manager\Entity\Document", cascade={"all"})
     * @ORM\JoinColumn(name="documentId", referencedColumnName="id")
     */
    protected $document;

    /**
     * @ORM\Column(type="integer", nullable=false)
     */
    protected $creationDate;

    /**
     * @ORM\Column(type="smallint", nullable=false)
     */
    protected $status;

    /**
     * Sets the creation date timestamp
     *
     * @return void
     *
     * @ORM\PrePersist
     */
    public function initCreationDate()
    {
        if ($this->creationDate === null) {
            $this->creationDate = time();
        }
    }

    /**
     * Sets the initial status
     *
     * @return void
     *
     * @ORM\PrePersist
     */
    public function initStatus()
    {
        if ($this->status === null) {
            $this->status = JOB_STATUS_PENDING;
        }
    }

    /**
     * Maps job status to display strings
     *
     * @return array map of job status to display strings
     */
    public function getStatusMap()
    {
        $translator = $this->getServiceLocator()->get('Translator');
        return array(
            JOB_STATUS_PENDING => $translator->translate('manager.job.status.pending'),
            JOB_STATUS_PROCESSING => $translator->translate('manager.job.status.processing'),
            JOB_STATUS_COMPLETED => $translator->translate('manager.job.status.completed'),
            JOB_STATUS_FAILED => $translator->translate('manager.job.status.failed'),
        );
    }
}
