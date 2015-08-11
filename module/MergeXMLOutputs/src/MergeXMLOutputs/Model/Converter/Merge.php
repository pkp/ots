<?php

namespace MergeXMLOutputs\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use FilesystemIterator;
use ZipArchive;

use Manager\Model\Converter\AbstractConverter;

/**
 * Merges the front matter JATS output from CERMINE with the body and back
 * matter JATS output from meTypeset. Right now it parses XML with regex
 * because I'm a huge jerk. In the future it should both a) not do this,
 * and b) evaluate and compare body output from both libraries, rather than
 * simply discarding CERMINE's and using meTypeset's.
 */
class Merge extends AbstractConverter
{
    protected $config;
    protected $logger;

    protected $inputFile;
    protected $outputFile;
    protected $outputTmpPath;

    /**
     * Constructor
     *
     * @param mixed $config Merge config
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
     * Set the input file to convert
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFile($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception("One or both of the parsers didn't complete successfully");
        }

        $this->inputFile = $inputFile;

        $this->outputTmpPath = dirname($this->inputFile) . '/mergeTmp';
        if (!is_dir($this->outputTmpPath)) mkdir($this->outputTmpPath);
    }

    /**
     * Set the output file
     *
     * @param mixed $outputFile
     *
     * @return void
     */
    public function setOutputFile($outputFile)
    {
        $this->outputFile = $outputFile;
    }

    /**
     * Convert the HTML to PDF
     *
     * @return void
     */
    public function convert()
    {
        $this->logger->debugTranslate('MergeXMLOutputs.converter.startLog');

        // Do the XML merge
        $this->execute();

        // Remove temporary files
        $this->cleanup();
    }

    /**
     * Do the XML merge
     *
     * @return void
     */
    protected function execute()
    {
        $command = new Command;

        // Set the base command
        // Figure out what the heck 'command' is
        $command->setCommand($this->config['wkhtmltopdf']['command']);

        // Add the input file
        $inputFile = $this->outputTmpPath . '/document.xml';
        if (!$inputFile) {
            throw new \Exception('No input file given');
        }
        $command->addArgument($inputFile);

        // Add the output directory
        if (!$this->outputFile) {
            throw new \Exception('No output file given');
        }
        $command->addArgument($this->outputFile);

        // Redirect STDERR to STDOUT to captue it in $this->output
        $command->addRedirect('2>&1');

        $this->logger->debugTranslate(
            'MergeXMLOutputs.catter.executeCommandLog',
            $command->getCommand()
        );

        // Execute the conversion
        $command->execute();
        $this->status = $command->isSuccess();
        $this->output = $command->getOutputString();

        $this->logger->debugTranslate(
            'MergeXMLOutputs.catter.executeCommandOutputLog',
            $this->output
        );
    }
}
