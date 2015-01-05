<?php

namespace ManagerTest\Controller;

use Manager\Entity\Job;
use Xmlps\UnitTest\ControllerTest;

class ManagerControllerTest extends ControllerTest
{
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
     * Test if users cannot access the details action for failed jobs
     *
     * @return void
     */
    public function testDetailsActionCannotAccessFailed()
    {
        $this->mockLogin($this->user);

        $this->job->status = JOB_STATUS_FAILED;
        $this->jobDAO->save($this->job);

        $this->dispatch('/manager/details/id/' . $this->job->id);
        $this->assertResponseStatusCode(404);

        $this->resetTestData();
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
        touch($this->testFile);
        file_put_contents($this->testFile, rand());

        // Create test user
        $this->user = $this->createTestUser();

        // Create test job
        $this->job = $this->createTestJob(
            array(
                'user' => $this->user,
                'status' => 2, // JOB_STATUS_COMPLETED
            )
        );

        // Create test document
        $this->document = $this->createTestDocument(
            array(
                'job' => $this->job,
                'path' => $this->testFile,
                'conversionStage' => 10, // JOB_CONVERSION_STAGE_ZIP
            )
        );
        $this->job->documents[] = $this->document;
        $this->user->jobs[] = $this->job;

        $this->getUserDAO()->save($this->user);
    }

    /**
     * Cleans test data after test
     *
     * @return void
     */
    protected function cleanTestData()
    {
        $this->deleteTestUser();

        @unlink($this->testFile);
    }
}
