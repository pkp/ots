<?php

namespace User\Model\DAO;

use Xmlps\DAO\DAO;

class UserDAO extends DAO {

    /**
     * Returns repository name for User repositroy
     *
     * @return string User repository name
     */
    public function getRepositoryName()
    {
        return 'User\Entity\User';
    }
}
