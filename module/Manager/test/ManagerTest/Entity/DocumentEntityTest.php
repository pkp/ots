<?php

namespace ManagerTest\Entity;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;

class DocumentEntityTest extends ModelTest
{
    protected $document;
    protected $documentDAO;
    protected $job;
    protected $jobDAO;
    protected $user;
    protected $userDAO;

    protected $testFile = 'var/uploads/unittest';

    protected $testUserEmail = 'unittestuser@example.com';
    protected $testUserPassword = '5cebb03d702827bb9e25b38b06910fa5';
    protected $testUserRole = 'member';
    protected $testUserActive = true;

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $this->jobDAO = $this->sm->get('Manager\Model\DAO\JobDAO');
        $this->userDAO = $this->sm->get('User\Model\DAO\UserDAO');

        $this->resetTestData();
    }

    /**
     * Test if the associated file is deleted when the document is deleted
     *
     * @return void
     */
    public function testFileDeletion()
    {
        $this->assertTrue(file_exists($this->testFile));
        $this->documentDAO->remove($this->document);
        $this->assertFalse(file_exists($this->testFile));

        $this->resetTestData();
    }

    /**
     * Test if the path validation works
     *
     * @return void
     */
    public function testPathValidation()
    {
        $this->setExpectedException('Exception');

        $this->document->setPath($this->testFile . rand());

        $this->resetTestData();
    }

    /**
     * Tests if the file size is initialized properly
     *
     * @return void
     */
    public function testSizeInitialization()
    {
        $this->document->size = null;
        $this->assertNull($this->document->size);
        $this->document->setPath($this->testFile);
        $this->assertSame($this->document->size, filesize($this->testFile));
        $this->resetTestData();
    }

    /**
     * Tests if the mime type is initialized properly
     *
     * @return void
     */
    public function testMimeTypeInitialization()
    {
        $this->document->mimeType = null;
        $this->assertNull($this->document->mimeType);
        $this->document->setPath($this->testFile);
        $this->assertSame($this->document->mimeType, 'text/plain');
        $this->resetTestData();
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData() {
        $this->user = $this->userDAO->getInstance();
        $this->user->email = $this->testUserEmail;
        $this->user->password = $this->testUserPassword;
        $this->user->role = $this->testUserRole;
        $this->user->active = $this->testUserActive;
        $this->userDAO->save($this->user);

        $this->job = $this->jobDAO->getInstance();
        $this->job->user = $this->user;

        $this->document = $this->documentDAO->getInstance();
        $this->document->job = $this->job;

        touch($this->testFile);
        file_put_contents($this->testFile, md5(time()));

        $this->document->path = $this->testFile;
        $this->document->mimeType = 'text/plain';
        $this->document->conversionStage = JOB_CONVERSION_STAGE_UNCONVERTED;
        $this->document->size = filesize($this->testFile);

        $this->job->documents[] = $this->document;
        $this->jobDAO->save($this->job);
    }

    /**
     * Remove test data
     *
     * @return void
     */
    protected function cleanTestData()
    {
        if ($this->job) {
            $this->jobDAO->remove($this->job);
        }

        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));
        if ($user) { $this->userDAO->remove($user); }

        @unlink($this->testFile);
    }
}
