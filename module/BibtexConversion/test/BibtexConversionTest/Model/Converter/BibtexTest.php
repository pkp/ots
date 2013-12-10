<?php
namespace BibtexConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

/**
 * Tests the Bibtex converter
 */
class BibtexTest extends ModelTest
{
    protected $bibtex;

    protected $testInputFile = 'module/BibtexConversion/test/assets/document.bib.xml';
    protected $testOutputFile = '/tmp/UNITTEST_bibtex_outputfile.bib.tex';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->bibtex = $this->sm->get('BibtexConversion\Model\Converter\Bibtex');

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
        $this->bibtex->setInputFile($this->testInputFile . rand());
    }

    /**
     * Test if the bibtex conversion works correctly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->bibtex->setInputFile($this->testInputFile);
        $this->bibtex->setOutputFile($this->testOutputFile);
        $this->bibtex->convert();

        $this->assertTrue(is_file($this->testOutputFile));
        $this->assertTrue($this->bibtex->getStatus());

        $this->assertNotSame(
            file_get_contents($this->testInputFile),
            file_get_contents($this->testOutputFile)
        );

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $this->testOutputFile);

        $this->assertSame($mimeType, 'text/plain');
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
