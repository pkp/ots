<?php
/**
 * Acces control list controller plugin
 *
 * Configure in module and global configuration files.
 *
 * If the roles are an array the second element defines what role the role
 * inherits from. In this example member inherits from guest.
 *
 * For the controller/action authorization the resource names a built the
 * following way: [resourcePrefix]:[controllerName]:[actionName]
 *
 *   'acl' => array(
 *       'roles' => array(
 *           'guest',
 *           array('member', 'guest'),
 *           'administrator'
 *       ),
 *       'resources' => array(
 *           'controller:User\Controller\User:index',
 *           'controller:User\Controller\User:login',
 *       ),
 *       'rules' => array(
 *           array('allow', 'administrator'),
 *           array('allow', 'guest', 'controller:User\Controller\User:index'),
 *           array('allow', 'guest', 'controller:User\Controller\User:login'),
 *       ),
 *   )
 *
 */

namespace Xmlps\Controller\Plugin;

use Zend\Mvc\Controller\Plugin\AbstractPlugin;
use Zend\Mvc\MvcEvent;

use Zend\Permissions\Acl\Acl;
use Zend\Permissions\Acl\Role\GenericRole as Role;
use Zend\Permissions\Acl\Resource\GenericResource as Resource;

class ControllerAcl extends AbstractPlugin
{
    // Config prefix for controller resources
    protected $resourcePrefix = 'controller';

    /**
     * Authorizes a request. If the authorization fails a 403 response code
     * will be set and the propagation will be stopped
     *
     * @param MvcEvent $e
     * @return void
     */
    public function authorize(MvcEvent $e)
    {
        $routeParams = $e->getRouteMatch()->getParams();
        $controller = $routeParams['controller'];
        $action = $routeParams['action'];

        $application = $e->getApplication();
        $sm = $application->getServiceManager();

        // Load the configuration
        $config = $sm->get('config');
        if (
            !isset($config['acl']) or
            !is_array($config['acl']) or
            !isset($config['acl']['roles']) or
            !is_array($config['acl']['roles']) or
            !isset($config['acl']['resources']) or
            !is_array($config['acl']['resources']) or
            !isset($config['acl']['rules']) or
            !is_array($config['acl']['rules'])
        ) {
            throw new \Exception('ACL\'s are not configured correctly');
        }
        $aclConfig = &$config['acl'];

        $acl = new Acl;

        // Deny as default policy
        $acl->deny();

        // Add the roles
        foreach ($aclConfig['roles'] as $role) {
            $inherit = null;
            if (is_array($role)) {
                $inherit = $role[1];
                $role = $role[0];
            }
            $acl->addRole(new Role($role), $inherit);
        }

        // Add the resources
        foreach ($aclConfig['resources'] as $resource) {
            if (strpos($resource, $this->resourcePrefix . ':') === 0) {
                $acl->addResource(new Resource($resource));
            }
        }

        // Set up the rules
        foreach ($aclConfig['rules'] as $rule) {
            $type = isset($rule[0]) ? $rule[0] : null;
            $role = isset($rule[1]) ? $rule[1] : null;
            $resource = isset($rule[2]) ? $rule[2] : null;

            if (!$type) {
                throw new \Exception('No type defined');
            }

            if (!$role) {
                throw new \Exception('No role defined');
            }

            switch ($type) {
                case 'allow':
                    $acl->allow($role, $resource);
                    break;
                case 'deny':
                    $acl->deny($role, $resource);
                    break;

                default:
                    throw new \Exception('Invalid rule type');
                    break;
            }
        }

        // Set the resource based on the request params
        $resource = 'controller:' . $controller . ':' . $action;

        // Set the users role
        $role = 'guest';
        $identity = $sm->get('ControllerPluginManager')->get('identity');
        if ($user = $identity()) { $role = $user->role; }

        // Authorize
        try { return $acl->isAllowed($role, $resource); }

        // Catch invalid resources the router will handle the 404
        catch (\Zend\Permissions\Acl\Exception\InvalidArgumentException $e) {
            $logger = $sm->get('Logger');
            $logger->debug('Invalid ACL ressource requested: ' . $resource);
            return true;
        }
    }
}
