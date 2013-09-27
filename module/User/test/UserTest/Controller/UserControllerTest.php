<?php

namespace IndexTest\Controller;

use Zend\Test\PHPUnit\Controller\AbstractHttpControllerTestCase;

class UserControllerTest extends AbstractHttpControllerTestCase
{
    protected $traceError = true;

    /**
     * Set up the controller test
     *
     * @return void
     */
    public function setUp()
    {
        $baseDir = dirname(dirname(dirname(dirname(dirname(__DIR__)))));
        $this->setApplicationConfig(
            include $baseDir . '/config/application.config.php'
        );
        parent::setUp();
    }

    /**
     * Test if the index action can be accessed
     *
     * @return void
     */
    public function testIndexActionCanBeAccessed()
    {
        $this->dispatch('/user');
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('User');
        $this->assertControllerName('User\Controller\User');
        $this->assertControllerClass('UserController');
        $this->assertMatchedRouteName('user');
    }

    /**
     * Test if the login action can be accessed
     *
     * @return void
     */
    public function testLoginActionCanBeAccessed()
    {
        $this->dispatch('/user/login');
        $this->assertResponseStatusCode(200);

        $this->assertModuleName('User');
        $this->assertControllerName('User\Controller\User');
        $this->assertControllerClass('UserController');
        $this->assertMatchedRouteName('user');
    }

    /**
     * Test if the login POST is processed correctly
     *
     * @return void
     */
    public function testProcessLoginPost()
    {
        // Mock the user object
        $userMock = $this->getMockBuilder('User\Entity\User')
            ->disableOriginalConstructor()
            ->getMock();
        $userMock->expects($this->at(1))
            ->method('__get')
            ->with($this->equalTo('email'))
            ->will($this->returnValue(null));

        // Mock the auth adapter
        $authAdapterMock = $this->getMockBuilder('DoctrineModule\Authentication\Adapter\ObjectRepository')
            ->disableOriginalConstructor()
            ->getMock();
        $authAdapterMock->expects($this->once())
            ->method('setIdentityValue')
            ->will($this->returnValue(null));
        $authAdapterMock->expects($this->once())
            ->method('setCredentialValue')
            ->will($this->returnValue(null));

        // Mock the auth result
        $authResultMock = $this->getMockBuilder('Zend\Authentication\Result')
            ->disableOriginalConstructor()
            ->getMock();
        $authResultMock->expects($this->once())
            ->method('isValid')
            ->will($this->returnValue(true));
        $authResultMock->expects($this->once())
            ->method('getIdentity')
            ->will($this->returnValue($userMock));

        // Mock the auth storage
        $authStorageMock = $this->getMockBuilder('DoctrineModule\Authentication\Storage\ObjectRepository')
            ->disableOriginalConstructor()
            ->getMock();
        $authStorageMock->expects($this->once())
            ->method('write')
            ->will($this->returnValue(true));

        // Mock the auth Service
        $authMock = $this->getMockBuilder('Zend\Authentication\AuthenticationService')
            ->disableOriginalConstructor()
            ->getMock();
        $authMock->expects($this->once())
            ->method('getAdapter')
            ->will($this->returnValue($authAdapterMock));
        $authMock->expects($this->once())
            ->method('authenticate')
            ->will($this->returnValue($authResultMock));
        $authMock->expects($this->once())
            ->method('getStorage')
            ->will($this->returnValue($authStorageMock));

        // Mock the logger
        $loggerMock = $this->getMockBuilder('Xmlps\Log\Logger')
            ->disableOriginalConstructor()
            ->getMock();
        $loggerMock->expects($this->once())
            ->method('info')
            ->will($this->returnValue(null));

        // Register the services
        $sm = $this->getApplicationServiceLocator();
        $sm->setAllowOverride(true);
        $sm->setService('Zend\Authentication\AuthenticationService', $authMock);
        $sm->setService('Logger', $loggerMock);

        // Execute the form submission
        $postData = array('email' => 'blim@bla.com', 'password' => 'pasword');
        $this->dispatch('/user/login', 'POST', $postData);
        $this->assertResponseStatusCode(302);
    }
}
