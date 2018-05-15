<?php 

namespace XmlFinal\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;

use Manager\Model\Converter\AbstractConverter;

/**
 * Extracts named entity from xml document
 *
 */
class XmlFinal extends AbstractConverter
{
    protected $logger;
    protected $xmlMergeFile = null;
    protected $bibtexRefFile = null;
    protected $outputFile = null;
    
    /**
     * Constructor
     * 
     * @param Logger $logger Logger
     */
    public function __construct(Logger $logger)
    {
        $this->logger = $logger;
    }
    
    /**
     * Set the xml file from JOB_CONVERSION_STAGE_XML_MERGE stage
     * @param mixed $xmlMergeFile
     * 
     * @return void
     */
    public function setXmlMergeInputFile($xmlMergeFile)
    {
        $this->xmlMergeFile = $xmlMergeFile;
    }

    /**
     * Set the xml file from JOB_CONVERSION_STAGE_BIBTEXREFERENCES stage
     * @param mixed $bibtexRefFile
     *
     * @return void
     */
    public function setBibtexRefInputFile($bibtexRefFile)
    {
        $this->bibtexRefFile = $bibtexRefFile;
    }

    /**
     * Set the output file
     * @param mixed $outputFile
     * 
     * @return void
     */
    public function setOutputFile($outputFile)
    {
        $this->outputFile = $outputFile;
    }

    /**
     * Run xmllint --format on the document to fix ref-list line length
     *
     * @return void
     */
    protected function xmllintFormat($inputFile, $outputFile)
    {
        $command = new Command;
        // Set the base command
        $command->setCommand($this->config['xmllint']['command']);
        // Just fix linebreaks in the XML
        $command->addSwitch('--format');
        // The otherwise-final XML
        $command->addArgument($this->inputFile);
        // Redirect STDOUT to file
        $command->addRedirect('>');
        // The now-final XML
        $command->addArgument($this->outputFile);
        // Run the xmllint command
        $command->execute();
        $this->status = $command->isSuccess();
        $this->output = $command->getOutputString();
    }

    /**
     * Copy final xml document
     */
    public function convert() 
    {
        $status = true;
        $this->logger->infoTranslate('xmlfinal.process.start');
        
        if (!is_null($this->bibtexRefFile)) {
            $this->status = copy($this->bibtexRefFile, $this->outputFile);
            $this->logger->debugTranslate(
                'xmlfinal.command.log',
                "COPY {$this->bibtexRefFile} to {$this->outputFile}"
            );
        }
        elseif (!is_null($this->xmlMergeFile)) {
            $this->status = copy($this->xmlMergeFile, $this->outputFile);
            $this->logger->debugTranslate(
                'xmlfinal.command.log',
                "COPY {$this->xmlMergeFile} to {$this->outputFile}"
            );
        }
        else {
            throw new \Exception("XMLFinal was fed invalid input xml documents.");
        }
        
        if (!$this->status) {
            throw new \Exception("XMLFinal command did not run successfully");
        }
    }
    
}