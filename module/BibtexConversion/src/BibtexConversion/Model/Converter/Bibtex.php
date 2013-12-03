<?php

namespace BibtexConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;

use Manager\Model\Converter\AbstractConverter;

/**
 * Parses the references XML file and converts it to Bibtex
 */
class Bibtex extends AbstractConverter
{
    protected $config;
    protected $logger;

    protected $inputFile;
    protected $outputFile;

    /**
     * Constructor
     *
     * @param mixed $config Bibtex config
     * @param Logger $logger Logger
     *
     * @return void
     */
    public function __construct($config, Logger $logger)
    {
        if (!isset($config['command'])) {
            throw new \Exception('xml2bib command is not configured');
        }

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
     * Sets the output file for the converted Bibtex
     *
     * @return void
     */
    public function setOutputFile($outputFile) {
        $this->outputFile = $outputFile;
    }

    /**
     * Convert the references xml to Bibtex
     *
     * @return void
     */
    public function convert()
    {
        $this->logger->debugTranslate('bibtexconversion.converter.startLog');

        $command = new Command;
        $command->setCommand($this->config['command']);
        $command->addArgument($this->inputFile);
        $command->addRedirect('2> /dev/null');

        $this->logger->debugTranslate(
            'bibtexconversion.converter.xml2bib.commandLog',
            $command->getCommand()
        );

        // Run the xml2bib conversion
        $command->execute();

        $this->logger->debugTranslate(
            'bibtexconversion.converter.OutputLog',
            $command->getOutputString()
        );

        if ($this->status = $command->isSuccess()) {
            file_put_contents($this->outputFile, $command->getOutputString());
        }
    }
}
