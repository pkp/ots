<?php

namespace ManagerTest\Entity;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

class DocumentEntityTest extends ModelTest
{
    protected $document;
    protected $documentDAO;

    protected $testFile = 'var/uploads/unittest';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');

        $this->resetTestData();
    }

    /**
     * Clean up after the test
     *
     * @return void
     */
    public function tearDown() {
        $this->removeTestData();
    }

    /**
     * Test if the associated file is deleted when the document is deleted
     *
     * @return void
     */
    public function testFileDeletion()
    {
        $this->assertTrue(file_exists($this->testFile));
        $this->documentDAO->remove($this->document);
        $this->assertFalse(file_exists($this->testFile));

        $this->resetTestData();
    }

    /**
     * Test if the path validation works
     *
     * @return void
     */
    public function testPathValidation()
    {
       $this->setExpectedException('Exception');

       $this->document->setPath($this->testFile . rand());
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData() {
        $this->document = $this->documentDAO->getInstance();

        touch($this->testFile);
        $this->document->path = $this->testFile;
        $this->document->mimeType = 'text/plain';
        $this->document->uploadFileName = 'UNITTEST';
        $this->document->size = filesize($this->testFile);

        $this->documentDAO->save($this->document);
    }

    /**
     * Remove test data
     *
     * @return void
     */
    protected function removeTestData()
    {
        if ($this->document) {
            $this->documentDAO->remove($this->document);
        }
        @unlink($this->testFile);
    }
}
