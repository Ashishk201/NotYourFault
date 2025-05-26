let lastScroll = 0;
const header = document.querySelector('.main-header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > lastScroll && currentScroll > headerHeight) {
    // Scroll down
    header.classList.add('header-hidden');
  } else {
    // Scroll up
    header.classList.remove('header-hidden');
  }
  lastScroll = currentScroll;
  
  // Always show header at top
  if (currentScroll < headerHeight) {
    header.classList.remove('header-hidden');
  }
});

// Keep existing mobile menu code
const menuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  mainNav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
    mainNav.classList.remove('active');
  }
});