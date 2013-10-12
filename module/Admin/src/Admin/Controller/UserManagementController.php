<?php
namespace Admin\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

use Xmlps\Logger\Logger;
use Zend\Mvc\I18n\Translator;
use User\Model\DAO\UserDAO;

class UserManagementController extends AbstractActionController {
    protected $logger;
    protected $translator;

    protected $userDAO;

    /**
     * Constructor
     *
     * @param Logger $logger
     * @param Translator $translator
     * @param UserDAO $userDAO
     * @return void
     */
    public function __construct(Logger $logger, Translator $translator, UserDAO $userDAO)
    {
        $this->logger = $logger;
        $this->translator = $translator;
        $this->userDAO = $userDAO;
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
        if (empty($paginator)) {
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

    }

    /**
     * Remove a user
     *
     * @return void
     */
    public function removeAction()
    {

    }
}
