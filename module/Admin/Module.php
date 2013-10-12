<?php

namespace Admin;

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
                'Admin\Controller\Admin' => function($cm)
                {
                    $sm = $cm->getServiceLocator();
                    $translator = $sm->get('translator');
                    $logDAO = $sm->get('logDAO');
                    $userDAO = $sm->get('userDAO');
                    $logger = $sm->get('Logger');
                    return new Controller\AdminController(
                        $logger,
                        $translator,
                        $logDAO,
                        $userDAO
                    );
                }
            )
        );
    }
}
