// Navbar toggle
const navbarContainer = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');

if (navbarContainer && menuToggle) {
  const navbar = navbarContainer.querySelector('ul');
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('open'); // Add/remove 'open' class to toggle button
  });
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if user has already selected dark mode
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Save mode in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show button when scrolling down 100px
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// When user clicks button, scroll to top
scrollToTopBtn.addEventListener('click', function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
