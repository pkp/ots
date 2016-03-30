<?php

namespace MergePlayGround;

use Zend\Mvc\Service\ServiceManagerConfig;
use Zend\ServiceManager\ServiceManager;

use \DomDocument;
use \DOMXPath;

define('ROOT_DIR', dirname(dirname(dirname(dirname(dirname(__FILE__))))));

define('MERGESPACE', '/usr/local/merge-playground');
define('CORPUS_DIR', MERGESPACE . '/corpus');
define('JAT_DIR', MERGESPACE . '/jats');
define('METYPESET_JAT_DIR', JAT_DIR . '/meptypeset');
define('CERMINE_JAT_DIR', JAT_DIR . '/cermine');
define('DIFF_DIR', MERGESPACE . '/diffs');

require_once ROOT_DIR . '/vendor/autoload.php';

class MergeProcess {
    
    protected $sm;
    protected $docs = [];
    
    protected $unoconv;
    protected $metypeset;
    protected $cermine;
    
    public function __construct()
    {
        $this->_init();
        $this->_setup();
    }
    
    // initialize
    protected function _init()
    {
        // service manager
        $this->sm = new ServiceManager(new ServiceManagerConfig());
        $this->sm->setService(
            'ApplicationConfig',
            include ROOT_DIR . '/config/application.config.php'
        );
        $this->sm->get('ModuleManager')->loadModules();
        
        // corpus is required
        if (!file_exists(CORPUS_DIR)) {
            throw new \Exception('Corpus directory not set!');
        }
        
        // document names
        foreach (new \DirectoryIterator(CORPUS_DIR) as $fileInfo) {
            if($fileInfo->isDot()) continue;
            $pathname = $fileInfo->getPathname();
            $pathinfo = pathinfo($pathname);
            $filename = $pathinfo['filename'];
            
            if (!isset($this->docs[$filename])) {
                $this->docs[$filename] = [];
            }
            
            $this->docs[$filename][] = $pathname;
        }
        
        // output directories
        if (!file_exists(METYPESET_JAT_DIR)) {
            mkdir(METYPESET_JAT_DIR, 0777, true);
        }
        
        if (!file_exists(CERMINE_JAT_DIR)) {
            mkdir(CERMINE_JAT_DIR, 0777, true);
        }
        
        if (!file_exists(DIFF_DIR)) {
            mkdir(DIFF_DIR, 0777, true);
        }
        
    }
    
    // setup jobs
    protected function _setup()
    {
        // docx
        $this->unoconv = $this->sm->get('DocxConversion\Model\Converter\Unoconv');
        
        // metypeset
        $this->metypeset = $this->sm->get('NlmxmlConversion\Model\Converter\Metypeset');
        
        // cermine
        $this->cermine = $this->sm->get('Cermine\Model\Converter\Cermine');
    }
    
    protected function _convertDocx($filename, $docpath)
    {
        print "Converting DOC document {$docpath}.. "; 
        
        $outdir = "/tmp/mergeplayground/{$filename}/metypeset";
        
        if (file_exists($outdir)) {
            unlink($outdir);
        }
        
        $this->metypeset->setInputFile($docpath);
        $this->metypeset->setOutputDirectory($outdir);
        $this->metypeset->convert();
        
        $xmlfile = $filename . '.xml';
        $outpath = $outdir . '/nlm/' . $xmlfile;
        
        if (!$this->metypeset->getStatus() or !file_exists($outpath)) {
            print "ERROR!!" . PHP_EOL;
            throw new \Exception('Docx convertion failed for ' . $filename . " ({$docpath})");
        }
        
        copy($outpath, METYPESET_JAT_DIR . "/{$filename}.xml");
        
        print "DONE." . PHP_EOL;
        
        return file_get_contents($outpath);
    }
    
    protected function _convertPdf($filename, $docpath)
    {
        print "Converting PDF document {$docpath}.. "; 
        
        $outdir = "/tmp/mergeplayground/{$filename}/cermine";
        $outpath = $outdir . '/document_from_pdf.xml';
        
        mkdir($outdir, 0777, true);
        
        $this->cermine->setInputFile($docpath);
        $this->cermine->setOutputFile($outpath);
        $this->cermine->convert();
        
        if (!$this->cermine->getStatus()) {
            print "ERROR!!" . PHP_EOL;
            throw new \Exception('Pdf convertion failed for ' . $filename . " ({$docpath})");
        }
        
        copy($outpath, CERMINE_JAT_DIR . "/{$filename}.xml");
        
        print "DONE." . PHP_EOL;
        
        return file_get_contents($outpath);
    }
    
    protected function _excerpt($rawxml)
    {
        $doc = new DomDocument;
        $doc->loadXML($rawxml);
        
        $xpath = new DOMXPath($doc);
        
        $qfront = '/article/front';
        $qsec  = '/article/body/sec';
        
        $front = $xpath->query($qfront);
        $secs = $xpath->query($qsec);
        
        $fxml = $doc->saveXML($front->item(0));
        $sxml = $doc->saveXML($secs->item(0));
        
        $out = <<<EOT
<?xml version="1.0"?>
<article>
    $fxml
    <body>
        $sxml
    </body>
</article>

EOT;

        return $out;
    
    }
    
    protected function _process_documents($filename, $docs)
    {
            $outputs = [];
           try {
               array_walk ($docs, function($doc) use($filename, &$outputs)
               {
                    $pathinfo = pathinfo($doc);
                    
                    if (in_array($pathinfo['extension'], ['doc','docx'])) {
                        $jats = $this->_convertDocx($filename, $doc);
                        $xml = $this->_excerpt($jats);
                        $outputs[] = $xml;
                    }
                    else if (in_array($pathinfo['extension'], ['pdf'])) {
                        $jats = $this->_convertPdf($filename, $doc);
                        $xml = $this->_excerpt($jats);
                        $outputs[] = $xml;
                    }
                    else {
                        throw new \Exception('Unknown file type');
                    }
                   
               });
               
            // serialize diff file
            if (count($outputs) == 2) {
                
                $file1 = tempnam("/tmp", 'XMLDIFF');
                $file2 = tempnam("/tmp", 'XMLDIFF');
                
                file_put_contents($file1, $outputs[0]);
                file_put_contents($file2, $outputs[1]);
                
                $dxml = new \XMLDiff\File;
                $diff = $dxml->diff($file1, $file2);
                file_put_contents(DIFF_DIR . "/{$filename}.xml", $diff);
                
                unlink($file1);
                unlink($file2);
            }
               
           }
           catch (\Exception $e) {
               print ">> " . PHP_EOL;
               print ">> Exception : " . $e->getMessage() . PHP_EOL;
               print ">> " . PHP_EOL;
               print PHP_EOL;
           }
           
        exec("rm -rf /tmp/mergeplayground");
        
    }
    
    public function process()
    {
        foreach ($this->docs as $filename => $docs) {
            if (count($docs) != 2) continue;
            $this->_process_documents($filename, $docs);
        }
        
    }
}

$merge = new MergeProcess();
$merge->process();
