<?php

namespace NlmxmlConversionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use NlmxmlConversion\Model\Queue\Job\NlmxmlJob;

class NlmxmlJobTest extends ModelTest
{
    protected $document;
    protected $job;
    protected $user;

    protected $nlmxmlJob;

    protected $testAsset = 'module/NlmxmlConversion/test/assets/document.docx';
    protected $testFile = '/tmp/UNITTEST_document.docx';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->nlmxmlJob = new NlmxmlJob;
        $this->nlmxmlJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_DOCX);
        $this->assertSame($this->document->conversionStage, JOB_CONVERSION_STAGE_DOCX);
        $documentCount = count($this->job->documents);
        $this->nlmxmlJob->process($this->job);
        $this->assertNotSame($this->job->status, JOB_STATUS_FAILED);
        $this->assertSame($documentCount + 1, count($this->job->documents));
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_NLMXML);
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData() {
        copy($this->testAsset, $this->testFile);

        // Create test user
        $this->user = $this->createTestUser();

        // Create test job
        $this->job = $this->createTestJob(
            array(
                'user' => $this->user,
                'conversionStage' => 1, // JOB_CONVERSION_STAGE_DOCX
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
