<?php
namespace IndexTest\Controller;

use Xmlps\UnitTest\ControllerTest;

class IndexControllerTest extends ControllerTest
{
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
