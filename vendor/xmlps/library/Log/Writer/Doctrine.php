<?php

namespace Xmlps\Log\Writer;

use Zend\Log\Exception;
use Zend\Log\Formatter\FormatterInterface;
use Zend\Stdlib\ArrayUtils;
use Zend\Log\Writer\AbstractWriter;

use Xmlps\DAO\DAO;

/**
 * Doctrine log writer.
 */
class Doctrine extends AbstractWriter
{
    protected $logEntityDAO;

    /**
     * Constructor
     *
     * @param DAO $logEntityDAO
     *
     * @return void
     */
    public function __construct(DAO $logEntityDAO)
    {
        $this->logEntityDAO = $logEntityDAO;
    }

    /**
     * This writer does not support formatting.
     *
     * @param string|FormatterInterface $formatter
     *
     * @return WriterInterface
     */
    public function setFormatter($formatter)
    {
        return $this;
    }

    /**
     * Write a message to the log.
     *
     * @param array $event Event data
     *
     * @return void
     */
    protected function doWrite(array $event)
    {
        $logEntity = $this->logEntityDAO->getInstance();

        $logEntity->timestamp = time();
        $logEntity->priority = $event['priority'];
        $logEntity->message = $event['message'];
        $logEntity->ip = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : null;

        $this->logEntityDAO->save($logEntity);
    }
}
