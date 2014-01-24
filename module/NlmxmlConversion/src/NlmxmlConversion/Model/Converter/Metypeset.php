<?php

namespace NlmxmlConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;

use Manager\Model\Converter\AbstractConverter;

/**
 * Converts documents to NLM-XML using meTypeset
 */
class Metypeset extends AbstractConverter
{
    protected $config;
    protected $logger;

    protected $inputFile;
    protected $outputDirectory;

    /**
     * Constructor
     *
     * @param mixed $config meTypeset config
     * @param Logger $logger Logger
     *
     * @return void
     */
    public function __construct($config, Logger $logger)
    {
        if (!isset($config['command'])) {
            throw new \Exception('meTypeset command is not configured');
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
     * Set the output directory
     *
     * @param mixed $outputDirectory
     * @return void
     */
    public function setOutputDirectory($outputDirectory)
    {
        $this->outputDirectory = $outputDirectory;
    }

    /**
     * Convert the document
     *
     * @return void
     */
    public function convert()
    {
        $command = new Command;

        // Set the base command
        $command->setCommand($this->config['command']);

        // Set the input document type
        $command->addArgument('docx');

        // Add the input file
        if (!$this->inputFile) {
            throw new \Exception('No input file given');
        }
        $command->addArgument($this->inputFile);

        // Add the output directory
        if (!$this->outputDirectory) {
            throw new \Exception('No output directory given');
        }
        $command->addArgument($this->outputDirectory);

        // Redirect STDERR to STDOUT to captue it in $this->output
        $command->addRedirect('2>&1');

        $this->logger->debugTranslate(
            'nlmxmlconversion.metypeset.executeCommandLog',
            $command->getCommand()
        );

        // Execute the conversion
        $command->execute();
        $this->status = $command->isSuccess();
        $this->output = $command->getOutputString();

        $this->logger->debugTranslate(
            'nlmxmlconversion.metypeset.executeCommandOutputLog',
            $this->output
        );
    }
}
