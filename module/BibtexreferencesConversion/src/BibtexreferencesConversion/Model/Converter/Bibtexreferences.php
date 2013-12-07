<?php

namespace BibtexreferencesConversion\Model\Converter;

use Xmlps\Logger\Logger;
use Xmlps\Command\Command;
use DOMDocument;
use XSLTProcessor;

use Manager\Model\Converter\AbstractConverter;

/**
 * Replaces the references in the NLMXML document with ones parsed from the
 * Bibtex conversion
 */
class Bibtexreferences extends AbstractConverter
{
    protected $config;
    protected $logger;

    protected $inputFileNlmxml;
    protected $inputFileBibtex;

    /**
     * Constructor
     *
     * @param mixed $config Bibtexreferences config
     * @param Logger $logger Logger
     *
     * @return void
     */
    public function __construct($config, Logger $logger)
    {
        if (!isset($config['command'])) {
            throw new \Exception('xml2bib command is not configured');
        }

        $this->config = $config;
        $this->logger = $logger;

        // Avoid displaying of warnings/errors by libxml
        libxml_use_internal_errors(true);
        libxml_clear_errors();
    }

    /**
     * Set the NLM XML input file to convert
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFileNlmxml($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception('NLM XML input file doesn\'t exist');
        }

        $this->inputFileNlmxml = $inputFile;
    }

    /**
     * Set the Bibtex input file
     *
     * @param mixed $inputFile
     *
     * @return void
     */
    public function setInputFileBibtex($inputFile)
    {
        if (!file_exists($inputFile)) {
            throw new \Exception('Bibtex input file doesn\'t exist');
        }

        $this->inputFileBibtex = $inputFile;
    }

    /**
     * Convert the bibtex references to NLM XML and replace the reference list
     * in the the NLM XML article document with the conversion output
     *
     * @return void
     */
    public function convert()
    {
        $this->logger->debugTranslate('bibtexreferencesconversion.converter.startLog');

        // Convert the references using biblatex2xml
        $dom = $this->biblatex2xmlConvert();
        if (!($dom instanceof DOMDocument)) {
            $this->status = false;
            return;
        }

        // Do an XSLT transformation of the output
        $dom = $this->transform($dom);
        if (!($dom instanceof DOMDocument)) {
            $this->status = false;
            return;
        }

        // Replace the references list in the original NLM XML document
        $dom = $this->replace($dom);
        if (!($dom instanceof DOMDocument)) {
            $this->status = false;
            return;
        }

        $this->logger->debugTranslate(
            'bibtexreferencesconversion.convert.nlmxmlOutputLog',
            $dom->saveXML()
        );

        // Update the NLM XML document
        file_put_contents($this->inputFileNlmxml, $dom->saveXML());
    }

    /**
     * Converts the output from the Bibtex conversion into a temporary XML
     * document using bibtex2xml
     *
     * @return DOMDocument Document containing a parsed reference list
     */
    protected function biblatex2xmlConvert()
    {
        $command = new Command;
        $command->setCommand($this->config['command']);
        $command->addArgument($this->inputFileBibtex);
        $command->addRedirect('2> /dev/null');

        $this->logger->debugTranslate(
            'bibtexreferencesconversion.converter.biblatex2xml.commandLog',
            $command->getCommand()
        );

        // Run the xml2bib conversion
        $command->execute();
        $this->logger->debugTranslate(
            'bibtexreferencesconversion.converter.OutputLog',
            $command->getOutputString()
        );

        if (!($this->status = $command->isSuccess())) return false;

        $dom = new DOMDocument();
        if (!$dom->loadXML($command->getOutputString())) {
            $this->logger->debugTranslate(
                'bibtexreferencesconversion.converter.biblatex2xml.noDOMLog',
                $this->libxmlErrors()
            );
            return false;
        }

        return $dom;
    }

    /**
     * XSLT transform the biblatex2xml output
     *
     * @param DOMDocument $dom
     *
     * @return DOMDocument Transformed document
     */
    protected function transform(DOMDocument $dom)
    {
        $this->logger->debugTranslate(
            'bibtexreferencesconversion.converter.transform.startLog'
        );

        // Load the XSL stylesheet
        $xslt = new XSLTProcessor();
        if (!($xsl = simplexml_load_string(file_get_contents($this->config['xsl'])))) {
            $this->logger->debugTranslate(
                'bibtexreferencesconversion.converter.transform.styleSheetErrorLog'
            );
            return false;
        }
        $xslt->importStylesheet($xsl);

        // Strip the modsCollection namespace; if kept the transformation fails
        $modsCollections = $dom->getElementsByTagName('modsCollection');
        if ($modsCollections->length) {
            $modsCollection = $modsCollections->item(0);
            $modsCollection->removeAttributeNS('http://www.loc.gov/mods/v3', '');
        }

        // Do the XSL transformation of the reference list
        if (!($dom = $xslt->transformToDoc($dom))) {
            $this->logger->debugTranslate(
                'bibtexreferencesconversion.converter.transform.transformErrorLog',
                $this->libxmlErrors()
            );

            return false;
        };

        $this->logger->debugTranslate(
            'bibtexreferencesconversion.converter.transform.successLog',
            $dom->saveXML()
        );

        return $dom;
    }

    /**
     * Replace the references in the NLM XML document
     *
     * @param DOMDocument $refListNew
     * @return DOMDocument NLMXML document with replaced references
     */
    protected function replace($refListNew)
    {
        // Fetch the new reference list DOMNode from the supplied DOMDocument
        $refLists = $refListNew->getElementsByTagName('ref-list');
        if (!$refLists->length) {
            $this->logger->debugTranslate(
                'bibtexreferencesconversion.replace.noRefListOldLog'
            );
            return false;
        }
        $refListNew = $refLists->item(0);

        // Load the NLMXML Document
        $xml = file_get_contents($this->inputFileNlmxml);
        $dom = new DOMDocument;
        if (!$dom->loadXML($xml)) {
            $this->logger->debugTranslate(
                'bibtexreferencesconversion.replace.loadNlmxmlErrorLog',
                $this->libxmlErrors()
            );
            return false;
        }

        // Fetch the old reference list DOMNode from the NLM XML DOMDocument
        $refLists = $dom->getElementsByTagName('ref-list');
        if (!$refLists->length) {
            $this->logger->debugTranslate(
                'bibtexreferencesconversion.replace.noRefListNewLog'
            );
            return false;
        }
        $refListOld = $refLists->item(0);

        // Replace the old DOMNode with the new one
        $refListNew = $dom->importNode($refListNew, true);
        if (!$refListOld->parentNode->replaceChild($refListNew, $refListOld)) {
            $this->logger->debugTranslate(
                'bibtexreferencesconversion.replace.replacementErrorLog',
                $this->libxmlErrors()
            );
            return false;
        }

        return $dom;
    }

    /**
     * Returns a string containing LIBXML errors
     *
     * @return string LIBXML errors
     */
    protected function libxmlErrors()
    {
        $errors = implode(PHP_EOL, array_map(
            function ($e) { return $e->message; },
            libxml_get_errors()
        ));
        libxml_clear_errors();

        return $errors;
    }
}
