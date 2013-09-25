<?php
/*
 * Defines data object getter and setter methods for inaccessible object
 * properties
 */
namespace Xmlps\DataObject;

class DataObject {
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
}
