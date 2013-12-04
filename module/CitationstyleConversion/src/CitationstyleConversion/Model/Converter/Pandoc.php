<?php

namespace CitationstyleConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;
use DOMDocument;
use DOMXpath;
use DOMText;

use Manager\Model\Converter\AbstractConverter;

/**
 * Converts the citation style to the one requested by the user
 */
class Pandoc extends AbstractConverter
{
    protected $config;
    protected $logger;

    protected $inputFile;
    protected $outputFile;

    protected $xml;
    protected $dom;
    protected $domXpath;

    /**
     * Constructor
     *
     * @param mixed $config Pandoc config
     * @param Logger $logger Logger
     *
     * @return void
     */
    public function __construct($config, Logger $logger)
    {
        if (!isset($config['command'])) {
            throw new \Exception('Pandoc command is not configured');
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

        // Populate the XML attribute with the content from the file
        $this->loadXml();

        // Parse the DOM tree from the XML
        $this->parseDom();
    }

    /**
     * Loads the xml from the input file
     *
     * @return void
     */
    protected function loadXml()
    {
        $this->xml = file_get_contents($this->inputFile);
    }

    /**
     * Parses the DOM tree from the xml attribute
     *
     * @return void
     */
    protected function parseDom()
    {
        $this->dom = new DOMDocument();

        if (!$this->dom->loadXML($this->xml)) {
            $this->logger->debugTranslate(
                'citationstyleconversion.converter.loadXML.domErrorLog',
                $this->libxmlErrors()
            );

            return false;
        }

        $this->domXpath = new DOMXPath($this->dom);
    }

    /**
     * Convert the bibliography xml to the requested citationstyle
     *
     * @return void
     */
    public function convert()
    {
        $this->logger->debugTranslate('citationstyleconversion.converter.startLog');

        $command = new Command;
        $command->setCommand($this->config['command']);

        $this->logger->debugTranslate(
            'citationstyleconversion.converter.pandoc.commandLog',
            $command->getCommand()
        );

        // Run the pandoc conversion
        $command->execute();

        $this->logger->debugTranslate(
            'citationstyleconversion.converter.OutputLog',
            $command->getOutputString()
        );

        if ($this->status = $command->isSuccess()) {
            file_put_contents($this->inputFile, $command->getOutputString());
        }
    }
}
