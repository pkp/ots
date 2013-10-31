<?php

namespace ManagerTest\Controller;

use Xmlps\UnitTest\ControllerTest;

class ManagerControllerTest extends ControllerTest
{
    protected $userDAO;

    protected $testUserEmail = 'unittestuser@example.com';
    protected $testUserPassword = '5cebb03d702827bb9e25b38b06910fa5';
    protected $testUserRole = 'member';
    protected $testUserActive = true;

    protected $testUser;

    /**
     * Set up the controller test
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();

        $this->userDAO = $this->sm->get('User\Model\DAO\UserDAO');

        $this->resetTestData();
    }

    /**
     * Test if the upload action canot be accessed by guests
     *
     * @return void
     */
    public function testUploadActionCannotBeAccessedLoggedOut()
    {
        $this->dispatch('/manager/upload');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the upload action canot be accessed by logged in users
     *
     * @return void
     */
    public function testUploadActionCanBeAccessedMember()
    {
        $this->mockLogin($this->user);
        $this->dispatch('/manager/upload');
        $this->assertResponseStatusCode(200);
    }

    /**
     * Test if a file can be uploaded
     *
     * @return void
     */
    public function testUploadActionUploadFile()
    {
        // TODO: Implement this; I haven't figured out how to mock file uploads
    }

    /**
     * Creates test data for this test
     *
     * @return void
     */
    protected function createTestData()
    {
        // Create a test user
        $this->user = $this->userDAO->getInstance();
        $this->user->email = $this->testUserEmail;
        $this->user->password = $this->testUserPassword;
        $this->user->role = $this->testUserRole;
        $this->user->active = $this->testUserActive;
        $this->userDAO->save($this->user);
    }

    /**
     * Cleans test data after test
     *
     * @return void
     */
    protected function cleanTestData()
    {
        // Removes the test user
        if ($user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail))) {
            $this->userDAO->remove($user);
        }
    }
}
