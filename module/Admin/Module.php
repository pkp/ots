<?php

namespace Admin;

use Admin\Form\UserRemovalForm;

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
     * Get service config
     *
     * @return array
     */
    public function getServiceConfig()
    {
        return array(
            'factories' => array(
                'Admin\Form\UserRemovalForm' => function($sm)
                {
                    $translator = $sm->get('translator');
                    return new UserRemovalForm($translator);
                },
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
                'Admin\Controller\UserManagement' => function($cm)
                {
                    $sm = $cm->getServiceLocator();
                    $translator = $sm->get('translator');
                    $userDAO = $sm->get('userDAO');
                    $logger = $sm->get('Logger');
                    $userRemovalForm = $sm->get('Admin\Form\UserRemovalForm');
                    return new Controller\UserManagementController(
                        $logger,
                        $translator,
                        $userDAO,
                        $userRemovalForm
                    );
                },
                'Admin\Controller\SystemLog' => function($cm)
                {
                    $sm = $cm->getServiceLocator();
                    $translator = $sm->get('translator');
                    $logDAO = $sm->get('logDAO');
                    $logger = $sm->get('Logger');
                    return new Controller\SystemLogController(
                        $logger,
                        $translator,
                        $logDAO
                    );
                },
            )
        );
    }
}
