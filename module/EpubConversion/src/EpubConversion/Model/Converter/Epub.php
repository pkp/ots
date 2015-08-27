<?php

namespace EpubConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;

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

        $cmd_str = $this->config['command'];

        // This mktemp code should probably be factored out.
        $this->logger->debugTranslate('epubconversion.converter.startMktemp');

        // The jats2epub script uses hardcoded directories for
        // output.  We should make our own temp directories for those
        // to live in, so we can clean them up without stepping on
        // other conversions’ toes.  UNIX ONLY. d-:
        $sys_tmp = sys_get_temp_dir();
        if (substr($sys_tmp, -1, 1) == '/') {
            $sys_tmp = substr($sys_tmp, 0, -1);
        }

        $mktemp = new Command;
        $mktemp->setCommand('mktemp');
        $mktemp->addSwitch('-d');
        $mktemp->addArgument($sys_tmp . '/jats2epub.XXXXX');
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
        $my_tmp = $mktemp->getOutputString();

        $chmod = new Command;
        $chmod->setCommand('chmod');
        $chmod->addArgument('777');
        $chmod->addArgument($my_tmp);
        $chmod->execute();
        if (!$chmod->isSuccess()) {
            $this->logger->infoTranslate(
                'epubconversion.converter.errorChmod'
                );
            $this->status = false;
            return;
        }

        // We’re going to cd to the working directory, so we need an
        // absolute path to the command.
        $cmd_str = realpath($cmd_str);

        $command = new Command;

        // Do our conversion work in /tmp (or other appropriate
        // place).  Only argument is the input file.
        $command->setCommand('cd ' . $my_tmp . ' && ' . $cmd_str);
        $command->addArgument($this->inputFile);

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
        $outfiles = glob($my_tmp . '/output_final/*.epub');
        if (sizeof($outfiles) != 1) {
            $this->status = false;
            $this->logger->infoTranslate('epubconversion.converter.errorGlob');
            return;
        }

        // If there was only one candidate file, move it to the
        // target, and clean up after ourselves.
        rename($outfiles[0], $this->outputFile);
        $this->del_dir($my_tmp);

        $this->logger->debugTranslate('epubconversion.converter.endLog');

        return;
    }

    /**
     * Delete a target directory and all its contents.
     *
     * @param str $target_dir
     *
     * @return bool Success of deletion
     */
    protected function del_dir($target_dir)
    {
        // Really should be factored out into a utility library;
        // there’s nothing specific to epub conversion in here.

        // Shamelessly stolen from StackOverflow.
        if (!file_exists($target_dir)) {
            return true;
        }

        if (!is_dir($target_dir)) {
            return unlink($target_dir);
        }

        foreach (scandir($target_dir) as $item) {
            if ($item == '.' || $item == '..') {
                continue;
            }

            if (!$this->del_dir(
                    $target_dir .
                    DIRECTORY_SEPARATOR .
                    $item
                    )) {
                return false;
            }
        }

        return rmdir($target_dir);
    }
}
