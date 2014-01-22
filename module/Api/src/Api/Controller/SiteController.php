<?php
namespace Api\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\Mvc\I18n\Translator;
use Xmlps\Logger\Logger;
use Zend\Authentication\AuthenticationService;
use CitationstyleConversion\Model\Citationstyles;

class SiteController extends AbstractApiController {

    protected $citationStyles;

    /**
     * Constructor
     *
     * @param Logger $logger
     * @param Translator $translator
     * @param AuthenticationService $authService
     * @param CitationStyles $citationStyles
     *
     * @return void
     */
    public function __construct(
        Logger $logger,
        Translator $translator,
        AuthenticationService $authService,
        CitationStyles $citationStyles
    )
    {
        parent::__construct($logger, $translator, $authService);

        $this->citationStyles = $citationStyles;
    }


    /**
     * Implements autocomplete functionality for the citationstyle text field
     * in the upload form
     *
     * @return array Array containing a list of titles that match the provided fragment
     */
    public function citationStyleAutocompleteAction()
    {
        // Make sure the file content parameter is provided
        if (!($fragment = $this->params()->fromQuery('fragment'))) {
            return array(
                'error' => $this->translator->translate('job.api.error.fragmentParameterMissing')
            );
        }

        $citationStyles = $this->citationStyles->getTitleList($fragment);

        return array(
            'autocomplete' => $citationStyles,
            'status' => 'success'
        );
    }
}
