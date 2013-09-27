<?php

namespace UserTest\Entity;

use PHPUnit_Framework_TestCase;
use User\Entity\User;

class UserEntityTest extends PHPUnit_Framework_TestCase
{
    protected $traceError = true;

    protected $user;

    public function setUp() {
        $this->user = new User;
    }

    public function testUserRegistrationDate()
    {
        $this->assertTrue($this->user->registrationDate === null);
        $this->user->setRegistrationDate();
        $this->assertTrue(is_int($this->user->registrationDate));
        $this->assertTrue($this->user->registrationDate <= time());
    }

    public function testUserPasswordSalt()
    {
        $this->assertTrue(strlen($this->user->passwordSalt) == 13);
    }

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
