<?php

namespace Manager\Model\Converter;

/**
 * Interface for Converters 
 */
interface ConverterInterface {
    public function getOutput();
    public function getStatus();

    public function convert();
}
