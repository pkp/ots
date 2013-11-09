<?php

namespace Manager\Model\Converter;

use Manager\Model\Converter\ConverterInterface;

/**
 * Abstract Converter class for document converters
 */
abstract class AbstractConverter implements ConverterInterface {
    protected $output;
    protected $status;

    /**
     * Returns the conversion output
     *
     * @return string Conversion output
     */
    public function getOutput()
    {
        return $this->output;
    }

    /**
     * Returns the status (0 == success)
     *
     * @return void
     */
    public function getStatus()
    {
        return $this->status;
    }
}
