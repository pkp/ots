<?php
namespace Api;

return array(
    'router' => array(
        'routes' => array(
            'api' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '/api[/:action][/id/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]+',
                        'id' => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Api\Controller\Api',
                        'page' => 1,
                    ),
                ),
            ),
        ),
    ),
    'view_manager' => array(
        'template_path_stack' => array(
            'api' => __DIR__ . '/../view'
        ),
    ),
);
