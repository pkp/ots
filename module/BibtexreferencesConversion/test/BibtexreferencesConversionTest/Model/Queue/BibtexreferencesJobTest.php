<?php
namespace BibtexreferencesConversionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use BibtexreferencesConversion\Model\Queue\Job\BibtexreferencesJob;

class BibtexreferencesJobTest extends ModelTest
{
    protected $documentNlmxml;
    protected $documentBibtex;
    protected $job;
    protected $user;

    protected $bibtexreferencesJob;

    protected $testAssetNlmxml = 'module/BibtexreferencesConversion/test/assets/document.xml';
    protected $testFileNlmxml = '/tmp/UNITTEST_bibtexreferences_document.xml';
    protected $testAssetBibtex = 'module/BibtexreferencesConversion/test/assets/document.bib.xml';
    protected $testFileBibtex = '/tmp/UNITTEST_bibtexreferences_document.bib.xml';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->bibtexreferencesJob = new BibtexreferencesJob;
        $this->bibtexreferencesJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_BIBTEX);
        $this->assertSame($this->documentNlmxml->conversionStage, JOB_CONVERSION_STAGE_NLMXML);
        $this->assertSame($this->documentBibtex->conversionStage, JOB_CONVERSION_STAGE_BIBTEX);
        $documentCount = count($this->job->documents);
        $this->bibtexreferencesJob->process($this->job);
        $this->assertNotSame($this->job->status, JOB_STATUS_FAILED);
        $this->assertSame($documentCount, count($this->job->documents));
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_BIBTEXREFERENCES);
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData() {
        @copy($this->testAssetNlmxml, $this->testFileNlmxml);
        @copy($this->testAssetBibtex, $this->testFileBibtex);

        // Create test user
        $this->user = $this->createTestUser();

        // Create test job
        $this->job = $this->createTestJob(
            array(
                'user' => $this->user,
                'conversionStage' => 4, // JOB_CONVERSION_STAGE_BIBTEX
            )
        );

        // Create NLMXML test document
        $this->documentNlmxml = $this->createTestDocument(
            array(
                'job' => $this->job,
                'path' => $this->testFileNlmxml,
                'conversionStage' => 2, // JOB_CONVERSION_STAGE_NLMXML
            )
        );
        $this->job->documents[] = $this->documentNlmxml;

        // Create bibtex test document
        $this->documentBibtex = $this->createTestDocument(
            array(
                'job' => $this->job,
                'path' => $this->testFileBibtex,
                'conversionStage' => 4, // JOB_CONVERSION_STAGE_BIBTEX
            )
        );
        $this->job->documents[] = $this->documentBibtex;

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
    }
}
