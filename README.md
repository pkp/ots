PKP XML Parsing Service
=======================

Installation
------------
* Copy the source

```
# git clone https://github.com/MichaelThessel/xmlps.git
# cd xmlps
```
* Install the dependencies

```
# php composer.phar self-update
# php composer.phar install
```
* Configure the environment

```
cp config/autoload/local.php.dist config/autoload/local.php
```
* Change local.php according to your environment
* Make sure var/log is writable by your webserver. I.e.:

```
# sudo chown :www-data var/log
# chmod g+w var/log
```
* Run the unit tests (optional)

```
    # ./unittest.sh
```
