<?php

namespace NlmxmlConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;

use Manager\Model\Converter\AbstractConverter;

/**
 * Converts documents to NLM-XML using meTypeset
 */
class Metypeset extends AbstractConverter
{
    protected $config;
    protected $logger;

    protected $inputFile;
    protected $outputDirectory;

    /**
     * Constructor
     *
     * @param mixed $config meTypeset config
     * @param Logger $logger Logger
     *
     * @return void
     */
    public function __construct($config, Logger $logger)
    {
        if (!isset($config['command'])) {
            throw new \Exception('meTypeset command is not configured');
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
            throw new \Exception('Input file doesn\'t exist');
        }

        $this->inputFile = $inputFile;
    }

    /**
     * Set the output directory
     *
     * @param mixed $outputDirectory
     * @return void
     */
    public function setOutputDirectory($outputDirectory)
    {
        $this->outputDirectory = $outputDirectory;
    }

    /**
     * Convert the document
     *
     * @return void
     */
    public function convert()
    {
        $command = new Command;

        // Set the base command
        $command->setCommand($this->config['command']);

        // Add the input file
        if (!$this->inputFile) {
            throw new \Exception('No input file given');
        }
        $command->addArgument($this->inputFile);

        // Add the output directory
        if (!$this->outputDirectory) {
            throw new \Exception('No output directory given');
        }
        $command->addArgument($this->outputDirectory);

        // Redirect STDERR to STDOUT to captue it in $this->output
        $command->addRedirect('2>&1');

        $this->logger->debugTranslate(
            'nlmxmlconversion.metypeset.executeCommandLog',
            $command->getCommand()
        );

        // Execute the conversion
        $command->execute();
        $this->status = $command->isSuccess();
        $this->output = $command->getOutputString();

        $this->logger->debugTranslate(
            'nlmxmlconversion.metypeset.executeCommandOutputLog',
            $this->output
        );
    }

    /**
     * Metypeset doesn't generate correct NLM XML references atm. This is
     * supposed to be fixed in the near future (12/2013). For now we will do
     * the conversion here.
     *
     * Code "adapted" from here: http://pkp-udev.lib.sfu.ca/parsingdev/meTypesetRefs.py
     * TODO: remove this
     *
     * @param string $file
     *
     * @return void
     */
    public function postConvert($file)
    {
        $python = <<<'EOF'
import re
import string
import sys

f = open(sys.argv[1], 'rb')

filestring = f.read()

filestring = re.sub(r'<p>\s+?(<bold>|<title>)([A-Za-z\s]+)(</bold>|</title>)\s+?</p>\s+<list.+?>((.|\s)+?)(</list>)',r'<title>\2</title>\n<ref-list>\4</ref-list>',filestring)
filestring = re.sub(r'(<disp-quote>|<list-item>)\s+<p>\s*?.*?([0-9]+)\.\s+?(?=[A-Z])',r'<ref rid="\2">',filestring)
filestring = re.sub(r'</p>\s+(</disp-quote>|</list-item>)',r'</ref>',filestring)
filestring = re.sub(r'(,|\[)([0-9]{1,3})(,|\])',r'\[<xref id="\2" ref-type="bibr">\2</xref>\]',filestring)

refs = re.findall(r'<ref.*?>[\s]*.*[\s]*</ref>',filestring)
firstauthormatch = re.compile(r'[A-Za-z]{3,}')
for r in refs:
    try:
        authors = re.findall(r'[A-Za-z -]+,?\s[A-Z]\.|,',r)
        firstauthor = firstauthormatch.match(authors[0])
        namestring = r'(\(.*?'+firstauthor.group(0)+r'.*?[^amp](;|\)))'
        filestring = re.sub(namestring,r'<xref id="'+(r+1)+r'" ref-type="bibr">\1</xref>',filestring)
    except:
        print ""

g = open(sys.argv[2], 'wb')
g.write(filestring)
EOF;
        $tmpScript = '/tmp/nlm.py';
        file_put_contents($tmpScript, $python);
        $output = array();
        exec('python ' . $tmpScript . ' ' . $file . ' ' . $file . ' 2>&1', $output);
        @unlink($tmpScript);

        // Wrap references in ref-list tags
        $xml = file_get_contents($file);
        if (!preg_match('/<ref-list/', $xml)) {
            $xml = preg_replace('#(<ref[^>]*>.*</ref>)#s', '<ref-list>\1</ref-list>', $xml);
        }
        file_put_contents($file, $xml);
    }
}
