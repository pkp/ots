<?php
/*
 * Data Access Object
 */
namespace Xmlps\DAO;

use Doctrine\ORM\EntityManager;

abstract class DAO implements DAOInterface {
    protected $em;
    protected $repositoryName;
    protected $repository;

    /**
     * Constructor
     *
     * @param EntityManager $em
     *
     * @return void
     */
    public function __construct(EntityManager $em)
    {
        $this->em = $em;
        $this->repositoryName = $this->getRepositoryName();
    }

    /**
     * Returns the repository instance
     *
     * @return mixed repository instance
     */
    public function getRepository()
    {
        if (!$this->repository) {
            $this->repository = $this->em->getRepository($this->repositoryName);
        }

        return $this->repository;
    }

    /**
     * Find one entity
     *
     * @param mixed $args Key/Value pair to search for
     *
     * @return mixed Entity
     */
    public function findOneBy($args)
    {
       return $this->getRepository()->findOneBy($args);
    }

    /**
     * Save entity
     *
     * @param mixed $object Entity
     *
     * @return void
     */
    public function save($object)
    {
        $this->em->persist($object);
        $this->em->flush();
    }

    /**
     * Remove entity
     *
     * @param mixed $object Entity
     *
     * @return void
     */
    public function remove($object)
    {
        $this->em->remove($object);
        $this->em->flush();
    }
}
