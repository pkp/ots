<?php

namespace Application\Model\DAO;

use Xmlps\DAO\DAO;

class LogDAO extends DAO {

    /**
     * Returns repository name for Log repositroy
     *
     * @return string Log repository name
     */
    public function getRepositoryName()
    {
        return 'Application\Entity\Log';
    }
}
