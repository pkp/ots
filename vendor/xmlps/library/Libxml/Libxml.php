<?php
namespace Xmlps\Libxml;

/**
 * Convenience methods for classes that make use of libxml
 */
trait Libxml
{
    /**
     * Avoid displaying of errors and warnings by libxml
     *
     * @return void
     */
    protected function disableLibxmlErrorDisplay()
    {
        libxml_use_internal_errors(true);
        libxml_clear_errors();
    }

    /**
     * Returns a string containing LIBXML errors
     *
     * @param string $seperator Seperate errors by this string
     *
     * @return string LIBXML errors
     */
    protected function libxmlErrors($seperator = PHP_EOL)
    {
        $errors = implode($seperator, array_map(
            function ($e) { return $e->message; },
            libxml_get_errors()
        ));
        libxml_clear_errors();

        return $errors;
    }
}

