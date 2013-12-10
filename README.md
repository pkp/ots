PKP XML Parsing Service
=======================

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
 * Handles job distribution to queues [X]
* DocxConversion
 * Converts documents to DocX format [X]
* NlmxmlConversion
 * Converts documents to NLM3 XML format [X]
* ReferenceConversion
 * Parses references into a seperate XML file [X]
* BibtexConversion
 * Converts parsed references into Bibtex [X]
* BibtexreferenceConversion
 * Converts Bibtex references into NLMXML and merges the converted references into the NLMXML document [X]
* HtmlConversion
 * Converts the NLMXML document into HTML [X]
* PdfConversion
 * Converts the HTML document into PDF [X]
* ZipConversion
 * Zips all documents [X]

Requirements
------------
* [Java VM](https://java.com/en/download/index.jsp) needs to be installed
* The docX conversion needs [LibreOffice](http://www.libreoffice.org/) with unoconv installed. The server is tested to work with LibreOffice 4.1.3.
* Citation parsing has a variety of requirements please refer to the [ParsCit documentation](https://github.com/knmnyn/ParsCit/blob/master/INSTALL)
* [xml2bib](http://sourceforge.net/p/bibutils/home/xml2bib/) needs to be installed
* [Pandoc](http://johnmacfarlane.net/pandoc/) needs to be installed

```
wget http://download.documentfoundation.org/libreoffice/stable/4.1.3/deb/x86_64/LibreOffice_4.1.3_Linux_x86-64_deb.tar.gz
tar -xzf LibreOffice_4.1.3_Linux_x86-64_deb.tar.gz
rm -f LibreOffice_4.1.3_Linux_x86-64_deb.tar.gz
sudo dpkg -i LibreOffice_4.1.3.2_Linux_x86-64_deb/DEBS/*.deb
rm -rf LibreOffice_4.1.3.2_Linux_x86-64_deb
```

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
* Run the shell script that starts the conversion queues

```
./start_queues.sh
```

Unit tests
----------
* After a successful installation the unit tests should complete without errors

```
# ./unittest.sh
```

Developer notes
---------------
* SASS compilation, CSS and Javascript compression & unification is done using Guard (http://guardgem.org)
* After making changes to Javascript (javascript/) or style files (style/scss/) recompile/recompress the style and Javascript files by running

```
# guard
```
