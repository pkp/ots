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
        // Make sure the job id parameter is provided
        if (!($jobId = (int) $this->params()->fromQuery('id'))) {
            return array(
                'error' => $this->translator->translate('job.api.error.jobIdParameterMissing')
            );
        }

        $job = $this->jobDAO->find($jobId);

        // Check if the job exists and the user is the owner of the job
        if (!$job or !($this->identity()->id == $job->user->id)) {
            return array(
                'error' => $this->translator->translate('job.api.error.invalidJobId')
            );
        }

        $jobStatusMap = $job->getStatusMap();
        return array('jobStatus' => $job->status, 'jobStatusDescription' => $jobStatusMap[$job->status]);
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
