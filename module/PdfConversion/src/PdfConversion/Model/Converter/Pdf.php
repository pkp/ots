<?php

namespace PdfConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use FilesystemIterator;
use ZipArchive;

use Manager\Model\Converter\AbstractConverter;

/**
 * Converts the HTML document to PDF using wkhtmltopdf
 *
 * We are using the static precompiled wkhtmltopdf binaries from the assets
 * directory of this module. If another wkhtmltopdf binary is preferred you
 * can change the path to the wkhtmltopdf command via a local config variable
 */
class Pdf extends AbstractConverter
{
    protected $config;
    protected $logger;

    protected $inputFile;
    protected $outputFile;
    protected $outputTmpPath;

    /**
     * Constructor
     *
     * @param mixed $config Pdf config
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
            throw new \Exception('Zip file containing the HTML doesn\'t exist');
        }

        $this->inputFile = $inputFile;

        $this->outputTmpPath = dirname($this->inputFile) . '/wkhtmltopdfTmp';
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
     * Convert the HTML to PDF
     *
     * @return void
     */
    public function convert()
    {
        $this->logger->debugTranslate('pdfconversion.converter.startLog');

        // Unzip the zip archive
        if (!$this->unzip()) {
            $this->logger->debugTranslate('pdfconversion.converter.unzipErrorLog');
            $this->status = false;
        }

        // Do the wkhtmltopdf conversion
        $this->execute();

        // Remove temporary files
        $this->cleanup();
    }

    /**
     * Do the wkhtmltopdf conversion
     *
     * @return void
     */
    protected function execute()
    {
        $command = new Command;

        // Set the base command
        $command->setCommand($this->config['wkhtmltopdf']['command']);

        // Add the input file
        $inputFile = $this->outputTmpPath . '/document.html';
        if (!$inputFile) {
            throw new \Exception('No input file given');
        }
        $command->addArgument($inputFile);

        // Add the output directory
        if (!$this->outputFile) {
            throw new \Exception('No output file given');
        }
        $command->addArgument($this->outputFile);

        // Redirect STDERR to STDOUT to captue it in $this->output
        $command->addRedirect('2>&1');

        $this->logger->debugTranslate(
            'pdfconversion.wkhtmltopdf.executeCommandLog',
            $command->getCommand()
        );

        // Execute the conversion
        $command->execute();
        $this->status = $command->isSuccess();
        $this->output = $command->getOutputString();

        $this->logger->debugTranslate(
            'pdfconversion.wkhtmltopdf.executeCommandOutputLog',
            $this->output
        );
    }

    /**
     * Unzip the contents of the zip file to the temporary directory
     *
     * @return void
     */
    protected function unzip()
    {
        $zip = new ZipArchive;
        if (!$zip->open($this->inputFile)) return false;

        $zip->extractTo($this->outputTmpPath);
        $zip->close();

        return true;
    }

    /**
     * Remove temporary HTML directory
     *
     * @return void
     */
    protected function cleanup()
    {
        $it = new RecursiveDirectoryIterator($this->outputTmpPath, FilesystemIterator::SKIP_DOTS);
        $files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST);
        foreach($files as $file) {
            if ($file->isDir()){
                rmdir($file->getRealPath());
            } else {
                unlink($file->getRealPath());
            }
        }
        @rmdir($this->outputTmpPath);
    }
}
