<?php

namespace User\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Xmlps\DataObject\DataObject;

/**
 * User
 *
 * @ORM\Entity
 * @ORM\Table(name="user")
 * @ORM\HasLifecycleCallbacks
 */
class User extends DataObject
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
     * @ORM\Column(type="string", length=13, nullable=false)
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
        if ($this->registrationDate === null) {
            $this->registrationDate = time();
        }
    }

    /**
     * @ORM\PrePersist
     */
    public function setUserLevel()
    {
        if ($this->userLevel === null) {
            $this->userLevel = 0;
        }
    }

    public function getPasswordSalt()
    {
        if ($this->passwordSalt === null) {
            $this->passwordSalt = uniqid('');
        }

        return $this->passwordSalt;
    }

    public function setPassword($password) {
        $this->password = sha1($password . $this->getPasswordSalt());
    }
}
