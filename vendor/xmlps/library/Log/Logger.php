<?php

namespace Xmlps\Logger;
use Zend\Log;

class Logger extends \Zend\Log\Logger {
    /*
     * Log a log message
     */
    public function log($priority, $message, $extra = array(), $context = false)
    {
        // Prepend the context
        if ($context === true) {
            $context = $this->parseContext();
        }
        $message = empty($context) ? $message : $context . ' : ' . $message;

        // Log the message
        parent::log($priority, $message, $extra);
    }

    /*
     * Parse the context
     */
    protected function parseContext()
    {
        $trace = debug_backtrace();
        if (!isset($trace[3])) return '';

        $trace = $trace[3];
        $context = '';
        if (!empty($trace['class'])) {
            $context = $trace['class'] . '::' . $trace['function'] . '()';
        }
        elseif (!empty($trace['function'])) {
            $context = $trace['function'];
        }
        elseif (!empty($trace['file'])) {
            $context = $trace['file'];
        }

        return $context;
    }

    /**
     * Returns an array with priorty names
     *
     * @return array Priority name array
     */
    public function getPriorities()
    {
        return $this->priorities;
    }
}
