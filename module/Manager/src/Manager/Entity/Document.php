<?php

namespace Manager\Entity;

use Doctrine\ORM\Mapping as ORM;
use Xmlps\DataObject\DataObject;

/**
 * Document
 *
 * @ORM\Entity
 * @ORM\Table(name="document")
 * @ORM\HasLifecycleCallbacks
 */
class Document extends DataObject
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", nullable=false, unique=true)
     */
    protected $path;

    /**
     * @ORM\Column(type="integer", nullable=false)
     */
    protected $conversionStage;

    /**
     * @ORM\Column(type="string")
     */
    protected $mimeType;

    /**
     * @ORM\Column(type="integer")
     */
    protected $size;

    /**
     * @ORM\ManyToOne(targetEntity="Manager\Entity\Job", inversedBy="documents")
     * @ORM\JoinColumn(name="jobId", referencedColumnName="id", nullable=false)
     */
    protected $job;

    /**
     * Sets path to file, will throw an exception if the file doesn't exist
     *
     * @param string $path Path to document file
     *
     * @return void
     */
    public function setPath($path)
    {
        if (!file_exists($path)) {
            throw new \Exception('File doesn\'t exist');
        }

        $this->path = $path;

        // Set the file size
        if (!$this->size) {
            $this->setSize();
        }

        // Set the mime type if the Fileinfo extension is available
        if (!$this->mimeType and function_exists('finfo_open')) {
            $finfo = finfo_open(FILEINFO_MIME_TYPE);
            $this->mimeType = finfo_file($finfo, $this->path);
            finfo_close($finfo);
        }
    }

    /**
     * Sets the documents conversion stage. It also updates the file size as
     * some conversions simply change the document and don't create a new one
     *
     * @param int $conversionStage
     *
     * @return void
     */
    public function setConversionStage($conversionStage)
    {
        $this->conversionStage = $conversionStage;

        $this->setSize();
    }

    /**
     * Set the file size of the document
     *
     * @return void
     */
    protected function setSize()
    {
        $this->size = filesize($this->path);
    }

    /**
     * Returns the file name of the document
     *
     * @param bool $stripSuffix Whether or not to strip the suffix
     *
     * @return string File name of document
     */
    public function getFileName($stripSuffix = false)
    {
        $fileName =  basename($this->path);

        if ($stripSuffix) {
            $fileName = preg_replace('/\.[^.]*$/', '', $fileName);
        }

        return $fileName;
    }

    /**
     * Removes the document from the file system
     *
     * @return void
     *
     * @ORM\PreRemove
     */
    public function removeFile()
    {
        if (file_exists($this->path)) {
            @unlink($this->path);
        }
    }
}
