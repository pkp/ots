<?php

namespace EpubConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;
use SplFileInfo;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use FilesystemIterator;

use Manager\Model\Converter\AbstractConverter;

/**
 * Converts an NLM XML document to epub using jats2epub
 */
class Epub extends AbstractConverter
{
    protected $config;
    protected $logger;

    protected $inputFile;
    protected $outputFile;

    /**
     * Constructor
     *
     * @param mixed $config Epub config
     * @param Logger $logger Logger
     *
     * @return void
     */
    public function __construct($config, Logger $logger)
    {
        if (!isset($config['command'])) {
            throw new \Exception('jats2epub command is not configured');
        }

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
            throw new \Exception('NLM XML input file doesn\'t exist');
        }

        $this->inputFile = realpath($inputFile);
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
     * Convert the NLM XML document to Epub
     *
     * @return void
     */
    public function convert()
    {
        $this->logger->debugTranslate('epubconversion.converter.startLog');

        $cmdStr = $this->config['command'];

        // This mktemp code should probably be factored out.
        $this->logger->debugTranslate('epubconversion.converter.startMktemp');

        // The jats2epub script uses hardcoded directories for
        // output.  We should make our own temp directories for those
        // to live in, so we can clean them up without stepping on
        // other conversions’ toes.  UNIX ONLY. d-:
        $sysTmp = sys_get_temp_dir();
        if (substr($sysTmp, -1, 1) == '/') {
            $sysTmp = substr($sysTmp, 0, -1);
        }

        $mktemp = new Command;
        $mktemp->setCommand('mktemp');
        $mktemp->addSwitch('-d');
        $mktemp->addArgument($sysTmp . '/jats2epub.XXXXX');
        $mktemp->addRedirect('2>&1');
        $mktemp->execute();

        if (!$mktemp->isSuccess()) {
            $this->logger->infoTranslate(
                'epubconversion.converter.errorMktemp',
                $mktemp->getOutputString()
                );
            $this->status = false;
            return;
        }
        $thisTmp = $mktemp->getOutputString();

        // We’re going to cd to the working directory, so we need an
        // absolute path to the command.
        $cmdStr = realpath($cmdStr);

        $command = new Command;

        // Do our conversion work in /tmp (or other appropriate
        // place).  Only argument is the input file.
        $command->setCommand('cd ' . $thisTmp . ' && ' . $cmdStr);
        $command->addArgument($this->inputFile);

        // Look for a media directory.
        $mediaDir = dirname($this->inputFile) . '/metypeset/media';

        // If it exists, copy it to a subdirectory of our temp work
        // space, then point jats2epub at the parent.
        if (file_exists($mediaDir)) {
            $jatsMediaDir = $thisTmp . "/extras";
            @mkdir($jatsMediaDir);
            $this->copy_dir($mediaDir, $jatsMediaDir);
            $command->addArgument($jatsMediaDir);
        }

        // Redirect STDERR to STDOUT to captue it in $this->output
        $command->addRedirect('2>&1');

        $this->logger->debugTranslate('epubconversion.converter.startJats2epub');

        // Execute the conversion
        $command->execute();
        $this->status = $command->isSuccess();
        $this->output = $command->getOutputString();

        if (!$this->status) {
            $this->logger->infoTranslate(
                'epubconversion.converter.errorJats2epub',
                $this->output
                );
            return;
        }

        $this->logger->debugTranslate(
            'epubconversion.converter.executeCommandOutputLog',
            $this->output
        );

        // Find the output file(s).
        $outfiles = glob($thisTmp . '/output_final/*.epub');
        if (sizeof($outfiles) != 1) {
            $this->status = false;
            $this->logger->infoTranslate('epubconversion.converter.errorGlob');
            return;
        }

        // If there was only one candidate file, move it to the
        // target, and clean up after ourselves.
        rename($outfiles[0], $this->outputFile);
        $this->del_dir($thisTmp);

        $this->logger->debugTranslate('epubconversion.converter.endLog');

        return;
    }

    /**
     * Copy a source directory and all its contents to a target.
     *
     * @param str $srcDir
     * 
     * @param str $targetDir
     *
     * @return bool Success of copy
     */
    protected function copy_dir($srcDir, $targetDir)
    {
        $srcInfo = new SplFileInfo($srcDir);
        if (!$srcInfo->isDir()) {
            return false;
        }
        $trueSrcDir = $srcInfo->getRealPath();
        $trueSrcParent = $srcInfo->getPathInfo()->getRealPath();
        $srcPrefix = '/^' . preg_quote($trueSrcParent, '/') . '/';

        $it = new RecursiveDirectoryIterator(
            $srcDir,
            FilesystemIterator::SKIP_DOTS
            );
        $files = new RecursiveIteratorIterator(
            $it,
            RecursiveIteratorIterator::SELF_FIRST
            );

        @mkdir(preg_replace($srcPrefix, $targetDir, $trueSrcDir));
        foreach($files as $file) {
            $trueSrc = $file->getRealPath();

            $dest = preg_replace($srcPrefix, $targetDir, $trueSrc);

            if ($file->isDir()){
                @mkdir($dest);
            } else {
                copy($trueSrc, $dest);
            }
        }

        return true;
    }

    /**
     * Delete a target directory and all its contents.
     *
     * @param str $targetDir
     *
     * @return bool Success of deletion
     */
    protected function del_dir($targetDir)
    {
        // Really should be factored out into a utility library;
        // there’s nothing specific to epub conversion in here.

        if (file_exists($targetDir)) {
            $it = new RecursiveDirectoryIterator(
                $targetDir,
                FilesystemIterator::SKIP_DOTS
                );
            $files = new RecursiveIteratorIterator(
                $it,
                RecursiveIteratorIterator::CHILD_FIRST
                );
            foreach($files as $file) {
                if ($file->isDir()){
                    rmdir($file->getRealPath());
                } else {
                    unlink($file->getRealPath());
                }
            }
            return rmdir($targetDir);
        }
    }
}
