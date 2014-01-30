<?php
namespace AdminTest\Controller;

use Xmlps\UnitTest\ControllerTest;

class UserManagementControllerTest extends ControllerTest
{
    protected $traceError = true;

    protected $testUserEmail = 'unittestuser@example.com';
    protected $testUserRole = 'member';
    protected $testUser2Email = 'unittestadmin@example.com';
    protected $testUser2Role = 'administrator';

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
    }

    /**
     * Test if the list action can be accessed
     *
     * @return void
     */
    public function testListActionCanBeAccessedAdmin()
    {
        $this->mockLogin($this->testUser2);

        $this->dispatch('/admin/user-management/list');
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('Admin');
        $this->assertControllerName('Admin\Controller\UserManagement');
        $this->assertControllerClass('UserManagementController');
        $this->assertActionName('list');
        $this->assertMatchedRouteName('admin/user_management');
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
        $this->mockLogin($this->testUser);

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
        $this->mockLogin($this->testUser2);

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
        $this->mockLogin($this->testUser2);

        $this->dispatch('/admin/user-management/edit/user/' . $this->testUser->id);
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('Admin');
        $this->assertControllerName('Admin\Controller\UserManagement');
        $this->assertControllerClass('UserManagementController');
        $this->assertActionName('edit');
        $this->assertMatchedRouteName('admin/user_management');
    }

    /**
     * Test if the edit action can not be accessed by logged out users
     *
     * @return void
     */
    public function testEditActionCanBeAccessedLoggedOut()
    {
        $this->dispatch('/admin/user-management/edit/user/' . $this->testUser->id);
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the edit action can not be accessed by logged in users
     *
     * @return void
     */
    public function testEditActionCanBeAccessedLoggedIn()
    {
        $this->mockLogin($this->testUser);

        $this->dispatch('/admin/user-management/edit/user/' . $this->testUser->id);
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the user can be edited
     *
     * @return void
     */
    public function testEditActionEditUser()
    {
        $this->mockLogin($this->testUser2);

        $testData = array(
            'id' => $this->testUser->id,
            'role' => 'administrator',
            'level' => '1',
            'active' => '1',
        );
        $this->dispatch('/admin/user-management/edit', 'POST', $testData);

        $this->assertResponseStatusCode(302);

        $this->assertSame($this->testUser->role, $testData['role']);
        $this->assertSame($this->testUser->level, $testData['level']);
        $this->assertSame($this->testUser->active, $testData['active']);

        $this->resetTestData();
    }

    /**
     * Test if the remove action can be accessed
     *
     * @return void
     */
    public function testRemoveActionCanBeAccessedAdmin()
    {
        $this->mockLogin($this->testUser2);

        $this->dispatch('/admin/user-management/remove/user/' . $this->testUser->id);
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('Admin');
        $this->assertControllerName('Admin\Controller\UserManagement');
        $this->assertControllerClass('UserManagementController');
        $this->assertActionName('remove');
        $this->assertMatchedRouteName('admin/user_management');
    }

    /**
     * Test if the remove action can not be accessed by logged out users
     *
     * @return void
     */
    public function testRemoveActionCanBeAccessedLoggedOut()
    {
        $this->dispatch('/admin/user-management/remove/user/' . $this->testUser->id);
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the remove action can not be accessed by logged in users
     *
     * @return void
     */
    public function testRemoveActionCanBeAccessedLoggedIn()
    {
        $this->mockLogin($this->testUser);

        $this->dispatch('/admin/user-management/remove/user/' . $this->testUser->id);
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if a user can be removed
     *
     * @return void
     */
    public function testRemoveActionRemoveUser()
    {
        $this->mockLogin($this->testUser2);

        $this->dispatch(
            '/admin/user-management/remove',
            'POST',
            array('id' => $this->testUser->id)
        );

        $this->assertResponseStatusCode(302);

        $user = $this->getUserDAO()->findOneBy(array('email' => $this->testUserEmail));
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
        $this->testUser = $this->createTestUser(
            array(
                'email' => $this->testUserEmail,
                'role' => $this->testUserRole,
            )
        );
        $this->testUser2 = $this->createTestUser(
            array(
                'email' => $this->testUser2Email,
                'role' => $this->testUser2Role,
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
