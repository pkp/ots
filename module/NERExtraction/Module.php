<?php

namespace NERExtraction;

use NERExtraction\Model\Converter\NERExtractor;

class Module 
{
    /**
     * Get config
     *
     * @return array
     */
    public function getConfig() {
        return include __DIR__ . '/config/module.config.php';
    }
    
    /**
     * Get autoloader config
     *
     * @return array
     */
    public function getAutoloaderConfig() {
        return array (
                'Zend\Loader\ClassMapAutoloader' => array (
                        __DIR__ . '/autoload_classmap.php' 
                ),
                'Zend\Loader\StandardAutoloader' => array (
                        'namespaces' => array (
                                __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__ 
                        ) 
                ) 
        );
    }
    
    /**
     * Get service config
     *
     * @return array
     */
    public function getServiceConfig() {
        return array (
                'factories' => array (
                        'NERExtraction\Model\Converter\NERExtractor' => function ($sm) {
                            $config = $sm->get ( 'Config' );
                            $logger = $sm->get ( 'Logger' );
                            
                            if (!isset($config['conversion']['ner'])) {
                                throw new \Exception('NER configuration is missing');
                            }
                            $config = $config['conversion']['ner'];
                            
                            return new NERExtractor ( $config, $logger );
                        } 
                ) 
        );
    }
}