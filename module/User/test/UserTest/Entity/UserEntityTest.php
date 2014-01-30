<?php

namespace UserTest\Entity;

use PHPUnit_Framework_TestCase;
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

        $this->user = $this->getUserDAO()->getInstance();
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
        $this->assertSame(USER_LEVEL_BASIC, $this->user->level);
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

    /**
     * Tests if the active flag is initialized propperly
     *
     * @return void
     */
    public function testUserActive()
    {
        $this->assertTrue($this->user->active === null);

        // Validate that the active flag is initialized properly
        $this->user->initActive();
        $this->assertTrue($this->user->active === false);
    }

    /**
     * Tests if the activation key is initialized propperly
     *
     * @return void
     */
    public function testUserActivationKey()
    {
        $this->assertTrue($this->user->activationKey === null);

        // Validate that the activation key is initialized properly
        $this->user->initActivationKey();
        $this->assertTrue(strlen($this->user->activationKey) == 13);
    }

    /**
     * Test test if user activation works properly
     *
     * @return void
     */
    public function testUserActivation()
    {
        $this->user->activationKey = uniqid();
        $this->user->active = true;

        $this->user->activate();
        $this->assertTrue($this->user->active === true);
        $this->assertTrue($this->user->activationKey === null);
    }
}
