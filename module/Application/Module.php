<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2013 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application;

use Zend\Mvc\ModuleRouteListener;
use Zend\Mvc\MvcEvent;

use Xmlps\Doctrine\Listener\ServiceManagerListener;
use Xmlps\Event\AclDispatch;
use Xmlps\Event\FlashMessengerRender;

class Module
{
    public function onBootstrap(MvcEvent $e)
    {
        // Disable XDebug
        if (function_exists('xdebug_disable')) {
              xdebug_disable();
        }

        $eventManager = $e->getApplication()->getEventManager();
        $moduleRouteListener = new ModuleRouteListener();
        $moduleRouteListener->attach($eventManager);

        // Attach the ControllerAcl plugin to the dispatch event
        $eventManager->attach(MvcEvent::EVENT_DISPATCH, function($e) {
            AclDispatch::processAcls($e);
        }, 100);

        // Show flashmessages in the view
        $eventManager->attach(MvcEvent::EVENT_RENDER, function($e) {
           FlashMessengerRender::registerMessages($e);
        });

        // Make service manager available to doctrine entities
        $sm = $e->getApplication()->getServiceManager();
        $em = $sm->get('doctrine.entitymanager.orm_default');
        $dem = $em->getEventManager();
        $dem->addEventListener(array(\Doctrine\ORM\Events::postLoad), new ServiceManagerListener($sm));
    }

    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\ClassMapAutoloader' => array(
                __DIR__ . '/../../vendor/xmlps/autoload_classmap.php',
            ),
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }

    public function getServiceConfig()
    {
        return array(
            'factories' => array(
                'Application\Entity\Log' => function($sm)
                {
                    return new Entity\Log();
                },
                'LogDAO' => function($sm)
                {
                    $em = $sm->get('doctrine.entitymanager.orm_default');
                    return new Model\DAO\LogDAO($em);
                },
                'Logger' => function($sm)
                {
                    $config = $sm->get('config');
                    $logger = $sm->get('Xmlps\Logger\Logger');
                    $writer = $sm->get('Xmlps\Log\Writer\Doctrine');
                    if (!empty($config['log']['level'])) {
                        $writer->addFilter($config['log']['level']);
                    }
                    else {
                        $writer->addFilter(Zend_Log::INFO);
                    }
                    $logger->addWriter($writer);

                    return $logger;
                },
                'Xmlps\Log\Writer\Doctrine' => function($sm) {
                    $logDAO = $sm->get('LogDAO');
                    $logEntity = $sm->get('Application\Entity\Log');
                    return new \Xmlps\Log\Writer\Doctrine($logDAO, $logEntity);
                },
                'Xmlps\Logger\Logger' => function($sm) {
                    return new \Xmlps\Logger\Logger;
                },
            ),
        );
    }
}
