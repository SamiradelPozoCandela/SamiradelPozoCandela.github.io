let menu = document.getElementById('menu-icon');
let navbar = document.querySelector('.barra-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});
