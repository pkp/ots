<?php

namespace User\Form;

use Zend\Form\Form;
use Zend\Mvc\I18n\Translator;

class PasswordResetForm extends Form
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

        parent::__construct('passwordReset');
        $this->setAttribute('method', 'post');
        $this->setAttribute('class', 'password-reset-form');

        // Add the new password field
        $this->add(
            array(
                'name' => 'passwordNew',
                'type' => '\Zend\Form\Element\Password',
                'attributes' => array(
                    'placeholder' => $this->translator->translate('user.form.newPassword')
                ),
            )
        );

        // Add the password confirm field
        $this->add(
            array(
                'name' => 'passwordConfirm',
                'type' => '\Zend\Form\Element\Password',
                'attributes' => array(
                    'placeholder' => $this->translator->translate('user.form.passwordConfirm')
                ),
            )
        );

        // Add the submit button
        $this->add(
            array(
                'name' => 'submit',
                'type' => '\Zend\Form\Element\Submit',
                'attributes' => array(
                    'value' => $this->translator->translate('user.form.save'),
                )
            )
        );
    }
}
