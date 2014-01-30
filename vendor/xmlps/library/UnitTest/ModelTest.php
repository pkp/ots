<?php

namespace Xmlps\UnitTest;

use PHPUnit_Framework_TestCase;

use Zend\Mvc\Service\ServiceManagerConfig;
use Zend\ServiceManager\ServiceManager;
use Xmlps\UnitTest\TestHelper;

class ModelTest extends PHPUnit_Framework_TestCase
{
    use TestHelper;

    protected $traceError = true;
    protected $sm;

    /**
     * Initialize the service manager
     *
     * @return void
     */
    public function setUp()
    {
        // Register the service manager
        $baseDir = dirname(dirname(dirname(dirname(__DIR__))));
        $this->sm = new ServiceManager(new ServiceManagerConfig());
        $this->sm->setService(
            'ApplicationConfig',
            include $baseDir . '/config/application.config.php'
        );
        $this->sm->get('ModuleManager')->loadModules();
    }

    /**
     * Clean up after test
     *
     * @return void
     */
    public function tearDown()
    {
        $this->cleanTestData();
    }

    /**
     * Creates test data for this test
     *
     * @return void
     */
    protected function createTestData() {}

    /**
     * Cleans test data after test
     *
     * @return void
     */
    protected function cleanTestData() {}

    /**
     * Resets the test data
     *
     * @return void
     */
    protected function resetTestData()
    {
       $this->cleanTestData();
       $this->createTestData();
    }
}
