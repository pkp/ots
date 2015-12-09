<?php 

namespace NERExtractionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

class NERExtractionTest extends ModelTest
{
    protected $extractor = null;
    protected $testInputFile = 'module/NERExtraction/test/assets/document.xml';
    protected $testOutputFile = '/tmp/UNITTEST_entities.json';
    
    /**
     * Initialization
     * 
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        
        $this->extractor = $this->sm->get('NERExtraction\Model\Converter\NERExtractor');
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
        $this->extractor->setInputFile($this->testInputFile . rand());
    }
    
    /**
     * Test if raw text extraction works properly
     */
    public function testNamedEntityExtraction()
    {
        $this->assertTrue(file_exists($this->testInputFile));
        $this->assertFalse(file_exists($this->testOutputFile));
        
        $this->extractor->setInputFile($this->testInputFile);
        $this->extractor->setOutputFile($this->testOutputFile);
        $this->extractor->convert();
        
        $this->assertSame($this->extractor->getStatus(), true);
        $this->assertNotNull($this->extractor->getOutput());
        $this->assertTrue($this->extractor->getStatus());
        $this->assertTrue(file_exists($this->testOutputFile));
        $this->assertNotSame(
                file_get_contents($this->testInputFile),
                file_get_contents($this->testOutputFile)
        );
        
        // check if valid json file
        $this->assertNotNull(json_decode(file_get_contents($this->testOutputFile)));
    }
    
    public function tearDown()
    {
        if (file_exists($this->testOutputFile)) {
            unlink($this->testOutputFile);
        }
    }
}