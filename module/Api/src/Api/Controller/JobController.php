<?php
namespace Api\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Xmlps\Logger\Logger;
use Zend\Mvc\I18n\Translator;
use Zend\Authentication\AuthenticationService;
use Manager\Model\DAO\JobDAO;

class JobController extends AbstractApiController {
    protected $requireIdentity = array(
        'submitAction' => true,
        'statusAction' => true,
        'retrieveAction' => true,
    );

    /**
     * Constructor
     *
     * @param Logger $logger
     * @param Translator $translator
     * @param AuthenticationService $authService
     *
     * @return void
     */
    public function __construct(
        Logger $logger,
        Translator $translator,
        AuthenticationService $authService,
        JobDAO $jobDAO
    )
    {
        parent::__construct($logger, $translator, $authService);

        $this->jobDAO = $jobDAO;
    }


    /**
     * Submit a new job
     *
     * @return void
     */
    public function submitAction()
    {
        return array('a' => 'b');
    }

    /**
     * Get the job status
     *
     * @return void
     */
    public function statusAction()
    {
    }

    /**
     * Retrieve a completed job
     *
     * @return void
     */
    public function retrieveAction()
    {
        return array('a' => 'b');
    }
}
