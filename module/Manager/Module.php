<?php
namespace Manager;

use Zend\Mvc\MvcEvent;

use Manager\Entity\Document;
use Manager\Entity\Job;
use Manager\Form\UploadForm;
use Manager\Form\UploadFormInputFilter;
use Manager\Model\DAO\DocumentDAO;
use Manager\Model\DAO\JobDAO;
use Manager\Model\Queue\Manager;

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
                'Manager\Entity\Document' => function($sm)
                {
                    return new Document;
                },
                'Manager\Entity\Job' => function($sm)
                {
                    $config = $sm->get('Config');

                    if (!isset($config['conversion']['manager']['job'])) {
                        throw new \Exception(
                            'Job configuration is missing'
                        );
                    }
                    $config = $config['conversion']['manager']['job'];

                    return new Job($config);
                },
                'Manager\Form\UploadForm' => function($sm)
                {
                    $translator = $sm->get('translator');
                    return new UploadForm($translator);
                },
                'Manager\Form\UploadFormInputFilter' => function($sm)
                {
                    $citationStyles = $sm->get('CitationstyleConversion\Model\Citationstyles');
                    return new UploadFormInputFilter($citationStyles);
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
                'Manager\Model\Queue\Manager' => function($sm)
                {
                    $logger = $sm->get('Logger');
                    $translator = $sm->get('translator');
                    $queueManager = $sm->get('SlmQueue\Queue\QueuePluginManager');
                    $jobManager = $sm->get('SlmQueue\Job\JobPluginManager');
                    $jobDAO = $sm->get('Manager\Model\DAO\JobDAO');
                    return new Manager(
                        $logger,
                        $translator,
                        $queueManager,
                        $jobManager,
                        $jobDAO
                    );
                },
            ),
            'shared' => array(
                'Manager\Entity\Job' => false,
                'Manager\Entity\Document' => false,
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
                    $queueManager = $sm->get('Manager\Model\Queue\Manager');
                    $uploadForm = $sm->get('Manager\Form\UploadForm');
                    $uploadFormInputFilter = $sm->get('Manager\Form\UploadFormInputFilter');
                    $documentDAO = $sm->get('Manager\Model\DAO\DocumentDAO');
                    $jobDAO = $sm->get('Manager\Model\DAO\JobDAO');

                    return new Controller\ManagerController(
                        $logger,
                        $translator,
                        $queueManager,
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
