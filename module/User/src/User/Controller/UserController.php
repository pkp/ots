<?php
namespace User\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use User\Form\LoginForm;
use User\Form\LoginFormInputFilter;

class UserController extends AbstractActionController {
    protected $loginForm;
    protected $loginFormInputFilter;

    public function __construct(
        LoginForm $loginForm,
        LoginFormInputFilter $loginFormInputFilter
    )
    {
        $this->loginForm = $loginForm;
        $this->loginFormInputFilter = $loginFormInputFilter;
    }

    public function indexAction()
    {
        // Process the login form
        if ($this->request->isPost()) {
            $data = $this->request->getPost();
            $this->loginForm->setInputFilter(
                $this->loginFormInputFilter->getInputFilter()
            );
            $this->loginForm->setData($data);
            if ($this->loginForm->isValid()) {
                // TODO: Authenticate
            }
        }

        return array('form' => $this->loginForm);
    }
}
