<?php
namespace Manager\Event\Handler;

use Zend\ServiceManager\ServiceLocatorAwareInterface;
use Zend\ServiceManager\ServiceLocatorInterface;

/**
 * Inserts newly uploaded files into the job queue
 */
class FileUploadHandler implements ServiceLocatorAwareInterface
{
    protected $sm;

    /**
     * Set the service locator
     *
     * @param ServiceLocatorInterface $sm
     *
     * @return void
     */
    public function setServiceLocator(ServiceLocatorInterface $sm)
    {
        $this->sm = $sm;
    }

    /**
     * Get the service locator
     *
     * @return ServiceLocator ServiceLocator instance
     */
    public function getServiceLocator()
    {
        return $this->sm;
    }

    /**
     * Handle file uploads
     *
     * @return void
     */
    public function handle($e)
    {
        $params = $e->getParams();

        if (!isset($params['data'])) {
            throw new \Exception('File data is missing');
        }
    }
}
