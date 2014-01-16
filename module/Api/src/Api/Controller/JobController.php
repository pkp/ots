<?php
namespace Api\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\Mvc\I18n\Translator;
use Xmlps\Logger\Logger;

class JobController extends AbstractApiController {
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
        return array('a' => 'b');
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
