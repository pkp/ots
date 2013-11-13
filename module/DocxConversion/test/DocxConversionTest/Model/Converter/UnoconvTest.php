<?php

namespace DocxConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

class UnoconvTest extends ModelTest
{
    protected $unoconv;

    protected $testFile = 'module/DocxConversion/test/assets/document.odt';
    protected $testFile2 = '/tmp/UNITTEST_unoconv_outputfile';

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->unoconv = $this->sm->get('DocxConversion\Model\Converter\Unoconv');

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
        $this->unoconv->setInputFile($this->testFile . rand());
    }

    /**
     * Test if the conversion works properly
     *
     * @return void
     */
    public function testConversion()
    {
        $this->assertFalse(file_exists($this->testFile2));

        $this->unoconv->setInputFile($this->testFile);
        $this->unoconv->setOutputFile($this->testFile2);
        $this->unoconv->setFilter('docx7');
        $this->unoconv->convert();

        $this->assertSame($this->unoconv->getStatus(), 0);
        $this->assertNotNull($this->unoconv->getOutput());
        $this->assertNotSame(
            file_get_contents($this->testFile),
            file_get_contents($this->testFile2)
        );
        $this->assertTrue(file_exists($this->testFile2));

        $this->resetTestData();
    }

    /**
     * Remove test data
     *
     * @return void
     */
    protected function cleanTestData()
    {
        @unlink($this->testFile2);
    }
}
