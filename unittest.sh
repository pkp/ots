#!/bin/sh
cd $(cd -P -- "$(dirname -- "$0")" && pwd -P)
php vendor/phpunit/phpunit/phpunit.php
