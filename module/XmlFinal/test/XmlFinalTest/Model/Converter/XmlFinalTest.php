<?php 

namespace XmlFinalTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

class XmlFinalTest extends ModelTest
{
    protected $xmlFinal = null;
    protected $testXmlMergeInputFile = 'module/XmlFinal/test/assets/document-stage-14.xml';
    protected $testBibtexRefInputFile = 'module/XmlFinal/test/assets/document-stage-5.xml';
    protected $testOutputFile = '/tmp/document-final.xml';
    
    /**
     * Initialization
     * 
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        
        $this->xmlFinal = $this->sm->get('XmlFinal\Model\Converter\XmlFinal');
        $this->resetTestData();
    }
    
    /**
     * Test case when there is not xml document
     */
    public function testNoDocumentAvailable()
    {
        $this->setExpectedException('Exception');
        
        $this->assertFalse(file_exists($this->testOutputFile));
    
        $this->xmlFinal->setOutputFile($this->testOutputFile);
        $this->xmlFinal->convert();
    }

    /**
     * Test case when stage 5 and stage 14 run
     */
    public function testBothStagesDocumentsAvailable()
    {
        $this->assertTrue(file_exists($this->testXmlMergeInputFile));
        $this->assertTrue(file_exists($this->testBibtexRefInputFile));
        $this->assertFalse(file_exists($this->testOutputFile));
        
        $this->xmlFinal->setXmlMergeInputFile($this->testXmlMergeInputFile);
        $this->xmlFinal->setBibtexRefInputFile($this->testBibtexRefInputFile);
        $this->xmlFinal->setOutputFile($this->testOutputFile);
        $this->xmlFinal->convert();
        
        $this->assertTrue($this->xmlFinal->getStatus());
        $this->assertTrue(file_exists($this->testOutputFile));
        $this->assertNotSame(
                file_get_contents($this->testXmlMergeInputFile),
                file_get_contents($this->testOutputFile)
        );
        $this->assertSame(
            file_get_contents($this->testBibtexRefInputFile),
            file_get_contents($this->testOutputFile)
        );
        
    }
    
    /**
     * Test case when only stage 14 runs
     */
    public function testWhenOnlyStage14DocumentIsAvailable()
    {
        $this->assertTrue(file_exists($this->testXmlMergeInputFile));
        $this->assertFalse(file_exists($this->testOutputFile));
    
        $this->xmlFinal->setXmlMergeInputFile($this->testXmlMergeInputFile);
        $this->xmlFinal->setOutputFile($this->testOutputFile);
        $this->xmlFinal->convert();
    
        $this->assertTrue($this->xmlFinal->getStatus());
        $this->assertTrue(file_exists($this->testOutputFile));
        $this->assertSame(
            file_get_contents($this->testXmlMergeInputFile),
            file_get_contents($this->testOutputFile)
        );
    
    }
    
    public function tearDown()
    {
        if (file_exists($this->testOutputFile)) {
            unlink($this->testOutputFile);
        }
    }
}