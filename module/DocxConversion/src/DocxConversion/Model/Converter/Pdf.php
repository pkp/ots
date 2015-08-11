<?php

namespace DocxConversion\Model\Converter;

use Xmlps\Logger\Logger;

use Manager\Model\Converter\AbstractConverter;

/**
 * Converts documents from DocX to PDF using Open/Libreoffice
 */
class Pdf extends AbstractConverter
{
    protected $config;
    protected $logger;

    /**
     * Constructor
     *
     * @param mixed $config Pdf config
     * @param Logger $logger Logger
     *
     * @return void
     */
    public function __construct($config, Logger $logger)
    {
        $this->config = $config;
        $this->logger = $logger;
    }
}
