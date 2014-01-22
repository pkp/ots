<?php


namespace CitationstyleConversion\Model\Validator;

use Zend\Validator\AbstractValidator;
use CitationstyleConversion\Model\Citationstyles;

/**
 * Validates the citation style title
 */
class Title extends AbstractValidator
{
    const MSG_TITLE = 'msgTitle';

    protected $citationStyles;

    public function __construct($options = null)
    {
        parent::__construct($options);

        if ($options && is_array($options) && isset($options['citationStyles']) && $options['citationStyles'] instanceof Citationstyles) {
            $this->citationStyles = $options['citationStyles'];
        }
        else {
            throw new Exception('An instance of CitationstyleConversion\Model\Citationstyles needs to be provided');
        }
    }

    protected $messageTemplates = array(
        self::MSG_TITLE => 'Invalid citation style',
    );

    public function isValid($title)
    {
        if (!$this->citationStyles->validTitle($title)) {
            $this->setValue($title);
            $this->error(self::MSG_TITLE);
            return false;
        }

        return true;
    }
}
