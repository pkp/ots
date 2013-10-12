<?php
namespace Admin;

return array(
    'router' => array(
        'routes' => array(
            'admin' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '/admin/:action[/page/:page][/user/:userId]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'page' => '[0-9]*',
                        'id' => '[0-9]*',
                    ),
                    'defaults' => array(
                        'controller' => 'Admin\Controller\Admin',
                        'action' => 'index',
                        'page' => 1,
                    ),

                ),
            ),
        ),
    ),
    'view_manager' => array(
        'template_path_stack' => array(
            'admin' => __DIR__ . '/../view'
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
    ),

    'acl' => array(
        'resources' => array(
            'controller:Admin\Controller\Admin:index',
            'controller:Admin\Controller\Admin:user-management',
            'controller:Admin\Controller\Admin:system-log',
        ),
        'rules' => array(
            array('allow', 'administrator', 'controller:Admin\Controller\Admin:index'),
            array('allow', 'administrator', 'controller:Admin\Controller\Admin:user-management'),
            array('allow', 'administrator', 'controller:Admin\Controller\Admin:system-log'),
        ),
    )
);
