<?php
namespace XmpConversionTest\Model\Queue;

use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Job;
use XmpConversion\Model\Queue\Job\XmpJob;

class XmpJobTest extends ModelTest
{
    protected $documentNlmxml;
    protected $documentPdf;

    protected $documentDAO;
    protected $job;
    protected $jobDAO;
    protected $user;
    protected $userDAO;

    protected $xmpJob;

    protected $testAsset = 'module/XmpConversion/test/assets/html.zip';
    protected $testFile = '/tmp/UNITTEST_xmp_document.xmp';

    protected $testAssetNlmxml = 'module/XmpConversion/test/assets/document.xml';
    protected $testAssetPdf = 'module/XmpConversion/test/assets/document.pdf';
    protected $testFileNlmxml = '/tmp/UNITTEST_xmp_document.xml';
    protected $testFilePdf = '/tmp/UNITTEST_xmp_document.pdf';

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

        $this->xmpJob = new XmpJob;
        $this->xmpJob->setServiceLocator($this->sm);

        $this->resetTestData();
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_PDF);
        $this->assertSame($this->documentNlmxml->conversionStage, JOB_CONVERSION_STAGE_BIBTEXREFERENCES);
        $this->assertSame($this->documentPdf->conversionStage, JOB_CONVERSION_STAGE_PDF);
        $documentCount = count($this->job->documents);
        $this->xmpJob->process($this->job);
        $this->assertNotSame($this->job->status, JOB_STATUS_FAILED);
        $this->assertSame($documentCount, count($this->job->documents));
        $this->assertSame($this->job->conversionStage, JOB_CONVERSION_STAGE_XMP);
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData() {
        @copy($this->testAssetNlmxml, $this->testFileNlmxml);
        @copy($this->testAssetPdf, $this->testFilePdf);

        $this->user = $this->userDAO->getInstance();
        $this->user->email = $this->testUserEmail;
        $this->user->password = $this->testUserPassword;
        $this->user->role = $this->testUserRole;
        $this->user->active = $this->testUserActive;
        $this->userDAO->save($this->user);

        $this->job = $this->jobDAO->getInstance();
        $this->job->user = $this->user;
        $this->job->conversionStage = JOB_CONVERSION_STAGE_PDF;
        $this->job->setCitationStyleFileByTitle('Acta Ophthalmologica');

        $this->documentNlmxml = $this->documentDAO->getInstance();
        $this->documentNlmxml->job = $this->job;
        $this->documentNlmxml->path = $this->testFileNlmxml;
        $this->documentNlmxml->conversionStage = JOB_CONVERSION_STAGE_BIBTEXREFERENCES;
        $this->job->documents[] = $this->documentNlmxml;

        $this->documentPdf = $this->documentDAO->getInstance();
        $this->documentPdf->job = $this->job;
        $this->documentPdf->path = $this->testFilePdf;
        $this->documentPdf->conversionStage = JOB_CONVERSION_STAGE_PDF;
        $this->job->documents[] = $this->documentPdf;

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
        @unlink($this->testFilePdf);
    }
}
