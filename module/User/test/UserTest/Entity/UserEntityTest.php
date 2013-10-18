<?php

namespace UserTest\Entity;

use PHPUnit_Framework_TestCase;
use User\Entity\User;
use Xmlps\UnitTest\ModelTest;

class UserEntityTest extends ModelTest
{
    protected $traceError = true;

    protected $user;

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();
        $this->user = $this->sm->get('User\Entity\User');
    }

    /**
     * Test if the registration date is initialized properly
     *
     * @return void
     */
    public function testUserRegistrationDate()
    {
        $this->assertTrue($this->user->registrationDate === null);
        $this->user->initRegistrationDate();
        $this->assertTrue(is_int($this->user->registrationDate));
        $this->assertTrue($this->user->registrationDate <= time());
    }

    /**
     * Test if the level is initialized properly
     *
     * @return void
     */
    public function testUserLevel()
    {
        $this->assertTrue($this->user->level === null);
        $this->user->initLevel();
        $this->assertSame(USER_LEVEL_REGISTERED, $this->user->level);
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
