<?php
namespace BibtexreferencesConversionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use BibtexreferencesConversion\Model\Queue\Job\BibtexreferencesJob;

class BibtexreferencesJobTest extends ModelTest
{
    protected $documentNlmxml;
    protected $documentReferences;
    protected $documentDAO;
    protected $job;
    protected $jobDAO;
    protected $user;
    protected $userDAO;

    protected $bibtexreferencesJob;

    protected $testAssetNlmxml = 'module/BibtexreferencesConversion/test/assets/document.xml';
    protected $testFileNlmxml = '/tmp/UNITTEST_bibtexreferences_document.xml';
    protected $testAssetBibtex = 'module/BibtexreferencesConversion/test/assets/document.bib.xml';
    protected $testFileBibtex = '/tmp/UNITTEST_bibtexreferences_document.bib.xml';

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
        $this->assertSame($this->documentReferences->conversionStage, JOB_CONVERSION_STAGE_BIBTEX);
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

        $this->documentNlmxml = $this->documentDAO->getInstance();
        $this->documentNlmxml->job = $this->job;
        $this->documentNlmxml->path = $this->testFileNlmxml;
        $this->documentNlmxml->conversionStage = JOB_CONVERSION_STAGE_NLMXML;
        $this->job->documents[] = $this->documentNlmxml;

        $this->documentReferences = $this->documentDAO->getInstance();
        $this->documentReferences->job = $this->job;
        $this->documentReferences->path = $this->testFileBibtex;
        $this->documentReferences->conversionStage = JOB_CONVERSION_STAGE_BIBTEX;
        $this->job->documents[] = $this->documentReferences;

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

        @unlink($this->testFileNlmxml);
    }
}
