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

    /**
     * Returns a user paginator with all jobs of this user ordered by creation
     */
    public function getJobPaginator($user)
    {
        return $this->getPaginator(
            'SELECT j FROM Manager\Entity\Job AS j WHERE j.user = :userId ORDER BY j.id DESC',
            array('userId' => $user->id)
        );
    }

    /**
     * Returns a admin job paginator with all users jobs ordered by creation
     */
    public function getAdminJobPaginator()
    {
        return $this->getPaginator(
            'SELECT j FROM Manager\Entity\Job AS j ORDER BY j.id DESC'
        );
    }
}
