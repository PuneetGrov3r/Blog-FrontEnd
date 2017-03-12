function start() {
    var $menumain = document.getElementsByClassName('menumain');
    var $signin = document.getElementsByClassName('signin');

    function sidemenutoggle() {
        $('.ui.labeled.icon.sidebar')
            .sidebar('toggle');
    }

    function signinshow() {
        $('.ui.basic.modal')
            .modal('show');
    }
    for (var i = 0; i < $signin.length; i++) {
        $signin[i].addEventListener("click", signinshow, false);
    }
    for (i = 0; i < $menumain.length; i++) {
        $menumain[i].addEventListener("click", sidemenutoggle, false);
    }

}
window.onload = start;