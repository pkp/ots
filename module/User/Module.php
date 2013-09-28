<?php

namespace User;
use User\Entity\User;
use User\Form\LoginForm;
use User\Form\LoginFormInputFilter;
use User\Form\RegistrationForm;
use User\Form\RegistrationFormInputFilter;

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
                'User\Entity\User' => function($sm)
                {
                    return new User();
                },
                'User\Form\LoginForm' => function($sm)
                {
                    $translator = $sm->get('translator');
                    return new LoginForm($translator);
                },
                'User\Form\LoginFormInputFilter' => function($sm)
                {
                    return new LoginFormInputFilter();
                },
                'User\Form\RegistrationForm' => function($sm)
                {
                    $translator = $sm->get('translator');
                    return new RegistrationForm($translator);
                },
                'User\Form\RegistrationFormInputFilter' => function($sm)
                {
                    $em = $sm->get('doctrine.entitymanager.orm_default');
                    $userRepository = $em->getRepository('User\Entity\User');
                    $translator = $sm->get('translator');
                    return new RegistrationFormInputFilter(
                        $translator,
                        $userRepository
                    );
                },
                'Zend\Authentication\AuthenticationService' => function($sm) {
                    return $sm->get('doctrine.authenticationservice.orm_default');
                }
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
                    $em = $sm->get('doctrine.entitymanager.orm_default');
                    $logger = $sm->get('Logger');
                    $translator = $sm->get('Translator');
                    $loginForm = $sm->get('User\Form\LoginForm');
                    $loginFormInputFilter = $sm->get('User\Form\LoginFormInputFilter');
                    $registrationForm = $sm->get('User\Form\RegistrationForm');
                    $registrationFormInputFilter = $sm->get('User\Form\RegistrationFormInputFilter');

                    return new Controller\UserController(
                        $em,
                        $logger,
                        $translator,
                        $loginForm,
                        $loginFormInputFilter,
                        $registrationForm,
                        $registrationFormInputFilter
                    );
                }
            )
        );
    }
}
