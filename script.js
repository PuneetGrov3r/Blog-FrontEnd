function start() {
    var $menumain = document.getElementsByClassName('menumain');
    var $signin = document.getElementsByClassName('signin');
    var $signup = document.getElementsByClassName('signup');
    var country = [
        { title: 'Andorra' },
        { title: 'United Arab Emirates' },
        { title: 'Afghanistan' },
        { title: 'Antigua' },
        { title: 'Anguilla' },
        { title: 'Albania' },
        { title: 'Armenia' },
        { title: 'Netherlands Antilles' },
        { title: 'Angola' },
        { title: 'Argentina' },
        { title: 'American Samoa' },
        { title: 'Austria' },
        { title: 'Australia' },
        { title: 'Aruba' },
        { title: 'Aland Islands' },
        { title: 'Azerbaijan' },
        { title: 'Bosnia' },
        { title: 'Barbados' },
        { title: 'Bangladesh' },
        { title: 'Belgium' },
        { title: 'Burkina Faso' },
        { title: 'Bulgaria' },
        { title: 'Bahrain' },
        { title: 'Burundi' }
        // etc
    ];

    function sidemenutoggle() {
        $('.ui.labeled.icon.sidebar')
            .sidebar('toggle');
    }

    function signinshow() {
        $('.ui.signin1.modal')
            .modal('show');
    }

    function countrylist() {
        $('.ui.search')
            .search({
                source: country
            });
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
    $('.ui.search.country').search({ source: country });

}
window.onload = start;