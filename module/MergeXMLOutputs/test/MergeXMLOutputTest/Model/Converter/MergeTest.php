<?php
namespace MergeXMLOutputTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

/**
 * Tests the XML merge
 */
class HtmlTest extends ModelTest
{
    protected $html;

    protected $testInputFileAsset = 'module/MergeXMLOutput/test/assets/document.xml';
    protected $testInputFile = '/tmp/UNITTEST_html_document.xml';
    protected $testOutputFile = '/tmp/UNITTEST_merge_document.xml';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->html = $this->sm->get('MergeXMLOutput\Model\Converter\Html');

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
        $this->html->setInputFile($this->testInputFile . rand());
    }

    /**
     * Test if the HTML conversion works correctly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->html->setInputFile($this->testInputFile);
        $this->html->setOutputFile($this->testOutputFile);
        $this->html->convert();

        $this->assertTrue($this->html->getStatus());

        $this->assertNotSame(
            file_get_contents($this->testInputFile),
            file_get_contents($this->testOutputFile)
        );

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $this->testOutputFile);

        $this->assertSame($mimeType, 'text/xml');
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
