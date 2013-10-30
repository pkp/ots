<?php
/*
 * Data Access Object
 */
namespace Xmlps\DAO;

use Doctrine\ORM\EntityManager;
use DoctrineORMModule\Paginator\Adapter\DoctrinePaginator;
use Doctrine\ORM\Tools\Pagination\Paginator as ORMPaginator;
use Zend\Paginator\Paginator;

use Zend\ServiceManager\ServiceLocatorAwareInterface;
use Zend\ServiceManager\ServiceLocatorInterface;

abstract class DAO implements DAOInterface, ServiceLocatorAwareInterface {

    protected $em;
    protected $sm;

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
     * Set the service locator
     *
     * @param ServiceLocatorInterface $sm
     *
     * @return void
     */
    public function setServiceLocator(ServiceLocatorInterface $sm)
    {
        $this->sm = $sm;
    }

    /**
     * Get the service locator
     *
     * @return ServiceLocator ServiceLocator instance
     */
    public function getServiceLocator()
    {
        return $this->sm;
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
     * @param array $params Query parameters
     *
     * @return Zend\Paginator\Paginator
     */
    public function getPaginator($query, $params = array())
    {
        $query = $this->em->createQuery($query);

        if ($params) {
            if (is_scalar($params)) { $query->setParameter(1, $params); }
            if (is_array($params)) { $query->setParameters($params); }
        }

        return new Paginator(
            new DoctrinePaginator(new ORMPaginator($query))
        );
    }

    /**
     * Returns a new instance
     *
     * @return mixed Instance
     */
    public function getInstance()
    {
        // Retrieve the instance from the service manager
        return $this->sm->get($this->repositoryName);
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
     * Find entites
     *
     * @param mixed $args Key/Value pair to search for
     *
     * @return mixed Entities
     */
    public function findBy($args)
    {
       return $this->getRepository()->findBy($args);
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
