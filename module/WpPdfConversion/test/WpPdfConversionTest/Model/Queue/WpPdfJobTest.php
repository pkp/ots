<?php

namespace WpPdfConversionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use WpPdfConversion\Model\Queue\Job\WpPdfJob;

class WpPdfJobTest extends ModelTest
{
    protected $document;
    protected $job;
    protected $user;

    protected $wpPdfJob;

    protected $testAsset = 'module/WpPdfConversion/test/assets/document.odt';
    protected $testFile = '/tmp/UNITTEST_document.odt';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->wpPdfJob = new WpPdfJob;
        $this->wpPdfJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_BIBTEXREFERENCES);
        $this->assertSame($this->document->conversionStage, JOB_CONVERSION_STAGE_UNCONVERTED);
        $documentCount = count($this->job->documents);
        $this->wpPdfJob->process($this->job);
        $this->assertSame($documentCount + 1, count($this->job->documents));
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_WP_PDF);
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
                'conversionStage' => JOB_CONVERSION_STAGE_BIBTEXREFERENCES
            )
        );

        // Create test document
        $this->document = $this->createTestDocument(
            array(
                'job' => $this->job,
                'path' => $this->testFile,
                'conversionStage' => JOB_CONVERSION_STAGE_UNCONVERTED,
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
