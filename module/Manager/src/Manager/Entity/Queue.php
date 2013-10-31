<?php

namespace Manager\Entity;

use Doctrine\ORM\Mapping as ORM;
use Xmlps\DataObject\DataObject;

/**
 * Queue
 *
 * Queue table that holds the jobs for SlmQueue
 *
 * @ORM\Entity
 * @ORM\Table(name="queue")
 */
class Queue extends DataObject
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=40, nullable=false)
     */
    protected $queue;

    /**
     * @ORM\Column(type="text", nullable=false)
     */
    protected $data;

    /**
     * @ORM\Column(type="smallint", nullable=false)
     */
    protected $status;

    /**
     * @ORM\Column(type="datetime", nullable=false)
     */
    protected $created;

    /**
     * @ORM\Column(type="datetime", nullable=false)
     */
    protected $scheduled;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    protected $executed;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    protected $finished;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    protected $message;

    /**
     * @ORM\Column(type="text", nullable=false)
     */
    protected $trace;
}
