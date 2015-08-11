<?php

namespace DocxConversionTest\Model\Converter;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

class PdfTest extends ModelTest
{
    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->pdf = $this->sm->get('DocxConversion\Model\Converter\Pdf');

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
        $this->pdf->setInputFile($this->testFile . rand());
    }
}
