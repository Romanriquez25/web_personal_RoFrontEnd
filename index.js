document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('#boton');
    const menu = document.querySelector('#layout__aside');
    const barsIcon = document.querySelector('#fa-bars');
    const xmarkIcon = document.querySelector('#fa-xmark');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('layout__aside_Show');
        barsIcon.classList.toggle('layout__menuHidden');
        xmarkIcon.classList.toggle('layout__menuHidden');
    });
});
