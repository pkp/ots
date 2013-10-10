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
    protected $logEntity;

    /**
     * Constructor
     *
     * @param DAO $logEntityDAO
     * @param mixed $logEntity
     *
     * @return void
     */
    public function __construct(DAO $logEntityDAO, $logEntity)
    {
        $this->logEntityDAO = $logEntityDAO;
        $this->logEntity= $logEntity;
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
        $this->logEntity->timestamp = time();
        $this->logEntity->priority = $event['priority'];
        $this->logEntity->message = $event['message'];
        $this->logEntity->ip = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : null;

        $this->logEntityDAO->save($this->logEntity);
    }
}
