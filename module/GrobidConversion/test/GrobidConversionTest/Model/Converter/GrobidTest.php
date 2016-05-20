<?php 

namespace GrobidConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

class GrobidTest extends ModelTest
{
    protected $grobid = null;
    protected $testInputFile = 'module/GrobidConversion/test/assets/document.pdf';
    protected $testOutputFile = '/tmp/UNITTEST_grobid.xml';
    
    /**
     * Initialization
     * 
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        
        $this->grobid = $this->sm->get('GrobidConversion\Model\Converter\Grobid');
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
        $this->grobid->setInputFile($this->testInputFile . rand());
    }
    
    /**
     * Test if grobid conversion works properly
     */
    public function testGrobidConversion()
    {
        $this->assertTrue(file_exists($this->testInputFile));
        $this->assertFalse(file_exists($this->testOutputFile));
        
        $this->grobid->setInputFile($this->testInputFile);
        $this->grobid->setOutputFile($this->testOutputFile);
        $this->grobid->convert();
        
        $this->assertNotNull($this->grobid->getOutput());
        $this->assertTrue($this->grobid->getStatus());
        $this->assertTrue(file_exists($this->testOutputFile));
        $this->assertNotSame(
                file_get_contents($this->testInputFile),
                file_get_contents($this->testOutputFile)
        );
        
        // check if valid tei xml document
        $xml = simplexml_load_file($this->testOutputFile);
        $this->assertSame('article', $xml->getName());
    }
    
    public function tearDown()
    {
        if (file_exists($this->testOutputFile)) {
            unlink($this->testOutputFile);
        }
    }
}