<?php

namespace Xmlps\Event\Handler;

/**
 * Registeres flash messages in the view
 *
 * Register callback during bootstrap:
 *
 * public function onBootstrap(MvcEvent $e)
 * {
 *     $eventManager->attach(MvcEvent::EVENT_RENDER, function($e) {
 *         FlashMessengerRender::registerMessages($e);
 *     });
 * }
 */
class FlashMessengerRenderHandler
{
   public static function registerMessages(&$e)
   {
        $application = $e->getApplication();
        $sm = $application->getServiceManager();
        $flashMessenger = $sm->get('ControllerPluginManager')->get('flashMessenger');

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
            if (isset($messages['info'])) {
                $messages['info'] = array_merge($messages['info'], $flashMessenger->getMessages());
            }
            else {
                $messages['info'] = $flashMessenger->getMessages();
            }
        }
        $flashMessenger->clearMessages();

        $flashMessenger->setNamespace('error');
        if ($flashMessenger->hasMessages()) {
            $messages['error'] = $flashMessenger->getMessages();
        }
        $flashMessenger->clearMessages();

        $e->getViewModel()->setVariable('flashMessages', $messages);
   }
}
