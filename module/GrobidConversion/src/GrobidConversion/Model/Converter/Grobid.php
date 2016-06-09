<?php 

namespace GrobidConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;

use Manager\Model\Converter\AbstractConverter;
use \DOMDocument;
use \XSLTProcessor;
use \RecursiveDirectoryIterator;
use \RecursiveIteratorIterator;
use Xmlps\Libxml\Libxml;

/**
 * Converts documents using grobid
 *
 */
class Grobid extends AbstractConverter
{
    use Libxml;
    
    protected $config;
    protected $logger;
    
    protected $inputFile;
    protected $teiXmlFile;
    protected $outputFile;
    
    protected $teiXmlDom;
    protected $jatsDom;
    
    /**
     * Constructor
     * 
     * @param mixed $config config
     * @param Logger $logger Logger
     */
    public function __construct($config, Logger $logger)
    {
        if (!isset($config['install_path']) || !isset($config['jre']) || !isset($config['jarfile'])) {
            throw new \Exception('Grobid install directory is not configured');
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
        
        // set tei file path
        $this->teiXmlFile = dirname($outputFile) . '/document.tei.xml';
    }
    
    /**
     * Convert the document
     */
    public function convert() 
    {
        $command = new Command;
        
        $java = $this->config['jre'];
        $java_args = $this->config['jre_args'];
        $install_path = $this->config['install_path'];
        $mode = $this->config['mode'];
        $jarfile = $this->config['jarfile'];
        
        if (!in_array($mode, array('service','batch'))) {
            throw new \Exception("Invalid Grobid execution mode. Valid values: service or batch");
        }
        
        if ($mode == 'batch') {
        
            // batch mode setup
            $tempdirpath = $this->setupBatchModeConversionDir();
            
            $rawcmd = "{$java} {$java_args} -Dlog4j.configuration={$tempdirpath}/grobid.properties -jar {$install_path}/grobid-core/target/{$jarfile} -gH {$install_path}/grobid-home -gP {$install_path}/grobid-home/config/grobid.properties -dIn {$tempdirpath} -dOut {$tempdirpath} -r -exe processFullText ";
            
            $command->setCommand($rawcmd);
        
            $this->logger->debugTranslate(
                'grobid.converter.executeCommandLog',
                $command->getCommand()
            );
        
            $command->execute();
            $this->status = $command->isSuccess();
            $this->output = $command->getOutputString();
            
            $teixml = $tempdirpath . '/document.tei.xml';
            if ($this->status && file_exists($teixml)) {
                copy($teixml, $this->teiXmlFile);
            }
            
            $this->cleanAfterBatchMode($tempdirpath);
            
            if (!$this->status) {
                throw new \Exception("Grobid command did not run successfully");
            }
            
        }
        else {
        
            // check if grobid service is running
            if (!$this->grobidServiceIsRunning()) {
                $result = $this->startGrobidService($install_path);
                
                if (!$result) {
                    throw new \Exception("Unable to start Grobid service");
                }
            }
            
            // send task to service
            if (!$this->sendPdfToGrobidService()) {
                throw new \Exception("pdf upload to Grobid service failed.");
            }
            
        }
        
        // load tei xml into DOM
        $this->loadTeiDom();
        
        // tei to jats
        if (!$this->transform()) {
            $this->status = false;
            return;
        }
        
        file_put_contents($this->outputFile, $this->jatsDom->saveXML());
        $this->status = true;
    }
    
    /**
     * Transform the TEI document to JATS
     *
     * @return bool Whether or not the transformation was successful
     */
    protected function transform()
    {
        // Check if the XSL file exists
        if (!file_exists($this->config['xsl'])) {
            $this->logger->debugTranslate(
                'grobid.converter.xslFileNotFoundLog'
            );
            return false;
        }

        $xsl = new DOMDocument;
        if (!$xsl->load($this->config['xsl'])) {
            $this->logger->debugTranslate(
                'grobid.converter.xslLoadErrorLog',
                $this->libxmlErrors()
            );
            return false;
        }

        $xslt = new XSLTProcessor;
        $xslt->importStylesheet($xsl);

        // Transform the document
        if (!($this->jatsDom = $xslt->transformToDoc($this->teiXmlDom))) {
            $this->logger->debugTranslate(
                'grobid.converter.transformErrorLog',
                $this->libxmlErrors()
            );

            return false;
        };

        $this->logger->debugTranslate(
            'grobid.converter.transformsSuccessLog',
            $this->jatsDom->saveXML()
        );

        return true;
    }
    
    /**
     * Load the input TEI file into a DOMDocument
     *
     * @return bool Whether or not the file could be loaded
     */
    protected function loadTeiDom()
    {
        $this->teiXmlDom = new DOMDocument;
        return $this->teiXmlDom->loadXML(file_get_contents($this->teiXmlFile));
    }
    
    /**
     * for batch mode conversion, conversion happens in a temporary folder
     *
     * @return $tempdirpath path to conversion folder containing input file
     */
    protected function setupBatchModeConversionDir()
    {
        $tempdirpath = sys_get_temp_dir() . '/grobid_' . uniqid();
        mkdir($tempdirpath, 0777);
        copy($this->inputFile, $tempdirpath . '/document.pdf');
        
        // temporary log4j config file
        file_put_contents("{$tempdirpath}/grobid.properties", "log4j.rootLogger=OFF".PHP_EOL);
        
        return $tempdirpath;
    }
    
    /**
     * after batch mode conversion cleaning
     *
     * @return void
     */
    protected function cleanAfterBatchMode($dir)
    {
        if (is_dir($dir)) {
            $it = new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS);
            $files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST);
            foreach($files as $file) {
                if ($file->isDir()){
                    rmdir($file->getRealPath());
                } 
                else {
                    unlink($file->getRealPath());
                }
            }
            rmdir($dir);
        }
    }
    
    /**
     * checks if grobid service is already running 
     *
     * @return array
     */
    protected function grobidServiceIsRunning()
    {
        exec("ps aux | grep 'jetty' | grep -v grep | awk '{ print $2 }' | head -1", $out);
        return !empty($out);
    }
    
    /**
     * starts grobid service in background
     *
     * @return array
     */
    protected function startGrobidService($install_path)
    {
        $service_dir = "{$install_path}/grobid-service/";
        $cmd = "mvn -Dmaven.test.skip=true jetty:run-war > /dev/null 2>/dev/null &";

        chdir($service_dir);
        exec($cmd);
        
        // wait 3 * 10 sec for the process to start
        for ($i=6; $i>=1; $i--) {
            sleep(5);
            
            if ($this->grobidServiceIsRunning()) {
                return true;
            }
        }
        
        return false;
    }
    
    /**
     * sends a document to service for processing
     *
     * @return array
     */
    protected function sendPdfToGrobidService()
    {
        $post = array('input' => curl_file_create($this->inputFile));
        
        $ch = curl_init();
        
        curl_setopt($ch, CURLOPT_URL, 'http://localhost:8080/processFulltextDocument');
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        
        $result = curl_exec($ch);
        
        if (curl_errno($ch)) {
            curl_close($ch);
            return false;
        }
        
        curl_close($ch);
        
        file_put_contents($this->teiXmlFile, $result);
        return true;
    }
}

