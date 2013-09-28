<?php

namespace User\Form;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Doctrine\ORM\EntityRepository;
use Zend\Mvc\I18n\Translator;

class RegistrationFormInputFilter implements InputFilterAwareInterface
{
    protected $translator;
    protected $userRepository;

    public $email;
    public $password;

    protected $inputFilter;

    /**
     * Constructor 
     *
     * @param Translator $translator
     * @param EntityRepository $userRepository
     * @return void
     */
    public function __construct(
        Translator $translator,
        EntityRepository $userRepository
    )
    {
        $this->translator = $translator;
        $this->userRepository = $userRepository;
    }

    /**
     * Initialized properties
     *
     * @param mixed $data Array containing property data
     * @return void
     */
    public function exchageArray($data)
    {
        $this->email = isset($data['email']) ? $data['email'] : null;
        $this->password = isset($data['password']) ? $data['password'] : null;
    }

    /**
     * Set the input filter.
     *
     * NOTE: not used
     *
     * @return void
     */
    public function setInputFilter(InputFilterInterface $inputFilter) {
        throw new \Exception('Not used');
    }

    /**
     * Retrurns a input filter instance
     *
     * @return InputFilter Input filter instance
     */
    public function getInputFilter()
    {
        if (!$this->inputFilter) {
            $inputFilter = new InputFilter();
            $factory = new InputFactory();

            $inputFilter->add($factory->createInput(array(
                'name' => 'email',
                'required' => true,
                'filters'  => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
                'validators' => array(
                    array(
                        'name' => 'StringLength',
                        'options' => array(
                            'encoding' => 'UTF-8',
                            'max' => 255,
                        ),
                    ),
                    array(
                        'name' => 'EmailAddress',
                    ),
                    array(
                        'name' => 'DoctrineModule\Validator\NoObjectExists',
                        'options' => array(
                            'object_repository' => $this->userRepository,
                            'fields' => array('email'),
                            'messages' => array(
                                \DoctrineModule\Validator\NoObjectExists::ERROR_OBJECT_FOUND => $this->translator->translate('user.registrationForm.userAlreadyExists')
                            ),
                        ),
                    ),
                ),
            )));

            $inputFilter->add($factory->createInput(array(
                'name' => 'password',
                'required' => true,
                'validators' => array(
                    array(
                        'name' => 'StringLength',
                        'options' => array(
                            'encoding' => 'UTF-8',
                            'min' => 7,
                        ),
                    ),
                ),
            )));

            $inputFilter->add($factory->createInput(array(
                'name' => 'passwordConfirm',
                'required' => true,
                'validators' => array(
                    array(
                        'name' => 'StringLength',
                        'options' => array(
                            'encoding' => 'UTF-8',
                            'min' => 7,
                        ),
                    ),
                    array(
                        'name' => 'Identical',
                        'options' => array(
                            'token' => 'password',
                            'messages' => array(
                                \Zend\Validator\Identical::NOT_SAME => $this->translator->translate('user.registrationForm.passwordsDontMatch')
                            )
                        ),
                    ),
                ),
            )));

            $this->inputFilter = $inputFilter;
        }

        return $this->inputFilter;
    }
}
