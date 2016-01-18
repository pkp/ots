<?php 

namespace NERExtraction\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;

use Manager\Model\Converter\AbstractConverter;

/**
 * Extracts named entity from xml document
 *
 */
class NERExtractor extends AbstractConverter
{
    protected $config;
    protected $logger;
    
    protected $inputFile;
    protected $outputFile;
    
    /**
     * Constructor
     * 
     * @param mixed $config config
     * @param Logger $logger Logger
     */
    public function __construct($config, Logger $logger)
    {
        if (!isset($config['install_path']) ||
            !isset($config['command']) ||
            !isset($config['model'])) {
            throw new \Exception('NER script and/or model file are not configured');
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
            throw new \Exception("Input file doesn't exist");
        }
        
        $this->inputFile = $inputFile;
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
     * Convert the document
     */
    public function convert() 
    {
        // load article body text
        $filepath = $this->extractArticleBodyTextIntoTempFile();
        
        $this->logger->infoTranslate('ner.extractor.startExtraction');
        
        $command = new Command;
        $command->setCommand("cat {$filepath} | {$this->config['install_path']}/{$this->config['command']} {$this->config['install_path']}/{$this->config['model']}");
        
        $this->logger->debugTranslate(
                'ner.extractor.executeCommandLog',
                $command->getCommand()
        );
        
        // Execute the conversion
        $command->execute();
        $this->status = $command->isSuccess();
        $this->output = $command->getOutputString();
        if (!$this->status) {
            throw new \Exception("NER command did not run successfully");
        }
        
        // extract named entities from command output
        $entities = $this->parseCommandOutput($this->output);
        
        // serialization to json document
        file_put_contents(utf8_encode($this->outputFile), json_encode($entities, JSON_PRETTY_PRINT));
        
        // clean up
        if (file_exists($filepath)) {
            unlink($filepath);
        }
    }
    
    /**
     * Load raw text (inside body tag) from article xml document 
     */
    protected function extractArticleBodyTextIntoTempFile()
    {
        $raw = file_get_contents($this->inputFile);
        
        $dom = new \DOMDocument;
        $dom->loadXML($raw);
        
        $xpath = new \DOMXPath($dom);
        $bodyQuery = '/article/body';
        $bodyElement = $xpath->query($bodyQuery);
        
        if (!is_null($bodyElement)) {
        
            // print var_dump($bodyElement);
            $elements = array();
            foreach($bodyElement as $element) {
                $nodes = $element->childNodes;
                foreach($nodes as $node) {
                    $elements[] = $node->nodeValue;
                }
            }
        
            $rawtext = join(' ', $elements);
        
            $tempfile = tempnam('/tmp', 'pkp-ner-');
            if (FALSE === file_put_contents($tempfile, $rawtext)) {
                throw new \Exception('Unable to create temporary file');
            }
            
            return $tempfile;
        }
        
        return FALSE;
    }
    
    /**
     * Parse ner command output to extract entities
     * 
     * @param string $filepath Path to ner command output
     */
    protected function parseCommandOutput($raw)
    {
        $pattern = '/\[([A-Z]+)\s(.+?)\]/';		// will match [<ENTITY> value]
        preg_match_all($pattern, $raw, $matches);
        
        $entities = array();
        foreach($matches[1] as $key => $entityname) {
            if (!in_array($entityname, array_keys($entities))) {
                $entities[$entityname] = array();
            }
            
            $value = $matches[2][$key];
            if (!in_array($value, $entities[$entityname])) {	// avoid duplicates
                $entities[$entityname][] = $value;
            }
        }
        
        return $entities;
    }
}