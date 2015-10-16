<?php
namespace EpubConversionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use EpubConversion\Model\Queue\Job\EpubJob;

class EpubJobTest extends ModelTest
{
    protected $document;
    protected $job;
    protected $user;

    protected $epubJob;

    protected $testAsset = 'module/EpubConversion/test/assets/document.xml';
    protected $testFile = '/tmp/UNITTEST_epub_document.xml';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->epubJob = new EpubJob;
        $this->epubJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_XML_MERGE);
        $this->assertSame($this->document->conversionStage, JOB_CONVERSION_STAGE_XML_MERGE);
        $documentCount = count($this->job->documents);
        $this->epubJob->process($this->job);
        $this->assertNotSame($this->job->status, JOB_STATUS_FAILED);
        $this->assertSame($documentCount + 1, count($this->job->documents));
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_EPUB);
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
                'conversionStage' => JOB_CONVERSION_STAGE_XML_MERGE
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
