<?php
namespace Api;

return array(
    'router' => array(
        'routes' => array(
            'api' => array(
                'type' => 'literal',
                'options' => array(
                    'route' => '/api',
                ),
                'may_terminate' => true,
                'child_routes' => array(
                    'job' => array(
                        'type' => 'segment',
                        'options' => array(
                            'route' => '/job/:action',
                            'constraints' => array(
                                'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                            ),
                            'defaults' => array(
                                'controller' => 'Api\Controller\Job',
                            ),
                        ),
                    ),
                    'site' => array(
                        'type' => 'segment',
                        'options' => array(
                            'route' => '/site/:action',
                            'constraints' => array(
                                'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                            ),
                            'defaults' => array(
                                'controller' => 'Api\Controller\Site',
                            ),
                        ),
                    ),
                )
            ),
        ),
    ),
    'view_manager' => array(
        'strategies' => array(
            'ViewJsonStrategy',
        ),
    ),
    'acl' => array(
        'resources' => array(
            'controller:Api\Controller\Job:submit',
            'controller:Api\Controller\Job:status',
            'controller:Api\Controller\Job:retrieve',
            'controller:Api\Controller\Job:citationStyleList',
            'controller:Api\Controller\Site:citationStyleAutocomplete',
        ),
        'rules' => array(
            array('allow', 'guest', 'controller:Api\Controller\Job:submit'),
            array('allow', 'guest', 'controller:Api\Controller\Job:status'),
            array('allow', 'guest', 'controller:Api\Controller\Job:retrieve'),
            array('allow', 'guest', 'controller:Api\Controller\Job:citationStyleList'),
            array('allow', 'guest', 'controller:Api\Controller\Site:citationStyleAutocomplete'),
        ),
    ),
);
