<?php

namespace User\Form;

use Zend\Form\Form;
use Zend\Mvc\I18n\Translator;

class ApiAuthTokenForm extends Form
{
    protected $translator;

    /**
     * Constructor
     *
     * @return void
     */
    public function __construct(Translator $translator)
    {
        $this->translator = $translator;

        parent::__construct('apiauthtoken');
        
        $this->setAttribute('method', 'post');
        $this->setAttribute('class', 'apiauthtoken-form');
        
        // Add the submit button
        $this->add(
            array(
                'name' => 'submit',
                'type' => '\Zend\Form\Element\Submit',
                'attributes' => array(
                    'value' => $this->translator->translate('user.ApiAuthTokenForm.submit'),
                )
            )
        );
    }
    
}