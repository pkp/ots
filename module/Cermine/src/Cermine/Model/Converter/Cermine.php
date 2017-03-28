<?php

namespace Cermine\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;
use Xmlps\Libxml\Libxml;

use Manager\Model\Converter\AbstractConverter;
use DOMDocument;
use DOMXpath;

/**
 * Extracts information from PDF documents using CERMINE
 */
class Cermine extends AbstractConverter
{
    use Libxml;
    
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
        
        $this->disableLibxmlErrorDisplay();
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

        $this->logger->infoTranslate('cermine.cermine.startExtraction');

        $command = new Command;

        // Run Java or JRE...
        $command->setCommand($this->config['jre']);

        // ... with CERMINE in the classpath, ...
        $command->addSwitch('-cp', $this->config['cerminejar']);

        // ... the content extraction command, ...
        $command->addArgument('pl.edu.icm.cermine.ContentExtractor');

        // ... the input file, ...
        $command->addSwitch('-path', dirname($this->inputFile));

        $this->logger->debugTranslate(
            'cermine.cermine.executeCommandLog',
            $command->getCommand()
        );

        // Execute the conversion
        $command->execute();
        $this->status = $command->isSuccess();
        $this->output = $command->getOutputString();

        // save cermine xml to outputFile
        $cermineDocName = basename($this->inputFile, '.pdf');
        $cermineOutfileFullPath = dirname($this->inputFile) . "/{$cermineDocName}.cermxml";
        @copy($cermineOutfileFullPath, $this->outputFile);

        $this->logger->debugTranslate(
            'cermine.cermine.executeCommandOutputLog',
            $this->getOutput()
        );
        
        // fix rid attribute
        $this->fixRidAttributes();
    }
    
    /**
     * Fix xref rid attribute to get rid of potential multiple ids
     *
     * @return void
     */
    protected function fixRidAttributes()
    {
        $dom = new DOMDocument();
        if (!$dom->load($this->outputFile)) {
            $this->logger->debugTranslate(
                'cermine.converter.xmlLoadErrorLog',
                $this->libxmlErrors()
            );
        }
        
        $domXpath = new DOMXPath($dom);
        
        $xrefs = $domXpath->query("//xref");
        
        foreach($xrefs as $item) {
            $rid = trim($item->getAttribute('rid'));
            
            // match first id
            if (!preg_match('/^(\d+)/', $rid, $matches)) continue;
            
            $item->removeAttribute('rid');
            $item->setAttribute('rid', 'R'.$matches[1]);
            
            file_put_contents($this->outputFile, $dom->saveXML());
        }
    }
}
