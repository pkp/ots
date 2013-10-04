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
use Zend\Mvc\Controller\Plugin\FlashMessenger;

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

        // Show flashmessages in the view
        $eventManager->attach(MvcEvent::EVENT_RENDER, function($e) {
            $flashMessenger = new FlashMessenger;

            $messages = array();

            $flashMessenger->setNamespace('success');
            if ($flashMessenger->hasMessages()) {
                $messages['success'] = $flashMessenger->getMessages();
            }
            $flashMessenger->clearMessages();

            $flashMessenger->setNamespace('info');
            if ($flashMessenger->hasMessages()) {
                $messages['info'] = $flashMessenger->getMessages();
            }
            $flashMessenger->clearMessages();

            $flashMessenger->setNamespace('default');
            if ($flashMessenger->hasMessages()) {
                $messages['info'] = $flashMessenger->getMessages();
            }
            $flashMessenger->clearMessages();

            $flashMessenger->setNamespace('error');
            if ($flashMessenger->hasMessages()) {
                $messages['error'] = $flashMessenger->getMessages();
            }
            $flashMessenger->clearMessages();

            $e->getViewModel()->setVariable('flashMessages', $messages);
        });
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
                'Logger' => function($sm)
                {
                    $config = $sm->get('config');
                    $logger = new \Xmlps\Logger\Logger;
                    $writer = new \Zend\Log\Writer\Stream($config['log']['file']);
                    if (!empty($config['log']['level'])) {
                        $writer->addFilter($config['log']['level']);
                    }
                    else {
                        $writer->addFilter(Zend_Log::INFO);
                    }
                    $logger->addWriter($writer);

                    return $logger;
                },
            ),
        );
    }
}
