<?php

namespace UserTest\Form;

use PHPUnit_Framework_TestCase;
use User\Form\RegistrationFormInputFilter;

class RegistrationFormInputFilterTest extends PHPUnit_Framework_TestCase
{
    protected $traceError = true;

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp()
    {
        $emMock = $this->getMockBuilder('Doctrine\ORM\EntityRepository')
            ->disableOriginalConstructor()
            ->getMock();
        $translatorMock = $this->getMockBuilder('Zend\Mvc\I18n\Translator')
            ->disableOriginalConstructor()
            ->getMock();

        $this->inputFilter = new RegistrationFormInputFilter(
            $translatorMock,
            $emMock
        );
        $this->inputFilter = $this->inputFilter->getInputFilter();
    }

    /**
     * Test the input filter validation
     *
     * @return void
     */
    public function testValidation()
    {
        $this->assertSame(3, $this->inputFilter->count());
        $this->assertTrue($this->inputFilter->has('email'));
        $this->assertTrue($this->inputFilter->has('password'));
        $this->assertTrue($this->inputFilter->has('passwordConfirm'));

        $data = array(
            'email' => 'blim@bla.com',
            'password' => 'password',
            'passwordConfirm' => 'password'
        );

        // Correct data
        $this->inputFilter->setData($data);
        $this->assertTrue($this->inputFilter->isValid());

        // Not empty email
        $testData = $data;
        $testData['email'] = '';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());

        // Email address
        $testData = $data;
        $testData['email'] = 'not an email';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());

        // Not empty password
        $testData = $data;
        $testData['password'] = '';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());

        // Not empty passwordConfirm
        $testData = $data;
        $testData['password'] = '';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());

        // Password length
        $testData = $data;
        $testData['password'] = 'short';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());

        // Password confirm length
        $testData = $data;
        $testData['passwordConfirm'] = 'short';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());

        // Passwords match
        $testData = $data;
        $testData['password'] = 'password1';
        $testData['passwordConfirm'] = 'password2';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());
    }
}
