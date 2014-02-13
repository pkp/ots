<?php
namespace Api\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\JsonModel;
use Zend\Mvc\I18n\Translator;
use Xmlps\Logger\Logger;
use CitationstyleConversion\Model\Citationstyles;

class SiteController extends AbstractActionController
{
    protected $logger;
    protected $translator;
    protected $citationStyles;

    /**
     * Constructor
     *
     * @param Logger $logger
     * @param Translator $translator
     * @param CitationStyles $citationStyles
     *
     * @return void
     */
    public function __construct(
        Logger $logger,
        Translator $translator,
        CitationStyles $citationStyles
    )
    {

        $this->logger = $logger;
        $this->translator = $translator;
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
            return new JsonModel(array(
                'status' => 'error',
                'error' => $this->translator->translate('job.api.error.fragmentParameterMissing')
            ));
        }

        $citationStyles = $this->citationStyles->getTitleList($fragment);

        return new JsonModel(array(
            'autocomplete' => $citationStyles,
            'status' => 'success'
        ));
    }
}
