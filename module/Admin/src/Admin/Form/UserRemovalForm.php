<?php

namespace Admin\Form;

use Zend\Form\Form;
use Zend\Mvc\I18n\Translator;

class UserRemovalForm extends Form
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

        parent::__construct('userRemovalForm');
        $this->setAttribute('method', 'post');

        // Add the user id field
        $this->add(
            array(
                'name' => 'userId',
                'type' => '\Zend\Form\Element\Hidden',
            )
        );

        // Add the submit button
        $this->add(
            array(
                'name' => 'submit',
                'type' => '\Zend\Form\Element\Submit',
                'attributes' => array(
                    'value' => $this->translator->translate('application.generic.remove'),
                )
            )
        );
    }
}
