<?php
namespace Api\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\Mvc\I18n\Translator;
use Xmlps\Logger\Logger;

class ApiController extends AbstractActionController {
    protected $logger;
    protected $translator;

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
        Translator $translator
    )
    {
        $this->logger = $logger;
        $this->translator = $translator;
    }
}
