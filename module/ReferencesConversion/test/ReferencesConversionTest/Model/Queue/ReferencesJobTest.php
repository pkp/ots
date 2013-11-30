<?php

namespace ReferencesConversionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use ReferencesConversion\Model\Queue\Job\ReferencesJob;

class ReferencesJobTest extends ModelTest
{
    protected $document;
    protected $documentDAO;
    protected $job;
    protected $jobDAO;
    protected $user;
    protected $userDAO;

    protected $referencesJob;

    protected $testAsset = 'module/ReferencesConversion/test/assets/document.xml';
    protected $testFile = '/tmp/UNITTEST_document.xml';

    protected $testUserEmail = 'unittestuser@example.com';
    protected $testUserPassword = '5cebb03d702827bb9e25b38b06910fa5';
    protected $testUserRole = 'member';
    protected $testUserActive = true;

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->userDAO = $this->sm->get('User\Model\DAO\UserDAO');
        $this->jobDAO = $this->sm->get('Manager\Model\DAO\JobDAO');
        $this->documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');

        $this->referencesJob = new ReferencesJob;
        $this->referencesJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_NLMXML);
        $this->assertSame($this->document->conversionStage, JOB_CONVERSION_STAGE_NLMXML);
        $documentCount = count($this->job->documents);
        $this->referencesJob->process($this->job);
        $this->assertNotSame($this->job->status, JOB_STATUS_FAILED);
        $this->assertSame($documentCount + 1, count($this->job->documents));
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_REFERENCES);
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData() {
        copy($this->testAsset, $this->testFile);

        $this->user = $this->userDAO->getInstance();
        $this->user->email = $this->testUserEmail;
        $this->user->password = $this->testUserPassword;
        $this->user->role = $this->testUserRole;
        $this->user->active = $this->testUserActive;
        $this->userDAO->save($this->user);

        $this->job = $this->jobDAO->getInstance();
        $this->job->user = $this->user;
        $this->job->conversionStage = JOB_CONVERSION_STAGE_NLMXML;

        $this->document = $this->documentDAO->getInstance();
        $this->document->job = $this->job;

        $this->document->path = $this->testFile;
        $this->document->conversionStage = JOB_CONVERSION_STAGE_NLMXML;

        $this->job->documents[] = $this->document;
        $this->jobDAO->save($this->job);
    }

    /**
     * Remove test data
     *
     * @return void
     */
    protected function cleanTestData()
    {
        $user = $this->userDAO->findOneBy(array('email' => $this->testUserEmail));
        if (!$user) return;

        $jobs = $this->jobDAO->findBy(array('user' => $user->id));
        foreach ($jobs as $job) {
            $documents = $this->documentDAO->findBy(array('job' => $job->id));
            foreach ($documents as $document) {
                $this->documentDAO->remove($document);
            }
            $this->jobDAO->remove($job);
        }
        $this->userDAO->remove($user);

        @unlink($this->testFile);
    }
}
