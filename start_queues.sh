#!/bin/sh
RUNNING=`ps ax | grep 'public/index.php queue doctrine' | grep -v grep | awk '{print $1}'`

for pid in $RUNNING; do
    echo "Killing queue process [PID $pid]"
    kill -9 $pid
done

php public/index.php queue doctrine docx --start &
echo "Started DocX queue [PID $!]"
php public/index.php queue doctrine nlmxml --start &
echo "Started NLMXML queue [PID $!]"
php public/index.php queue doctrine references --start &
echo "Started References queue [PID $!]"
php public/index.php queue doctrine zip --start &
echo "Started Zip queue [PID $!]"
