<?php
namespace User\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use User\Form\LoginForm;
use User\Form\LoginFormInputFilter;
use Zend\Mvc\I18n\Translator;
use Xmlps\Log\Logger;

class UserController extends AbstractActionController {
    protected $logger;
    protected $translator;
    protected $loginForm;
    protected $loginFormInputFilter;

    public function __construct(
        Logger $logger,
        Translator $translator,
        LoginForm $loginForm,
        LoginFormInputFilter $loginFormInputFilter
    )
    {
        $this->logger = $logger;
        $this->translator = $translator;
        $this->loginForm = $loginForm;
        $this->loginFormInputFilter = $loginFormInputFilter;
    }

    public function indexAction()
    {
        // Process login requests
        if ($this->request->isPost()) {
            $data = $this->request->getPost();
            $this->loginForm->setInputFilter(
                $this->loginFormInputFilter->getInputFilter()
            );
            $this->loginForm->setData($data);

            // Validate form data
            if ($this->loginForm->isValid()) {
                // Authenticate user
                $authService = $this->getServiceLocator()->get(
                    'Zend\Authentication\AuthenticationService'
                );
                $adapter = $authService->getAdapter();
                $adapter->setIdentityValue($data['email']);
                $adapter->setCredentialValue($data['password']);
                $authResult = $authService->authenticate();

                if ($authResult->isValid()) {
                    $user = $authResult->getIdentity();
                    $user->lastLogin = time();
                    $authService->getStorage()->write($user);
                    $this->logger->info(
                        sprintf(
                            $this->translator->translate(
                                'user.authentication.sucessfulLogin'
                            ),
                            $user->email
                        )
                    );

                    return $this->redirect()->toRoute('home');
                }
                else {
                    $this->layout()->setVariable(
                        'error',
                        $this->translator->translate(
                            'user.authentication.invalidLoginCredentials'
                        )
                    );
                }
            }
        }

        if (!$this->identity()) {
            return array('loginForm' => $this->loginForm);
        }
    }
}
