<?php
/**
 * Global Configuration Override
 *
 * You can use this file for overriding configuration values from modules, etc.
 * You would place values in here that are agnostic to the environment and not
 * sensitive to security.
 *
 * @NOTE: In practice, this file will typically be INCLUDED in your source
 * control, so do not include passwords or other sensitive information in this
 * file.
 */

return array(
    'view_manager' => array(
        'display_not_found_reason' => false,
        'display_exceptions' => false,
    ),
    'doctrine' => array(
        'connection' => array(
            'orm_default' => array(
                'driverClass' => 'Doctrine\DBAL\Driver\PDOMySql\Driver',
                'params' => array(
                    'host' => 'localhost',
                    'port' => '3306',
                    'user' => '',
                    'password' => '',
                    'dbname' => 'xmlps',
                    'charset' => 'utf8',
                    'driverOptions' => array(1002 => 'SET NAMES utf8')
                ),
            ),
        ),
        'configuration' => array(
            'orm_default' => array(
                'proxy_dir' => 'var/doctrine/DoctrineORMModule/Proxy'
            ),
        ),
    ),
    'cache' => array(
        'adapter' => array(
            'name' => 'filesystem'
        ),
        'options' => array(
            'cache_dir' => 'var/cache/',
            'ttl' => '86400',
        ),
    ),
    'log' => array(
        'level' => 6,
    ),
    'notification' => array(
        'adminEmail' => 'axfelix@gmail.com',
    ),
    'upload' => array(
        'valid_mime_types' => array(
            'application/rtf',
            'application/pdf',
            'application/msword',
            'application/vnd.oasis.opendocument.text',
        )
    ),
    'conversion' => array(
        'manager' => array(
            'job' => array(
                // A list of stage constants (from
                // \Manager\Entity\Job) whose output should be
                // delivered to the user.
                //
                // These constants should be moved to index.php for
                // global accessibility, or maybe even defined here.
                'outputs' => array(
                    15, // JOB_CONVERSION_STAGE_WP_IN
                    16, // JOB_CONVERSION_STAGE_PDF_IN
                    14, // JOB_CONVERSION_STAGE_XML_MERGE
                    3,  // JOB_CONVERSION_STAGE_REFERENCES
                    4,  // JOB_CONVERSION_STAGE_BIBTEX
                    6,  // JOB_CONVERSION_STAGE_HTML
                    7,  // JOB_CONVERSION_STAGE_CITATIONSTYLE
                    11, // JOB_CONVERSION_STAGE_EPUB
                    8,  // JOB_CONVERSION_STAGE_PDF
                    9,  // JOB_CONVERSION_STAGE_XMP
                    10,  // JOB_CONVERSION_STAGE_ZIP
                    17,  // JOB_CONVERSION_STAGE_NER_EXTRACT
                )
            )
        ),
        'docx' => array(
            'unoconv' => array(
                // If $HOME is not writable by the Web server owner
                // (typically www-data), then unoconv will fail.
                'command' => 'HOME=/tmp /opt/libreoffice4.2/program/python vendor/dagwieers/unoconv/unoconv',
            ),
        ),
        'nlmxml' => array(
            'metypeset' => array(
                // If $HOME is not writable by the Web server owner
                // (typically www-data), then unoconv will fail.
                'command' => 'HOME=/tmp vendor/MartinPaulEve/meTypeset/bin/meTypeset.py',
            ),
        ),
        'references' => array(
            'parscit' => array(
                'command' => 'vendor/knmnyn/ParsCit/bin/citeExtract.pl',
                'xsl' => 'module/ReferencesConversion/assets/parsCit.xsl',
            ),
        ),
        'bibtex' => array(
            'xml2bib' => array(
                'command' => 'xml2bib',
            ),
        ),
        'bibtexreferences' => array(
            'biblatex2xml' => array(
                'command' => 'biblatex2xml',
                'xsl' => 'module/BibtexreferencesConversion/assets/biblatex2xml.xsl',
            ),
        ),
        'html' => array(
            'xsl' => 'module/HtmlConversion/assets/html.xsl',
            'html_includes' => 'module/HtmlConversion/assets/html',
        ),
        'epub' => array(
            'command' => 'vendor/pkp/jats2epub/jats2epub'
        ),
        'pdf' => array(
            'wkhtmltopdf' => array(
                'command' => 'module/PdfConversion/assets/wkhtmltopdf-0.11.0_rc1-amd64',
            ),
        ),
        'citationstyle' => array(
            'citationstyles' => array(
                'repository' => 'vendor/citation-style-language/styles',
            ),
            'pandoc' => array(
                'command' => 'pandoc',
            ),
        ),
        'xmp' => array(
            'exiftool' => array(
                'command' => 'exiftool',
            ),
        ),
        'cermine' => array(
            'cerminejar' => 'vendor/CeON/CERMINE/cermine-impl-1.7-20150919.175508-12-jar-with-dependencies.jar',
            'jre' => '/usr/bin/jre'
        ),
        'ner' => array(
            'ner' => '/root/workspace/pkp/mitie/MITIE/ner_stream',
            'model' => '/root/workspace/pkp/mitie/MITIE/MITIE-models/english/ner_model.dat'
        )
    )
);
