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
    protected $id;

    /**
     * @ORM\Column(type="string", nullable=false, unique=true)
     */
    protected $email;

    /**
     * @ORM\Column(type="string", length=32, nullable=false)
     */
    protected $password;

    /**
     * @ORM\Column(type="string", length=23, nullable=false)
     */
    protected $passwordSalt;

    /**
     * @ORM\Column(type="integer", nullable=false)
     */
    protected $registrationDate;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    protected $lastLogin;

    /**
     * @ORM\Column(type="smallint", nullable=false)
     */
    protected $userLevel;

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
