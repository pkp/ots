<?php

namespace Manager\Model\DAO;

use Xmlps\DAO\DAO;

class JobDAO extends DAO {

    /**
     * Returns repository name for Job repositroy
     *
     * @return string Job repository name
     */
    public function getRepositoryName()
    {
        return 'Manager\Entity\Job';
    }
}
