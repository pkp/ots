<?php

namespace NlmxmlConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use FilesystemIterator;

/**
 * Tests the MeTypeset converter
 */
class MetypesetTest extends ModelTest
{
    protected $metypeset;

    protected $testInputFile = 'module/NlmxmlConversion/test/assets/document.docx';
    protected $testOutputDirectory = '/tmp/UNITTEST_metypeset_outputdirectory';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->metypeset = $this->sm->get('NlmxmlConversion\Model\Converter\Metypeset');
        $this->metypeset->setOutputDirectory($this->testOutputDirectory);

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
        $this->metypeset->setInputFile($this->testInputFile . rand());
    }


    /**
     * Test if the metypeset conversion works correctly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->assertFalse(is_dir($this->testOutputDirectory));

        $this->metypeset->setInputFile($this->testInputFile);
        $this->metypeset->convert();

        $this->assertTrue(is_file($this->testOutputDirectory . '/document.xml'));

        $this->assertNotSame(
            file_get_contents($this->testInputFile),
            file_get_contents($this->testOutputDirectory . '/document.xml')
        );

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $this->testOutputDirectory . '/document.xml');

        $this->assertSame($mimeType, 'application/xml');
    }

    /**
     * Remove test data
     *
     * @return void
     */
    protected function cleanTestData()
    {
        if (!is_dir($this->testOutputDirectory)) return;

        $it = new RecursiveDirectoryIterator($this->testOutputDirectory, FilesystemIterator::SKIP_DOTS);
        $files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST);
        foreach($files as $file) {
            if ($file->isDir()){
                rmdir($file->getRealPath());
            } else {
                unlink($file->getRealPath());
            }
        }
        rmdir($this->testOutputDirectory);
    }
}
