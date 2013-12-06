<?php

namespace BibtexreferencesConversion;

use BibtexreferencesConversion\Model\Converter\Bibtexreferences;

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
                'BibtexreferencesConversion\Model\Converter\Bibtexreferences' => function($sm)
                {
                    $config = $sm->get('Config');
                    $logger = $sm->get('Logger');
                    if (!isset($config['conversion']['bibtexreferences']['biblatex2xml'])) {
                        throw new \Exception('biblatex2xml configuration is missing');
                    }
                    $config = $config['conversion']['bibtexreferences']['biblatex2xml'];

                    return new Bibtexreferences($config, $logger);
                },
            ),
        );
    }

}
