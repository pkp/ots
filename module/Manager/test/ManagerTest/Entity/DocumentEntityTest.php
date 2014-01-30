<?php

namespace ManagerTest\Entity;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;

class DocumentEntityTest extends ModelTest
{
    protected $document;
    protected $job;
    protected $user;

    protected $testFile = 'var/uploads/unittest';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

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
        touch($this->testFile);
        file_put_contents($this->testFile, md5(time()));

        // Create test user
        $this->user = $this->createTestUser();

        // Create test job
        $this->job = $this->createTestJob(
            array(
                'user' => $this->user,
            )
        );

        // Create test document
        $this->document = $this->createTestDocument(
            array(
                'job' => $this->job,
                'path' => $this->testFile,
                'conversionStage' => 0, // JOB_CONVERSION_STAGE_UNCONVERTED
            )
        );
        $this->job->documents[] = $this->document;

        $this->getJobDAO()->save($this->job);
    }

    /**
     * Remove test data
     *
     * @return void
     */
    protected function cleanTestData()
    {
        $this->deleteTestUser();

        @unlink($this->testFile);
    }
}
