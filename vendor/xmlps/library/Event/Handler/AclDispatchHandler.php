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

        // Check if the user is already authenticated
        $authenticated = $sm->get('ControllerPluginManager')
            ->get('ControllerAcl')
            ->authorize($e);
        if ($authenticated) return;

        // Check if the user submitted email and password parameters and try to
        // authenticate using those (API authentication)
        $request = $e->getRequest();
        if ($request->isPost()) {
            $email = $request->getPost('email');
            $password = $request->getPost('password');
        }
        else {
            $email = $request->getQuery('email');
            $password = $request->getQuery('password');
        }

        if (!empty($email) and !empty($password)) {
            $authService = $sm->get(
                'Zend\Authentication\AuthenticationService'
            );
            $adapter = $authService->getAdapter();
            $adapter->setIdentityValue($email);
            $adapter->setCredentialValue($password);
            $authResult = $authService->authenticate();

            if ($authResult->isValid()) {
                $sm->get('Logger')->debugTranslate('user.authentication.sucessfulLoginLog', $email);
                return;
            }
        }

        // Display an error message and return a 403
        $view = $e->getViewModel();
        $translator = $sm->get('Translator');
        $view->setVariable('messages', array('error' => array(
            $translator->translate(
                'application.acl.notAuthorized'
            )
        )));
        $e->getResponse()->setStatusCode(403);
        $e->stopPropagation();
    }
}
