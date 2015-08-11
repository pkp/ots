<?php

namespace WpPdfConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

class UnoconvTest extends ModelTest
{
    protected $unoconv;

    protected $testInputFile = 'module/WpPdfConversion/test/assets/document.odt';
    protected $testOutputFile = '/tmp/UNITTEST_unoconv_pdffile.pdf';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->unoconv = $this->sm->get('WpPdfConversion\Model\Converter\Unoconv');

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
     * Test if PDF conversion works properly
     *
     * @return void
     */
    public function testPdfConversion()
    {
        $this->assertFalse(file_exists($this->testOutputFile));

        $this->unoconv->setInputFile($this->testInputFile);
        $this->unoconv->setOutputFile($this->testOutputFile);
        $this->unoconv->setFilter('pdf');
        $this->unoconv->convert();

        $this->assertSame($this->unoconv->getStatus(), true);
        $this->assertNotNull($this->unoconv->getOutput());
        $this->assertTrue($this->unoconv->getStatus());
        $this->assertTrue(file_exists($this->testOutputFile));
        $this->assertNotSame(
            file_get_contents($this->testInputFile),
            file_get_contents($this->testOutputFile)
        );

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $this->testOutputFile);

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
        @unlink($this->testOutputFile);
    }
}
