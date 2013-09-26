<?php

namespace UserTest\Form;

use PHPUnit_Framework_TestCase;
use User\Form\LoginFormInputFilter;

class LoginFormInputFilterTest extends PHPUnit_Framework_TestCase
{
    protected $traceError = true;

    public function setUp()
    {
        $this->inputFilter = new LoginFormInputFilter;
        $this->inputFilter = $this->inputFilter->getInputFilter();
    }

    public function testValidation()
    {
        $this->assertSame(2, $this->inputFilter->count());
        $this->assertTrue($this->inputFilter->has('email'));
        $this->assertTrue($this->inputFilter->has('password'));

        // Not empty email
        $this->inputFilter->setData(array('email' => '', 'password' => 'password'));
        $this->assertFalse($this->inputFilter->isValid());

        // Not empty password
        $this->inputFilter->setData(array('email' => 'blim@bla.com', 'password' => ''));
        $this->assertFalse($this->inputFilter->isValid());

        // Password length
        $this->inputFilter->setData(array('email' => 'blim@bla.com', 'password' => 'short'));
        $this->assertFalse($this->inputFilter->isValid());

        // Email address
        $this->inputFilter->setData(array('email' => 'invalid email address', 'password' => '1234567'));
        $this->assertFalse($this->inputFilter->isValid());

        // Correct data
        $this->inputFilter->setData(array('email' => 'blim@bla.com', 'password' => '1234567'));
        $this->assertTrue($this->inputFilter->isValid());
    }
}
