<?php

namespace UserTest\Form;

use Xmlps\UnitTest\ModelTest;
use User\Form\PasswordResetFormInputFilter;

class PasswordResetFormInputFilterTest extends ModelTest
{
    protected $testUserPassword = '5cebb03d702827bb9e25b38b06910fa5';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();

        $this->inputFilter = $this->sm->get('User\Form\PasswordResetFormInputFilter');
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
        $this->assertTrue($this->inputFilter->has('passwordNew'));
        $this->assertTrue($this->inputFilter->has('passwordConfirm'));

        $data = array(
            'passwordNew' => $this->testUserPassword,
            'passwordConfirm' => $this->testUserPassword,
        );

        // Not empty password
        $testData = $data;
        $testData['passwordNew'] = '';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());

        // Not empty passwordConfirm
        $testData = $data;
        $testData['passwordConfirm'] = '';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());

        // Password length
        $testData = $data;
        $testData['passwordNew'] = 'short';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());

        // Password confirm length
        $testData = $data;
        $testData['passwordConfirm'] = 'short';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());

        // Passwords match
        $testData = $data;
        $testData['passwordNew'] = 'password1';
        $testData['passwordConfirm'] = 'password2';
        $this->inputFilter->setData($testData);
        $this->assertFalse($this->inputFilter->isValid());
    }
}
