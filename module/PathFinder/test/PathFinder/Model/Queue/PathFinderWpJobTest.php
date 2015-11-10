<?php

namespace PathFinderTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use PathFinder\Model\Queue\Job\PathFinderJob;
use Manager\Model\DAO\DocumentDAO; // for documentation
use Manager\Model\DAO\JobDAO; // for documentation
use User\Model\DAO\UserDAO; // for documentation

/**
 * Tests the conversion path selection job when input is in a word
 * processing format
 */
class PathFinderWpJobTest extends ModelTest
{
    /**
     * @var DocumentDAO $document
     */
    protected $document;
    /**
     * @var JobDAO $job
     */
    protected $job;
    /**
     * @var UserDAO $user
     */
    protected $user;

    /**
     * Instance of the class to test.
     * @var PathFinderJob $pathFinderJob
     */
    protected $pathFinderJob;

    /**
     * Location of the word processing input file to copy for testing.
     * @var string $testAsset
     */
    protected $testAsset = 'module/PathFinder/test/assets/document.odt';
    /**
     * Destination of the input asset, to be copied before conversion.
     * Omission of extension is deliberate to avoid giving type hints.
     * @var string $testFile
     */
    protected $testFile = '/tmp/UNITTEST_document';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->pathFinderJob = new PathFinderJob;
        $this->pathFinderJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the selection works properly
     *
     * @return void
     */
    public function testWpPathFinding()
    {
        // We ought to be starting in unconverted stage, as this is
        // our first pipeline stage.  This is more a test of the test
        // scaffold than of the conversion itself.
        $this->assertSame(
            $this->job->conversionStage,
            JOB_CONVERSION_STAGE_UNCONVERTED
        );
        $this->assertSame(
            $this->document->conversionStage,
            JOB_CONVERSION_STAGE_UNCONVERTED
        );

        // Note how many documents the job has before conversion...
        $documentCount = count($this->job->documents);

        // Do the pathfinding.
        $this->pathFinderJob->process($this->job);

        // We now ought to have exactly the same number of documents.
        $this->assertSame(
            $documentCount,
            count($this->job->documents)
        );

        // The stage now ought to indicate that we are following the
        // WP path, and the document itself ought to be marked
        // accordingly.
        $this->assertSame(
            $this->job->conversionStage,
            JOB_CONVERSION_STAGE_WP_IN
        );
        $this->assertSame(
            $this->document->conversionStage,
            JOB_CONVERSION_STAGE_WP_IN
        );
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
                'conversionStage' => JOB_CONVERSION_STAGE_UNCONVERTED
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
