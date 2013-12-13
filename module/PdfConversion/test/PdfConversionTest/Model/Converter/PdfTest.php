<?php
namespace PdfConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

/**
 * Tests the PDF converter
 */
class PdfTest extends ModelTest
{
    protected $pdf;

    protected $testInputFileAsset = 'module/PdfConversion/test/assets/html.zip';
    protected $testInputFile = '/tmp/UNITTEST_pdf_html.zip';
    protected $testOutputFile = '/tmp/UNITTEST_pdf_document.pdf';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->pdf = $this->sm->get('PdfConversion\Model\Converter\Pdf');

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
        $this->pdf->setInputFile($this->testInputFile . rand());
    }

    /**
     * Test if the PDF conversion works correctly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->pdf->setInputFile($this->testInputFile);
        $this->pdf->setOutputFile($this->testOutputFile);
        $this->pdf->convert();

        $this->assertTrue($this->pdf->getStatus());

        $this->assertNotSame(
            file_get_contents($this->testInputFile),
            file_get_contents($this->testOutputFile)
        );

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $this->testOutputFile);

        $this->assertSame($mimeType, 'application/pdf');
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData()
    {
        copy($this->testInputFileAsset, $this->testInputFile);
    }

    /**
     * Remove test data
     *
     * @return void
     */
    protected function cleanTestData()
    {
        @unlink($this->testInputFile);
        @unlink($this->testOutputFile);
    }
}
