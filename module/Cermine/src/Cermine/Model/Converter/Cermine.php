<?php

namespace Cermine\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;

use Manager\Model\Converter\AbstractConverter;

/**
 * Extracts information from PDF documents using CERMINE
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
        if (!isset($config['cerminejar']) ||
            !isset($config['jre'])) {
            throw new \Exception('CERMINE jar and/or Java are not configured');
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
     * Extract content from the document.
     *
     * @return void
     */
    public function convert()
    {
        // In the future, we might break this into multiple different
        // kinds of actions supported by CERMINE, but for now it only
        // performs extraction.

        $this->logger->infoTranslate('cermine.cermine.beginConversion');

        $command = new Command;

        // Run Java or JRE...
        $command->setCommand($this->config['jre']);

        // ... with CERMINE in the classpath, ...
        $command->addSwitch('-cp', $this->config['cerminejar']);

        // ... the content extraction command, ...
        $command->addArgument('pl.edu.icm.cermine.PdfNLMContentExtractor');

        // ... the input file, ...
        $command->addSwitch('-path', $this->inputFile);

        // Send STDERR to STDOUT, so we can capture it, but send
        // STDOUT to our destination.
        $command->addRedirect('2>&1 >' . $this->outputFile);

        $this->logger->debugTranslate(
            'cermine.cermine.executeCommandLog',
            $command->getCommand()
        );

        // Execute the conversion
        $command->execute();
        $this->status = $command->isSuccess();
        $this->output = $command->getOutputString();

        $this->logger->debugTranslate(
            'cermine.cermine.executeCommandOutputLog',
            $this->getOutput()
        );
    }
}
