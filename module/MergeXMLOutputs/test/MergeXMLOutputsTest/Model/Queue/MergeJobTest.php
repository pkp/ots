<?php
namespace MergeXMLOutputsTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use MergeXMLOutputs\Model\Queue\Job\MergeJob;

class MergeJobTest extends ModelTest
{
    protected $documentCermine;
    protected $documentNlmxml;
    protected $documentGrobid;
    protected $job;
    protected $user;

    protected $mergeJob;

    protected $testAssetCermine = 'module/MergeXMLOutputs/test/assets/document_cermine_out.xml';
    protected $testFileCermine = '/tmp/UNITTEST_merge_cermine.xml';
    protected $testAssetNlmxml = 'module/MergeXMLOutputs/test/assets/document_nlm_out.xml';
    protected $testFileNlmxml = '/tmp/UNITTEST_merge_nlm.xml';
    protected $testAssetGrobid = 'module/MergeXMLOutputs/test/assets/document_grobid_out.xml';
    protected $testFileGrobid = '/tmp/UNITTEST_merge_grobid.xml';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->mergeJob = new MergeJob;
        $this->mergeJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->assertSame(
            $this->job->conversionStage,
            JOB_CONVERSION_STAGE_BIBTEXREFERENCES
            );
        $this->assertSame(
            $this->documentNlmxml->conversionStage,
            JOB_CONVERSION_STAGE_BIBTEXREFERENCES
            );
        $this->assertSame(
            $this->documentCermine->conversionStage,
            JOB_CONVERSION_STAGE_PDF_EXTRACT
            );
        $this->assertSame(
                $this->documentGrobid->conversionStage,
                JOB_CONVERSION_STAGE_GROBID
                );
        $documentCount = count($this->job->documents);

        $this->mergeJob->process($this->job);

        $this->assertNotSame($this->job->status, JOB_STATUS_FAILED);
        $this->assertSame($documentCount+1, count($this->job->documents));
        $this->assertSame(
            $this->job->conversionStage,
            JOB_CONVERSION_STAGE_XML_MERGE
        );
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData() {
        @copy($this->testAssetCermine, $this->testFileCermine);
        @copy($this->testAssetNlmxml, $this->testFileNlmxml);
        @copy($this->testAssetGrobid, $this->testFileGrobid);

        // Create test user
        $this->user = $this->createTestUser();

        // Create test job
        $this->job = $this->createTestJob(
            array(
                'user' => $this->user,
                'conversionStage' => JOB_CONVERSION_STAGE_BIBTEXREFERENCES
            )
        );

        // Create NLMXML test document
        $this->documentNlmxml = $this->createTestDocument(
            array(
                'job' => $this->job,
                'path' => $this->testFileNlmxml,
                'conversionStage' => $this->job->conversionStage
            )
        );
        $this->job->documents[] = $this->documentNlmxml;

        // Create CERMINE test document
        $this->documentCermine = $this->createTestDocument(
            array(
                'job' => $this->job,
                'path' => $this->testFileCermine,
                'conversionStage' => JOB_CONVERSION_STAGE_PDF_EXTRACT
            )
        );
        $this->job->documents[] = $this->documentCermine;

        // Create GROBID test document
        $this->documentGrobid = $this->createTestDocument(
            array(
                    'job' => $this->job,
                    'path' => $this->testFileGrobid,
                    'conversionStage' => JOB_CONVERSION_STAGE_GROBID
            )
        );
        $this->job->documents[] = $this->documentGrobid;

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

        @unlink($this->testFileCermine);
        @unlink($this->testFileNlmxml);
        @unlink($this->testFileGrobid);
    }
}
