<?php

namespace DocxConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

class UnoconvTest extends ModelTest
{
    protected $unoconv;

    protected $testInputFile = 'module/DocxConversion/test/assets/document.odt';
    protected $testDocxFile = '/tmp/UNITTEST_unoconv_docxfile.docx';
    protected $testPdfFile = '/tmp/UNITTEST_unoconv_pdffile.pdf';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->unoconv = $this->sm->get('DocxConversion\Model\Converter\Unoconv');

        $this->resetTestData();
    }

    /**
     * Test if the input file validation works properly
     *
     * @return void
     */
    public function testInputFileDoesntExist()
    {
        $this->setExpectedException('Exception');
        $this->unoconv->setInputFile($this->testInputFile . rand());
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testDocxConversion()
    {
        $this->assertFalse(file_exists($this->testDocxFile));

        $this->unoconv->setInputFile($this->testInputFile);
        $this->unoconv->setOutputFile($this->testDocxFile);
        $this->unoconv->setFilter('docx7');
        $this->unoconv->convert();

        $this->assertSame($this->unoconv->getStatus(), true);
        $this->assertNotNull($this->unoconv->getOutput());
        $this->assertTrue($this->unoconv->getStatus());
        $this->assertTrue(file_exists($this->testDocxFile));
        $this->assertNotSame(
            file_get_contents($this->testInputFile),
            file_get_contents($this->testDocxFile)
        );

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $this->testDocxFile);

        $this->assertSame($mimeType, 'application/zip');

        $this->resetTestData();
    }

    /**
     * Test if PDF conversion works properly
     *
     * @return void
     */
    public function testPdfConversion()
    {
        $this->assertFalse(file_exists($this->testPdfFile));

        $this->unoconv->setInputFile($this->testInputFile);
        $this->unoconv->setOutputFile($this->testPdfFile);
        $this->unoconv->setFilter('pdf');
        $this->unoconv->convert();

        $this->assertSame($this->unoconv->getStatus(), true);
        $this->assertNotNull($this->unoconv->getOutput());
        $this->assertTrue($this->unoconv->getStatus());
        $this->assertTrue(file_exists($this->testPdfFile));
        $this->assertNotSame(
            file_get_contents($this->testInputFile),
            file_get_contents($this->testPdfFile)
        );

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $this->testPdfFile);

        $this->assertSame($mimeType, 'application/pdf');

        $this->resetTestData();
    }

    /**
     * Remove test data
     *
     * @return void
     */
    protected function cleanTestData()
    {
        @unlink($this->testDocxFile);
        @unlink($this->testPdfFile);
    }
}
