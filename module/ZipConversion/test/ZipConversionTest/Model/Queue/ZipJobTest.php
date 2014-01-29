<?php

namespace ZipConversionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use ZipConversion\Model\Queue\Job\ZipJob;

class ZipJobTest extends ModelTest
{
    protected $document;
    protected $documentDAO;
    protected $job;
    protected $jobDAO;
    protected $user;
    protected $userDAO;

    protected $zipJob;

    protected $testFile = '/tmp/UNITTEST_document.txt';

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

        $this->zipJob = new ZipJob;
        $this->zipJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testConversion()
    {
        $documentCount = count($this->job->documents);
        $this->zipJob->process($this->job);
        $this->assertNotSame($this->job->status, JOB_STATUS_FAILED);
        $this->assertSame($documentCount + 1, count($this->job->documents));
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_ZIP);
        $document = $this->job->getStageDocument(JOB_CONVERSION_STAGE_ZIP);
        $this->assertNotNull($document);
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData() {
        touch($this->testFile);
        file_put_contents($this->testFile, rand());

        $this->user = $this->userDAO->getInstance();
        $this->user->email = $this->testUserEmail;
        $this->user->password = $this->testUserPassword;
        $this->user->role = $this->testUserRole;
        $this->user->active = $this->testUserActive;
        $this->userDAO->save($this->user);

        $this->job = $this->jobDAO->getInstance();
        $this->job->user = $this->user;
        $this->job->conversionStage = JOB_CONVERSION_STAGE_BIBTEX;
        $this->job->setCitationStyleFileByTitle('Acta Ophthalmologica');

        $this->document = $this->documentDAO->getInstance();
        $this->document->job = $this->job;
        $this->document->path = $this->testFile;
        $this->document->conversionStage = $this->job->conversionStage;

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
        $this->userDAO->remove($user);

        @unlink($this->testFile);
    }
}
