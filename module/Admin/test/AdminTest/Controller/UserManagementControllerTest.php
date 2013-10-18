<?php
namespace AdminTest\Controller;

use Xmlps\UnitTest\ControllerTest;

class UserManagementControllerTest extends ControllerTest
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
     * Test if the list action can be accessed
     *
     * @return void
     */
    public function testListActionCanBeAccessedAdmin()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUser2Email));
        $this->mockLogin($user);

        $this->dispatch('/admin/user-management/list');
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('Admin');
        $this->assertControllerName('Admin\Controller\UserManagement');
        $this->assertControllerClass('UserManagementController');
        $this->assertActionName('list');
        $this->assertMatchedRouteName('admin/user-management');
    }

    /**
     * Test if the list action cannot be accessed by guests
     *
     * @return void
     */
    public function testListActionCanBeAccessedLoggedOut()
    {
        $this->dispatch('/admin/user-management/list');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the list action cannot be accessed by regular members
     *
     * @return void
     */
    public function testListActionCanBeAccessedLoggedIn()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));
        $this->mockLogin($user);

        $this->dispatch('/admin/user-management/list');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test the system log action paging
     *
     * @return void
     */
    public function testListActionPaging()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUser2Email));
        $this->mockLogin($user);

        $this->dispatch('/admin/user-management/list/page/1');
        $this->assertResponseStatusCode(200);
    }

    /**
     * Test if the edit action can be accessed
     *
     * @return void
     */
    public function testEditActionCanBeAccessedAdmin()
    {
        $adminUser = $this->userDAO->findOneBy(array('email' => $this->testUser2Email));
        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));

        $this->mockLogin($adminUser);

        $this->dispatch('/admin/user-management/edit/user/' . $user->id);
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('Admin');
        $this->assertControllerName('Admin\Controller\UserManagement');
        $this->assertControllerClass('UserManagementController');
        $this->assertActionName('edit');
        $this->assertMatchedRouteName('admin/user-management');
    }

    /**
     * Test if the edit action can not be accessed by logged out users
     *
     * @return void
     */
    public function testEditActionCanBeAccessedLoggedOut()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));
        $this->dispatch('/admin/user-management/edit/user/' . $user->id);
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the edit action can not be accessed by logged in users
     *
     * @return void
     */
    public function testEditActionCanBeAccessedLoggedIn()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));
        $this->mockLogin($user);

        $this->dispatch('/admin/user-management/edit/user/' . $user->id);
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the remove action can be accessed
     *
     * @return void
     */
    public function testRemoveActionCanBeAccessedAdmin()
    {
        $adminUser = $this->userDAO->findOneBy(array('email' => $this->testUser2Email));
        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));

        $this->mockLogin($adminUser);

        $this->dispatch('/admin/user-management/remove/user/' . $user->id);
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('Admin');
        $this->assertControllerName('Admin\Controller\UserManagement');
        $this->assertControllerClass('UserManagementController');
        $this->assertActionName('remove');
        $this->assertMatchedRouteName('admin/user-management');
    }

    /**
     * Test if the remove action can not be accessed by logged out users
     *
     * @return void
     */
    public function testRemoveActionCanBeAccessedLoggedOut()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));
        $this->dispatch('/admin/user-management/remove/user/' . $user->id);
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the remove action can not be accessed by logged in users
     *
     * @return void
     */
    public function testRemoveActionCanBeAccessedLoggedIn()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));
        $this->mockLogin($user);

        $this->dispatch('/admin/user-management/remove/user/' . $user->id);
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if a user can be removed
     *
     * @return void
     */
    public function testRemoveActionRemoveUser()
    {
        $adminUser = $this->userDAO->findOneBy(array('email' => $this->testUser2Email));
        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));

        $this->mockLogin($adminUser);

        $this->dispatch(
            '/admin/user-management/remove',
            'POST',
            array('userId' => $user->id)
        );

        $this->assertResponseStatusCode(302);

        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));
        $this->assertNull($user);

        $this->resetTestData();
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
