<?php
namespace Manager;

use Zend\Mvc\MvcEvent;

class Module
{
    /**
     * Get config
     *
     * @return array
     */
    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

    /**
     * Get autoloader config
     *
     * @return array
     */
    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\ClassMapAutoloader' => array(
                __DIR__ . '/autoload_classmap.php'
            ),
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }

    /**
     * Get controller config
     *
     * @return array
     */
    public function getControllerConfig()
    {
        return array(
            'factories' => array(
                'Manager\Controller\Manager' => function($cm)
                {
                    $sm = $cm->getServiceLocator();
                    $logger = $sm->get('Logger');
                    $translator = $sm->get('Translator');

                    return new Controller\ManagerController(
                        $logger,
                        $translator
                    );
                }
            )
        );
    }
}
