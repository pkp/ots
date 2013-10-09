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
        PasswordResetFormInputFilter $passwordResetFormInputFilter
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

                    $this->logger->info(
                        sprintf(
                            $this->translator->translate(
                                'user.authentication.sucessfulLoginLog'
                            ),
                            $user->email
                        )
                    );

                    return $this->redirect()->toRoute('home');
                }
                else {
                    $flashMessenger = $this->flashMessenger();
                    $flashMessenger->setNamespace('error');
                    $flashMessenger->addMessage(
                        $this->translator->translate(
                            'user.authentication.invalidLoginCredentials'
                        )
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
        $authService = $this->getServiceLocator()->get(
            'Zend\Authentication\AuthenticationService'
        );
        $authService->clearIdentity();

        $flashMessenger = $this->flashMessenger();
        $flashMessenger->setNamespace('info');
        $flashMessenger->addMessage(
            $this->translator->translate(
                'user.authentication.sucessfulLogout'
            )
        );

        $this->logger->info(
            sprintf(
                $this->translator->translate(
                    'user.authentication.sucessfulLogoutLog'
                ),
                $user->email
            )
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

                // Authenticate user and register in the session
                $this->authenticate($data['email'], $data['password']);

                $flashMessenger = $this->flashMessenger();
                $flashMessenger->setNamespace('success');
                $flashMessenger->addMessage(
                    $this->translator->translate(
                        'user.registration.sucessfulRegistration'
                    )
                );

                $this->logger->info(
                    sprintf(
                        $this->translator->translate(
                            'user.registration.sucessfulRegistrationLog'
                        ),
                        $user->email
                    )
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

                $this->logger->info(
                    sprintf(
                        $this->translator->translate(
                            'user.settings.saveSuccessConfirmLog'
                        ),
                        $user->email
                    )
                );

                return $this->redirect()->toRoute('home');
            }
        }

        return array(
            'passwordResetForm' => $this->passwordResetForm,
        );
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
