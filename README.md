PKP XML Parsing Service
=======================

Module Description
------------------
* User
 * Authentication
 * Registration
 * New password
* Admin
 * Confirm registrations
 * Set a user's document conversion rate
 * Delete user
 * Edit User
 * System log viewer
* Manager
 * Receives conversion jobs
 * Job list
 * Handles job distribution to queues
* DocxConversion
 * Converts documents to DocX format
* NlmxmlConversion
 * Converts documents to NLMXML format
* ReferenceConversion
 * Parses references from DocX document into a seperate XML file
* BibtexConversion
 * Converts references from the previous step into Bibtex
* BibtexreferenceConversion
 * Converts Bibtex references into NLMXML and merges the converted references into the NLMXML document
* HtmlConversion
 * Converts the NLMXML document into HTML
* CitationStyleConversion
 * Formats the citations in the HTML document according to the citationstyle requested by the user
* PdfConversion
 * Converts the HTML document into PDF
* XmpConversion
 * Adds an XMP sidecar with metadata from the NLMXML to the PDF document
* ZipConversion
 * Zips all documents
* API
 * Simple REST API to submit and retrieve jobs and to provide functionality for the frontends AJAX callbacks.

Requirements
------------
* [Java VM](https://java.com/en/download/index.jsp) needs to be installed
* Citation parsing has a variety of requirements please refer to the [ParsCit documentation](https://github.com/knmnyn/ParsCit/blob/master/INSTALL)
* [xml2bib](http://sourceforge.net/p/bibutils/home/xml2bib/) needs to be installed
* [Pandoc](http://johnmacfarlane.net/pandoc/) & libghc-citeproc-hs-data needs to be installed
* The XMP conversion needs [Exiftool](http://www.sno.phy.queensu.ca/~phil/exiftool/) to be installed
* The docX conversion needs [LibreOffice](http://www.libreoffice.org/) with unoconv installed. The server is tested to work with LibreOffice 4.1.3.

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

API
---

There is a simple REST API available to submit, view and retrieve jobs from/to the server.

__Submit__

Submit a job to the server. The citationStyleHash is an internal identifier
for the requested citaton style. A list of hashes can be retrieved through the
citationStyleList API. The API will return the job id which can be used to
retrieve the completed job later or to query the server for the job status.

URL: api/job/submit
Request type: POST
Parameters:

 * email
 * password
 * fileName
 * fileContent
 * citationStyleHash

I.e.
```
http://example.com/api/job/submit
POST parameters:
    'email' => 'user@example.com'
    'password' => 'passowrd'
    'fileName' => 'document.docx'
    'citationStyleHash' => 'c6de5efe3294b26391ea343053c19a84',
    'fileContent' => '...'
```
Example response:
```
{"status":"success","id":123}
```

__Status__

Returns the current status for a job. Only completed jobs can be retrieved from
the server.  A full list of statuses can be found
[here](https://github.com/pkp/xmlps/blob/master/module/Manager/src/Manager/Entity/Job.php#L9).

URL: api/job/status
Request type: GET
Parameters:

 * email
 * password
 * id

I.e.
```
http://example.com/api/job/status?email=user@example.com&password=password&id=123
```
Example response:
```
{"status":"success","jobStatus":0,"jobStatusDescription":"Pending"}
```

__Citation Style List__

Returns a list of available citation styles and their internal ids. We support
all citation styles from [citationstyles.org](http://citationstyles.org/)

URL: api/job/citationStyleList
Request type: GET
Parameters:

 * email
 * password

I.e.
```
http://example.com/api/job/citationStyleList?email=user@example.com&password=password
```
Example response:
```
{"status":"success","citationStyles":{"c6de5efe3294b26391ea343053c19a84":"ACM SIG Proceedings (\u0022et al.\u0022 for 15+ authors)"...
```

__Retrieve__

Retrieve a converted document. The jobConversionStage parameter specifys which type
of conversion you want to get retrned. A full list of conversion stages can be
found
[here](https://github.com/pkp/xmlps/blob/master/module/Manager/src/Manager/Entity/Job.php#L14).

URL: api/job/retrieve
Request type: GET
Parameters:

 * email
 * password
 * id
 * conversionStage

I.e.
```
http://example.com/api/job/retrieve?email=user@example.com&password=password&id=123&conversionStage=10
```
Example response:
```
The requested document or a JSON string with an error message.
```
