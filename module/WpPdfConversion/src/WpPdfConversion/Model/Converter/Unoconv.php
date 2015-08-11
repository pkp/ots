<?php

namespace WpPdfConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;

use Manager\Model\Converter\AbstractConverter;

/**
 * Converts documents using Open/Libreoffice and unoconv
 */
class Unoconv extends AbstractConverter
{
    protected $config;
    protected $logger;

    protected $filter;
    protected $inputFile;
    protected $outputFile;
    protected $verbose = true;

    /**
     * Constructor
     *
     * @param mixed $config Unoconv config
     * @param Logger $logger Logger
     *
     * @return void
     */
    public function __construct($config, Logger $logger)
    {
        if (!isset($config['command'])) {
            throw new \Exception('Unoconv command is not configured');
        }

        $this->config = $config;
        $this->logger = $logger;
    }

    /**
     * Set the filter to use for the conversion
     *
     * @param mixed $filter Conversion filter to use (i.e. docx, pdf)
     *
     * @return void
     */
    public function setFilter($filter)
    {
        $this->filter = $filter;
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
     * Set whether unoconv should be verbose or not
     *
     * @param Bool $verbose
     *
     * @return void
     */
    public function setVerbose(Bool $verbose)
    {
        $this->verbose = $verbose;
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

        // Add verbosity switch
        if ($this->verbose) $command->addSwitch('-vvv');

        // Add the filter
        if ($this->filter) $command->addSwitch('-f', $this->filter);

        // Add the output file
        if (!$this->outputFile) {
            throw new \Exception('No output file given');
        }

        $command->addSwitch('-o', $this->outputFile);

        // Add the input file
        if (!$this->inputFile) {
            throw new \Exception('No input file given');
        }

        $command->addArgument($this->inputFile);

        // Redirect STDERR to STDOUT to captue it in $this->output
        $command->addRedirect('2>&1');

        $this->logger->debugTranslate(
            'wppdfconversion.unoconv.executeCommandLog',
            $command->getCommand()
        );

        // Execute the conversion
        $command->execute();
        $this->status = $command->isSuccess();
        $this->output = $command->getOutputString();

        $this->logger->debugTranslate(
            'wppdfconversion.unoconv.executeCommandOutputLog',
            $this->getOutput()
        );
    }
}
