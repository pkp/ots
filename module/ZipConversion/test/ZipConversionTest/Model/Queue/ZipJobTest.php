<?php

namespace ZipConversionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use ZipConversion\Model\Queue\Job\ZipJob;

class ZipJobTest extends ModelTest
{
    protected $document;
    protected $job;
    protected $user;

    protected $zipJob;

    protected $testFile = '/tmp/UNITTEST_document.txt';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->zipJob = new ZipJob;
        $this->zipJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testConversion()
    {
        $documentCount = count($this->job->documents);
        $this->zipJob->process($this->job);
        $this->assertNotSame($this->job->status, JOB_STATUS_FAILED);
        $this->assertSame($documentCount + 1, count($this->job->documents));
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_ZIP);
        $document = $this->job->getStageDocument(JOB_CONVERSION_STAGE_ZIP);
        $this->assertNotNull($document);
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData() {
        touch($this->testFile);
        file_put_contents($this->testFile, rand());

        // Create test user
        $this->user = $this->createTestUser();

        // Create test job
        $this->job = $this->createTestJob(
            array(
                'user' => $this->user,
                'conversionStage' => 4, // JOB_CONVERSION_STAGE_BIBTEX
            )
        );

        // Create test document
        $this->document = $this->createTestDocument(
            array(
                'job' => $this->job,
                'path' => $this->testFile,
                'conversionStage' => $this->job->conversionStage,
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
