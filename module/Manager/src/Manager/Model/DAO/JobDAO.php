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
     * Returns a user paginator with all results ordered by creation
     */
    public function getJobPaginator($user)
    {
        return $this->getPaginator(
            'SELECT j FROM Manager\Entity\Job AS j WHERE j.user = :userId ORDER BY j.id DESC',
            array('userId' => $user->id)
        );
    }
}
