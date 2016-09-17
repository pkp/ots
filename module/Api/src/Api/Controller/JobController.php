<?php
namespace Api\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\JsonModel;
use Xmlps\Logger\Logger;
use Zend\Mvc\I18n\Translator;
use Manager\Entity\Job;
use Manager\Model\DAO\JobDAO;
use Manager\Model\DAO\DocumentDAO;
use Manager\Model\Queue\Manager as QueueManager;
use CitationstyleConversion\Model\Citationstyles;

class JobController extends AbstractActionController
{
    protected $logger;
    protected $translator;
    protected $jobDAO;
    protected $documentDAO;
    protected $queueManager;
    protected $citationStyles;
    protected $validMetadataFields = array('abstract', 'article-title', 'institution', 'contributors', 'journal-title');
    protected $validMetadataContributorsFields = array('name','email');

    /**
     * Constructor
     *
     * @param Logger $logger
     * @param Translator $translator
     * @param JobDAO $jobDAO
     * @param DocumentDAO $documentDAO
     * @param QueueManager $queueManager
     * @param CitationStyles $citationStyles
     *
     * @return void
     */
    public function __construct(
        Logger $logger,
        Translator $translator,
        JobDAO $jobDAO,
        DocumentDAO $documentDAO,
        QueueManager $queueManager,
        CitationStyles $citationStyles
    )
    {
        $this->logger = $logger;
        $this->translator = $translator;
        $this->jobDAO = $jobDAO;
        $this->documentDAO = $documentDAO;
        $this->queueManager = $queueManager;
        $this->citationStyles = $citationStyles;
    }
    
    /**
     * Determines if submitted metadata fields contain invalid fields
     *
     * @param $metadata key/value array of metadata
     * @return boolean
     */
    protected function _metadataContainsInvalidFields($metadata)
    {
        $submittedFields = array_keys($metadata);
        $diff = array_diff($submittedFields, $this->validMetadataFields);
        if (!empty($diff)) {
            return true;
        }
        
        if (isset($metadata['contributors'])) {
            $contributors = $metadata['contributors']; 
            if (!is_array($contributors)) {
                return true;
            }
            
            // contributors contains arrays with name and email keys
            // e.g: [
            //          ['name' => 'foo', 'email' => 'foo@example.com'], 
            //          ['name' => 'bar', 'email' => 'bar@example.com']
            //      ]
            foreach($contributors as $contributor) {
                if (!is_array($contributor) || (count($contributor) != 2) 
                        || !empty(array_diff(array_keys($contributor), $this->validMetadataContributorsFields))) {
                    return true;
                }
            }
        }
        
        return false;
    }

    /**
     * Submit a new job
     *
     * @return array Array with submission status information
     */
    public function submitAction()
    {
        // Make sure the file name parameter is provided
        if (!($fileName = $this->params()->fromPost('fileName'))) {
            return new JsonModel(array(
                'error' => $this->translator->translate('job.api.error.fileNameParameterMissing'),
                'status' => 'error',
            ));
        }

        // Make sure the file content parameter is provided
        if (!($fileContent = $this->params()->fromPost('fileContent'))) {
            return new JsonModel(array(
                'error' => $this->translator->translate('job.api.error.fileContentParameterMissing'),
                'status' => 'error',
            ));
        }

        // Make sure the citation style parameter is provided
        if (!($citationStyleHash = $this->params()->fromPost('citationStyleHash'))) {
            return new JsonModel(array(
                'error' => $this->translator->translate('job.api.error.citationStyleHashParameterMissing'),
                'status' => 'error',
            ));
        }

        $citationStyles = $this->citationStyles->getStyleMap();
        if (!array_key_exists($citationStyleHash, $citationStyles)) {
            return new JsonModel(array(
                'error' => $this->translator->translate('job.api.error.invalidCitationStyleHash'),
                'status' => 'error',
            ));
        }
        
        // Make sure metadata content is valid if submitted
        if (($fileMetadata = $this->params()->fromPost('fileMetadata'))) {
            $metadata = json_decode($fileMetadata);
            if (is_null($metadata) || $this->_metadataContainsInvalidFields($metadata)) {
                return new JsonModel(array(
                        'error' => $this->translator->translate('job.api.error.fileMetadataNotValid'),
                        'status' => 'error',
                ));
            }
        }

        // Create a new job instance
        $job = $this->jobDAO->getInstance();
        $job->user = $this->identity();
        $job->setCitationStyleFileByHash($citationStyleHash);
        $this->jobDAO->save($job);

        // Create the inputFile
        $fileName = str_replace('/', '', $fileName);
        $fileName = $job->getUploadPath() . '/' . $fileName;
        file_put_contents($fileName, $fileContent);
        
        // Create metadata file if metadata submit
        $metadataFile = $job->getUploadPath() . '/metadata.json';
        file_put_contents($metaFileName, $fileMetadata);

        // Create new document
        $document = $this->documentDAO->getInstance();
        $document->job = $job;
        $document->conversionStage = $job->conversionStage;
        $document->path = $fileName;
        $this->documentDAO->save($document);

        $this->logger->infoTranslate('manager.job.createLog', $job->id);

        // Send the job to the queue manager
        $this->queueManager->addJob($job->id);

        return new JsonModel(array('status' => 'success', 'id' => $job->id));
    }

    /**
     * Retrieve list of accepted citation styles and their hashes
     *
     * @return array Array containing citaion style list
     */
    public function citationStyleListAction()
    {
        $citationStyles = $this->citationStyles->getStyleMap();
        array_walk($citationStyles, function(&$v) { $v = $v['title']; });

        return new JsonModel(array(
            'status' => 'success',
            'citationStyles' => $citationStyles,
        ));
    }

    /**
     * Get the job status
     *
     * @return array Array containing job status information
     */
    public function statusAction()
    {
        $job = $this->getJob();
        if (!($job instanceof Job)) return $job;

        $jobStatusMap = $job->getStatusMap();
        return new JsonModel(array(
            'status' => 'success',
            'jobStatus' => $job->status,
            'jobStatusDescription' => $jobStatusMap[$job->status]
        ));
    }

    /**
     * Retrieve a completed job
     *
     * NOTE: This will return requested document for download
     *
     * @return void
     */
    public function retrieveAction()
    {
        $job = $this->getJob();
        if (!($job instanceof Job)) return $job;

        if ($job->status != JOB_STATUS_COMPLETED) {
            return new JsonModel(array(
                'status' => 'error',
                'error' => $this->translator->translate('job.api.error.jobNotCompleted')
            ));
        }

        // Get the requested conversion stage
        if (!($conversionStage = (int) $this->params()->fromQuery('conversionStage'))) {
            return new JsonModel(array(
                'status' => 'error',
                'error' => $this->translator->translate('job.api.error.conversionStageParameterMissing')
            ));
        }

        // Get the document for the conversion stage
        if (!($document = $job->getStageDocument($conversionStage))) {
            return new JsonModel(array(
                'status' => 'error',
                'error' => $this->translator->translate('job.api.error.documentNotFound')
            ));
        }

        if (file_exists($document->path)) {
            $response = $this->getResponse();
            $headers = $response->getHeaders();
            $headers->addHeaderLine('Content-Type', $document->mimeType);
            $headers->addHeaderLine('Content-Length', $document->size);
            $headers->addHeaderLine('Content-Disposition', 'attachment; filename="' . $document->getFileName()  . '"');
            $response->send();

            echo file_get_contents($document->path);
            exit;
        }
    }

    /**
     * Get a job instance for a given job id
     *
     * @return mixed Job instance or array with error messages
     */
    protected function getJob()
    {
        // Make sure the job id parameter is provided
        if (!($jobId = (int) $this->params()->fromQuery('id'))) {
            return new JsonModel(array(
                'status' => 'error',
                'error' => $this->translator->translate('job.api.error.jobIdParameterMissing')
            ));
        }

        $job = $this->jobDAO->find($jobId);

        // Check if the job exists and the user is the owner of the job
        if (!$job or !($this->identity()->id == $job->user->id)) {
            return new JsonModel(array(
                'status' => 'error',
                'error' => $this->translator->translate('job.api.error.invalidJobId')
            ));
        }

        return $job;
    }
}
