<?php

namespace Manager\Form;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;

class UploadFormInputFilter implements InputFilterAwareInterface
{
    public $upload;

    protected $inputFilter;

    /**
     * Initialized properties
     *
     * @param mixed $data Array containing property data
     * @return void
     */
    public function exchageArray($data)
    {
        $this->upload = isset($data['upload']) ? $data['upload'] : null;
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

            // File upload
            $inputFilter->add($factory->createInput(array(
                'name' => 'upload',
                'type' => 'Zend\InputFilter\FileInput',
                'required' => true,
                'filters' => array(
                    array(
                        'name' => 'Zend\Filter\File\RenameUpload',
                        'options' => array(
                            'target' => './var/uploads',
                        ),
                    ),
                ),
            )));

            // Style selector
            $inputFilter->add($factory->createInput(array(
                'name' => 'citationStyle',
                'required' => true,
            )));

            $this->inputFilter = $inputFilter;
        }

        return $this->inputFilter;
    }
}
