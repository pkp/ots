<?php

namespace ReferencesConversion;

use ReferencesConversion\Model\Converter\References;

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
                'ReferencesConversion\Model\Converter\References' => function($sm)
                {
                    $config = $sm->get('Config');
                    $logger = $sm->get('Logger');
                    if (!isset($config['conversion']['references'])) {
                        throw new \Exception("CrossRef's configuration is missing");
                    }
                    $config = $config['conversion']['references'];

                    return new References($config, $logger);
                },
            ),
        );
    }

}
