<?php

namespace User;
use User\Form\LoginForm;
use User\Form\LoginFormInputFilter;

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
                'User\Form\LoginForm' => function($sm)
                {
                    $translator = $sm->get('translator');
                    return new LoginForm($translator);
                },
                'User\Form\LoginFormInputFilter' => function($sm)
                {
                    return new LoginFormInputFilter();
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
                'User\Controller\User' => function($cm)
                {
                    $sm = $cm->getServiceLocator();
                    $loginForm = $sm->get('User\Form\LoginForm');
                    $loginFormInputFilter = $sm->get('User\Form\LoginFormInputFilter');
                    return new Controller\UserController(
                        $loginForm,
                        $loginFormInputFilter
                    );
                }
            )
        );
    }
}
