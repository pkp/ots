<?php

namespace IndexTest\Controller;

use Zend\Test\PHPUnit\Controller\AbstractHttpControllerTestCase;

class ApplicationControllerTest extends AbstractHttpControllerTestCase
{
    protected $traceError = true;

    public function setUp()
    {
        $baseDir = dirname(dirname(dirname(dirname(dirname(__DIR__)))));
        $this->setApplicationConfig(
            include $baseDir . '/config/application.config.php'
        );
        parent::setUp();
    }

    public function testIndexActionCanBeAccessed()
    {
        $this->dispatch('/');
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('User');
        $this->assertControllerName('User\Controller\User');
        $this->assertControllerClass('UserController');
        $this->assertMatchedRouteName('home');
    }

    /**
     * Tests if the service manager provides access to the Logger
     *
     * @return void
     */
    public function testLoggerCanBeAccessed()
    {
        $sm = $this->getApplicationServiceLocator();
        $this->assertTrue($sm->get('Logger') instanceof \Xmlps\Logger\Logger);
    }
}
