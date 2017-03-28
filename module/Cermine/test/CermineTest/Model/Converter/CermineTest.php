<?php

namespace CermineTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

class CermineTest extends ModelTest
{
    protected $cermine;

    protected $testInputFile = 'module/Cermine/test/assets/example1.pdf';
    protected $testOutputFile = '/tmp/UNITTEST_cermine.xml';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->cermine = $this->sm->get('Cermine\Model\Converter\Cermine');

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
        $this->cermine->setInputFile($this->testInputFile . rand());
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testPdfContentExtraction() {
        $this->assertFalse(file_exists($this->testOutputFile));

        $this->cermine->setInputFile($this->testInputFile);
        $this->cermine->setOutputFile($this->testOutputFile);
        $this->cermine->convert();

        $this->assertSame($this->cermine->getStatus(), true);
        $this->assertNotNull($this->cermine->getOutput());
        $this->assertTrue($this->cermine->getStatus());
        $this->assertTrue(file_exists($this->testOutputFile));
        $this->assertNotSame(
            file_get_contents($this->testInputFile),
            file_get_contents($this->testOutputFile)
            );

        $this->resetTestData();
    }

    /**
     * Remove test data
     *
     * @return void
     */
    protected function cleanTestData()
    {
        @unlink($this->testOutputFile);
        
        $dir = dirname($this->testInputFile);
        
        // remove any cermine xml (.cermxml) files
        $pattern = "{$dir}/*.cermxml";
        foreach (glob($pattern) as $filepath) {
        	unlink($filepath);
        }
        
        // remove images folders
        $pattern = "{$dir}/*.images";
        foreach (glob($pattern, GLOB_ONLYDIR) as $folder) {
        	foreach (glob("{$folder}/*") as $img) {
        		unlink($img);
        	}
        	rmdir($folder);
        }
    }
}
