<?php

namespace Xmlps\UnitTest;

use PHPUnit_Framework_TestCase;

use Zend\Mvc\Service\ServiceManagerConfig;
use Zend\ServiceManager\ServiceManager;


class ModelTest extends PHPUnit_Framework_TestCase
{
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
     * Reset test data
     *
     * @return void
     */
    protected function resetTestData()
    {
        $this->removeTestData();
        $this->createTestData();
    }
}
