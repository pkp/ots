<?php

namespace Xmlps\UnitTest;

/**
 * Helper trait for unit tests. It standardizes the creation and removal of
 * test data reqired to perform the unit tests
 */
trait TestHelper {
    protected $userEmail = 'unittestuser@example.com';
    protected $userPassword;
    protected $userRole = 'member';
    protected $userActive = true;

    protected $jobUser = null;
    protected $jobConversionStage = 0;
    protected $jobStatus = 0;
    protected $jobCitationStyleFile = 'vendor/citation-style-language/styles/aquatic-conservation.csl';

    protected $documentJob = null;
    protected $documentPath = '';
    protected $documentConversionStage = '';

    protected $userDAO;
    protected $jobDAO;
    protected $documentDAO;

    /**
     * Create a test user.
     *
     * @param array $data Array containing data to overwrite properties
     *
     * @return User Test user
     */
    protected function createTestUser($data = array())
    {
        // Randomize the user password
        if (!isset($data['password']) and !empty($this->userPassword)) {
            $this->userPassword = sha1(uniqid() . rand(99999));
        }

        $this->overwriteProperties($data, 'user');

        $user = $this->getUserDAO()->getInstance();
        $user->email = $this->userEmail;
        $user->password = $this->userPassword;
        $user->role = $this->userRole;
        $user->active = $this->userActive;
        $this->getUserDAO()->save($user);

        return $user;
    }

    /**
     * Delete a test user
     *
     * @param array $data Array containing data to overwrite properties
     *
     * @return void
     */
    protected function deleteTestUser($data = array())
    {
        $this->overwriteProperties($data, 'user');

        $user = $this->getUserDAO()->findOneBy(array('email' => $this->userEmail));
        if (!$user) return;

        $this->getUserDAO()->remove($user);
    }

    /**
     * Create a test job
     *
     * @param array $data Array containing data to overwrite properties
     *
     * @return Job Test job
     */
    protected function createTestJob($data = array())
    {
        $this->overwriteProperties($data, 'job');

        $job = $this->getJobDAO()->getInstance();
        $job->user = $this->jobUser;
        $job->conversionStage = $this->jobConversionStage;
        $job->status = $this->jobStatus;
        $job->citationStyleFile = $this->jobCitationStyleFile;

        return $job;
    }

    /**
     * Create test document
     *
     * @param array $data Array containing data to overwrite properties
     * @return Document Test document
     */
    protected function createTestDocument($data = array())
    {
        $this->overwriteProperties($data, 'document');

        $document = $this->getDocumentDAO()->getInstance();
        $document->job = $this->documentJob;
        $document->path = $this->documentPath;
        $document->conversionStage = $this->documentConversionStage;

        return $document;
    }

    /**
     * Overwrites properties; property needs to exist
     *
     * @param mixed $data Array containing datat to overwrite properties
     * @param mixed $prefix Property prefix
     *
     * @return void
     */
    private function overwriteProperties($data, $prefix)
    {
        foreach ($data as $key => $value) {
            $key = $prefix . ucfirst($key);
            if (property_exists($this, $key)) {
                $this->$key = $value;
            }
            else {
                throw new \Exception("Property $key doesn't exist");
            }

        }
    }

    /**
     * Get the user DAO
     *
     * @return UserDAO User DAO instance
     */
    protected function getUserDAO()
    {
        if (!is_object($this->userDAO)) {
            $this->userDAO = $this->sm->get('User\Model\DAO\UserDAO');
        }

        return $this->userDAO;
    }

    /**
     * Get the job DAO
     *
     * @return JobDAO Job DAO instance
     */
    protected function getJobDAO()
    {
        if (!is_object($this->jobDAO)) {
            $this->jobDAO = $this->sm->get('Manager\Model\DAO\JobDAO');
        }

        return $this->jobDAO;
    }

    /**
     * Get the document DAO
     *
     * @return DocumentDAO Document DAO instance
     */
    protected function getDocumentDAO()
    {
        if (!is_object($this->documentDAO)) {
            $this->documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        }

        return $this->documentDAO;
    }
}
