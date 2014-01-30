<?php

namespace UserTest\Form;

use Xmlps\UnitTest\ModelTest;
use User\Form\LoginFormInputFilter;

class LoginFormInputFilterTest extends ModelTest
{
    protected $testUserEmail = 'unittestuser@example.com';
    protected $testUserPassword = '5cebb03d702827bb9e25b38b06910fa5';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();

        $this->inputFilter = new LoginFormInputFilter;
        $this->inputFilter = $this->inputFilter->getInputFilter();
    }

    /**
     * Test the input filter validation
     *
     * @return void
     */
    public function testValidation()
    {
        $this->assertSame(2, $this->inputFilter->count());
        $this->assertTrue($this->inputFilter->has('email'));
        $this->assertTrue($this->inputFilter->has('password'));

        $data = array(
            'email' => $this->testUserEmail,
            'password' => $this->testUserPassword,
        );

        // Correct data
        $this->inputFilter->setData($data);
        $this->assertTrue($this->inputFilter->isValid());

        // Not empty email
        $testData = $data;
        $testData['email'] = '';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());

        // Not empty password
        $testData = $data;
        $testData['password'] = '';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());

        // Password length
        $testData = $data;
        $testData['password'] = 'short';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());

        // Email address
        $testData = $data;
        $testData['email'] = 'invalid email address';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());
    }
}
