<?php

namespace Xmlps\Log;
use Zend\Log;

class Logger extends \Zend\Log\Logger {
    /*
     * Log a log message
     */
    public function log($priority, $message, $extra = array(), $context = true)
    {
        // Prepend the context
        if ($context === true) {
            $context = $this->parseContext();
        }
        $message = empty($context) ? $context : $context . ' : ' . $message;

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
}
