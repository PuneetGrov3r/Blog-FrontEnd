function start() {
    var $menumain = document.getElementsByClassName('menumain');
    var $signin = document.getElementsByClassName('signin');
    var $signup = document.getElementsByClassName('signup');

    function sidemenutoggle() {
        $('.ui.labeled.icon.sidebar')
            .sidebar('toggle');
    }

    function signinshow() {
        $('.ui.signin1.modal')
            .modal('show');
    }

    function signupshow() {
        $('.ui.signup1.modal')
            .modal('show');
    }
    for (var i = 0; i < $signup.length; i++) {
        $signup[i].addEventListener("click", signupshow, false);
    }
    for (i = 0; i < $signin.length; i++) {
        $signin[i].addEventListener("click", signinshow, false);
    }
    for (i = 0; i < $menumain.length; i++) {
        $menumain[i].addEventListener("click", sidemenutoggle, false);
    }

}
window.onload = start;