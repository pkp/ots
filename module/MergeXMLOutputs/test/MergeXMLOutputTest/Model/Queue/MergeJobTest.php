<?php
namespace MergeXMLOutputTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use MergeXMLOutput\Model\Queue\Job\MergeJob;

class MergeJobTest extends ModelTest
{
    protected $document;
    protected $job;
    protected $user;

    protected $MergeJob;

    protected $testAsset = 'module/MergeXMLOutput/test/assets/document.xml';
    protected $testFile = '/tmp/UNITTEST_html_document.xml';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->MergeJob = new MergeJob;
        $this->MergeJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the conversion works properly
     * TODO: Need to change a lot of this still
     *
     * @return void
     */
    public function testConversion()
    {
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_BIBTEXREFERENCES);
        $this->assertSame($this->document->conversionStage, JOB_CONVERSION_STAGE_BIBTEXREFERENCES);
        $documentCount = count($this->job->documents);
        $this->MergeJob->process($this->job);
        $this->assertNotSame($this->job->status, JOB_STATUS_FAILED);
        $this->assertSame($documentCount + 1, count($this->job->documents));
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_HTML);
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
                'conversionStage' => 5, // JOB_CONVERSION_STAGE_BIBTEXREFERENCES
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
