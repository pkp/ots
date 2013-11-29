<?php
namespace Admin\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

use Xmlps\Logger\Logger;
use Zend\Mvc\I18n\Translator;
use User\Model\DAO\UserDAO;
use Admin\Form\UserEditForm;
use Admin\Form\UserRemovalForm;

class UserManagementController extends AbstractActionController {
    protected $logger;
    protected $translator;

    protected $userDAO;
    protected $userEditForm;
    protected $userRemovalForm;

    /**
     * Constructor
     *
     * @param Logger $logger
     * @param Translator $translator
     * @param UserDAO $userDAO
     * @param UserEditFrom $userEditForm
     * @param UserRemovalFrom $userRemovalForm
     * @return void
     */
    public function __construct(
        Logger $logger,
        Translator $translator,
        UserDAO $userDAO,
        UserEditForm $userEditForm,
        UserRemovalForm $userRemovalForm
    )
    {
        $this->logger = $logger;
        $this->translator = $translator;
        $this->userDAO = $userDAO;
        $this->userEditForm = $userEditForm;
        $this->userRemovalForm = $userRemovalForm;
    }

    /**
     * List users
     *
     * @return mixed Array containing view variables
     */
    public function listAction()
    {
        // Get the paginator
        $paginator = $this->userDAO->getUserPaginator();
        $page = $this->params()->fromRoute('page');
        $paginator ->setCurrentPageNumber($page);
        $paginator->setItemCountPerPage(20);

        // Display error if we got no messages
        if ($paginator->count() == 0) {
            $this->layout()->messages = array(
                'info' => array( $this->translator->translate(
                    'admin.user.noEntriesFound'
                )),
            );
            return;
        }

        return array('users' => $paginator);
    }

    /**
     * Edit a user
     *
     * @return void
     */
    public function editAction()
    {
        // Process POST requests
        if ($this->request->isPost()) {
            $data = $this->request->getPost();
            $this->userEditForm->setData($data);

            // Fetch the user object
            $user = $this->userDAO->find($data['id']);
            if (!$user) {
                throw new \Exception('Couldn\'t find user with id ' . $id);
            }

            if ($this->userEditForm->isValid()) {
                // Update the user
                $user->exchangeArray($data);
                $this->userDAO->save($user);

                $flashMessenger = $this->flashMessenger();
                $flashMessenger->setNamespace('success');
                $flashMessenger->addMessage(
                    $this->translator->translate(
                        sprintf(
                            $this->translator->translate(
                                'admin.userManagement.userEditSuccess'
                            ),
                            $user->email
                        )
                    )
                );

                $this->logger->infoTranslate(
                    'admin.userManagement.userEditSuccessLog',
                    $user->email
                );

                return $this->redirect()->toRoute(
                    'admin/user_management',
                    array('action' => 'list')
                );
            }
        }

        // Process GET requests
        else {
            $id = $this->params()->fromRoute('id');
            $user = $this->userDAO->find($id);

            if (!$user) {
                $this->getResponse()->setStatusCode(404);
                return;
            }
        }

        $this->userEditForm->bind($user);

        return array(
            'userEditForm' => $this->userEditForm,
            'user' => $user,
        );
    }

    /**
     * Remove a user
     *
     * @return void
     */
    public function removeAction()
    {
        // Process user removal requests
        if ($this->request->isPost()) {
            $data = $this->request->getPost();
            $id = (int) $data['id'];

            // Fetch the user object
            $user = $this->userDAO->find($id);

            if (!$user) {
                throw new \Exception('Couldn\'t find user with id ' . $id);
            }

            // Remove the user
            $this->userDAO->remove($user);

            $flashMessenger = $this->flashMessenger();
            $flashMessenger->setNamespace('success');
            $flashMessenger->addMessage(
                $this->translator->translate(
                    sprintf(
                        $this->translator->translate(
                            'admin.userManagement.userRemovalSuccess'
                        ),
                        $user->email
                    )
                )
            );

            $this->logger->infoTranslate(
                'admin.userManagement.userRemovalSuccessLog',
                $user->email
            );

            return $this->redirect()->toRoute(
                'admin/user_management',
                array('action' => 'list')
            );
        }

        $id = $this->params()->fromRoute('id');
        $user = $this->userDAO->find($id);

        if (!$user) {
            $this->getResponse()->setStatusCode(404);
            return;
        }

        $this->userRemovalForm->bind($user);

        return array(
            'userRemovalForm' => $this->userRemovalForm,
            'user' => $user,
        );
    }
}
