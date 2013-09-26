<?php

namespace UserTest\Entity;

use PHPUnit_Framework_TestCase;
use User\Entity\User;

class UserEntityTest extends PHPUnit_Framework_TestCase
{
    protected $traceError = true;

    public function testUserRegistrationDate()
    {
        $user = new User;
        $this->assertTrue($user->registrationDate === null);
        $user->setRegistrationDate();
        $this->assertTrue(is_int($user->registrationDate));
        $this->assertTrue($user->registrationDate <= time());
    }

    public function testUserPasswordSalt()
    {
        $user = new User;
        $this->assertTrue(strlen($user->passwordSalt) == 13);
    }

    public function testUserPassword()
    {
        $user = new User;
        $this->assertTrue($user->password === null);

        // Validate that the password gets hashed
        $password = 'password';
        $user->password = $password;
        $this->assertTrue(strlen($user->password) == 40);

        // Validate password validation
        $this->assertTrue($user::validatePassword($user, $password));
        $this->assertFalse($user::validatePassword($user, 'wrongpassword'));
    }
}
