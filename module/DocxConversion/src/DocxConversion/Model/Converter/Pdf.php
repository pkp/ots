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

    protected $inputFile;

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

    /**
     * Set the file to convert
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFile($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception('Input file doesn\'t exist');
        }

        $this->inputFile = $inputFile;
    }

    /**
     * Convert the document
     *
     * @return void
     */
    public function convert() {}
}
