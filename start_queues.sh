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
php public/index.php queue doctrine bibtex --start &
echo "Started Bibtex queue [PID $!]"
php public/index.php queue doctrine bibtexreferences --start &
echo "Started BibtexReferences queue [PID $!]"
php public/index.php queue doctrine html --start &
echo "Started HTML queue [PID $!]"
php public/index.php queue doctrine pdf --start &
echo "Started PDF pdf queue [PID $!]"
php public/index.php queue doctrine xmp --start &
echo "Started XMP queue [PID $!]"
php public/index.php queue doctrine zip --start &
echo "Started Zip queue [PID $!]"
