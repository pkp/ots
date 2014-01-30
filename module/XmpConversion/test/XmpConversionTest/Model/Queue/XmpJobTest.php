<?php
namespace XmpConversionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use XmpConversion\Model\Queue\Job\XmpJob;

class XmpJobTest extends ModelTest
{
    protected $documentNlmxml;
    protected $documentPdf;

    protected $job;
    protected $user;

    protected $xmpJob;

    protected $testAssetNlmxml = 'module/XmpConversion/test/assets/document.xml';
    protected $testAssetPdf = 'module/XmpConversion/test/assets/document.pdf';
    protected $testFileNlmxml = '/tmp/UNITTEST_xmp_document.xml';
    protected $testFilePdf = '/tmp/UNITTEST_xmp_document.pdf';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->xmpJob = new XmpJob;
        $this->xmpJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_PDF);
        $this->assertSame($this->documentNlmxml->conversionStage, JOB_CONVERSION_STAGE_BIBTEXREFERENCES);
        $this->assertSame($this->documentPdf->conversionStage, JOB_CONVERSION_STAGE_PDF);
        $documentCount = count($this->job->documents);
        $this->xmpJob->process($this->job);
        $this->assertNotSame($this->job->status, JOB_STATUS_FAILED);
        $this->assertSame($documentCount, count($this->job->documents));
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_XMP);
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData() {
        @copy($this->testAssetNlmxml, $this->testFileNlmxml);
        @copy($this->testAssetPdf, $this->testFilePdf);

        // Create test user
        $this->user = $this->createTestUser();

        // Create test job
        $this->job = $this->createTestJob(
            array(
                'user' => $this->user,
                'conversionStage' => 8, // JOB_CONVERSION_STAGE_PDF
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

        // Create bibtex test document
        $this->documentPdf = $this->createTestDocument(
            array(
                'job' => $this->job,
                'path' => $this->testFilePdf,
                'conversionStage' => 8, // JOB_CONVERSION_STAGE_PDF
            )
        );
        $this->job->documents[] = $this->documentPdf;

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
        @unlink($this->testFilePdf);
    }
}
