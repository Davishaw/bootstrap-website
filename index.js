const hamburgerMenu = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navmenu');


function displaySubMenu() {
    navMenu.classList.toggle('active')
};



hamburgerMenu.addEventListener('click', displaySubMenu);