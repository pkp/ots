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
     * Populates $citationStyleFile based on the given citation style title
     *
     * @param string $title
     *
     * @return bool Whether or not a file for the given title could be found
     */
    public function setCitationStyleFileByTitle($title)
    {
        $file = $this->citationStyles->getCitationStyleFileByTitle($title);
        if (!$file) return false;

        $this->citationStyleFile = $file;

        return true;
    }
}
