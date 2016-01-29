<?php
namespace ParsCitConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

/**
 * Tests the References converter
 */
class ParsCitTest extends ModelTest
{
    protected $parsCit;

    protected $testOutputDirectory = '/tmp/UNITTEST_parscit_outputdirectory';
    protected $testInputFileName = 'references.txt';
    protected $testInputAssets = 'module/ParsCitConversion/test/assets/';
    protected $testInputFile;
    protected $testOutputFile;

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->testInputFile = $this->testOutputDirectory . '/' . $this->testInputFileName;
        $this->testOutputFile = $this->testOutputDirectory . '/references.xml';

        $this->parsCit = $this->sm->get('ParsCitConversion\Model\Converter\ParsCit');

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
        $this->parsCit->setInputFile($this->testInputFile . rand());
    }

    /**
     * Test if the references conversion works correctly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->parsCit->setInputFile($this->testInputFile);
        $this->parsCit->setOutputDirectory($this->testOutputDirectory);
        $this->parsCit->setOutputFile($this->testOutputFile);
        $this->parsCit->convert();

        $this->assertTrue(is_file($this->testOutputFile));
        $this->assertTrue($this->parsCit->getStatus());

        $excerpt = '<namePart type="family">Niedermeyer</namePart>';
        $content = file_get_contents($this->testOutputFile);
        $this->assertTrue(is_int(strpos($content, $excerpt)));

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $this->testOutputFile);

        $this->assertSame($mimeType, 'application/xml');
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