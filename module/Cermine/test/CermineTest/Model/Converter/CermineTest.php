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
}
