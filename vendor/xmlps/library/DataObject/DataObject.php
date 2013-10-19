<?php
/*
 * Defines data object getter and setter methods for inaccessible object
 * properties
 */
namespace Xmlps\DataObject;

use Zend\ServiceManager\ServiceLocatorAwareInterface;
use Zend\ServiceManager\ServiceLocatorInterface;

class DataObject implements ServiceLocatorAwareInterface
{
    protected $sm;

    /*
     * Property getter and setter methods
     */
    public function __call($func, $args)
    {
        // Getters and setters
        $matches = array();
        if (preg_Match('/^(get|set)([A-Z].*)$/', $func, $matches)) {
            $type = $matches[1];
            $property = lcfirst($matches[2]);

            if (!property_exists($this, $property)) {
                throw new \Exception($property . ' doesn\'t exist');
            }

            if ($type == 'get') {
                return $this->$property;
            } else {
                return $this->$property = $args[0];
            }
        }
        else {
            throw new \Exception(__CLASS__ . ' has no method ' . $func);
        }
    }

    /*
     * Get function for inaccessible properties
     */
    public function __get($name)
    {
        $getFunc = 'get' . ucfirst($name);
        return $this->$getFunc();
    }

    /*
     * Set function for inaccessible properties
     */
    public function __set($name, $value)
    {
        $setFunc = 'set' . ucfirst($name);
        return $this->$setFunc($value);
    }

    /**
     * Populates the objects properties from an array
     * NOTE: overwrite if you want the propery access to be more strict
     *
     * @return void
     */
    public function exchangeArray($data) {
        foreach (array_keys($this->getArrayCopy()) as $key) {
            if (isset($data[$key])) { $this->$key = $data[$key]; }
        }
    }

    /**
     * Returns an array with the objects properties as keys and the
     * property values as values
     *
     * @return void
     */
    public function getArrayCopy()
    {
        return get_object_vars($this);
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
}
