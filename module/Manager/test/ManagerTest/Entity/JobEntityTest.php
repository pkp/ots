<?php

namespace ManagerTest\Entity;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;

class JobEntityTest extends ModelTest
{
    protected $testWpAsset = 'module/Manager/test/assets/document.odt';
    protected $testWpFile = '/tmp/UNITTEST_document.odt';
    protected $testXmlAsset = 'module/Manager/test/assets/document.xml';
    protected $testXmlFile = '/tmp/UNITTEST_document.xml';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->resetTestData();
    }

    /**
     * Test if the creation date is initialized correctly
     *
     * @return void
     */
    public function testCreationDateInitialization()
    {
        $job = $this->getJobDAO()->getInstance();

        $this->assertNull($job->creationDate);
        $job->initCreationDate();
        $this->assertTrue(is_int($job->creationDate));
        $this->assertTrue($job->creationDate <= time());
    }

    /**
     * Test if the status is initialized correctly
     *
     * @return void
     */
    public function testStatusInitialization()
    {
        $job = $this->getJobDAO()->getInstance();
        $this->assertNull($job->status);
        $job->initStatus();
        $this->assertSame($job->status, JOB_STATUS_PENDING);
    }

    /**
     * Test if the conversion stage is initialized correctly
     *
     * @return void
     */
    public function testConversionStageInitialization()
    {
        $job = $this->getJobDAO()->getInstance();
        $this->assertNull($job->conversionStage);
        $job->initConversionStage();
        $this->assertSame($job->conversionStage, JOB_CONVERSION_STAGE_UNCONVERTED);
    }

    /**
     * Test if the output configurations are being read correctly.
     *
     * @return void
     */
    public function testOutputListing()
    {
        $job = $this->getJobDAO()->getInstance();
        $this->assertSame(11, count($job->config['outputs']));

        foreach ($job->config['outputs'] as $stage) {
            $this->assertInternalType("int", $stage);
        }

        $this->assertSame(
            $job->config['outputs'][0],
            JOB_CONVERSION_STAGE_WP_IN
        );
        $this->assertSame(
            $job->config['outputs'][10],
            JOB_CONVERSION_STAGE_ZIP
        );
    }

    /**
     * Test that getOutputDocuments() works correctly.
     *
     * @return void
     */
    public function testGetOutputDocuments()
    {
        $job = $this->getJobDAO()->getInstance();

        // Create test documents
        $wpDoc = $this->createTestDocument(
            array(
                'job' => $job,
                'path' => $this->testWpFile,
                'conversionStage' => JOB_CONVERSION_STAGE_WP_IN
            )
        );
        $job->documents[] = $wpDoc;

        $xmlDoc = $this->createTestDocument(
            array(
                'job' => $job,
                'path' => $this->testXmlFile,
                'conversionStage' => JOB_CONVERSION_STAGE_NLMXML
            )
        );
        $job->documents[] = $xmlDoc;

        $this->assertSame(2, count($job->documents));

        $outputs = $job->getOutputDocuments();

        $this->assertSame(1, count($outputs));
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData() {
        @copy($this->testWpAsset, $this->testWpFile);
        @copy($this->testXmlAsset, $this->testXmlFile);
    }
}
