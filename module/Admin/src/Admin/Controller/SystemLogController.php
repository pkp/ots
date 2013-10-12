<?php
namespace Admin\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

use Xmlps\Logger\Logger;
use Zend\Mvc\I18n\Translator;
use Application\Model\DAO\LogDAO;

class SystemLogController extends AbstractActionController {
    protected $logger;
    protected $translator;

    protected $logDAO;

    /**
     * Constructor
     *
     * @param Logger $logger
     * @param Translator $translator
     * @param LogDAO $logDAO
     * @return void
     */
    public function __construct(Logger $logger, Translator $translator, LogDAO $logDAO)
    {
        $this->logger = $logger;
        $this->translator = $translator;
        $this->logDAO = $logDAO;
    }

    /**
     * List log entries
     *
     * @return mixed Array containing view variables
     */
    public function listAction()
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
