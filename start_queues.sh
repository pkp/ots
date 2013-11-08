#!/bin/sh
php public/index.php queue doctrine docx --start &
echo "Started DocX queue [PID $!]"
