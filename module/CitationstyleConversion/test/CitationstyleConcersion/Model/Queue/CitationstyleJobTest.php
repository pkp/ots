<?php
namespace CitationstyleConversionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use CitationstyleConversion\Model\Queue\Job\CitationstyleJob;

class CitationstyleJobTest extends ModelTest
{
    protected $job;
    protected $user;
    protected $documentNlmxml;
    protected $documentBibtex;
    protected $documentHtml;

    protected $citationstyleJob;

    protected $testAssetNlmxml = 'module/CitationstyleConversion/test/assets/document.xml';
    protected $testAssetBibtex = 'module/CitationstyleConversion/test/assets/document.bib';
    protected $testAssetHtml = 'module/CitationstyleConversion/test/assets/html.zip';
    protected $testFileNlmxml = '/tmp/UNITTEST_citationstyle_document.xml';
    protected $testFileBibtex = '/tmp/UNITTEST_citationstyle_document.bib';
    protected $testFileHtml = '/tmp/UNITTEST_citationstyle_html.zip';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->citationstyleJob = new CitationstyleJob;
        $this->citationstyleJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_HTML);
        $documentCount = count($this->job->documents);
        $this->citationstyleJob->process($this->job);
        $this->assertNotSame($this->job->status, JOB_STATUS_FAILED);
        $this->assertSame($documentCount, count($this->job->documents));
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_CITATIONSTYLE);
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData() {
        copy($this->testAssetNlmxml, $this->testFileNlmxml);
        copy($this->testAssetBibtex, $this->testFileBibtex);
        copy($this->testAssetHtml, $this->testFileHtml);

        // Create test user
        $this->user = $this->createTestUser();

        // Create test job
        $this->job = $this->createTestJob(
            array(
                'user' => $this->user,
                'conversionStage' => 6, // JOB_CONVERSION_STAGE_HTML
            )
        );

        // Create NLMXML test document
        $this->documentNlmxml = $this->createTestDocument(
            array(
                'job' => $this->job,
                'path' => $this->testFileNlmxml,
                'conversionStage' => 5, // JOB_CONVERSION_STAGE_BIBTEXREFERENCES
            )
        );
        $this->job->documents[] = $this->documentNlmxml;

        // Create Bibtex test document
        $this->documentBibtex = $this->createTestDocument(
            array(
                'job' => $this->job,
                'path' => $this->testFileBibtex,
                'conversionStage' => 4, // JOB_CONVERSION_STAGE_BIBTEX
            )
        );
        $this->job->documents[] = $this->documentBibtex;

        // Create HTML test document
        $this->documentHtml = $this->createTestDocument(
            array(
                'job' => $this->job,
                'path' => $this->testFileHtml,
                'conversionStage' => 6, // JOB_CONVERSION_STAGE_HTML
            )
        );
        $this->job->documents[] = $this->documentHtml;

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

        @unlink($this->testFileNlmxml);
        @unlink($this->testFileBibtex);
        @unlink($this->testFileHtml);
    }
}
