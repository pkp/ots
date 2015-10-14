<?php
namespace EpubConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;
use SplFileInfo;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use FilesystemIterator;

/**
 * Tests the Epub converter
 */
class EpubGraphicsTest extends ModelTest
{
    protected $epub;

    protected $testInputFileAsset = 'module/EpubConversion/test/assets/eeg_comicsans.xml';
    protected $testInputMediaAsset = 'module/EpubConversion/test/assets/eeg_media';
    protected $testInputFile = '/tmp/UNITTEST_epub_document.xml';
    protected $testInputMediaDir = '/tmp/metypeset';
    protected $testOutputFile = '/tmp/UNITTEST_epub_epub.epub';
    protected $expectedContentFile = 'OEBPS/index.html';
    protected $expectedGraphicsDir = '/media/';

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
        $foundGraphics = false;
        while ($zipDir = zip_read($epubZip)) {
            $zipDirName = zip_entry_name($zipDir);
            if ($zipDirName == $this->expectedContentFile) {
                $foundContent = true;
            }
            if (strpos($zipDirName, $this->expectedGraphicsDir)) {
                $foundGraphics = true;
            }
        }
        zip_close($epubZip);
        $this->assertTrue($foundContent);
        $this->assertTrue($foundGraphics);
    }

    /**
     * Create test data
     *
     * @return void
     */
    protected function createTestData()
    {
        copy($this->testInputFileAsset, $this->testInputFile);

        $mediaSrc = new SplFileInfo($this->testInputMediaAsset);
        $srcPrefix = '/^' . preg_quote($mediaSrc->getRealPath(), '/') . '/';

        $it = new RecursiveDirectoryIterator($this->testInputMediaAsset, FilesystemIterator::SKIP_DOTS);
        $files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::SELF_FIRST);
        @mkdir($this->testInputMediaDir);
        foreach($files as $file) {
            $trueSrc = $file->getRealPath();

            $dest = preg_replace(
                $srcPrefix,
                $this->testInputMediaDir,
                $trueSrc
                );

            if ($file->isDir()){
                @mkdir($dest);
            } else {
                copy($trueSrc, $dest);
            }
        }
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

        if (file_exists($this->testInputMediaDir)) {
            $it = new RecursiveDirectoryIterator($this->testInputMediaDir, FilesystemIterator::SKIP_DOTS);
            $files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST);
            foreach($files as $file) {
                if ($file->isDir()){
                    rmdir($file->getRealPath());
                } else {
                    unlink($file->getRealPath());
                }
            }
            rmdir($this->testInputMediaDir);
        }
    }
}
