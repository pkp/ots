<?php

namespace ParsCitConversionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use ParsCitConversion\Model\Queue\Job\ParsCitJob;

class ParsCitJobTest extends ModelTest
{
    protected $document;
    protected $job;
    protected $user;

    protected $parsCitJob;

    protected $testAsset = 'module/ParsCitConversion/test/assets/references.txt';
    protected $testFile = null;

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->parsCitJob = new ParsCitJob;
        $this->parsCitJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->assertSame(
            $this->job->conversionStage,
            JOB_CONVERSION_STAGE_REFERENCES
        );
        
        $documentCount = count($this->job->documents);
        $this->parsCitJob->process($this->job);
        $this->assertNotSame($this->job->status, JOB_STATUS_FAILED);
        $this->assertSame($documentCount+1, count($this->job->documents));
        $this->assertSame(
            $this->job->conversionStage,
            JOB_CONVERSION_STAGE_PARSCIT
        );
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData() {

        // Create test user
        $this->user = $this->createTestUser();

        // Create test job
        $this->job = $this->createTestJob(
            array(
                'user' => $this->user,
                'conversionStage' => JOB_CONVERSION_STAGE_REFERENCES
            )
        );

        $this->getJobDAO()->save($this->job);

        // Create test document
        $this->testFile = $this->job->getDocumentPath() . '/references/parsCit.txt';
        @mkdir(dirname($this->testFile));
        @copy($this->testAsset, $this->testFile);
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
