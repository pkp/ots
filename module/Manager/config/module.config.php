<?php
namespace Manager;

return array(
    'router' => array(
        'routes' => array(
            'manager' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '/manager[/:action]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                    ),
                    'defaults' => array(
                        'controller' => 'Manager\Controller\Manager',
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
    'acl' => array(
        'resources' => array(
            'controller:Manager\Controller\Manager:upload',
        ),
        'rules' => array(
            array('allow', 'guest', 'controller:Manager\Controller\Manager:upload'),
        ),
    )
);
