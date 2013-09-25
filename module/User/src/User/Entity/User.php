<?php

namespace User\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * User
 *
 * @ORM\Entity
 * @ORM\Table(name="user")
 */
class User
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    public $id;

    /**
     * @ORM\Column(type="string", nullable=false, unique=true)
     */
    public $email;

    /**
     * @ORM\Column(type="string", length=32, nullable=false)
     */
    public $password;

    /**
     * @ORM\Column(type="string", length=23, nullable=false)
     */
    public $passwordSalt;

    /**
     * @ORM\Column(type="integer", nullable=false)
     */
    public $registrationDate;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    public $lastLogin;

    /**
     * @ORM\Column(type="smallint", nullable=false)
     */
    public $userLevel;

    /**
     * @ORM\PrePersist
     */
    public function setRegistrationDate()
    {
        if (!$this->registrationDate) {
            $this->registrationDate = time();
        }
    }

    /**
     * @ORM\PrePersist
     */
    public function setPasswordSalt()
    {
        if (!$this->passwordSalt) {
            $this->passwordSalt = uniqid('', true);
        }
    }
}
