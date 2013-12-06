<?php
namespace BibtexreferencesConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

/**
 * Tests the Bibtexreferences converter
 */
class BibtexreferencesTest extends ModelTest
{
    protected $bibtexreferences;

    protected $testInputFileNlmxmlAsset = 'module/BibtexreferencesConversion/test/assets/document.xml';
    protected $testInputFileNlmxml = '/tmp/UNITTEST_bibtexreferences_document.xml';
    protected $testInputFileBibtex = 'module/BibtexreferencesConversion/test/assets/document.bib.xml';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->bibtexreferences = $this->sm->get('BibtexreferencesConversion\Model\Converter\Bibtexreferences');

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
        $this->bibtexreferences->setInputFileNlmxml($this->testInputFileNlmxml . rand());
    }

    /**
     * Test if the bibtex input file validation works properly
     *
     * @return void
     */
    public function testInputFileBibtexDoesntExist()
    {
        $this->setExpectedException('Exception');
        $this->bibtexreferences->setInputFileBibtex($this->testInputFileBibtex . rand());
    }

    /**
     * Test if the bibtexreferences conversion works correctly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->bibtexreferences->setInputFileNlmxml($this->testInputFileNlmxml);
        $this->bibtexreferences->setInputFileBibtex($this->testInputFileBibtex);
        $this->bibtexreferences->convert();

        $this->assertNotSame(
            file_get_contents($this->testInputFileNlmxmlAsset),
            file_get_contents($this->testInputFileNlmxml)
        );

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $this->testInputFileNlmxml);

        $this->assertSame($mimeType, 'application/xml');
    }

    /**
     * Crete test data
     *
     * @return void
     */
    protected function createTestData()
    {
        copy($this->testInputFileNlmxmlAsset, $this->testInputFileNlmxml);
    }

    /**
     * Remove test data
     *
     * @return void
     */
    protected function cleanTestData()
    {
        @unlink($this->testInputFileNlmxml);
    }
}
