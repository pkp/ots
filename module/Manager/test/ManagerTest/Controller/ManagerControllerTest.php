<?php

namespace ManagerTest\Controller;

use Manager\Entity\Job;
use Xmlps\UnitTest\ControllerTest;

class ManagerControllerTest extends ControllerTest
{
    protected $userDAO;
    protected $jobDAO;
    protected $documentDAO;

    protected $testUserEmail = 'unittestuser@example.com';
    protected $testUserPassword = '5cebb03d702827bb9e25b38b06910fa5';
    protected $testUserRole = 'member';
    protected $testUserActive = true;

    protected $testFile = '/tmp/UNITTEST_manager.txt';

    protected $user;
    protected $job;
    protected $document;

    /**
     * Set up the controller test
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();

        $this->userDAO = $this->sm->get('User\Model\DAO\UserDAO');
        $this->jobDAO = $this->sm->get('Manager\Model\DAO\JobDAO');
        $this->documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');

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
     * Test if the list action cannot be accessed by guests
     *
     * @return void
     */
    public function testListActionCannotBeAccessedLoggedOut()
    {
        $this->dispatch('/manager/list');
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the list action can be accessed by logged in users
     *
     * @return void
     */
    public function testListActionCanBeAccessedMember()
    {
        $this->mockLogin($this->user);
        $this->dispatch('/manager/list');
        $this->assertResponseStatusCode(200);
    }

    /**
     * Test if the list action paging works
     *
     * @return void
     */
    public function testListActionPaging()
    {
        $this->mockLogin($this->user);
        $this->dispatch('/manager/list/page/2');
        $this->assertResponseStatusCode(200);
    }

    /**
     * Test if the details action cannot be accessed by guests
     *
     * @return void
     */
    public function testDetailsActionCannotBeAccessedLoggedOut()
    {
        $this->dispatch('/manager/details/id/' . $this->job->id);
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the details action can be accessed by logged in users
     *
     * @return void
     */
    public function testDetailsActionCanBeAccessedMember()
    {
        $this->mockLogin($this->user);
        $this->dispatch('/manager/details/id/' . $this->job->id);
        $this->assertResponseStatusCode(200);
    }

    /**
     * Test if the download action cannot be accessed by guests
     *
     * @return void
     */
    public function testDownloadActionCannotBeAccessedLoggedOut()
    {
        $this->dispatch('/manager/download/id/' . $this->document->id);
        $this->assertResponseStatusCode(403);
    }

    /**
     * Test if the download action works correctly
     *
     * @return void
     */
    public function testDownloadAction()
    {
        $this->mockLogin($this->user);
        $this->dispatch('/manager/download/id/' . $this->document->id);
        $this->assertResponseStatusCode(200);

        $headers = $this->getResponse()->getHeaders();

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $this->assertSame(
            $headers->get('Content-Type')->value,
            finfo_file($finfo, $this->testFile)
        );

        $this->assertSame(
            $headers->get('Content-Disposition')->value,
            'attachment; filename="' . basename($this->testFile) . '"'
        );

        $this->assertSame(
            (int) $headers->get('Content-Length')->value,
            filesize($this->testFile)
        );
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

        $this->job = $this->jobDAO->getInstance();
        $this->job->user = $this->user;

        touch($this->testFile);
        file_put_contents($this->testFile, rand());

        $this->document = $this->documentDAO->getInstance();
        $this->document->path = $this->testFile;
        $this->document->conversionStage = JOB_CONVERSION_STAGE_UNCONVERTED;
        $this->document->job = $this->job;
        $this->job->documents[] = $this->document;

        $this->jobDAO->save($this->job);
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

        @unlink($this->testFile);
    }
}
