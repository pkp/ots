<?php
namespace Admin\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

use Zend\Mvc\I18n\Translator;
use Application\Model\DAO\LogDAO;
use Xmlps\Logger\Logger;

class AdminController extends AbstractActionController {
    protected $logDAO;

    public function __construct(Logger $logger, Translator $translator, LogDAO $logDAO)
    {
        $this->logger = $logger;
        $this->translator = $translator;
        $this->logDAO = $logDAO;
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
    public function userManagementAction() {}

    /**
     * System log action
     *
     * @return mixed Array containing view variables
     */
    public function systemLogAction()
    {
        // Get the paginator
        $paginator = $this->logDAO->getLogEntryPaginator();
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
