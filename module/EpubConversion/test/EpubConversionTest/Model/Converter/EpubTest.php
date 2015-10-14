<?php
namespace EpubConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

/**
 * Tests the Epub converter
 */
class EpubTest extends ModelTest
{
    protected $epub;

    protected $testInputFileAsset = 'module/EpubConversion/test/assets/document.xml';
    protected $testInputFile = '/tmp/UNITTEST_epub_document.xml';
    protected $testOutputFile = '/tmp/UNITTEST_epub_epub.epub';
    protected $expectedContentFile = 'OEBPS/index.html';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->epub = $this->sm->get('EpubConversion\Model\Converter\Epub');

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
        $this->epub->setInputFile($this->testInputFile . rand());
    }

    /**
     * Test if the Epub conversion works correctly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->epub->setInputFile($this->testInputFile);
        $this->epub->setOutputFile($this->testOutputFile);
        $this->epub->convert();

        $this->assertTrue($this->epub->getStatus());

        $this->assertNotSame(
            file_get_contents($this->testInputFile),
            file_get_contents($this->testOutputFile)
        );

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $this->testOutputFile);

        $this->assertSame($mimeType, 'application/epub+zip');

        $epubZip = zip_open($this->testOutputFile);
        $this->assertTrue(is_resource($epubZip));

        $foundContent = false;
        while ($zipDir = zip_read($epubZip)) {
            $zipDirName = zip_entry_name($zipDir);
            if ($zipDirName == $this->expectedContentFile) {
                $foundContent = true;
                break;
            }
        }
        zip_close($epubZip);
        $this->assertTrue($foundContent);
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
