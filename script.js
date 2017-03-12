function start() {
    var $menumain = document.getElementsByClassName('menumain');

    function sidemenutoggle() {
        $('.ui.labeled.icon.sidebar')
            .sidebar('toggle');
    }
    for (var i = 0; i < $menumain.length; i++) {
        $menumain[i].addEventListener("click", sidemenutoggle, false);
    }

}
window.onload = start;