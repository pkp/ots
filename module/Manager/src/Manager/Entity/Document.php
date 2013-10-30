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
     * @ORM\Column(type="string")
     */
    protected $mimeType;

    /**
     * @ORM\Column(type="string")
     */
    protected $uploadFileName;

    /**
     * @ORM\Column(type="integer")
     */
    protected $size;

    /**
     * Sets path to file, will throw an exception if the file doesn't exist
     *
     * @param string $path Path to document file
     *
     * @return void
     */
    public function setPath($path) {
        if (!file_exists($path)) {
            throw new \Exception('File doesn\'t exist');
        }

        $this->path = $path;
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
