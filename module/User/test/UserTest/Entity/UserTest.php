<?php

namespace UserTest\Entity;

use PHPUnit_Framework_TestCase;
use User\Entity\User;

class UserEntityTest extends PHPUnit_Framework_TestCase
{
    protected $traceError = true;

    protected $user;

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        $this->user = new User;
    }

    /**
     * Test if the registration date is initialized properly
     *
     * @return void
     */
    public function testUserRegistrationDate()
    {
        $this->assertTrue($this->user->registrationDate === null);
        $this->user->setRegistrationDate();
        $this->assertTrue(is_int($this->user->registrationDate));
        $this->assertTrue($this->user->registrationDate <= time());
    }

    /**
     * Test if the user level is initialized properly
     *
     * @return void
     */
    public function testUserLevel()
    {
        $this->assertTrue($this->user->userLevel === null);
        $this->user->setUserLevel();
        $this->assertSame(USER_USERLEVEL_REGISTERED, $this->user->userLevel);
    }

    /**
     * Test if the password salt is initialized properly
     *
     * @return void
     */
    public function testUserPasswordSalt()
    {
        $this->assertTrue(strlen($this->user->passwordSalt) == 13);
    }

    /**
     * Test if the users password is hashed propperly
     *
     * @return void
     */
    public function testUserPassword()
    {
        $user = $this->user;

        // Validate that the password gets hashed
        $this->assertTrue($user->password === null);
        $password = 'password';
        $user->password = $password;
        $this->assertTrue(strlen($user->password) == 40);

        // Validate password validation
        $this->assertTrue($user::validatePassword($user, $password));
        $this->assertFalse($user::validatePassword($user, 'wrongpassword'));
    }
}
