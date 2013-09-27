<?php

namespace User\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Xmlps\DataObject\DataObject;

define('USER_USERLEVEL_REGISTERED', 0);
define('USER_USERLEVEL_REGISTRATION_CONFIRMED', 1);

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
     * @ORM\Column(type="string", length=40, nullable=false)
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
     * Sets the registration date timestamp
     *
     * @return void
     *
     * @ORM\PrePersist
     */
    public function setRegistrationDate()
    {
        if ($this->registrationDate === null) {
            $this->registrationDate = time();
        }
    }

    /**
     * Initializes the user level
     *
     * @return void
     *
     * @ORM\PrePersist
     */
    public function setUserLevel()
    {
        if ($this->userLevel === null) {
            $this->userLevel = USER_USERLEVEL_REGISTERED;
        }
    }

    /**
     * Returns a users password salt. If the salt is not set it will generate it
     *
     * @return string Password salt
     */
    public function getPasswordSalt()
    {
        if ($this->passwordSalt === null) {
            $this->passwordSalt = uniqid('');
        }

        return $this->passwordSalt;
    }

    /**
     * Password setter. It will hash the password automatically.
     *
     * @param string $password Password
     *
     * @return void
     */
    public function setPassword($password)
    {
        $this->password = self::hashPassword($password, $this->getPasswordSalt());
    }

    /**
     * Hashes a password
     *
     * @param mixed $password Unhased password
     * @param mixed $salt Salt
     *
     * @return string Hashed password
     */
    protected static function hashPassword($password, $salt)
    {
        return sha1($password . $salt);
    }

    /**
     * Validates a password for a given user
     *
     * @param User $user User instance
     * @param mixed $password Plaintext password
     * @return bool Whether or not the password is valid
     */
    public static function validatePassword(User $user, $password)
    {
        return (
            $user->password == self::hashPassword($password, $user->getPasswordSalt())
        );
    }
}
