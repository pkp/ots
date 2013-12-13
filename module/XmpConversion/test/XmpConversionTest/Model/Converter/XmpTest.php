<?php
namespace XmpConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

/**
 * Tests the XMP converter
 */
class XmpTest extends ModelTest
{
    protected $xmp;

    protected $testInputFileNlmxmlAsset = 'module/XmpConversion/test/assets/document.xml';
    protected $testInputFilePdfAsset = 'module/XmpConversion/test/assets/document.pdf';
    protected $testInputFileNlmxml = '/tmp/UNITTEST_xmp_document.xml';
    protected $testInputFilePdf = '/tmp/UNITTEST_xmp_document.pdf';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();

        $this->xmp = $this->sm->get('XmpConversion\Model\Converter\Xmp');

        $this->resetTestData();
    }

    /**
     * Test if the NLMXML input file validation works properly
     *
     * @return void
     */
    public function testInputFileNlmxmlDoesntExist()
    {
        $this->setExpectedException('Exception');
        $this->xmp->setInputFileNlmxml($this->testInputFileNlmxml . rand());
    }

    /**
     * Test if the PDF input file validation works properly
     *
     * @return void
     */
    public function testInputFilePdfDoesntExist()
    {
        $this->setExpectedException('Exception');
        $this->xmp->setInputFilePdf($this->testInputFilePdf . rand());
    }

    /**
     * Test if the XMP conversion works correctly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->xmp->setInputFileNlmxml($this->testInputFileNlmxml);
        $this->xmp->setInputFilePdf($this->testInputFilePdf);
        $this->xmp->convert();

        $this->assertTrue($this->xmp->getStatus());

        $this->assertNotSame(
            file_get_contents($this->testInputFilePdfAsset),
            file_get_contents($this->testInputFilePdf)
        );

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $this->testInputFilePdf);

        $this->assertSame($mimeType, 'application/pdf');
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData()
    {
        copy($this->testInputFileNlmxmlAsset, $this->testInputFileNlmxml);
        copy($this->testInputFilePdfAsset, $this->testInputFilePdf);
    }

    /**
     * Remove test data
     *
     * @return void
     */
    protected function cleanTestData()
    {
        @unlink($this->testInputFileNlmxml);
        @unlink($this->testInputFilePdf);
    }
}
