PKP XML Parsing Service
=======================
Build status
------------
[![Build Status](https://travis-ci.org/MichaelThessel/xmlps.png?branch=master)](https://travis-ci.org/MichaelThessel/xmlps)

Module Description
------------------
* User
 * Authentication [X]
 * Registration [X]
 * New password [X]
 * Lost password retrieval
* Admin
 * Confirm registrations [X]
 * Set a user's document conversion rate [X]
 * Delete user [X]
 * Edit User [X]
 * System log viewer [X]
* Manager
 * Receives conversion jobs [X]
 * Job list [X]
 * Handles job distribution to queues
* DocxConversion
 * Converts documents to DocX format

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

* Initialize the database

```
    # vendor/doctrine/doctrine-module/bin/doctrine-module  orm:schema-tool:update --force
```
* The DocXConversion module needs LibreOffice installed. The server is tested to work with LibreOffice 4.1.3.

```
wget http://download.documentfoundation.org/libreoffice/stable/4.1.3/deb/x86_64/LibreOffice_4.1.3_Linux_x86-64_deb.tar.gz
tar -xzf LibreOffice_4.1.3_Linux_x86-64_deb.tar.gz
rm -f LibreOffice_4.1.3_Linux_x86-64_deb.tar.gz
sudo dpkg -i LibreOffice_4.1.3.2_Linux_x86-64_deb/DEBS/*.deb
rm -rf LibreOffice_4.1.3.2_Linux_x86-64_deb
```

Unit tests
----------
* After a successful installation the unit tests should complete without errors

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

* We are using [Travis CI](https://travis-ci.org/) to run automated tests and deploy to the staging server. The configuration is in .travis.yml
