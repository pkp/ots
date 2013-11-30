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
    protected $logger;

    protected $inputFile;
    protected $outputFile;

    /**
     * Constructor
     *
     * @param Logger $logger Logger
     * @param Translator $translator Translator
     *
     * @return void
     */
    public function __construct(Logger $logger)
    {
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
        // TODO: Config
        $command->setCommand('xml2bib');
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
