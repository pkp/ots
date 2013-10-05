<?php

namespace IndexTest\Controller;

use Zend\Test\PHPUnit\Controller\AbstractHttpControllerTestCase;

class UserControllerTest extends AbstractHttpControllerTestCase
{
    protected $traceError = true;

    protected $testUserEmail = 'unittestuser@example.com';
    protected $testUserPassword = '5cebb03d702827bb9e25b38b06910fa5';
    protected $testUser2Email = 'unittestuser2@example.com';
    protected $testUser2Password = 'a4a6cb8b60695d718a902afaba4c2765';

    protected $sm;
    protected $userDAO;

    /**
     * Set up the controller test
     *
     * @return void
     */
    public function setUp()
    {
        $baseDir = dirname(dirname(dirname(dirname(dirname(__DIR__)))));
        $this->setApplicationConfig(
            include $baseDir . '/config/application.config.php'
        );

        $this->sm = $this->getApplicationServiceLocator();
        $this->userDAO = $this->sm->get('UserDAO');

        $this->cleanTestData();
        $this->createTestData();

        parent::setUp();
    }

    /**
     * Clean up after test
     *
     * @return void
     */
    public function tearDown()
    {
        $this->cleanTestData();
    }

    /**
     * Test if the index action can be accessed
     *
     * @return void
     */
    public function testIndexActionCanBeAccessed()
    {
        $this->dispatch('/user');
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('User');
        $this->assertControllerName('User\Controller\User');
        $this->assertControllerClass('UserController');
        $this->assertActionName('index');
        $this->assertMatchedRouteName('user');
    }

    /**
     * Test if the login action is accessible
     *
     * @return void
     */
    public function testLoginActionCanBeAccessed()
    {
        $this->dispatch('/user/login');
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('User');
        $this->assertControllerName('User\Controller\User');
        $this->assertControllerClass('UserController');
        $this->assertActionName('login');
        $this->assertMatchedRouteName('user');
    }

    /**
     * Test if the login action is accessible
     *
     * @return void
     */
    public function testRegisterActionCanBeAccessed()
    {
        $this->dispatch('/user/register');
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('User');
        $this->assertControllerName('User\Controller\User');
        $this->assertControllerClass('UserController');
        $this->assertActionName('register');
        $this->assertMatchedRouteName('user');
    }

    /**
     * Test if a login attempt is processed correctly
     *
     * @return void
     */
    public function testLoginAction()
    {
        // Invalid user
        $postData = array(
            'email' => 'foo@example.com',
            'password' => 'password',
        );
        $this->dispatch('/user/login', 'POST', $postData);
        $this->assertResponseStatusCode(200);

        // Execute the form submission
        $postData = array(
            'email' => $this->testUserEmail,
            'password' => $this->testUserPassword,
        );
        $this->dispatch('/user/login', 'POST', $postData);
        $this->assertResponseStatusCode(302);
    }

    /**
     * Test if a logout attempt is processed correctly
     *
     * @return void
     */
    public function testLogoutAction()
    {
        // Log the testuser in
        $postData = array(
            'email' => $this->testUserEmail,
            'password' => $this->testUserPassword,
        );
        $this->dispatch('/user/login', 'POST', $postData);
        $this->assertResponseStatusCode(302);

        // Log the user out
        $this->dispatch('/user/logout');
        $this->assertResponseStatusCode(302);
    }

    /**
     * Test if a register attempt is processed correctly
     *
     * @return void
     */
    public function testRegisterAction()
    {
        // Passwords don't match
        $postData = array(
            'email' => $this->testUser2Email,
            'password' => $this->testUserPassword,
            'passwordConfirm' => $this->testUser2Password,
        );
        $this->dispatch('/user/register', 'POST', $postData);
        $this->assertResponseStatusCode(200);

        // Register an existing user
        $postData = array(
            'email' => $this->testUserEmail,
            'password' => $this->testUserPassword,
            'passwordConfirm' => $this->testUserPassword,
        );
        $this->dispatch('/user/register', 'POST', $postData);
        $this->assertResponseStatusCode(200);

        // Register a new user
        $postData = array(
            'email' => $this->testUser2Email,
            'password' => $this->testUser2Password,
            'passwordConfirm' => $this->testUser2Password,
        );
        $this->dispatch('/user/register', 'POST', $postData);
        $this->assertResponseStatusCode(302);
    }

    /**
     * Creates test data for this test
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

    /**
     * Cleans test data after test
     *
     * @return void
     */
    protected function cleanTestData()
    {
        $testUserEmails = array($this->testUserEmail, $this->testUser2Email);
        foreach ($testUserEmails as $email) {
            if ($user = $this->userDAO->findOneBy(array('email' => $email))) {
                $this->userDAO->remove($user);
            }
        }
    }
}
