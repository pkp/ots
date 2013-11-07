<?php

namespace ManagerTest\Entity;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;

class JobEntityTest extends ModelTest
{
    protected $jobDAO;

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->jobDAO = $this->sm->get('Manager\Model\DAO\JobDAO');
    }

    /**
     * Test if the creation date is initialized correctly
     *
     * @return void
     */
    public function testCreationDateInitialization()
    {
        $job = $this->jobDAO->getInstance();

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
        $job = $this->jobDAO->getInstance();
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
        $job = $this->jobDAO->getInstance();
        $this->assertNull($job->conversionStage);
        $job->initConversionStage();
        $this->assertSame($job->conversionStage, JOB_CONVERSION_STAGE_UNCONVERTED);
    }
}
