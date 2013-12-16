<?php

namespace CitationstyleConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;
use Xmlps\Libxml\Libxml;
use DOMDocument;
use ZipArchive;

use Manager\Model\Converter\AbstractConverter;

/**
 * Converts the citation style in the HTML to the one requested by the user
 */
class Pandoc extends AbstractConverter
{
    use Libxml;

    protected $config;
    protected $logger;

    protected $inputFileBibtex;
    protected $inputFileNlmxml;
    protected $inputFileHtml;

    protected $citationStyleFile;

    protected $outputPath;
    protected $referencesFile;

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

        $this->disableLibxmlErrorDisplay();
    }

    /**
     * Set the Bibtex input file
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFileBibtex($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception('Bibtex input file doesn\'t exist');
        }

        $this->inputFileBibtex = $inputFile;
    }

    /**
     * Set the NLMXML input file
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFileNlmxml($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception('NLMXML input file doesn\'t exist');
        }

        $this->inputFileNlmxml = $inputFile;

        // Set the output path and temporary references file
        $this->outputPath = dirname($this->inputFileNlmxml);
        $this->referencesFile = $this->outputPath . '/pandocReferences.txt';
    }

    /**
     * Set the HTML input file
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFileHtml($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception('HTML input file doesn\'t exist');
        }

        $this->inputFileHtml = $inputFile;
    }

    /**
     * Set the citation style file
     *
     * @param mixed $citationStyleFile
     *
     * @return void
     */
    public function setCitationStyleFile($citationStyleFile)
    {
        if (!file_exists($citationStyleFile)) {
            throw new \Exception('Citation style file doesn\'t exist');
        }

        $this->citationStyleFile = $citationStyleFile;
    }

    /**
     * Convert the bibliography XML to the requested citationstyle
     *
     * @return void
     */
    public function convert()
    {
        $this->logger->debugTranslate('citationstyleconversion.converter.startLog');

        // Parse the references from the NLMXML document
        if (!$this->parseReferences()) {
            $this->status = false;
            return;
        }

        // Run the pandoc conversion
        $this->execute();


        // Update the references in the HTML document
        if ($this->status) $this->updateHtml();

        $this->cleanup();
    }

    /**
     * Execute the pandoc conversion
     *
     * This step takes a text file that lists the reference id's (prefixed with
     * @, one line each) used in the NLMXML document and a bibtex file
     * containing the bibliography and formats them according to a provided
     * citation style file
     *
     * @return void
     */
    protected function execute()
    {
        $command = new Command;

        // Pandoc expects $HOME to be set
        $commandPrefix = 'HOME=' . $this->outputPath . ' ';

        $command->setCommand($commandPrefix . $this->config['command']);

        // Produce typographically correct output
        $command->addSwitch('--smart');

        // Add the bibliography file
        $command->addSwitch('--bibliography', $this->inputFileBibtex);

        // Add the citation style file
        $command->addSwitch('--csl', $this->citationStyleFile);

        // Add the reference file
        $command->addArgument($this->referencesFile);

        $this->logger->debugTranslate(
            'citationstyleconversion.converter.pandoc.commandLog',
            $command->getCommand()
        );

        // Run the pandoc conversion
        $command->execute();
        $this->status = $command->isSuccess();
        $this->output = $command->getOutputString();

        $this->logger->debugTranslate(
            'citationstyleconversion.converter.OutputLog',
            $command->getOutputString()
        );
    }

    /**
     * Parses the reference ids from the NLMXML document. It creates a text
     * file of the following format:
     *
     *   @[referenceId1]
     *
     *   @[referenceId2]
     *
     *   @[referenceId3]
     *
     *   # References
     *
     * @return void
     */
    protected function parseReferences()
    {
        $dom = new DOMDocument();
        if (!$dom->loadXML(file_get_contents($this->inputFileNlmxml))) {
            $this->logger->debugTranslate(
                'citationstyleconversion.converter.NlmxmlDomErrorLog',
                $this->libxmlErrors()
            );

            return false;
        }

        $references = $dom->getElementsByTagName('ref');
        if (!$references->length) return false;

        $rids = array();
        foreach ($references as $reference) {
            $rids[] = '@' . $reference->getAttribute('rid');
        }

        file_put_contents(
            $this->referencesFile,
            implode(PHP_EOL . PHP_EOL, $rids) . PHP_EOL . PHP_EOL . '#References'
        );

        return true;
    }

    /**
     * Updates the reference list in the HTML with the one formatted by pandoc
     *
     * @return void
     */
    protected function updateHtml()
    {
        // Parse the reference section from the output
        $matches = array();
        if (!preg_match('#\<h1 id\="references"\>References\</h1\>(.*)#s', $this->output, $matches)) {
            return false;
        }
        $references = $matches[1];

        // Extract the HTML document from the ZIP Archive
        $zip = new ZipArchive;
        $zip->open($this->inputFileHtml);
        $html = $zip->getFromName('document.html');

        // Replace the references in the HTML
        // TODO: Check if we can do this with DOM, Maybe change the XML to tag the references section
        $html = preg_replace('#(\<p class\="p"\>\s*?REFERENCES)#s', '\1' . $references, $html);

        $zip->addFromString('document.html', $html);
        $zip->close();
    }

    /**
     * Clean up
     *
     * @return void
     */
    protected function cleanup()
    {
        @unlink($this->referencesFile);
    }
}
