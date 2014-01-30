<?php
namespace AdminTest\Controller;

use Xmlps\UnitTest\ControllerTest;

class SystemLogControllerTest extends ControllerTest
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
     * Test if the view action can be accessed
     *
     * @return void
     */
    public function testViewActionCanBeAccessedAdmin()
    {
        $this->mockLogin($this->testUser2);

        $this->dispatch('/admin/system-log/list');
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('Admin');
        $this->assertControllerName('Admin\Controller\SystemLog');
        $this->assertControllerClass('SystemLogController');
        $this->assertActionName('list');
        $this->assertMatchedRouteName('admin/system_log');
    }

    /**
     * Test if the view action cannot be accessed by guests
     *
     * @return void
     */
    public function testViewActionCanBeAccessedLoggedOut()
    {
        $this->dispatch('/admin/system-log/list');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the view action cannot be accessed by regular members
     *
     * @return void
     */
    public function testViewActionCanBeAccessedLoggedIn()
    {
        $this->mockLogin($this->testUser);

        $this->dispatch('/admin/system-log/list');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test the system log action paging
     *
     * @return void
     */
    public function testSystemLogActionPaging()
    {
        $this->mockLogin($this->testUser2);

        $this->dispatch('/admin/system-log/list/page/1');
        $this->assertResponseStatusCode(200);
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
