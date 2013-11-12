<?php
namespace Manager\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\Mvc\I18n\Translator;
use Zend\Http\Headers;
use Xmlps\Logger\Logger;
use Manager\Model\Queue\Manager;
use Manager\Form\UploadForm;
use Manager\Form\UploadFormInputFilter;
use Manager\Model\DAO\DocumentDAO;
use Manager\Model\DAO\JobDAO;

class ManagerController extends AbstractActionController {
    protected $logger;
    protected $translator;
    protected $queueManager;
    protected $uploadForm;
    protected $uploadFormInputFilter;
    protected $documentDAO;
    protected $jobDAO;

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
        Translator $translator,
        Manager $queueManager,
        UploadForm $uploadForm,
        UploadFormInputFilter $uploadFormInputFilter,
        DocumentDAO $documentDAO,
        JobDAO $jobDAO
    )
    {
        $this->logger = $logger;
        $this->translator = $translator;
        $this->queueManager = $queueManager;
        $this->uploadForm = $uploadForm;
        $this->uploadFormInputFilter = $uploadFormInputFilter;
        $this->documentDAO = $documentDAO;
        $this->jobDAO = $jobDAO;
    }

    /**
     * Upload action
     *
     * @return mixed Array containing view variables
     */
    public function uploadAction()
    {
        $request = $this->getRequest();
        if ($this->request->isPost()) {
            $data = array_merge_recursive(
                $request->getPost()->toArray(),
                $request->getFiles()->toArray()
            );

            $this->uploadForm->setInputFilter(
                $this->uploadFormInputFilter->getInputFilter()
            );
            $this->uploadForm->setData($data);
            if ($this->uploadForm->isValid()) {
                // Run file input filters (move the file)
                $data = $this->uploadFormInputFilter
                    ->getInputFilter()
                    ->getValues();

                $flashMessenger = $this->flashMessenger();
                $flashMessenger->setNamespace('success');
                $flashMessenger->addMessage(
                    $this->translator->translate(
                        'manager.upload.success'
                    )
                );

                // Create a new job
                $job = $this->jobDAO->getInstance();
                $job->user = $this->identity();
                $this->jobDAO->save($job);

                // Move the uploaded file to its job directory
                $upload = $data['upload'];
                $upload['path'] = $job->getDocumentPath() . '/' . $upload['name'];
                rename($upload['tmp_name'], $upload['path']);

                // Create new document
                $document = $this->documentDAO->getInstance();
                $document->job = $job;
                $document->conversionStage = $job->conversionStage;
                $document->path = $upload['path'];
                $this->documentDAO->save($document);

                $this->logger->info(
                    sprintf(
                        $this->translator->translate(
                            'manager.job.createLog'
                        ),
                        $job->id
                    )
                );

                // Send the job to the queue manager
                $this->queueManager->addJob($job->id);

                return $this->redirect()->toRoute('manager', array('action' => 'list'));
            }
        }

        return array('uploadForm' => $this->uploadForm);
    }

    /**
     * List action
     *
     * @return mixed Array containing view variables
     */
    public function listAction()
    {
        // Get the paginator
        $paginator = $this->jobDAO->getJobPaginator($this->identity());
        $page = $this->params()->fromRoute('page');
        $paginator ->setCurrentPageNumber($page);
        $paginator->setItemCountPerPage(20);

        // Display error if we got no messages
        if ($paginator->count() == 0) {
            $this->layout()->messages = array(
                'info' => array( $this->translator->translate(
                    'manager.job.noEntriesFound'
                )),
            );
            return;
        }

        return array('jobs' => $paginator);
    }

    /**
     * Lists details of a job
     *
     * @return mixed Array containing view variables
     */
    public function detailsAction()
    {
        $jobId = (int) $this->params()->fromRoute('id');

        if (!($job = $this->jobDAO->find($jobId))) {
            $this->getResponse()->setStatusCode(404);
            return;
        }

        return array('job' => $job);
    }

    /**
     * Download a processed document
     */
    public function downloadAction()
    {
        $documentId = (int) $this->params()->fromRoute('id');

        if (!($document = $this->documentDAO->find($documentId))) {
            $this->getResponse()->setStatusCode(404);
            return;
        }

        // Check if the user owns the document
        $user = $this->identity();
        if ($document->job->user->id != $user->id) {
            $flashMessenger = $this->flashMessenger();
            $flashMessenger->setNamespace('error');
            $flashMessenger->addMessage(
                $this->translator->translate(
                    'application.acl.notAuthorized'
                )
            );

            return $this->redirect()->toRoute('home');
        }

        $response = $this->getEvent()->getResponse();
        $response->setHeaders(Headers::fromString(
            "Content-Type: {$document->mimeType}\r\n" .
            "Content-Length: {$document->size}\r\n" .
            "Content-Disposition: attachment; filename=\"{$document->getFileName()}\""
        ));
        $response->setContent(file_get_contents($document->path));

        return $response;
    }
}
