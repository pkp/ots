<?php

namespace Xmlps\Logger;

use Zend\Log;
use Zend\Log\Logger as ZendLogger;
use Zend\Mvc\I18n\Translator;

class Logger extends ZendLogger {
    protected $translator;

    public function __construct(Translator $translator, $options = null)
    {
        $this->translator = $translator;

        parent::__construct($options);
    }

    /**
     * Adds translation support and automatic sprintf support to logging
     *
     * Mehtod names are [priority]Translate
     *
     * i.e.:
     *   $logger->debugTranslate('translation.key', 'a', 'b');
     *
     *   translation.key = 'Hello World %s %s'
     *
     *   results in: 'Hello World a b'
     *
     * @param mixed $method Called method name
     * @param mixed $args Method arguments
     *
     * @return void
     */
    public function __call($method, $args)
    {
        // Build a regex of the acceptable priorities
        $priorities = implode(
            '|',
            array_map(
                function ($p) {
                    return preg_quote(strtolower($p));
                },
                $this->priorities
            )
        );

        // Check if the call matches [priority]Translate
        $matches = array();
        if (!preg_match('/^(' . $priorities . ')Translate$/', $method, $matches)) {
            throw new \Exception('Invalid method ' . $method);
        }

        // Translate the message
        $message = array_shift($args);
        $message = $this->translator->translate($message);

        // Format the message
        if ($args) { $message = vsprintf($message, $args); }

        // Log the message
        $priority = $matches[1];
        return call_user_func(array($this, $priority), $message);
    }

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
