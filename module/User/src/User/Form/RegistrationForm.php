<?php

namespace User\Form;

use Zend\Form\Form;
use Zend\Mvc\I18n\Translator;

class RegistrationForm extends Form
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

        parent::__construct('register');
        $this->setAttribute('method', 'post');
        $this->setAttribute('class', 'register-form');

        // Add the email field
        $this->add(
            array(
                'name' => 'email',
                'type' => '\Zend\Form\Element\Email',
                'attributes' => array(
                    'placeholder' => $this->translator->translate('user.registrationForm.emailAddress')
                ),
            )
        );

        // Add the password field
        $this->add(
            array(
                'name' => 'password',
                'type' => '\Zend\Form\Element\Password',
                'attributes' => array(
                    'placeholder' => $this->translator->translate('user.registrationForm.password')
                ),
            )
        );

        // Add the password confirm field
        $this->add(
            array(
                'name' => 'passwordConfirm',
                'type' => '\Zend\Form\Element\Password',
                'attributes' => array(
                    'placeholder' => $this->translator->translate('user.registrationForm.passwordConfirm')
                ),
            )
        );


        // Add the submit button
        $this->add(
            array(
                'name' => 'submit',
                'type' => '\Zend\Form\Element\Submit',
                'attributes' => array(
                    'value' => $this->translator->translate('user.registrationForm.register'),
                )
            )
        );
    }
}
