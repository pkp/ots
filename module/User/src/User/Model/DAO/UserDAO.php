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

    /**
     * Returns a user paginator with all results ordered by email
     */
    public function getUserPaginator()
    {
        return $this->getPaginator(
            'SELECT u FROM User\Entity\User u ORDER BY u.email'
        );
    }
}
