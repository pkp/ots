<?php

namespace DocxConversionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use DocxConversion\Model\Queue\Job\DocxJob;

class DocxJobTest extends ModelTest
{
    protected $document;
    protected $job;
    protected $user;

    protected $docxJob;

    protected $testAsset = 'module/DocxConversion/test/assets/document.odt';
    protected $testFile = '/tmp/UNITTEST_document.odt';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->docxJob = new DocxJob;
        $this->docxJob->setServiceLocator($this->sm);

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
            JOB_CONVERSION_STAGE_WP_IN
        );
        $this->assertSame(
            $this->document->conversionStage,
            JOB_CONVERSION_STAGE_WP_IN
        );
        $documentCount = count($this->job->documents);
        $this->docxJob->process($this->job);
        $this->assertSame($documentCount + 1, count($this->job->documents));
        $this->assertSame(
            $this->job->conversionStage,
            JOB_CONVERSION_STAGE_DOCX
        );
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData() {
        @copy($this->testAsset, $this->testFile);

        // Create test user
        $this->user = $this->createTestUser();

        // Create test job
        $this->job = $this->createTestJob(
            array(
                'user' => $this->user,
                'conversionStage' => JOB_CONVERSION_STAGE_WP_IN
            )
        );

        // Create test document
        $this->document = $this->createTestDocument(
            array(
                'job' => $this->job,
                'path' => $this->testFile,
                'conversionStage' => $this->job->conversionStage
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
