<?php

namespace Xmlps\Command;

/**
 * Simple wrapper for the exec command
 */
class Command
{
    protected $baseCommand = '';
    protected $arguments = array();
    protected $redirect = '';

    protected $output = array();
    protected $returnStatus;

    protected $command = '';

    protected $suppressErrors = true;

    /**
     * Execute the command
     *
     * @return void
     */
    public function execute()
    {
        $this->buildCommand();
        exec($this->command, $this->output, $this->returnStatus);
    }

    /**
     * Build the command string
     *
     * @return string Command
     */
    protected function buildCommand()
    {
        if (is_null($this->baseCommand)) {
            throw new \Exception('Command hasn\'t been specified');
        }

        // Add the base command
        $command = $this->baseCommand;

        // Add the arguments
        $command .= ' ' . implode(' ', $this->arguments);

        // Escape the command
        $command = escapeshellcmd($command);

        // Add the output redirect
        if (is_null($this->redirect) and $this->suppressErrors) {
            $command .= ' 2> /dev/null';
        }
        elseif (!is_null($this->redirect)) {
            $command .= ' ' . $this->redirect;
        }

        $this->command = $command;
    }

    /**
     * Set the base command
     *
     * @param mixed $command
     *
     * @return void
     */
    public function setCommand($command)
    {
        $this->baseCommand = $command;
    }

    /**
     * Returns the command to be executed
     *
     * @return void
     */
    public function getCommand()
    {
        $this->buildCommand();
        return $this->command;
    }

    /**
     * Add a command switch with an optional argument
     *
     * @param string $switch Command switch
     * @param string $argument Optional argument
     *
     * @return void
     */
    public function addSwitch($switch, $argument = null)
    {
        if (is_null($argument)) {
            $this->arguments[] = $switch;
        }
        else {
            $this->arguments[] = $switch . ' ' . escapeshellarg($argument);
        }
    }

    /**
     * Add a command argument
     *
     * @param string $argument
     *
     * @return void
     */
    public function addArgument($argument)
    {
        $this->arguments[] = escapeshellarg($argument);
    }

    /**
     * Returns the command output as an array
     *
     * @return array Command output
     */
    public function getOutputArray()
    {
       return $this->output;
    }

    /**
     * Returns the command output as a string
     *
     * @return string Command output
     */
    public function getOutputString()
    {
        if (!is_array($this->output)) return '';

        return implode(PHP_EOL, $this->output);
    }

    /**
     * Returns whether or not the command ececuted sucessfully
     *
     * @return bool Command execution stuccess status
     */
    public function isSuccess()
    {
        return $this->returnStatus === 0;
    }

    /**
     * Returns the status code of the command execution
     *
     * @return int status code
     */
    public function getReturnStatus()
    {
        return $this->returnStatus;
    }

    /**
     * By default exec() will output STDERR; set whether or not to suppress the
     * output
     *
     * @param bool $suppressErrors Whether or not to surpress the error output
     *
     * @return void
     */
    public function suppressErrors($suppressErrors = true)
    {
        $this->suppressErrors = $suppressErrors;
    }

    /**
     * Add a STDOUT/STDERR redirect
     *
     * @param string $redirect
     *
     * @return void
     */
    public function addRedirect($redirect)
    {
        $this->redirect = $redirect;
    }
}
