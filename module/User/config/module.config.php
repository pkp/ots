<?php
namespace User;

return array(
    'router' => array(
        'routes' => array(
            'user' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '/user[/:action]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                    ),
                    'defaults' => array(
                        'controller' => 'User\Controller\User',
                        'action' => 'index',
                    ),

                ),
            ),
        ),
    ),
    'view_manager' => array(
        'template_path_stack' => array(
            'user' => __DIR__ . '/../view'
        ),
    ),
    'doctrine' => array(
        'driver' => array(
            __NAMESPACE__ . '_driver' => array(
                'class' => 'Doctrine\ORM\Mapping\Driver\AnnotationDriver',
                'cache' => 'array',
                'paths' => array(
                    __DIR__ . '/../src/' . __NAMESPACE__ . '/Entity'
                ),
            ),
            'orm_default' => array(
                'drivers' => array(
                    __NAMESPACE__ . '\Entity' => __NAMESPACE__ . '_driver'
                ),
            ),
        ),
        'authentication' => array(
            'orm_default' => array(
                'objectManager' => 'Doctrine\ORM\EntityManager',
                'identityClass' => 'User\Entity\User',
                'identityProperty' => 'email',
                'credentialProperty' => 'password',
                'credentialCallable' => 'User\Entity\User::validatePassword'
            ),
        )
    ),

    'acl' => array(
        'resources' => array(
            'controller:User\Controller\User:index',
            'controller:User\Controller\User:login',
            'controller:User\Controller\User:logout',
            'controller:User\Controller\User:register',
            'controller:User\Controller\User:settings',
        ),
        'rules' => array(
            array('allow', 'administrator'),
            array('allow', 'guest', 'controller:User\Controller\User:index'),
            array('allow', 'guest', 'controller:User\Controller\User:login'),
            array('allow', 'guest', 'controller:User\Controller\User:register'),
            array('allow', 'member', 'controller:User\Controller\User:logout'),
            array('allow', 'member', 'controller:User\Controller\User:settings'),
            array('deny', 'member', 'controller:User\Controller\User:login'),
            array('deny', 'member', 'controller:User\Controller\User:register'),
        ),
    )
);
