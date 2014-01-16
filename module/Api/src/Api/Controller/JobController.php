<?php
namespace Api\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\JsonModel;
use Zend\Mvc\I18n\Translator;
use Xmlps\Logger\Logger;

class JobController extends AbstractActionController {
    protected $logger;
    protected $translator;

    /**
     * Constructor
     *
     * @param Logger $logger
     * @param Translator $translator
     *
     * @return void
     */
    public function __construct(
        Logger $logger,
        Translator $translator
    )
    {
        $this->logger = $logger;
        $this->translator = $translator;
    }

    /**
     * Submit a new job
     *
     * @return void
     */
    public function submitAction()
    {
        return new JsonModel(array(
            'success' => true,
        ));
    }

    /**
     * Get the job status
     *
     * @return void
     */
    public function statusAction()
    {
        return new JsonModel(array(
            'success' => true,
        ));
    }

    /**
     * Retrieve a completed job
     *
     * @return void
     */
    public function retrieveAction()
    {
        return new JsonModel(array(
            'success' => true,
        ));
    }
}
