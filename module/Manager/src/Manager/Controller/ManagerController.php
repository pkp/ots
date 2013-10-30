<?php
namespace Manager\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\Mvc\I18n\Translator;
use Xmlps\Logger\Logger;
use Manager\Form\UploadForm;
use Manager\Form\UploadFormInputFilter;

class ManagerController extends AbstractActionController {
    protected $logger;
    protected $translator;
    protected $uploadForm;
    protected $uploadFormInputFilter;

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
        UploadForm $uploadForm,
        UploadFormInputFilter $uploadFormInputFilter
    )
    {
        $this->logger = $logger;
        $this->translator = $translator;
        $this->uploadForm = $uploadForm;
        $this->uploadFormInputFilter = $uploadFormInputFilter;
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

                // Create new document
                $upload = $data['upload'];
                $documentDAO = $this->getServiceLocator()->get('Manager\Model\DAO\DocumentDAO');
                $document = $documentDAO->getInstance();
                $document->path = $upload['tmp_name'];
                $document->uploadFileName = $upload['name'];
                $document->mimeType = $upload['type'];
                $document->size = $upload['size'];

                // Create a new job
                $jobDAO = $this->getServiceLocator()->get('Manager\Model\DAO\JobDAO');
                $job = $jobDAO->getInstance();
                $job->user = $this->identity();
                $job->document = $document;
                $jobDAO->save($job);

                // Trigger the file upload event to create a new job
                $this->getEventManager()->trigger('file-upload', $this, array('data' => $data));

                $this->logger->info(
                    sprintf(
                        $this->translator->translate(
                            'manager.upload.successLog'
                        ),
                        $data['upload']['tmp_name']
                    )
                );

                return $this->redirect()->toRoute('home');
            }
        }

        return array('uploadForm' => $this->uploadForm);
    }
}
