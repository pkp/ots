<?php

namespace User\Form;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Zend\Mvc\I18n\Translator;

class PasswordResetFormInputFilter implements InputFilterAwareInterface
{
    protected $translator;

    public $passwordNew;
    public $passwordConfirm;

    protected $inputFilter;

    /**
     * Constructor
     *
     * @param Translator $translator
     * @return void
     */
    public function __construct(Translator $translator)
    {
        $this->translator = $translator;
    }

    /**
     * Initialized properties
     *
     * @param mixed $data Array containing property data
     * @return void
     */
    public function exchageArray($data)
    {
        $this->passwordNew = isset($data['passwordNew']) ? $data['passwordNew'] : null;
        $this->passwordConfirm = isset($data['passwordConfirm']) ? $data['passwordConfirm'] : null;
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

            $passwordBaseValidator = array(
                'name' => 'StringLength',
                'options' => array(
                    'encoding' => 'UTF-8',
                    'min' => 7,
                ),
            );

            $inputFilter->add($factory->createInput(array(
                'name' => 'passwordNew',
                'required' => true,
                'validators' => array($passwordBaseValidator),
            )));

            $inputFilter->add($factory->createInput(array(
                'name' => 'passwordConfirm',
                'required' => true,
                'validators' => array(
                    $passwordBaseValidator,
                    array(
                        'name' => 'Identical',
                        'options' => array(
                            'token' => 'passwordNew',
                            'messages' => array(
                                \Zend\Validator\Identical::NOT_SAME => $this->translator->translate('user.form.passwordsDontMatch')
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
