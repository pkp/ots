<?php
namespace Admin\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

use Xmlps\Logger\Logger;
use Zend\Mvc\I18n\Translator;
use Application\Model\DAO\LogDAO;
use User\Model\DAO\UserDAO;

class AdminController extends AbstractActionController {
    protected $logger;
    protected $translator;

    protected $logDAO;
    protected $userDAO;

    public function __construct(Logger $logger, Translator $translator, LogDAO $logDAO, UserDAO $userDAO)
    {
        $this->logger = $logger;
        $this->translator = $translator;
        $this->logDAO = $logDAO;
        $this->userDAO = $userDAO;
    }

    /**
     * Index action
     *
     * @return mixed Array containing view variables
     */
    public function indexAction() {}

    /**
     * User management action
     *
     * @return mixed Array containing view variables
     */
    public function userManagementAction()
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
     * System log action
     *
     * @return mixed Array containing view variables
     */
    public function systemLogAction()
    {
        // Get the paginator
        $paginator = $this->logDAO->getLogPaginator();
        $page = $this->params()->fromRoute('page');
        $paginator ->setCurrentPageNumber($page);
        $paginator->setItemCountPerPage(15);

        // Display error if we got no messages
        if (empty($paginator)) {
            $this->layout()->messages = array(
                'info' => array( $this->translator->translate(
                    'admin.log.noEntriesFound'
                )),
            );
            return;
        }

        return array(
            'logEntries' => $paginator,
            'priorities' => $this->logger->getPriorities()
        );
    }
}
