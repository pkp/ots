PKP XML Parsing Service
=======================

Module Description
------------------

-   User

    -   Authentication

    -   Registration

    -   New password

    -   Generate API access token

-   Admin

    -   Confirm registrations

    -   Set a user's document conversion rate

    -   Delete user

    -   Edit User

    -   System log viewer

-   Manager

    -   Receives conversion jobs

    -   Job list

    -   Handles job distribution to queues

-   PathFinder

    -   Determines which conversion path to take

-   DocxConversion

    -   Converts documents to DocX format

-   WpPdfConversion

    -   Converts word processing documents directly to PDF

-   NlmxmlConversion

    -   Uses [meTypeset](<http://github.com/MartinPaulEve/meTypeset>) to perform part of the NLM XML conversion

-   Cermine

    -   Uses [CERMINE](<http://cermine.ceon.pl/>) to perform part of the NLM XML conversion

-   Grobid

    -   Uses Grobid to perform part of the NLM XML conversion

-   ReferenceConversion

    -   Parses references from DocX document into a seperate XML file

-   BibtexConversion

    -   Converts references from the previous step into Bibtex

-   BibtexreferenceConversion

    -   Converts Bibtex references into NLMXML and merges the converted references into the NLMXML document

-   HtmlConversion

    -   Converts the NLMXML document into HTML

-   CitationStyleConversion

    -   Formats the citations in the HTML document according to the citationstyle requested by the user

-   PdfConversion

    -   Converts the HTML document into PDF

-   XmpConversion

    -   Adds an XMP sidecar with metadata from the NLMXML to the PDF document

-   EpubConversion

    -   Converts the NLMXML document into Epub format

-   MergeXMLOutputs

    -   Combines the CERMINE and meTypeset outputs (as modified by BibTeX processing, if appropriate) into a better NLM XML document

-   ZipConversion

    -   Zips all documents

-   API

    -   Simple REST API to submit and retrieve jobs and to provide functionality for the frontends AJAX callbacks.

 

Requirements
------------

-   [Apache mod\_headers](<http://httpd.apache.org/docs/2.2/mod/mod_headers.html>) needs to be installed and enabled

-   meTypeset needs the python lxml library

-   [Java VM](<https://java.com/en/download/index.jsp>) needs to be installed

-   sendmail needs to be installed and configured

-   zip and unzip need to be installed, and I have to mention this because they aren’t by default on Ubuntu for some reason.

-   [MySQL](<https://www.mysql.com/>)

-   citation parsing has a variety of requirements, as listed in the [ParsCit documentation.](<https://github.com/knmnyn/ParsCit/blob/master/INSTALL>) At minimum, you need Perl XML Twig and XML Writer, a working Ruby installation, and CRF++ binaries.

-   [xml2bib](<http://sourceforge.net/p/bibutils/home/xml2bib/>) needs to be installed

-   [Pandoc, pandoc-citeproc, and](<http://johnmacfarlane.net/pandoc>) libghc-citeproc-hs-data need to be installed

-   The XMP conversion needs [Exiftool](<http://www.sno.phy.queensu.ca/~phil/exiftool/>) to be installed

-   The docX conversion needs [LibreOffice](<http://www.libreoffice.org/>) with unoconv installed. The server is tested to work with LibreOffice 4.2.4 through 5.x.

-   The PHP5 xsl and curl modules must be installed.

 

Installation
------------

-   Copy the source

`# git clone https://github.com/pkp/xmlps.git   # cd xmlps`

-   Install the dependencies

`# php composer.phar self-update   # php composer.phar install`

-   Ensure there is a MySQL database called `xmlps`, and a MySQL user with access to it.

-   Configure the environment:

-   Copy the `local.php` template, then edit it:

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    # cp config/autoload/local.php.dist config/autoload/local.php
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-   Provide the MySQL user and password.

-   If you want debug messages to be displayed to the user (*i.e.*, if developing locally), set these options:

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ php
        'view_manager' => array(
            'display_not_found_reason' => true,
            'display_exceptions' => true,
        ),
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-   If using a version of `unoconv` installed via package manager (such as apt), you may need to override the command, *e.g.*:

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ php
        'conversion' => array(
            'docx' => array(
                'unoconv' => array(
                    'command' => 'unoconv',
                ),
            ),
        ),
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-   Make sure the cache directories are writable by your Web server process, and empty the cache directory, *e.g*:

`# chmod -R go+w var   # rm var/cache/zfcache-ea/*`

-   You need to manually set the path to the MITIE libraries and the ner\_stream binary from https://github.com/mit-nlp/MITIE as in https://github.com/pkp/xmlps/commit/63963bfc75f0ebb3be2bfcfca44865a15700b5e0 in order for the Named Entity Recognition module to work.

-   Initialize the database (you may need to manually create an 'xmlps' database first)

`# vendor/doctrine/doctrine-module/bin/doctrine-module orm:schema-tool:update --force`

-   Run the shell script that starts the conversion queues

`# ./start_queues.sh`

 

Sample sites-available/httpd.conf:
----------------------------------

 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<VirtualHost *:80>
    ServerAdmin webmaster@localhost

    DocumentRoot /var/www/html/public
    <Directory />
        Options FollowSymLinks
        AllowOverride All
    </Directory>
    <Directory /var/www/html/public>
        Options -Indexes +FollowSymLinks +MultiViews
        AllowOverride All
        Order allow,deny
        allow from all
    </Directory>



    ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
    <Directory "/usr/lib/cgi-bin">
        AllowOverride None
        Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
        Order allow,deny
        Allow from all
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log

    # Possible values include: debug, info, notice, warn, error, crit,
    # alert, emerg.
    LogLevel warn

    CustomLog ${APACHE_LOG_DIR}/access.log combined

    Alias /doc/ "/usr/share/doc/"
    <Directory "/usr/share/doc/">
        Options Indexes MultiViews FollowSymLinks
        AllowOverride None
        Order deny,allow
        Deny from all
        Allow from 127.0.0.0/255.0.0.0 ::1/128
    </Directory>

</VirtualHost>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

Note that you will probably want to make sure that port 8080 is blocked from non-localhost connections so that external submissions can not be made directly to the Grobid module service.

 

Unit tests
----------

After a successful installation the unit tests should complete without errors:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# ./unittest.sh
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You will need to re-empty the cache directories afterward, if your Web server runs as a different user than you.

 

Developer notes
---------------

-   SASS compilation, CSS and Javascript compression & unification is done using Guard (http://guardgem.org)

-   After making changes to Javascript (javascript/) or style files (style/scss/) recompile/recompress the style and Javascript files by running

`# guard`

 

API
---

There is a simple REST API available to submit, view and retrieve jobs from/to the server.

**Submit**

Submit a job to the server. The `citationStyleHash` is an internal identifier for the requested citaton style. A list of hashes can be retrieved through the citationStyleList API. The API will return the job id which can be used to retrieve the completed job later or to query the server for the job status.

-   URL: `api/job/submit`

-   Request type: `POST`

-   Parameters:

-   `email`

-   `access_token`

-   `fileName`

-   `fileContent`

-   `citationStyleHash`

-   `fileMetadata`

*E.g.*:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
http://example.com/api/job/submit
POST parameters:
    'email' => 'user@example.com'
    'access_token' => 'access_token'
    'fileName' => 'document.docx'
    'citationStyleHash' => 'c6de5efe3294b26391ea343053c19a84',
    'fileContent' => '...'
    'fileMetadata' => *OPTIONAL* known good metadata like https://raw.githubusercontent.com/pkp/xmlps/master/module/MergeXMLOutputs/test/assets/metadata.json 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example response:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
{"status":"success","id":123}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Status**

Returns the current status for a job. Only completed jobs can be retrieved from the server. A full list of statuses can be found [here](<https://github.com/pkp/xmlps/blob/master/module/Manager/src/Manager/Entity/Job.php#L9>).

-   URL: `api/job/status`

-   Request type: `GET`

-   Parameters:

-   `email`

-   `access_token`

-   `id`

*E.g.*:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
http://example.com/api/job/status?email=user@example.com&access_token=access_token&id=123
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example response:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
{"status":"success","jobStatus":0,"jobStatusDescription":"Pending"}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Citation Style List**

Returns a list of available citation styles and their internal ids. We support all citation styles from [citationstyles.org](<http://citationstyles.org/>).

-   URL: `api/job/citationStyleList`

-   Request type: `GET`

*E.g.*:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
http://example.com/api/job/citationStyleList
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example response:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
{"status":"success","citationStyles":{"c6de5efe3294b26391ea343053c19a84":"ACM SIG Proceedings (\u0022et al.\u0022 for 15+ authors)"...
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Retrieve**

Retrieve a converted document. The jobConversionStage parameter specifys which type of conversion you want to get retrned. A full list of conversion stages can be found [here](<https://github.com/pkp/xmlps/blob/master/module/Manager/src/Manager/Entity/Job.php#L14>).

-   URL: `api/job/retrieve`

-   Request type: `GET`

-   Parameters:

-   `email`

-   `access_token`

-   `id`

-   `conversionStage`

*E.g.*:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
http://example.com/api/job/retrieve?email=user@example.com&access_token=access_token&id=123&conversionStage=10
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example response:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The requested document or a JSON string with an error message.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
