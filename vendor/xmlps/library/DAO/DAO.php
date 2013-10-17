<?php
/*
 * Data Access Object
 */
namespace Xmlps\DAO;

use Doctrine\ORM\EntityManager;
use DoctrineORMModule\Paginator\Adapter\DoctrinePaginator;
use Doctrine\ORM\Tools\Pagination\Paginator as ORMPaginator;
use Zend\Paginator\Paginator;

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
     * @return mixed Repository instance
     */
    public function getRepository()
    {
        if (!$this->repository) {
            $this->repository = $this->em->getRepository($this->repositoryName);
        }

        return $this->repository;
    }

    /**
     * Returns the entity manager instance
     *
     * @return mixed Entity manager instance
     */
    public function getEntityManager()
    {
        return $this->em;
    }

    /**
     * Returns a paginator for a given query
     *
     * @param mixed $query
     *
     * @return Zend\Paginator\Paginator
     */
    public function getPaginator($query)
    {
        $query = $this->em->createQuery($query);
        return new Paginator(
            new DoctrinePaginator(new ORMPaginator($query))
        );
    }

    /**
     * Find a entity by its primary key
     *
     * @param mixed $key Entity primary key
     *
     * @return mixed Entity
     */
    public function find($key)
    {
       return $this->getRepository()->find($key);
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
     * Find all entities
     *
     * @return mixed Entities
     */
    public function findAll()
    {
       return $this->getRepository()->findAll();
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
