<?php
namespace Xmlps\Event\Handler;

/**
 * Processes controller ACLs. Registers controller ACL plugin and handles ACL
 * errors.
 *
 * Register callback during bootstap:
 *
 * public function onBootstrap(MvcEvent $e)
 * {
 *     $eventManager->attach(MvcEvent::EVENT_DISPATCH, function($e) {
 *         AclDispatch::processAcls($e);
 *     }, 100);
 * }
 */
class AclDispatchHandler
{
   public static function processAcls(&$e)
   {
        $application = $e->getApplication();
        $sm = $application->getServiceManager();
        $authorized = $sm->get('ControllerPluginManager')
            ->get('ControllerAcl')
            ->authorize($e);

        if (!$authorized) {
            $view = $e->getViewModel();
            $translator = $sm->get('translator');
            $view->setVariable('messages', array('error' => array(
                $translator->translate(
                    'application.acl.notAuthorized'
                )
            )));
            $e->getResponse()->setStatusCode(403);
            $e->stopPropagation();
        }
    }
}
