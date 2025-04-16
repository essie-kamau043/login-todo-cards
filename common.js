const navbarToggle = document.getElementById('navbarToggle');
const navMenu = document.getElementById('navMenu');

navbarToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});