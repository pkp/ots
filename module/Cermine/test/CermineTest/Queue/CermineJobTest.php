<?php

namespace CermineTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use Cermine\Model\Queue\Job\CermineJob;

class CermineJobTest extends ModelTest
{
    protected $document;
    protected $job;
    protected $user;

    protected $cermineJob;

    protected $testAsset = 'module/Cermine/test/assets/example1.pdf';
    protected $testFile = '/tmp/UNITTEST_document.pdf';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->cermineJob = new CermineJob;
        $this->cermineJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the extraction works properly
     *
     * @return void
     */
    public function testPdfExtraction()
    {
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_WP_PDF);
        $this->assertSame($this->document->conversionStage, JOB_CONVERSION_STAGE_WP_PDF);
        $documentCount = count($this->job->documents);
        $this->cermineJob->process($this->job);
        $this->assertSame($documentCount + 1, count($this->job->documents));
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_PDF_EXTRACT);
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
                'conversionStage' => JOB_CONVERSION_STAGE_WP_PDF
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
