<?php

namespace NlmxmlConversion;

use NlmxmlConversion\Model\Metypeset;

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
                'NlmxmlConversion\Model\Metypeset' => function($sm)
                {
                    $config = $sm->get('Config');
                    $logger = $sm->get('Logger');
                    $translator = $sm->get('Translator');
                    if (!isset($config['conversion']['nlmxml']['metypeset'])) {
                        throw new \Exception('meTypeset configuration is missing');
                    }
                    $config = $config['conversion']['nlmxml']['metypeset'];

                    return new Metypeset($config, $logger, $translator);
                },
            ),
        );
    }

}
