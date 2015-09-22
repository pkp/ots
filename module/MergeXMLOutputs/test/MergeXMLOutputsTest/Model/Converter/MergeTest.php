<?php
namespace MergeXMLOutputsTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

/**
 * Tests the CERMINE/meTypeset merger.
 */
class MergeTest extends ModelTest
{
    protected $merge;

    protected $testInputFileCermine = 'module/MergeXMLOutputs/test/assets/document_cermine_out.xml';
    protected $testInputFileNlmxml = 'module/MergeXMLOutputs/test/assets/document_nlm_out.xml';
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
     * Test if the merger works correctly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->merge->setInputFileNlmxml($this->testInputFileNlmxml);
        $this->merge->setInputFileCermine($this->testInputFileCermine);
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
