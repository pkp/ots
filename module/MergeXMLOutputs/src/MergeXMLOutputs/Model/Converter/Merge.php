<?php

namespace MergeXMLOutputs\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Libxml\Libxml;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use FilesystemIterator;

use Manager\Model\Converter\AbstractConverter;

/**
 * Merges the CERMINE and meTypeset XML outputs
 */
class Merge extends AbstractConverter
{
    use Libxml;

    protected $config;
    protected $logger;

    protected $inputFile;
    protected $outputFile;
    protected $outputTmpPath;

    /**
     * Constructor
     *
     * @param mixed $config Merge config
     * @param Logger $logger Logger
     *
     * @return void
     */
    public function __construct($config, Logger $logger)
    {
        $this->config = $config;
        $this->logger = $logger;
    }

    /**
     * Set the input file to convert
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFile($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception('CERMINE and/or meTypeset outputs don\'t exist');
        }

        $this->inputFile = $inputFile;

        $this->outputTmpPath = dirname($this->inputFile) . '/mergeTmp';
        if (!is_dir($this->outputTmpPath)) mkdir($this->outputTmpPath);
    }

    /**
     * Set the output file
     *
     * @param mixed $outputFile
     *
     * @return void
     */
    public function setOutputFile($outputFile)
    {
        $this->outputFile = $outputFile;
    }


    /**
     * Merge the two XML outputs into one document.
     *
     * @return void
     */
    public function convert()
    {
        if (!$this->merge()) {
            $this->status = false;
            return;
        }

    }

    /**
     * Do the actual merge.
     *
     * @return bool Whether or not the transformation was successful
     */
    protected function merge()
    {
        // Get the meTypeset output
        $meTypesetOutputFile = $this->outputTmpPath . '/metypeset.xml';
        $meTypesetOutput = file_get_contents($meTypesetOutputFile);
        if (!$meTypesetOutputFile) {
            throw new \Exception('No meTypeset output available');
        }

        // Get the CERMINE output
        $cermineOutputFile = $this->outputTmpPath . '/cermine.xml';
        $cermineOutput = file_get_contents($cermineOutputFile);
        if (!$cermineOutputFile) {
            throw new \Exception('No CERMINE output available');
        }

        // Do the merge
        $cermineFront = preg_replace("<body>.*", "", $cermineOutput);
        $meTypesetBodyBack = preg_replace(".*?</front>", "", $meTypesetOutput);
        $mergedXml = $cermineFront . $meTypesetBodyBack;
        file_put_contents(($this->outputFile), $mergedXml);

        return true;
    }

}
