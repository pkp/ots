<?php

namespace UserTest\Form;

use Xmlps\UnitTest\ModelTest;
use User\Form\RegistrationFormInputFilter;

class RegistrationFormInputFilterTest extends ModelTest
{
    protected $userDAO;

    protected $testUserEmail = 'unittestuser@example.com';
    protected $testUserPassword = '5cebb03d702827bb9e25b38b06910fa5';
    protected $testUser2Email = 'unittestuser2@example.com';
    protected $testUser2Password = 'a4a6cb8b60695d718a902afaba4c2765';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();

        $this->inputFilter = $this->sm->get('User\Form\RegistrationFormInputFilter');
        $this->inputFilter = $this->inputFilter->getInputFilter();

        $this->userDAO = $this->sm->get('UserDAO');

        $this->cleanTestData();
        $this->createTestData();
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
            'email' => $this->testUserEmail,
            'password' => $this->testUserPassword,
            'passwordConfirm' => $this->testUserPassword,
        );

        // Existing user
        $this->inputFilter->setData($data);
        $this->assertFalse($this->inputFilter->isValid());

        $data = array(
            'email' => $this->testUser2Email,
            'password' => $this->testUser2Password,
            'passwordConfirm' => $this->testUser2Password,
        );

        // New user
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
        $testData['passwordConfirm'] = '';
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

    /**
     * Clean test data
     *
     * @return void
     */
    protected function cleanTestData()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));
        if ($user) { $this->userDAO->remove($user); }
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData()
    {
        $user = $this->sm->get('User\Entity\User');
        $user->email = $this->testUserEmail;
        $user->password = $this->testUserPassword;

        $this->userDAO->save($user);
    }
}
