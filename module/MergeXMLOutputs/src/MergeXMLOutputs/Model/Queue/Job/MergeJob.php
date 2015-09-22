<?php

namespace MergeXMLOutputs\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Merge the CERMINE and meTypeset XML outputs to a single file
 *
 * The output of this conversion is an XML file containing CERMINE's
 * <head> output and meTypeset's <body> and <back> output.
 */
class MergeJob extends AbstractQueueJob
{
    /**
     * Merge the XML outputs to one file.
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $mergedXML = $this->sm->get('MergeXMLOutputs\Model\Converter\Merge');

        $meTypesetDocument = $job->getStageDocument(JOB_CONVERSION_STAGE_NLMXML);
        if (!$meTypesetDocument) {
            throw new \Exception('Couldn\'t find the meTypeset output');
        }

        $cermineDocument = $job->getStageDocument(JOB_CONVERSION_STAGE_PDF_EXTRACT);
        if (!$cermineDocument) {
            throw new \Exception('Couldn\'t find the CERMINE output');
        }

        $outputFile = $job->getDocumentPath() . '/document.xml';
        $mergedXML->setInputFileNlmxml($meTypesetDocument->path);
        $mergedXML->setInputFileCermine($cermineDocument->path);        
        $mergedXML->setOutputFile($outputFile);
        $mergedXML->convert();

        $job->conversionStage = JOB_CONVERSION_STAGE_XML_MERGE;

        if (!$mergedXML->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $mergedXMLDocument = $documentDAO->getInstance();
        $mergedXMLDocument->path = $outputFile;
        $mergedXMLDocument->job = $job;
        $mergedXMLDocument->conversionStage = JOB_CONVERSION_STAGE_XML_MERGE;

        $job->documents[] = $mergedXMLDocument;

        return $job;
    }
}
