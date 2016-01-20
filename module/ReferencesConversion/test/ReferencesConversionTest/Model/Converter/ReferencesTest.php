<?php
namespace ReferencesConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

/**
 * Tests the References converter
 */
class ReferencesTest extends ModelTest
{
    protected $references;

    protected $testOutputDirectory = '/tmp/UNITTEST_references_outputdirectory';
    protected $testInputFileName = 'document.xml';
    protected $testInputAssets = 'module/ReferencesConversion/test/assets/';
    protected $testInputFile;
    protected $parsCitReferencesFile;
    protected $testOutputFile;

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->testInputFile = $this->testOutputDirectory . '/' . $this->testInputFileName;
        $this->testOutputFile = $this->testOutputDirectory . '/references.bib';
        $this->parsCitReferencesFile = $this->testOutputDirectory . '/parsCit.txt';

        $this->references = $this->sm->get('ReferencesConversion\Model\Converter\References');

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
        $this->references->setInputFile($this->testInputFile . rand());
    }
    
    /**
     * Test if the input file validation works properly
     *
     * @return void
     */
    public function testParsCitReferencesFileNotSet()
    {
        $this->setExpectedException('Exception');
        
        $this->references->setInputFile($this->testInputFile);
        $this->references->setOutputDirectory($this->testOutputDirectory);
        $this->references->setOutputFile($this->testOutputFile);
        $this->references->convert();
    }

    /**
     * Test if the references conversion works correctly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->references->setInputFile($this->testInputFile);
        $this->references->setParsCitReferencesFilePath($this->parsCitReferencesFile);
        $this->references->setOutputDirectory($this->testOutputDirectory);
        $this->references->setOutputFile($this->testOutputFile);
        $this->references->convert();

        $this->assertTrue(is_file($this->testOutputFile));
        $this->assertTrue($this->references->getStatus());

        $this->assertNotSame(
            file_get_contents($this->testInputFile),
            file_get_contents($this->testOutputFile)
        );

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $this->testOutputFile);

        $this->assertSame($mimeType, 'text/plain');
        
        $excerpt = '{10.1109/uksim.2010.75}';
        $content = file_get_contents($this->testOutputFile);
        $this->assertTrue(is_int(strpos($content, $excerpt)));
    }

    /**
     * Create the test data
     *
     * @return void
     */
    protected function createTestData()
    {
        mkdir($this->testOutputDirectory);
        copy(
            $this->testInputAssets . $this->testInputFileName,
            $this->testInputFile
            );
    }

    /**
     * Remove test data
     *
     * @return void
     */
    protected function cleanTestData()
    {
        if (!is_dir($this->testOutputDirectory)) return;

        $it = new \RecursiveDirectoryIterator($this->testOutputDirectory);
        $files = new \RecursiveIteratorIterator(
            $it,
            \RecursiveIteratorIterator::CHILD_FIRST
        );
        foreach($files as $file) {
            if ($file->getFilename() === '.' or $file->getFilename() === '..') {
                continue;
            }
            if ($file->isDir()){
                rmdir($file->getRealPath());
            } else {
                unlink($file->getRealPath());
            }
        }
        @rmdir($this->testOutputDirectory);
    }
}
