<?php
/**
 * Script that sends a document corpus to the markup server and collects
 * conversion success statistics.
 *
 * Example usage:
 *
 * php BatchTestSuite.php --url http://example.com --user user@example.com --password password --corpusDir path/to/corpus
 *
 */
function main() {
    // Command line options
    $options = getopt('', array(
        'corpusDir:',
        'url:',
        'user:',
        'password:',
    ));

    // Test if all options are set
    if (
        !isset($options['corpusDir']) ||
        !isset($options['url']) ||
        !isset($options['user']) ||
        !isset($options['password'])
    ) {
        echo "Usage: php BatchTestSuite.php --corpusDir [DIR] --url [URL] --user [USER] --password [PASWORD]\n";
        exit(1);
    }

    // Set up and run a new test suite
    $bts = new BatchTestSuite(array(
        'corpusDir' =>  $options['corpusDir'],
        'markupServerUrl' => $options['url'],
        'markupServerUser' => $options['user'],
        'markupServerPassword' => $options['password'],
    ));
    $bts->run();
}
main();

class BatchTestSuite
{
    protected $options = array(
        'corpusDir' => '', // Document corpus base directory
        'markupServerUrl' => '', // URL of the markup server
        'markupServerUser' => '', // User name for the markup server
        'markupServerPassword' => '', // Password for the markup server
    );

    // Valid document file extensions
    protected $validExtensions = array(
        'pdf', 'doc', 'docx', 'txt'
    );

    protected $fileList = array();
    protected $failedFileList = array();

    protected $citationStyles = array();

    /**
     * Constructor
     *
     * @param array $options Array containing options
     */
    public function __construct($options = array())
    {
        if (!is_array($options)) {
            throw new Exception('$options needs to be an array!');
        }

        foreach($options as $key => $value) {
            if (!array_key_exists($key, $this->options)) {
                throw new Exception('Invalid option ' . $key);
            }

            $this->options[$key] = $value;
        }
    }

    /**
     * Run the batch test suite
     *
     * @return void
     */
    public function run()
    {
        $this->loadFiles();
        $this->processFiles();
        $this->printSummary();
    }

    /**
     * Load a list of files to process from the corpus directory
     *
     * @return void
     */
    protected function loadFiles()
    {
        if (!is_dir($this->options['corpusDir'])) {
            throw new Exception('Invalid document corpus directory ' . $this->options['corpusDir']);
        }

        $this->message(
            'Scanning corpus directory %s for files to process',
            $this->options['corpusDir']
        );

        // Find all the documents in the corpus directory
        $it = new RecursiveDirectoryIterator($this->options['corpusDir']);
        $files = new RecursiveIteratorIterator(
            $it,
            RecursiveIteratorIterator::CHILD_FIRST
        );
        foreach ($files as $file) {
            if ($file->getType() == 'dir') { continue; }
            $path = $file->getPathname();

            foreach ($this->validExtensions as $extension) {
                if (preg_match('/\.' . $extension . '$/i', $path)) {
                    $this->fileList[] = $path;
                }
            }
        }
    }

    /**
     * Send the files from the file list to the markup server for processing
     *
     * @return void
     */
    protected function processFiles()
    {
        foreach ($this->fileList as $file) {
            $this->message('Submitting %s', $file);
            $jobId = $this->submitFile($file);

            $i = 0;
            while($i++ < (120 / 5)) {
                $status = $this->getJobStatus($jobId);
                $this->message('Job status %s', $status);

                if (!in_array($status, array('Pending', 'Processing'))) break;
                sleep(5);
            }

            if ($status != 'Completed') {
                $this->failedFileList[] = $file;
            }
        }
    }

    /**
     * Returns a random citation style hash
     *
     * @return string citationStyle hash
     */
    protected function getCitationStyleHash()
    {
        if (empty($this->citationStyles)) {
            $response = $this->apiRequest('citationStyleList');

            $this->citationStyles = array_keys($response['citationStyles']);
        }

        $hash = $this->citationStyles[array_rand($this->citationStyles)];

        $this->message('Using citation style hash %s', $hash);

        return $hash;
    }

    /**
     * Submit a file for processing to the markup server
     *
     * @param mixed $file Path to file to submit
     *
     * @return int Job id
     */
    protected function submitFile($file)
    {
        $response = $this->apiRequest(
            'submit',
            array(
                'fileName' => basename($file),
                'citationStyleHash' => $this->getCitationStyleHash(),
                'fileContent' => file_get_contents($file),
            ),
            true
        );

        return $response['id'];
    }


    /**
     * Fetches the status of a job
     *
     * @param mixed $jobId Job id to fetch the status for
     *
     * @return string Job status
     */
    protected function getJobStatus($jobId)
    {
        $response = $this->apiRequest('status', array('id' => $jobId));

        return $response['jobStatusDescription'];
    }

    /**
     * Prints a summary
     *
     * @return void
     */
    protected function printSummary()
    {
        $this->message("\nProcessed %d files", count($this->fileList));

        $percentFailed = count($this->failedFileList) / count($this->fileList) * 100;
        $this->message(
            '%.2f%% Of the documents didn\'t convert successfully',
            $percentFailed
        );

        if ($this->failedFileList) {
            $this->message("\nFiles failed to process:");
            foreach($this->failedFileList as $file) {
                $this->message('    %s', $file);
            }
        }
    }

    /**
     * Output a message to the command line
     *
     * @param mixed $message Message to show
     * @param array $args Argument array
     * @param bool $colorize Whether or not to colorize the arguments
     *
     * @return void
     */
    protected function message($message, $args = array(), $colorize = true)
    {
        if (!is_array($args)) {
            $args = array($args);
        }

        if ($colorize) {
            $message = preg_replace('/(%[^ ]*)/', "\e[0;32m$1\e[0m", $message);
        }

        echo  vsprintf($message, $args) . PHP_EOL;
    }

    /**
     *
     * Build the URL to query the markup server
     *
     * @param $action string API action
     * @param $params array Query parameters
     *
     * @return string Markup server query URL
     */
    function apiUrl($action, $params = array()) {
        $apiUrl = $this->options['markupServerUrl'];
        $apiUrl = rtrim($apiUrl, '/');

        $apiUrl = $apiUrl . '/api/job/' .  $action;

        if ($params) {
            $apiUrl .= '?' . http_build_query($params);
        }

        return $apiUrl;
    }

    /**
     * Call the markup server API
      *
     * @param $action string API action
     * @param $params array Query/POST parameters
     * @param $method Whether to use a GET/POST request
     *
     * @return mixed API response
     */
    function apiRequest($action, $params = array(), $isPost = false) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        $params['email'] = $this->options['markupServerUser'];
        $params['password'] = $this->options['markupServerPassword'];

        if ($isPost) {
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
            $params = array();
        }

        $apiUrl = $this->apiUrl($action, $params);

        curl_setopt($ch, CURLOPT_URL, $apiUrl);

        $response = curl_exec($ch);

        $response = json_decode($response, true);
        if (!$response) {
            $error = curl_error($ch);
            if (empty($error)) {
                $error = 'HTTP status: ' . curl_getinfo($ch, CURLINFO_HTTP_CODE);
            }

            $this->message(
                'Call to API (%s) failed with error %s',
                array($action, $error)
            );
            exit(1);
        }

        curl_close($ch);

        return $response;
    }
}
