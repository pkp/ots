<?php

namespace UserTest\Controller;

use Xmlps\UnitTest\ControllerTest;

class UserControllerTest extends ControllerTest
{
    protected $testUserEmail = 'unittestuser@example.com';
    protected $testUserPassword = '5cebb03d702827bb9e25b38b06910fa5';
    protected $testUser2Email = 'unittestuser2@example.com';
    protected $testUser2Password = 'a4a6cb8b60695d718a902afaba4c2765';

    protected $testUser;
    protected $testUser2;

    /**
     * Set up the controller test
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();

        $this->resetTestData();

        // Stub out Sendmail in favor of a no-op mail substitute.
        $transport = $this->sm->get('MailTransport');
        $transport->setCallable(array($this, 'mailStub'));
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
        $this->mockLogin($this->testUser);
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
        $this->mockLogin($this->testUser);

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
        $this->mockLogin($this->testUser);
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
     * Test if the settings page can be accessed by logged in users
     *
     * @return void
     */
    public function testSettingsActionCanBeAccessedLoggedIn()
    {
        $this->mockLogin($this->testUser);

        $this->dispatch('/user/settings');
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('User');
        $this->assertControllerName('User\Controller\User');
        $this->assertControllerClass('UserController');
        $this->assertActionName('settings');
        $this->assertMatchedRouteName('user');
    }

    /**
     * Test if the settings page cannot be accessed by logged out users
     *
     * @return void
     */
    public function testSettingsActionCanBeAccessedLoggedOut()
    {
        $this->dispatch('/user/settings');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the password can be changed
     *
     * NOTE: Test data will be changed after this test. Will be reset in
     * testSettingsActionLoginAfterChangePassword()
     *
     * @return void
     */
    public function testSettingsActionChangePassword()
    {
        $this->mockLogin($this->testUser);

        // Change the password
        $postData = array(
            'passwordNew' => $this->testUser2Password,
            'passwordConfirm' => $this->testUser2Password,
        );

        $this->dispatch('/user/settings', 'POST', $postData);
        $this->assertResponseStatusCode(302);
    }

    /**
     * Test if login is possible with the new password
     *
     * @return void
     */
    public function testSettingsActionLoginAfterChangePassword()
    {
        $postData = array(
            'email' => $this->testUserEmail,
            'password' => $this->testUserPassword,
        );
        $this->dispatch('/user/login', 'POST', $postData);
        $this->assertResponseStatusCode(302);

        $this->resetTestData();
    }

    /**
     * Test if the activation action cannot be accedded by a logged in user
     *
     * @return void
     */
    public function testActivateActionCanBeAccessedLoggedIn()
    {
        $this->mockLogin($this->testUser);

        $this->dispatch('/user/activate/id/' . uniqid());
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the activation action cannot be accedded by an administrator
     *
     * @return void
     */
    public function testActivateActionCanBeAccessedAdmin()
    {
        $this->testUser->role = USER_ROLE_ADMINISTRATOR;
        $this->userDAO->save($this->testUser);

        $this->mockLogin($this->testUser);

        $this->dispatch('/user/activate/id/' . uniqid());
        $this->assertResponseStatusCode(403);
        $this->resetTestData();
    }

    /**
     * Test if the activation works correctly
     *
     * @return void
     */
    public function testActivateAction()
    {
        $activationKey = uniqid();
        $this->testUser->active = false;
        $this->testUser->activationKey = $activationKey;
        $this->userDAO->save($this->testUser);

        $this->dispatch('/user/activate/id/' . $activationKey);
        $this->assertResponseStatusCode(302);

        $this->testUser = $this->getUserDAO()->findOneBy(array('email' => $this->testUserEmail));
        $this->assertTrue($this->testUser->isActive());
        $this->assertNull($this->testUser->activationKey);

        $this->resetTestData();
    }

    /**
     * Test if an invalid activation redirects correctly
     *
     * @return void
     */
    public function testActivateActionInvalidKey()
    {
        $this->dispatch('/user/activate/id/' . uniqid());
        $this->assertResponseStatusCode(404);
    }

    /**
     * Stub for pretending to send mail during testing.
     *
     * @param  string $to
     * @param  string $subject
     * @param  string $message
     * @param  string $headers
     * @param  $parameters
     */
    public function mailStub($to, $subject, $message, $headers, $parameters)
    {
        return;
    }

    /**
     * Creates test data for this test
     *
     * @return void
     */
    protected function createTestData()
    {
        $this->testUser = $this->createTestUser(
            array(
                'email' => $this->testUserEmail,
                'password' => $this->testUserPassword,
            )
        );
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
            $this->deleteTestUser(array('email' => $email));
        }
    }
}
