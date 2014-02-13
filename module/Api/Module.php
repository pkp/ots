<?php
namespace Api;

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
     * Get controller config
     *
     * @return array
     */
    public function getControllerConfig()
    {
        return array(
            'factories' => array(
                'Api\Controller\Job' => function($cm)
                {
                    $sm = $cm->getServiceLocator();
                    $logger = $sm->get('Logger');
                    $translator = $sm->get('Translator');
                    $jobDAO = $sm->get('Manager\Model\DAO\JobDAO');
                    $documentDAO = $sm->get('Manager\Model\DAO\DocumentDAO');
                    $queueManager = $sm->get('Manager\Model\Queue\Manager');
                    $citationStyles = $sm->get('CitationstyleConversion\Model\Citationstyles');

                    return new Controller\JobController(
                        $logger,
                        $translator,
                        $jobDAO,
                        $documentDAO,
                        $queueManager,
                        $citationStyles
                    );
                },
                'Api\Controller\Site' => function($cm)
                {
                    $sm = $cm->getServiceLocator();
                    $logger = $sm->get('Logger');
                    $translator = $sm->get('Translator');
                    $citationStyles = $sm->get('CitationstyleConversion\Model\Citationstyles');

                    return new Controller\SiteController(
                        $logger,
                        $translator,
                        $citationStyles
                    );
                },
            )
        );
    }
}
