<?php

namespace Manager\Entity;

use Doctrine\ORM\Mapping as ORM;
use Xmlps\DataObject\DataObject;

/**
 * Job
 *
 * @ORM\Entity
 * @ORM\Table(name="job")
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
}
