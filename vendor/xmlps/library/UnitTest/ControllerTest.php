<?php
namespace Xmlps\UnitTest;

use Zend\Test\PHPUnit\Controller\AbstractHttpControllerTestCase;

class ControllerTest extends AbstractHttpControllerTestCase
{
    protected $traceError = true;

    protected $sm;

    public function setUp()
    {
        parent::setUp();
        $baseDir = dirname(dirname(dirname(dirname(__DIR__))));
        $this->setApplicationConfig(
            include $baseDir . '/config/application.config.php'
        );

        $this->sm = $this->getApplicationServiceLocator();
    }

    /**
     * Helper function. Log in a user
     *
     * @return void
     */
    protected function mockLogin($user) {
        $authService = $this->getMock('Zend\Authentication\AuthenticationService');
        $authService->expects($this->any())
            ->method('getIdentity')
            ->will($this->returnValue($user));

        $authService->expects($this->any())
            ->method('hasIdentity')
            ->will($this->returnValue(true));

        $this->getApplicationServiceLocator()->setAllowOverride(true);
        $this->getApplicationServiceLocator()
            ->setService('Zend\Authentication\AuthenticationService', $authService);
    }

    /**
     * Creates test data for this test
     *
     * @return void
     */
    protected function createTestData()
    {
        throw new Exception('Missing implementation');
    }

    /**
     * Cleans test data after test
     *
     * @return void
     */
    protected function cleanTestData()
    {
        throw new Exception('Missing implementation');
    }

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
