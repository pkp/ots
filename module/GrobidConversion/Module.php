<?php

namespace GrobidConversion;

use GrobidConversion\Model\Converter\Grobid;

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
                        'GrobidConversion\Model\Converter\Grobid' => function ($sm) {
                            $config = $sm->get ( 'Config' );
                            $logger = $sm->get ( 'Logger' );
                            
                            if (!isset($config['conversion']['grobid'])) {
                                throw new \Exception('Grobid configuration is missing');
                            }
                            $config = $config['conversion']['grobid'];
                            
                            return new Grobid ( $config, $logger );
                        } 
                ) 
        );
    }
}