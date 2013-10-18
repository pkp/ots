<?php

namespace User;
use User\Entity\User;
use User\Form\LoginForm;
use User\Form\LoginFormInputFilter;
use User\Form\RegistrationForm;
use User\Form\RegistrationFormInputFilter;
use User\Form\PasswordResetForm;
use User\Form\PasswordResetFormInputFilter;
use User\Model\DAO\UserDAO;

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
                'UserDAO' => function($sm)
                {
                    $em = $sm->get('doctrine.entitymanager.orm_default');
                    return new UserDAO($em);
                },
                'User\Entity\User' => function($sm)
                {
                    $translator = $sm->get('translator');
                    return new User($translator);
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
                'User\Form\PasswordResetForm' => function($sm)
                {
                    $translator = $sm->get('translator');
                    return new PasswordResetForm($translator);
                },
                'User\Form\PasswordResetFormInputFilter' => function($sm)
                {
                    $translator = $sm->get('translator');
                    return new PasswordResetFormInputFilter($translator);
                },
                'User\Form\RegistrationForm' => function($sm)
                {
                    $translator = $sm->get('translator');
                    return new RegistrationForm($translator);
                },
                'User\Form\RegistrationFormInputFilter' => function($sm)
                {
                    $userDAO = $sm->get('UserDAO');
                    $translator = $sm->get('translator');
                    return new RegistrationFormInputFilter(
                        $translator,
                        $userDAO
                    );
                },
                'Zend\Authentication\AuthenticationService' => function($sm) {
                    return $sm->get('doctrine.authenticationservice.orm_default');
                }
            ),
            'shared' => array(
                'User\Entity\User' => false
            )
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
                    $userDAO = $sm->get('UserDAO');
                    $logger = $sm->get('Logger');
                    $translator = $sm->get('Translator');
                    $loginForm = $sm->get('User\Form\LoginForm');
                    $loginFormInputFilter = $sm->get('User\Form\LoginFormInputFilter');
                    $registrationForm = $sm->get('User\Form\RegistrationForm');
                    $registrationFormInputFilter = $sm->get('User\Form\RegistrationFormInputFilter');
                    $passwordResetForm = $sm->get('User\Form\PasswordResetForm');
                    $passwordResetFormInputFilter = $sm->get('User\Form\PasswordResetFormInputFilter');

                    return new Controller\UserController(
                        $userDAO,
                        $logger,
                        $translator,
                        $loginForm,
                        $loginFormInputFilter,
                        $registrationForm,
                        $registrationFormInputFilter,
                        $passwordResetForm,
                        $passwordResetFormInputFilter
                    );
                }
            )
        );
    }
}
