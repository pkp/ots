<?php
namespace Manager;

use Zend\Mvc\MvcEvent;

use Manager\Entity\Document;
use Manager\Entity\Job;
use Manager\Form\UploadForm;
use Manager\Form\UploadFormInputFilter;
use Manager\Model\DAO\DocumentDAO;
use Manager\Model\DAO\JobDAO;

class Module
{
    /**
     * Bootstrap
     *
     * @param MvcEvent $e
     * @return void
     */
    public function onBootstrap(MvcEvent $e)
    {
        $application = $e->getApplication();
        $sem = $application->getEventManager()->getSharedManager();
        $sm = $application->getServiceManager();

        // Handle file upload events
        $sem->attach('Manager\Controller\ManagerController', 'file-upload', function($e) use ($sm) {
            $handler = $sm->get('Manager\Event\Handler\FileUploadHandler');
            $handler->handle($e);
        });
    }

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
                'Manager\Entity\Document' => function($sm)
                {
                    return new Document;
                },
                'Manager\Entity\Job' => function($sm)
                {
                    return new Job;
                },
                'Manager\Form\UploadForm' => function($sm)
                {
                    $translator = $sm->get('translator');
                    return new UploadForm($translator);
                },
                'Manager\Form\UploadFormInputFilter' => function($sm)
                {
                    return new UploadFormInputFilter();
                },
                'Manager\Model\DAO\DocumentDAO' => function($sm)
                {
                    $em = $sm->get('doctrine.entitymanager.orm_default');
                    return new DocumentDAO($em);
                },
                'Manager\Model\DAO\JobDAO' => function($sm)
                {
                    $em = $sm->get('doctrine.entitymanager.orm_default');
                    return new JobDAO($em);
                },
            ),
            'invokables' => array(
                'Manager\Event\Handler\FileUploadHandler' => 'Manager\Event\Handler\FileUploadHandler'
            ),
            'shared' => array(
                'Manager\Entity\Job' => false,
                'Manager\Entity\Document' => false
            )
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
                'Manager\Controller\Manager' => function($cm)
                {
                    $sm = $cm->getServiceLocator();
                    $logger = $sm->get('Logger');
                    $translator = $sm->get('Translator');
                    $uploadForm = $sm->get('Manager\Form\UploadForm');
                    $uploadFormInputFilter = $sm->get('Manager\Form\UploadFormInputFilter');
                    $documentDAO = $sm->get('Manager\Model\DAO\DocumentDAO');
                    $jobDAO = $sm->get('Manager\Model\DAO\JobDAO');

                    return new Controller\ManagerController(
                        $logger,
                        $translator,
                        $uploadForm,
                        $uploadFormInputFilter,
                        $documentDAO,
                        $jobDAO
                    );
                }
            )
        );
    }
}
