<?php

namespace User\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Xmlps\DataObject\DataObject;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use FilesystemIterator;

define('USER_LEVEL_BASIC', 0);
define('USER_LEVEL_INFINITE', 1);

define('USER_ROLE_ADMINISTRATOR', 'administrator');
define('USER_ROLE_MEMBER', 'member');

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
     * @ORM\OneToMany(targetEntity="Manager\Entity\Job", mappedBy="user", cascade={"persist", "remove"})
     */
    protected $jobs;

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
    protected $level;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    protected $role;

    /**
     * @ORM\Column(type="string", length=40, nullable=false)
     */
    protected $activationKey;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    protected $active;

    /**
     * Constructor
     *
     * @return void
     */
    public function __construct()
    {
        $this->jobs = new ArrayCollection();
    }

    /**
     * Sets the registration date timestamp
     *
     * @return void
     *
     * @ORM\PrePersist
     */
    public function initRegistrationDate()
    {
        if ($this->registrationDate === null) {
            $this->registrationDate = time();
        }
    }

    /**
     * Initializes the level
     *
     * @return void
     *
     * @ORM\PrePersist
     */
    public function initLevel()
    {
        if ($this->level === null) {
            $this->level = USER_LEVEL_BASIC;
        }
    }

    /**
     * Initializes the role
     *
     * @return void
     *
     * @ORM\PrePersist
     */
    public function initRole()
    {
        if ($this->role === null) {
            $this->role = USER_ROLE_MEMBER;
        }
    }

    /**
     * Sets the activation key
     *
     * @return void
     *
     * @ORM\PrePersist
     */
    public function initActivationKey()
    {
        if ($this->activationKey === null) {
            $this->activationKey = uniqid('');
        }
    }

    /**
     * Sets the active flag
     *
     * @return void
     *
     * @ORM\PrePersist
     */
    public function initActive()
    {
        if ($this->active === null) {
            $this->active = false;
        }
    }

    /**
     * Removes jobs associated with this user before the user is removed
     *
     * @return void
     *
     * @ORM\PreRemove
     */
    public function removeJobData()
    {
        // Remove the documents directory for this user
        $it = new RecursiveDirectoryIterator($this->getDocumentPath(), FilesystemIterator::SKIP_DOTS);
        $files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST);
        foreach($files as $file) {
            if ($file->isDir()) {
                rmdir($file->getRealPath());
            } else {
                unlink($file->getRealPath());
            }
        }
        rmdir($this->getDocumentPath());
    }


    /**
     * Sets lastLogin to the current timestamp
     *
     * @return void
     */
    public function setLastLogin()
    {
        $this->lastLogin = time();
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

    /**
     * Checks if the user is an administrator
     *
     * @return bool Whether or not the user is an administrator
     */
    public function isAdministrator()
    {
        return $this->role == USER_ROLE_ADMINISTRATOR;
    }

    /**
     * Maps user levels to display strings
     *
     * @return array map of user levels to display strings
     */
    public function getLevelMap()
    {
        $translator = $this->getServiceLocator()->get('Translator');
        return array(
            USER_LEVEL_BASIC => $translator->translate('user.user.level.basic'),
            USER_LEVEL_INFINITE => $translator->translate('user.user.level.infinite'),
        );
    }

    /**
     * Maps user roles to display strings
     *
     * @return array map of user roles to display strings
     */
    public function getRoleMap()
    {
        $translator = $this->getServiceLocator()->get('Translator');
        return array(
            USER_ROLE_MEMBER => $translator->translate('user.user.role.member'),
            USER_ROLE_ADMINISTRATOR => $translator->translate('user.user.role.administrator'),
        );
    }

    /**
     * Returns the users document path
     *
     * @return string Document path
     */
    public function getDocumentPath()
    {
        if (!$this->id) { throw new \Exception('User id is not set'); }

        $documentPath = 'var/documents/' . $this->id;
        if (!is_dir($documentPath)) { @mkdir($documentPath, 0777, true); }

        if (!is_dir($documentPath)) {
            throw new \Exception('Couldn\'t create document directory');
        }

        return $documentPath;
    }

    /**
     * Checks whether the user is active or not
     *
     * @return bool Whether the user is active or not
     */
    public function isActive()
    {
        return $this->active;
    }

    /**
     * Activate user account
     *
     * @return void
     */
    public function activate()
    {
       $this->active = true;
       $this->activationKey = null;
    }
}
