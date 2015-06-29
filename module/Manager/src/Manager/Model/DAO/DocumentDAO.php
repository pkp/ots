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

    /**
     * Returns a job paginator with all documents of this job ordered by creation
     */
    public function getDocumentPaginator($job)
    {
        return $this->getPaginator(
            'SELECT d FROM Manager\Entity\Document AS d WHERE d.job = :jobId ORDER BY d.id DESC',
            array('jobId' => $job->id)
        );
    }
}
