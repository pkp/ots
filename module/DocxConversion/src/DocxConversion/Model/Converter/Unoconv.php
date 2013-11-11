<?php

namespace DocxConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Zend\Mvc\I18n\Translator;

use Manager\Model\Converter\AbstractConverter;

/**
 * Converts documents using Open/Libreoffice and unoconv
 */
class Unoconv extends AbstractConverter
{
    protected $config;
    protected $logger;
    protected $translator;

    protected $filter;
    protected $inputFile;
    protected $outputFile;
    protected $verbose = true;

    /**
     * Constructor
     *
     * @param mixed $config Unoconv config
     * @param Logger $logger Logger
     * @param Translator $translator Translator
     *
     * @return void
     */
    public function __construct($config, Logger $logger, Translator $translator)
    {
        if (!isset($config['command'])) {
            throw new \Exception('Unoconv command is not configured');
        }

        $this->config = $config;

        $this->logger = $logger;
        $this->translator = $translator;
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
        // Set the base command
        $cmd = $this->config['command'];

        // Add verbosity switch
        if ($this->verbose) $cmd .= ' -vvv';

        // Add the filter
        if ($this->filter) $cmd .= ' -f ' . $this->filter;

        // Add the output file
        if (!$this->outputFile) {
            throw new \Exception('No output file given');
        }
        $cmd .= ' -o "' . addslashes($this->outputFile) . '"';

        // Add the input file
        if (!$this->inputFile) {
            throw new \Exception('No input file given');
        }
        $cmd .= ' "' . addslashes($this->inputFile) . '"';

        // Escape the command
        $cmd = escapeshellcmd($cmd);

        // Redirect STDERR to STDOUT to captue it in $this->output
        $cmd .= ' 2>&1';

        $this->logger->debug(
            sprintf(
                $this->translator->translate('docxconversion.unoconv.executeCommandLog'),
                $cmd
            )
        );

        // Execute the conversion
        exec($cmd, $this->output, $this->status);

        $this->logger->debug(
            sprintf(
                $this->translator->translate('docxconversion.unoconv.executeCommandOutputLog'),
                implode("\n", $this->getOutput())
            )
        );
    }
}
