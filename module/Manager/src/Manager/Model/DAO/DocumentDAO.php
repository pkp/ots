<?php

namespace Manager\Model\DAO;

use Xmlps\DAO\DAO;

class DocumentDAO extends DAO {

    /**
     * Returns repository name for Document repositroy
     *
     * @return string Document repository name
     */
    public function getRepositoryName()
    {
        return 'Manager\Entity\Document';
    }
}
