<?php
/**
 * Upload form for documents that need to be converted
 */
namespace Manager\Form;

use Zend\Form\Form;
use Zend\Mvc\I18n\Translator;

class UploadForm extends Form
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

        parent::__construct('upload');
        $this->setAttribute('method', 'post');
        $this->setAttribute('class', 'upload-form');

        // Add the upload field
        $this->add(
            array(
                'name' => 'upload',
                'type' => '\Zend\Form\Element\File',
                'options' => array(
                    'label' => $this->translator->translate('manager.uploadForm.file'),
                ),
            )
        );

        $this->add(
            array(
                'name' => 'citationStyle',
                'type' => '\Zend\Form\Element\Text',
                'options' => array(
                    'label' => $this->translator->translate('manager.uploadForm.citationStyles'),
                ),
                'attributes' => array(
                    'placeholder' => $this->translator->translate('manager.uploadForm.citationStyleAutocomplete')
                ),
            )
        );

        // Add the submit button
        $this->add(
            array(
                'name' => 'submit',
                'type' => '\Zend\Form\Element\Submit',
                'attributes' => array(
                    'value' => $this->translator->translate('manager.uploadForm.uploadDocument'),
                )
            )
        );
    }
}
