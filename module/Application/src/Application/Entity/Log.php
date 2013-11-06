<?php

namespace Application\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Xmlps\DataObject\DataObject;

/**
 * Log
 *
 * @ORM\Entity
 * @ORM\Table(name="log")
 */
class Log extends DataObject
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="integer", nullable=false)
     */
    protected $timestamp;

    /**
     * @ORM\Column(type="smallint", nullable=false)
     */
    protected $priority;

    /**
     * @ORM\Column(type="text", nullable=false)
     */
    protected $message;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    protected $ip;
}
