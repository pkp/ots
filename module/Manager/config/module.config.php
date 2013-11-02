<?php
namespace Manager;

return array(
    'router' => array(
        'routes' => array(
            'manager' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '/manager/:action[/page/:page]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]+',
                        'page' => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Manager\Controller\Manager',
                        'action' => 'list',
                        'page' => 1,
                    ),
                ),
            ),
        ),
    ),
    'view_manager' => array(
        'template_path_stack' => array(
            'manager' => __DIR__ . '/../view'
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
            'controller:Manager\Controller\Manager:list',
            'controller:Manager\Controller\Manager:upload',
        ),
        'rules' => array(
            array('allow', 'member', 'controller:Manager\Controller\Manager:list'),
            array('allow', 'member', 'controller:Manager\Controller\Manager:upload'),
        ),
    ),
);
