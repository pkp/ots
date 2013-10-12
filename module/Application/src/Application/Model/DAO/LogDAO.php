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

    /**
     * Returns a entry paginator with all log results ordered by id
     */
    public function getLogPaginator()
    {
        return $this->getPaginator(
            'SELECT l from Application\Entity\Log l ORDER BY l.id DESC'
        );
    }
}
