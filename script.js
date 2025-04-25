// Navbar toggle (safe)
const navbarContainer = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');

if (navbarContainer && menuToggle) {
  const navbar = navbarContainer.querySelector('ul');
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}
