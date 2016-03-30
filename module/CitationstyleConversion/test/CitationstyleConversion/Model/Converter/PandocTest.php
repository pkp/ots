<?php
namespace CitationstyleConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

/**
 * Tests the Pandoc converter
 */
class PandocTest extends ModelTest
{
    protected $citationstyle;

    protected $testInputFileNlmxml = 'module/CitationstyleConversion/test/assets/document.xml';
    protected $testInputFileBibtex = 'module/CitationstyleConversion/test/assets/document.bib';
    protected $testInputFileHtml = '/tmp/UNITTEST_citationstyle_html.zip';
    protected $testInputFileHtmlAsset = 'module/CitationstyleConversion/test/assets/html.zip';
    protected $citationStyleFile = 'vendor/citation-style-language/styles/aquatic-conservation.csl';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->citationstyle = $this->sm->get('CitationstyleConversion\Model\Converter\Pandoc');

        $this->resetTestData();
    }

    /**
     * Test if the input file validation works properly
     *
     * @return void
     */
    public function testInputFileNlmxmlDoesntExist()
    {
        $this->setExpectedException('Exception');
        $this->citationstyle->setInputFileNlmxml($this->testInputFileNlmxml . rand());
    }

    /**
     * Test if the input file validation works properly
     *
     * @return void
     */
    public function testInputFileBibtexDoesntExist()
    {
        $this->setExpectedException('Exception');
        $this->citationstyle->setInputFileBibtex($this->testInputFileBibtex . rand());
    }

    /**
     * Test if the input file validation works properly
     *
     * @return void
     */
    public function testInputFileHtmlDoesntExist()
    {
        $this->setExpectedException('Exception');
        $this->citationstyle->setInputFileHtml($this->testInputFileHtml . rand());
    }

    /**
     * Test if the citation style file validation works properly
     *
     * @return void
     */
    public function testCitationStyleFileDoesntExist()
    {
        $this->setExpectedException('Exception');
        $this->citationstyle->setCitationStyleFile($this->citationStyleFile . rand());
    }

    /**
     * Test if the PDF conversion works correctly
     *
     * @return void
     */

    public function testConversion()
    {
        $this->citationstyle->setInputFileNlmxml($this->testInputFileNlmxml);
        $this->citationstyle->setInputFileBibtex($this->testInputFileBibtex);
        $this->citationstyle->setInputFileHtml($this->testInputFileHtml);
        $this->citationstyle->setCitationStyleFile($this->citationStyleFile);
        $this->citationstyle->convert();

        $this->assertTrue($this->citationstyle->getStatus());

        $this->assertNotSame(
            file_get_contents($this->testInputFileHtmlAsset),
            file_get_contents($this->testInputFileHtml)
        );

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $this->testInputFileHtml);

        $this->assertSame($mimeType, 'application/zip');
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData()
    {
        @copy($this->testInputFileHtmlAsset, $this->testInputFileHtml);
    }

    /**
     * Remove test data
     *
     * @return void
     */
    protected function cleanTestData()
    {
        @unlink($this->testInputFileHtml);
    }
}
