<?php

namespace Manager\Entity;

use Doctrine\ORM\Mapping as ORM;
use Xmlps\DataObject\DataObject;

/**
 * JobMeta
 *
 * @ORM\Entity
 * @ORM\Table(name="metadata")
 */
class Metadata extends DataObject
{
    protected $citationStyles;

    /**
     * Constructor
     *
     * @param mixed $citationStyles CitationStyles instance
     * @return void
     */
    public function __construct($citationStyles)
    {
        $this->citationStyles = $citationStyles;
    }

    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    protected $citationStyleFile;

    /**
     * Populates $citationStyleFile based on the file hash given
     *
     * @param string $hash
     *
     * @return bool Whether or not a file for the given hash could be found
     */
    public function setCitationStyleFileByHash($hash)
    {
        $file = $this->citationStyles->getCitationStyleFileByHash($hash);
        if (!$file) return false;

        $this->citationStyleFile = $file;

        return true;
    }
}
