<?php
namespace User\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use User\Model\DAO\UserDAO;
use User\Form\LoginForm;
use User\Form\LoginFormInputFilter;
use User\Form\RegistrationForm;
use User\Form\RegistrationFormInputFilter;
use User\Form\PasswordResetForm;
use User\Form\PasswordResetFormInputFilter;
use User\Form\ApiAuthTokenForm;
use Manager\Form\UploadForm;
use Manager\Form\UploadFormInputFilter;
use Zend\Mvc\I18n\Translator;
use Xmlps\Logger\Logger;

class UserController extends AbstractActionController {
    protected $userDAO;
    protected $logger;
    protected $translator;
    protected $loginForm;
    protected $loginFormInputFilter;
    protected $registrationForm;
    protected $registrationFormInputFilter;
    protected $passwordResetForm;
    protected $passwordResetFormInputFilter;
    protected $uploadForm;
    protected $uploadFormInputFilter;
    protected $apiAuthTokenForm;

    /**
     * Constructor
     *
     * @param UserDAO $userDAO
     * @param Logger $logger
     * @param Translator $translator
     * @param LoginForm $loginForm
     * @param LoginFormInputFilter $loginFormInputFilter
     * @param RegistrationForm $registrationForm
     * @param RegistrationFormInputFilter $registrationFormInputFilter
     *
     * @return void
     */
    public function __construct(
        UserDAO $userDAO,
        Logger $logger,
        Translator $translator,
        LoginForm $loginForm,
        LoginFormInputFilter $loginFormInputFilter,
        RegistrationForm $registrationForm,
        RegistrationFormInputFilter $registrationFormInputFilter,
        PasswordResetForm $passwordResetForm,
        PasswordResetFormInputFilter $passwordResetFormInputFilter,
        UploadForm $uploadForm,
        UploadFormInputFilter $uploadFormInputFilter,
        ApiAuthTokenForm $apiAuthTokenForm
    )
    {
        $this->userDAO = $userDAO;
        $this->logger = $logger;
        $this->translator = $translator;
        $this->loginForm = $loginForm;
        $this->loginFormInputFilter = $loginFormInputFilter;
        $this->registrationForm = $registrationForm;
        $this->registrationFormInputFilter = $registrationFormInputFilter;
        $this->passwordResetForm = $passwordResetForm;
        $this->passwordResetFormInputFilter = $passwordResetFormInputFilter;
        $this->uploadForm = $uploadForm;
        $this->uploadFormInputFilter = $uploadFormInputFilter;
        $this->apiAuthTokenForm = $apiAuthTokenForm;
    }

    /**
     * Index action
     *
     * @return mixed Array containing view variables
     */
    public function indexAction()
    {
        if (!$this->identity()) {
            return array(
                'loginForm' => $this->loginForm,
                'registrationForm' => $this->registrationForm,
            );
        }
        else {
            return array(
                'uploadForm' => $this->uploadForm,
            );
        }
    }

    /**
     * Processes POST requests from the login form
     *
     * @return ViewModel ViewModel instance
     */
    public function loginAction()
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
                $authResult = $this->authenticate($data['email'], $data['password']);

                if ($authResult->isValid()) {
                    // Fetch the user object
                    $user = $this->userDAO->findOneBy(
                        array('email' => $data['email'])
                    );

                    // Check if the user account has been activated
                    if (!$user->isActive()) {
                        $this->deAuthenticate();
                        $flashMessenger = $this->flashMessenger();
                        $flashMessenger->setNamespace('error');
                        $flashMessenger->addMessage(
                            $this->translator->translate(
                                'user.authentication.emailNotVerified'
                            )
                        );

                        return $this->redirect()->toRoute('home');
                    }

                    // Register the user in the session
                    $this->sessionRegister($user);

                    // Update last login time
                    $user->setLastLogin();
                    $this->userDAO->save($user);

                    $flashMessenger = $this->flashMessenger();
                    $flashMessenger->setNamespace('info');
                    $flashMessenger->addMessage(
                        $this->translator->translate(
                            'user.authentication.sucessfulLogin'
                        )
                    );

                    $this->logger->infoTranslate(
                        'user.authentication.sucessfulLoginLog',
                        $user->email
                    );

                    return $this->redirect()->toRoute('home');
                }
               else {
                    $this->layout()->messages = array(
                        'error' => array(
                            $this->translator->translate(
                                'user.authentication.invalidLoginCredentials'
                            ),
                        ),
                    );
                }
            }
        }

        $viewModel = new ViewModel(array(
            'loginForm' => $this->loginForm,
            'registrationForm' => $this->registrationForm,
        ));
        $viewModel->setTemplate('user/user/index.phtml');

        return $viewModel;
    }

    /**
     * Processes logout requests
     *
     * @return void
     */
    public function logoutAction()
    {
        $user = $this->identity();
        $this->deAuthenticate();

        $flashMessenger = $this->flashMessenger();
        $flashMessenger->setNamespace('info');
        $flashMessenger->addMessage(
            $this->translator->translate(
                'user.authentication.sucessfulLogout'
            )
        );

        $this->logger->infoTranslate(
            'user.authentication.sucessfulLogoutLog',
            $user->email
        );

        return $this->redirect()->toRoute('home');
    }

    /**
     * Processes POST requests from the registration form
     *
     * @return ViewModel ViewModel instance
     */
    public function registerAction()
    {
        // Process registration requests
        if ($this->request->isPost()) {
            $data = $this->request->getPost();
            $this->registrationForm->setInputFilter(
                $this->registrationFormInputFilter->getInputFilter()
            );

            $this->registrationForm->setData($data);

            // Validate form data
            if ($this->registrationForm->isValid()) {
                // Create and save the user
                $user = $this->getServiceLocator()->get('User\Entity\User');
                $user->email = $data['email'];
                $user->password = $data['password'];
                $this->userDAO->save($user);

                // Trigger the user register event
                $this->getEventManager()->trigger(
                    'user-register',
                    $this,
                    array(
                        'user' => $user,
                    )
                );

                $flashMessenger = $this->flashMessenger();
                $flashMessenger->setNamespace('success');
                $flashMessenger->addMessage(
                    $this->translator->translate(
                        'user.registration.sucessfulRegistration'
                    )
                );

                $this->logger->infoTranslate(
                    'user.registration.sucessfulRegistrationLog',
                    $user->email
                );

                return $this->redirect()->toRoute('home');
            }
        }

        $viewModel = new ViewModel(array(
            'loginForm' => $this->loginForm,
            'registrationForm' => $this->registrationForm,
        ));
        $viewModel->setTemplate('user/user/index.phtml');

        return $viewModel;
    }

    /**
     * Proces user activation requests
     *
     * @return void
     */
    public function activateAction()
    {
        // Check if a activation key is provided
        $activationKey = $this->params()->fromRoute('id');
        if (empty($activationKey)) {
            $this->getResponse()->setStatusCode(404);
            return;
        }

        // Fetch the user account for that activation key
        $user = $this->userDAO->findOneBy(array('activationKey' => $activationKey));

        // Check if the user exists and is not alredy active
        if (!$user or $user->isActive()) {
            $this->getResponse()->setStatusCode(404);
            return;
        }

        // Register the user in the session
        $this->sessionRegister($user);

        // Update last login time and activate the account
        $user->activate();
        $user->setLastLogin();
        $this->userDAO->save($user);

        $flashMessenger = $this->flashMessenger();
        $flashMessenger->setNamespace('info');
        $flashMessenger->addMessage(
            $this->translator->translate(
                'user.register.sucessfulActivation'
            )
        );

        $this->logger->infoTranslate(
            'user.register.sucessfulActivationLog',
            $user->email
        );

        return $this->redirect()->toRoute('home');
    }

    /**
     * Process the settings form
     *
     * @return void
     */
    public function settingsAction()
    {
        // Process settings
        if ($this->request->isPost()) {
            $data = $this->request->getPost();
            $this->passwordResetForm->setInputFilter(
                $this->passwordResetFormInputFilter->getInputFilter()
            );

            $this->passwordResetForm->setData($data);

            // Validate form data
            if ($this->passwordResetForm->isValid()) {
                // Save the new password
                $user = $this->identity();
                $user->password = $data['passwordNew'];
                $this->userDAO->save($user);

                $flashMessenger = $this->flashMessenger();
                $flashMessenger->setNamespace('success');
                $flashMessenger->addMessage(
                    $this->translator->translate(
                        'user.settings.saveSuccessConfirm'
                    )
                );

                $this->logger->infoTranslate(
                    'user.settings.saveSuccessConfirmLog',
                    $user->email
                );

                return $this->redirect()->toRoute('home');
            }
        }

        return array(
            'passwordResetForm' => $this->passwordResetForm,
            'apiAuthTokenForm' => $this->apiAuthTokenForm,
            'user' => $this->identity(),
        );
    }
    
    /**
     * Process api token generation form
     *
     * @return void
     */
    public function tokenAction()
    {
        if ($this->request->isPost()) {
            // generate and save new token
            $user = $this->identity();
            $user->apiAccessToken = sha1(uniqid());
            $this->userDAO->save($user);
            
            $flashMessenger = $this->flashMessenger();
            $flashMessenger->setNamespace('success');
            $flashMessenger->addMessage(
                $this->translator->translate(
                    'user.ApiAuthTokenForm.generateSuccess'
                )
            );

            $this->logger->infoTranslate(
                'user.settings.tokenGenerationSuccessConfirmLog',
                $user->email
            );
        }
        
        return $this->redirect()->toRoute('user', array('action' => 'settings'));
    }

    /**
     * Authenticate a user
     *
     * @param mixed $identityProperty Identifer
     * @param mixed $credentialProperty Credential
     *
     * @return Zend\Authentication\Result Authentication result
     */
    protected function authenticate($identityProperty, $credentialProperty)
    {
        $authService = $this->getServiceLocator()->get(
            'Zend\Authentication\AuthenticationService'
        );
        $adapter = $authService->getAdapter();
        $adapter->setIdentityValue($identityProperty);
        $adapter->setCredentialValue($credentialProperty);
        return $authService->authenticate();
    }

    /**
     * De-authenticate a user
     */
    protected function deAuthenticate()
    {
        $authService = $this->getServiceLocator()->get(
            'Zend\Authentication\AuthenticationService'
        );
        $authService->clearIdentity();
    }

    /**
     * Registers the user in the session
     *
     * @param mixed $user User User instance
     *
     * @return void
     */
    protected function sessionRegister($user)
    {
        $authService = $this->getServiceLocator()->get(
            'Zend\Authentication\AuthenticationService'
        );
        $authService->getStorage()->write($user);
    }
}
