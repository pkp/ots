<?php 

namespace NERExtractionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use NERExtraction\Model\Queue\Job\NERExtractionJob;

class NERExtractionJobTest extends ModelTest
{
    protected $document;
    protected $job;
    protected $user;
    
    protected $extractorJob = null;
    protected $testAsset = 'module/NERExtraction/test/assets/document.xml';
    protected $testFile = '/tmp/UNITTEST_document.xml';
    
    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();
    
        $this->extractorJob = new NERExtractionJob;
        $this->extractorJob->setServiceLocator($this->sm);
    
        $this->resetTestData();
    }
    
    /**
     * Test if the extraction works properly
     *
     * @return void
     */
    public function testNamedEntityExtraction()
    {
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_XML_MERGE);
        $this->assertSame($this->document->conversionStage, JOB_CONVERSION_STAGE_XML_MERGE);
        $documentCount = count($this->job->documents);
        $this->extractorJob->process($this->job);
        $this->assertSame($documentCount + 1, count($this->job->documents));
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_NER_EXTRACT);
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