<?php

namespace ApplicationTest\Entity;

use PHPUnit_Framework_TestCase;
use Application\Entity\Log;

class ApplicationEntityTest extends PHPUnit_Framework_TestCase
{
    protected $log;

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        $this->log = new Log;
    }

    /**
     * Test if all the required properties exist
     *
     * @return void
     */
    public function testUserRegistrationDate()
    {
        $this->assertTrue(property_exists($this->log, 'timestamp'));
        $this->assertTrue(property_exists($this->log, 'priority'));
        $this->assertTrue(property_exists($this->log, 'message'));
    }
}
