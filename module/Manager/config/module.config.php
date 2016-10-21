<?php
namespace Manager;

return array(
    'router' => array(
        'routes' => array(
            'manager' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '/manager[/:action][/id/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]+',
                        'id' => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Manager\Controller\Manager',
                        'page' => 1,
                    ),
                ),
            ),
            'manager_list' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '/manager/list[/page/:page]',
                    'constraints' => array(
                        'page' => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Manager\Controller\Manager',
                        'action' => 'list',
                        'page' => 1,
                    ),
                ),
            ),
            'editor' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '/manager/editor/id/:id',
                    'constraints' => array(
                        'id' => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Manager\Controller\Manager',
                        'action' => 'editor',
                    ),
                ),
            ),
            'media' => array(
                'type' => 'segment',
                'options' => array(
                        'route' => '/manager/xml/id/:id/media/:file',
                        'constraints' => array(
                                'id' => '[0-9]+',
                                'file' => '[a-zA-Z0-9]+\.[a-zA-Z]{3,4}',
                        ),
                        'defaults' => array(
                                'controller' => 'Manager\Controller\Manager',
                                'action' => 'media',
                        ),
                ),
            ),
            'xml' => array(
                'type' => 'segment',
                'options' => array(
                        'route' => '/manager/xml/id/:id',
                        'constraints' => array(
                                'id' => '[0-9]+',
                        ),
                        'defaults' => array(
                                'controller' => 'Manager\Controller\Manager',
                                'action' => 'xml',
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
            'controller:Manager\Controller\Manager:details',
            'controller:Manager\Controller\Manager:download',
            'controller:Manager\Controller\Manager:list',
            'controller:Manager\Controller\Manager:upload',
            'controller:Manager\Controller\Manager:editor',
            'controller:Manager\Controller\Manager:xml',
            'controller:Manager\Controller\Manager:media',
        ),
        'rules' => array(
            array('allow', 'member', 'controller:Manager\Controller\Manager:details'),
            array('allow', 'member', 'controller:Manager\Controller\Manager:download'),
            array('allow', 'member', 'controller:Manager\Controller\Manager:list'),
            array('allow', 'member', 'controller:Manager\Controller\Manager:upload'),
            array('allow', 'member', 'controller:Manager\Controller\Manager:editor'),
            array('allow', 'member', 'controller:Manager\Controller\Manager:xml'),
            array('allow', 'member', 'controller:Manager\Controller\Manager:media'),
        ),
    ),
);
