<?php
namespace Xmlps\Doctrine\Listener;

use Zend\ServiceManager\ServiceManager;

/**
 * Registeres the ZF service locator with Docrine entities which implement the
 * Zend\ServiceManager\ServiceLocatorAwareInterface
 *
 * A Doctrine post load event listener needs to be registered during
 * bootstrapping:
 *
 * public function onBootstrap(MvcEvent $e)
 * {
 *      ...
 *
        $sm = $e->getApplication()->getServiceManager();
        $em = $sm->get('doctrine.entitymanager.orm_default');
        $dem = $em->getEventManager();
        $dem->addEventListener(
            array(\Doctrine\ORM\Events::postLoad),
            new ServiceManagerListener($sm)
        );

        ...
 * }
 *
 */
class ServiceManagerListener
{
    protected $sm;

    public function __construct(ServiceManager $sm)
    {
        $this->sm = $sm;
    }

    public function postLoad($eventArgs)
    {
        $entity = $eventArgs->getEntity();
        $class = new \ReflectionClass($entity);
        if ($class->implementsInterface('Zend\ServiceManager\ServiceLocatorAwareInterface')) {
            $entity->setServiceLocator($this->sm);
        }
    }
}
