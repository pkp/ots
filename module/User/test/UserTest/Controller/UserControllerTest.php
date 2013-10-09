<?php

namespace UserTest\Controller;

use Zend\Test\PHPUnit\Controller\AbstractHttpControllerTestCase;

class UserControllerTest extends AbstractHttpControllerTestCase
{
    protected $traceError = true;

    protected $testUserEmail = 'unittestuser@example.com';
    protected $testUserPassword = '5cebb03d702827bb9e25b38b06910fa5';
    protected $testUserRole = 'member';
    protected $testUser2Email = 'unittestuser2@example.com';
    protected $testUser2Password = 'a4a6cb8b60695d718a902afaba4c2765';
    protected $testUser2Role = 'member';

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

        $this->resetTestData();

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
     * Test if the login action is accessible for logged out users
     *
     * @return void
     */
    public function testLoginActionCanBeAccessedLoggedOut()
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
     * Test if the login action is not accessible by logged in users
     *
     * @return void
     */
    public function testLoginActionCanBeAccessedLoggedIn()
    {
        $this->mockLogin();
        $this->dispatch('/user/login');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if an invalid login attempt is processed correctly
     *
     * @return void
     */
    public function testLoginActionInvalidLogin()
    {
        $postData = array(
            'email' => 'foo@example.com',
            'password' => 'password',
        );
        $this->dispatch('/user/login', 'POST', $postData);
        $this->assertResponseStatusCode(200);
    }

    /**
     * Test if a correct login attempt is processed correctly
     *
     * @return void
     */
    public function testLoginActionCorrectLogin()
    {
        $postData = array(
            'email' => $this->testUserEmail,
            'password' => $this->testUserPassword,
        );
        $this->dispatch('/user/login', 'POST', $postData);
        $this->assertResponseStatusCode(302);
    }

    /**
     * Test if a logout attempt for logged out users is processed correctly
     *
     * @return void
     */
    public function testLogoutActionLoggedOut()
    {
        $this->dispatch('/user/logout');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if a logout attempt for logged in users is processed correctly
     *
     * @return void
     */
    public function testLogoutActionLoggedIn()
    {
        $this->mockLogin();

        $this->dispatch('/user/logout');
        $this->assertResponseStatusCode(302);
    }

    /**
     * Test if the register action is accessible for logged out users
     *
     * @return void
     */
    public function testRegisterActionCanBeAccessedLoggedOut()
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
     * Test if the register action is accessible by logged in users
     *
     * @return void
     */
    public function testRegisterActionCanBeAccessedLoggedIn()
    {
        $this->mockLogin();
        $this->dispatch('/user/register');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if a register attempt with non matching passwords is processed
     * correctly
     *
     * @return void
     */
    public function testRegisterActionPasswordsDontMatch()
    {
        $postData = array(
            'email' => $this->testUser2Email,
            'password' => $this->testUserPassword,
            'passwordConfirm' => $this->testUser2Password,
        );
        $this->dispatch('/user/register', 'POST', $postData);
        $this->assertResponseStatusCode(200);
    }

    /**
     * Test if a register attempt with an existing email is processed
     * correctly
     *
     * @return void
     */
    public function testRegisterActionExistingUser()
    {
        $postData = array(
            'email' => $this->testUserEmail,
            'password' => $this->testUserPassword,
            'passwordConfirm' => $this->testUserPassword,
        );
        $this->dispatch('/user/register', 'POST', $postData);
        $this->assertResponseStatusCode(200);
    }

    /**
     * Test if a valid register attempt is processed correctly
     *
     * @return void
     */
    public function testRegisterActionValidUser()
    {
        $postData = array(
            'email' => $this->testUser2Email,
            'password' => $this->testUser2Password,
            'passwordConfirm' => $this->testUser2Password,
        );
        $this->dispatch('/user/register', 'POST', $postData);
        $this->assertResponseStatusCode(302);

        $this->resetTestData();
    }

    /**
     * Helper function. Make the authentication service always return an
     * identity
     *
     * @return void
     */
    protected function mockLogin() {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));

        $authService = $this->getMock('Zend\Authentication\AuthenticationService');
        $authService->expects($this->any())
            ->method('getIdentity')
            ->will($this->returnValue($user));

        $authService->expects($this->any())
            ->method('hasIdentity')
            ->will($this->returnValue(true));

        $this->getApplicationServiceLocator()->setAllowOverride(true);
        $this->getApplicationServiceLocator()
            ->setService('Zend\Authentication\AuthenticationService', $authService);
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
        $user->role = $this->testUserRole;
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

    /**
     * Resets the test data
     *
     * @return void
     */
    protected function resetTestData()
    {
       $this->cleanTestData();
       $this->createTestData();
    }
}
