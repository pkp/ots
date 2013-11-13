<?php

namespace ReferencesConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Zend\Mvc\I18n\Translator;

use Manager\Model\Converter\AbstractConverter;

/**
 * Parses references from NLM XML file
 */
class References extends AbstractConverter
{
    protected $logger;
    protected $translator;

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
    public function __construct(Logger $logger, Translator $translator)
    {
        $this->logger = $logger;
        $this->translator = $translator;
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
     * Parse the references
     *
     * @return void
     */
    public function convert()
    {
        $this->logger->debug(
            $this->translator->translate('foo')
        );

        touch($this->outputFile);
        file_put_contents($this->outputFile, rand());

        $this->status = 0;
    }
}
