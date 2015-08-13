<?php
return array(
    'acl' => array(
        'resources' => array(
            'controller:SlmQueueDoctrine\Controller\DoctrineWorkerController:process',
        ),
        'rules' => array(
            array('allow', 'guest', 'controller:SlmQueueDoctrine\Controller\DoctrineWorkerController:process'),
        ),
    ),
    'slm_queue' => array(
        'doctrine' => array(
            'connection' => 'doctrine.connection.orm_default',
            'table_name' => 'queue',
        ),
        'queue_manager' => array(
            'factories' => array(
                'docx' => 'SlmQueueDoctrine\Factory\DoctrineQueueFactory',
                'nlmxml' => 'SlmQueueDoctrine\Factory\DoctrineQueueFactory',
                'references' => 'SlmQueueDoctrine\Factory\DoctrineQueueFactory',
                'bibtex' => 'SlmQueueDoctrine\Factory\DoctrineQueueFactory',
                'bibtexreferences' => 'SlmQueueDoctrine\Factory\DoctrineQueueFactory',
                'html' => 'SlmQueueDoctrine\Factory\DoctrineQueueFactory',
                'citationstyle' => 'SlmQueueDoctrine\Factory\DoctrineQueueFactory',
                'pdf' => 'SlmQueueDoctrine\Factory\DoctrineQueueFactory',
                'xmp' => 'SlmQueueDoctrine\Factory\DoctrineQueueFactory',
                'zip' => 'SlmQueueDoctrine\Factory\DoctrineQueueFactory',
                'epub' => 'SlmQueueDoctrine\Factory\DoctrineQueueFactory'
            ),
        ),
    ),
);
