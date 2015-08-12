<?php

namespace Cermine\Model\Converter;

use Xmlps\Logger\Logger;

use Manager\Model\Converter\AbstractConverter;

/**
 * Converts documents using Open/Libreoffice and unoconv
 */
class Cermine extends AbstractConverter
{
    protected $config;
    protected $logger;

    protected $inputFile;
    protected $outputFile;

    /**
     * Constructor
     *
     * @param mixed $config CERMINE config
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
     * Set the output file
     *
     * @param mixed $outputFile
     * @return void
     */
    public function setOutputFile($outputFile)
    {
        $this->outputFile = $outputFile;
    }

    /**
     * Convert the document
     *
     * @return void
     */
    public function convert() {}
}
