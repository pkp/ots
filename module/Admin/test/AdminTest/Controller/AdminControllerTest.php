<?php
namespace AdminTest\Controller;

use Xmlps\UnitTest\ControllerTest;

class AdminControllerTest extends ControllerTest
{
    protected $traceError = true;

    protected $testUserEmail = 'unittestuser@example.com';
    protected $testUserPassword = '5cebb03d702827bb9e25b38b06910fa5';
    protected $testUserRole = 'member';
    protected $testUser2Email = 'unittestadmin@example.com';
    protected $testUser2Password = 'a4a6cb8b60695d718a902afaba4c2765';
    protected $testUser2Role = 'administrator';

    protected $userDAO;

    /**
     * Set up the controller test
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();

        $this->userDAO = $this->sm->get('userDAO');

        $this->resetTestData();

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
    public function testIndexActionCanBeAccessedAdmin()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUser2Email));
        $this->mockLogin($user);

        $this->dispatch('/admin');
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('Admin');
        $this->assertControllerName('Admin\Controller\Admin');
        $this->assertControllerClass('AdminController');
        $this->assertActionName('index');
        $this->assertMatchedRouteName('admin');
    }

    /**
     * Test if the index action cannot be accessed by guests
     *
     * @return void
     */
    public function testIndexActionCanBeAccessedLoggedOut()
    {
        $this->dispatch('/admin');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the index action cannot be accessed by regular members
     *
     * @return void
     */
    public function testIndexActionCanBeAccessedLoggedIn()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));
        $this->mockLogin($user);

        $this->dispatch('/admin');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the user management action can be accessed
     *
     * @return void
     */
    public function testuserManagementActionCanBeAccessedAdmin()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUser2Email));
        $this->mockLogin($user);

        $this->dispatch('/admin/user-management');
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('Admin');
        $this->assertControllerName('Admin\Controller\Admin');
        $this->assertControllerClass('AdminController');
        $this->assertActionName('user-management');
        $this->assertMatchedRouteName('admin');
    }

    /**
     * Test if the user management action cannot be accessed by guests
     *
     * @return void
     */
    public function testuserManagementActionCanBeAccessedLoggedOut()
    {
        $this->dispatch('/admin/user-management');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the user management action cannot be accessed by regular members
     *
     * @return void
     */
    public function testuserManagementActionCanBeAccessedLoggedIn()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));
        $this->mockLogin($user);

        $this->dispatch('/admin/user-management');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the system log action can be accessed
     *
     * @return void
     */
    public function testSystemLogActionCanBeAccessedAdmin()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUser2Email));
        $this->mockLogin($user);

        $this->dispatch('/admin/system-log');
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('Admin');
        $this->assertControllerName('Admin\Controller\Admin');
        $this->assertControllerClass('AdminController');
        $this->assertActionName('system-log');
        $this->assertMatchedRouteName('admin-system-log');
    }

    /**
     * Test the system log action paging
     *
     * @return void
     */
    public function testSystemLogActionPaging()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUser2Email));
        $this->mockLogin($user);

        $this->dispatch('/admin/system-log/1');
        $this->assertResponseStatusCode(200);
    }

    /**
     * Test if the system log action cannot be accessed by guests
     *
     * @return void
     */
    public function testSystemLogActionCanBeAccessedLoggedOut()
    {
        $this->dispatch('/admin/system-log');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the system log action cannot be accessed by regular members
     *
     * @return void
     */
    public function testSystemLogActionCanBeAccessedLoggedIn()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));
        $this->mockLogin($user);

        $this->dispatch('/admin/system-log');
        $this->assertResponseStatusCode(403);
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

        $user = $this->sm->get('User\Entity\User');
        $user->email = $this->testUser2Email;
        $user->password = $this->testUser2Password;
        $user->role = $this->testUser2Role;
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
