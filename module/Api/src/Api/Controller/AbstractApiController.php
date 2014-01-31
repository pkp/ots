<?php
namespace Api\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\Mvc\MvcEvent;
use Zend\Mvc\I18n\Translator;
use Zend\View\Model\JsonModel;
use Zend\Authentication\AuthenticationService;
use Xmlps\Logger\Logger;

class AbstractApiController extends AbstractActionController {
    protected $logger;
    protected $translator;
    protected $authService;

    // By default all API calls require the user to be authorized by username
    // and password. This can be disabled by adding the method name to this
    // array. I.e.
    //  protected $allowAnonymous = array('fooAction');
    protected $allowAnonymous = array();

    /**
     * Constructor
     *
     * @param Logger $logger
     * @param Translator $translator
     * @param AuthenticationService $authService
     *
     * @return void
     */
    public function __construct(
        Logger $logger,
        Translator $translator,
        AuthenticationService $authService
    )
    {
        $this->logger = $logger;
        $this->translator = $translator;
        $this->authService = $authService;
    }

    /**
     * Execute the request
     *
     * @param  MvcEvent $e
     * @return mixed
     * @throws Exception\DomainException
     */
    public function onDispatch(MvcEvent $e)
    {
        $routeMatch = $e->getRouteMatch();
        if (!$routeMatch) {
            throw new Exception\DomainException('Missing route matches; unsure how to retrieve action');
        }

        $action = $routeMatch->getParam('action', 'not-found');
        $method = static::getMethodFromAction($action);

        if (!method_exists($this, $method)) {
            $method = 'notFoundAction';
        }

        $this->logger->debugTranslate('api.callMethodLog', $method);

        // Authenticate the request
        $this->authenticate();

        // Check if the user is authorized to access the method
        if (!$this->authorize($method)) {
            // Set the forbidden response code
            $this->getResponse()->setStatusCode(403);

            $actionResponse = array(
                'error' => $this->translator->translate('api.error.invalidCredentials')
            );
        }
        else {
            $actionResponse = $this->$method();
        }

        $actionResponse = $this->postDispatch($actionResponse);

        $e->setResult($actionResponse);

        return $actionResponse;
    }

    /**
     * Authenticate the request
     *
     * @return void
     */
    protected function authenticate()
    {
        // Return if the user is already authenticated
        if ($this->identity()) return true;

        $email = '';
        $password = '';
        if ($this->request->isPost()) {
            $email = $this->params()->fromPost('email');
            $password = $this->params()->fromPost('password');
        }
        else {
            $email = $this->params()->fromQuery('email');
            $password = $this->params()->fromQuery('password');
        }

        if (!empty($email) and !empty($password)) {
            $adapter = $this->authService->getAdapter();
            $adapter->setIdentityValue($email);
            $adapter->setCredentialValue($password);
            $authResult = $this->authService->authenticate();

            if (!$authResult->isValid()) {
                $this->logger->debugTranslate('api.authentication.successLog', $email);
                return true;
            }
        }

        $this->logger->debugTranslate('api.authentication.errorLog');
        return false;
    }

    /**
     * Authorize a user for to access a given method
     *
     * @param mixed $method Method to access
     *
     * @return void
     */
    protected function authorize($method)
    {
        if (in_array($method, $this->allowAnonymous)) return true;

        return ($this->identity());
    }

    /**
     * Convert the response into a JsonModel object
     *
     * @param mixed $actionResponse
     * @return JsonModel response object
     */
    protected function postDispatch($actionResponse)
    {
        if (!is_array($actionResponse)) $actionResponse = array();

        if (!isset($actionResponse['status'])) $actionResponse['status'] = 'error';

        $this->logger->debugTranslate('api.responseLog', serialize($actionResponse));

        return new JsonModel($actionResponse);
    }
}
