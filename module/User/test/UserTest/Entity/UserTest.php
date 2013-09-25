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
        $password = 'password';
        $user->password = $password;
        $this->assertTrue($user->password == sha1($password . $user->passwordSalt));
    }
}
