<?php

namespace Admin\Form;

use Zend\Form\Form;
use Zend\Mvc\I18n\Translator;

use User\Entity\User;

class UserEditForm extends Form
{
    protected $translator;
    protected $user;

    /**
     * Constructor
     *
     * @return void
     */
    public function __construct(Translator $translator, User $user)
    {
        $this->translator = $translator;
        $this->user = $user;

        parent::__construct('userEditForm');
        $this->setAttribute('method', 'post');

        // Add the user id field
        $this->add(
            array(
                'name' => 'id',
                'type' => '\Zend\Form\Element\Hidden',
            )
        );

        // Add the user level field
        $this->add(
            array(
                'name' => 'level',
                'type' => '\Zend\Form\Element\Select',
                'options' => array(
                    'label' => $this->translator->translate('user.user.level'),
                    'value_options' => $this->user->getLevelMap(),
                )
            )
        );

        // Add the role field
        $this->add(
            array(
                'name' => 'role',
                'type' => '\Zend\Form\Element\Select',
                'options' => array(
                    'label' => $this->translator->translate('user.user.role'),
                    'value_options' => $this->user->getRoleMap(),
                )
            )
        );

        // Add the submit button
        $this->add(
            array(
                'name' => 'submit',
                'type' => '\Zend\Form\Element\Submit',
                'attributes' => array(
                    'value' => $this->translator->translate('application.generic.save'),
                )
            )
        );
    }
}
