<?php 

namespace GrobidConversionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use GrobidConversion\Model\Queue\Job\GrobidJob;

class GrobidJobTest extends ModelTest
{
    protected $document;
    protected $job;
    protected $user;
    
    protected $grobidJob = null;
    protected $testAsset = 'module/GrobidConversion/test/assets/document.pdf';
    protected $testFile = '/tmp/UNITTEST_grobid_document.pdf';
    
    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();
    
        $this->grobidJob = new GrobidJob;
        $this->grobidJob->setServiceLocator($this->sm);
    
        $this->resetTestData();
    }
    
    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testGrobidConversion()
    {
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_PDF_EXTRACT);
        $this->assertSame($this->document->conversionStage, JOB_CONVERSION_STAGE_PDF_IN);
        $documentCount = count($this->job->documents);
        $this->grobidJob->process($this->job);
        $this->assertSame($documentCount + 1, count($this->job->documents));
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_GROBID);
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
                        'conversionStage' => JOB_CONVERSION_STAGE_PDF_EXTRACT
                )
        );
    
        // Create test document
        $this->document = $this->createTestDocument(
                array(
                        'job' => $this->job,
                        'path' => $this->testFile,
                        'conversionStage' => JOB_CONVERSION_STAGE_PDF_IN,
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