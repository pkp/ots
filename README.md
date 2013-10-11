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

* Initialize the database

```
    # vendor/doctrine/doctrine-module/bin/doctrine-module  orm:schema-tool:update --force
```
* Run the unit tests (optional)

```
    # ./unittest.sh
```

Technical notes
---------------
* SASS compilation, CSS and Javascript compression & unification is done using Guard (http://guardgem.org)
* After making changes to Javascript (javascript/) or style files (style/scss/) recompile/recompress the style and Javascript files by running

```
    # guard
```

Module Description
------------------
* User
 * Authentication [X]
 * Registration [X]
 * Lost password retrieval
 * New password [X]
* Admin
 * User management
  * Confirm registration
  * Set user's document conversion rate
  * System log viewer [X]
* Manager
 * Receives conversion jobs
 * Queues jobs for individual workers
