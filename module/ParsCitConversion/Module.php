<?php

namespace ParsCitConversion;

use ParsCitConversion\Model\Converter\ParsCit;

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
                        'ParsCitConversion\Model\Converter\ParsCit' => function ($sm) {
                            $config = $sm->get ( 'Config' );
                            $logger = $sm->get ( 'Logger' );
                            
                            if (!isset($config['conversion']['parsCit'])) {
                                throw new \Exception('ParsCit configuration is missing');
                            }
                            $config = $config['conversion']['parsCit'];
                            
                            return new ParsCit ( $config, $logger );
                        } 
                ) 
        );
    }
}