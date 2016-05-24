<?php
namespace MergeXMLOutputsTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;
use DOMDocument;

/**
 * Tests the CERMINE/meTypeset merger.
 */
class MergeTest extends ModelTest
{
    protected $merge;

    protected $testInputFileCermine = 'module/MergeXMLOutputs/test/assets/document_cermine_out.xml';
    protected $testInputFileNlmxml = 'module/MergeXMLOutputs/test/assets/document_nlm_out.xml';
    protected $testInputFileGrobid = 'module/MergeXMLOutputs/test/assets/document_grobid_out.xml';
    protected $testOutputFile = '/tmp/UNITTEST_merge.xml';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->merge = $this->sm->get('MergeXMLOutputs\Model\Converter\Merge');

        $this->resetTestdata();
    }

    /**
     * Test if the NLMXML input file validation works properly
     *
     * @return void
     */
    public function testInputFileNlmxmlDoesntExist()
    {
        $this->setExpectedException('Exception');
        $this->merge->setInputFileNlmxml($this->testInputFileNlmxml . rand());
    }

    /**
     * Test if the CERMINE input file validation works properly
     *
     * @return void
     */
    public function testInputFileCermineDoesntExist()
    {
        $this->setExpectedException('Exception');
        $this->merge->setInputFileCermine($this->testInputFileCermine . rand());
    }

    /**
     * Test if the GROBID input file validation works properly
     *
     * @return void
     */
    public function testInputFileGrobidDoesntExist()
    {
        $this->setExpectedException('Exception');
        $this->merge->setInputFileGrobid($this->testInputFileGrobid . rand());
    }

    /**
     * Test if the merger works correctly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->merge->setInputFileNlmxml($this->testInputFileNlmxml);
        $this->merge->setInputFileCermine($this->testInputFileCermine);
        $this->merge->setInputFileGrobid($this->testInputFileGrobid);
        $this->merge->setOutputFile($this->testOutputFile);

        $this->merge->convert();

        $this->assertNotSame(
            file_get_contents($this->testInputFileNlmxml),
            file_get_contents($this->testOutputFile)
            );
        $this->assertNotSame(
            file_get_contents($this->testInputFileCermine),
            file_get_contents($this->testOutputFile)
            );
        $this->assertNotSame(
            file_get_contents($this->testInputFileGrobid),
            file_get_contents($this->testOutputFile)
            );

        $rawxml = file_get_contents($this->testOutputFile);
        $grobidDom = new DOMDocument();
        $this->assertTrue($grobidDom->loadXML($rawxml));

        $abstractNode = $grobidDom->getElementsByTagName('abstract');
        $abstractNode = $abstractNode->item(0);
        $abstractText = trim(utf8_encode($abstractNode->nodeValue));
        $this->assertSame($abstractText, 'This is a sample abstract from GROBID.');

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $this->testOutputFile);

        $this->assertSame($mimeType, 'application/xml');
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
