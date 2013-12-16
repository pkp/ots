<?php

namespace Manager\Model\DAO;

use Xmlps\DAO\DAO;

class MetadataDAO extends DAO {

    /**
     * Returns repository name for Metadata repositroy
     *
     * @return string Metadata repository name
     */
    public function getRepositoryName()
    {
        return 'Manager\Entity\Metadata';
    }
}
