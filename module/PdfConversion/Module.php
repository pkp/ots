<?php

namespace PdfConversion;

use PdfConversion\Model\Converter\Pdf;

class Module
{
    /**
     * Get config
     *
     * @return array
     */
    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

    /**
     * Get autoloader config
     *
     * @return array
     */
    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\ClassMapAutoloader' => array(
                __DIR__ . '/autoload_classmap.php'
            ),
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }

    /**
     * Get service config
     *
     * @return array
     */
    public function getServiceConfig()
    {
        return array(
            'factories' => array(
                'PdfConversion\Model\Converter\Pdf' => function($sm)
                {
                    $config = $sm->get('Config');
                    $logger = $sm->get('Logger');
                    if (!isset($config['conversion']['pdf'])) {
                        throw new \Exception('Pdf converter configuration is missing');
                    }
                    $config = $config['conversion']['pdf'];

                    return new Pdf($config, $logger);
                },
            ),
        );
    }

}
