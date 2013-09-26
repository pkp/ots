<?php

namespace User\Form;

use Zend\Form\Form;
use Zend\Mvc\I18n\Translator;

class LoginForm extends Form
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

        parent::__construct('login');
        $this->setAttribute('method', 'post');
        $this->setAttribute('class', 'login-form');

        // Add the email field
        $this->add(
            array(
                'name' => 'email',
                'type' => '\Zend\Form\Element\Email',
                'attributes' => array(
                    'placeholder' => $this->translator->translate('user.loginForm.emailAddress')
                ),
            )
        );

        // Add the password field
        $this->add(
            array(
                'name' => 'password',
                'type' => '\Zend\Form\Element\Password',
                'attributes' => array(
                    'placeholder' => $this->translator->translate('user.loginForm.password')
                ),
            )
        );

        // Add the search button
        $this->add(
            array(
                'name' => 'submit',
                'type' => '\Zend\Form\Element\Submit',
                'attributes' => array(
                    'value' => $this->translator->translate('user.loginForm.login'),
                )
            )
        );
    }
}
