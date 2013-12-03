<?php

namespace BibtexConversion;

use BibtexConversion\Model\Converter\Bibtex;

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
                'BibtexConversion\Model\Converter\Bibtex' => function($sm)
                {
                    $config = $sm->get('Config');
                    $logger = $sm->get('Logger');
                    if (!isset($config['conversion']['bibtex']['xml2bib'])) {
                        throw new \Exception('xml2bib configuration is missing');
                    }
                    $config = $config['conversion']['bibtex']['xml2bib'];

                    return new Bibtex($config, $logger);
                },
            ),
        );
    }

}
