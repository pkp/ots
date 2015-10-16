<?php

namespace HtmlConversion\Model\Queue\Job;

use Manager\Model\Queue\Job\AbstractQueueJob;
use Manager\Entity\Job;

/**
 * Converts the NLMXML document to HTML.
 *
 * The output of this conversion is a zip file containing the converted HTML
 * document and additional assets to style the document.
 */
class HtmlJob extends AbstractQueueJob
{
    /**
     * Convert the NLMXML to HTML
     *
     * @param Job $job
     * @return Job $job
     */
    public function process(Job $job)
    {
        $html = $this->sm->get('HtmlConversion\Model\Converter\Html');

        // Fetch the NLMXML document resulting from merge
        $document = $job->getStageDocument(JOB_CONVERSION_STAGE_XML_MERGE);
        if (!$document) {
            throw new \Exception('Couldn\'t find the stage document');
        }

        $outputFile = $job->getDocumentPath() . '/html.zip';
        $html->setInputFile($document->path);
        $html->setOutputFile($outputFile);
        $html->convert();

        $job->conversionStage = JOB_CONVERSION_STAGE_HTML;

        if (!$html->getStatus()) {
            $job->status = JOB_STATUS_FAILED;
            return $job;
        }

        $documentDAO = $this->sm->get('Manager\Model\DAO\DocumentDAO');
        $htmlDocument = $documentDAO->getInstance();
        $htmlDocument->path = $outputFile;
        $htmlDocument->job = $job;
        $htmlDocument->conversionStage = JOB_CONVERSION_STAGE_HTML;

        $job->documents[] = $htmlDocument;

        return $job;
    }
}
