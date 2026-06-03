/* ============================================================
    script.js — Fadhil Personal Profile
    Author  : Rizqy Fadhil Athallah
    Version : 1.0
   ============================================================ */


/* ===== 1. THEME TOGGLE ===== */

const themeBtn = document.getElementById('themeBtn');
const htmlEl   = document.documentElement;

/**
 * Toggles between dark and light theme.
 * Updates the button emoji and saves preference to localStorage.
 */
function toggleTheme() {
  const isDark = htmlEl.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';

  htmlEl.setAttribute('data-theme', newTheme);
  themeBtn.textContent = isDark ? '☀️' : '🌙';

  // Persist preference so it survives page reload
  localStorage.setItem('theme', newTheme);
}

/**
 * Loads saved theme from localStorage on page load.
 * Falls back to 'dark' if nothing is saved.
 */
function loadTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  htmlEl.setAttribute('data-theme', saved);
  themeBtn.textContent = saved === 'dark' ? '🌙' : '☀️';
}

themeBtn.addEventListener('click', toggleTheme);
loadTheme();


/* ===== 2. SMOOTH SCROLL ===== */

/**
 * Intercepts clicks on anchor links that start with "#"
 * and scrolls smoothly to the target section.
 */
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    const targetId = anchor.getAttribute('href');
    const target   = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ===== 3. ACTIVE NAV HIGHLIGHT ON SCROLL ===== */

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

/**
 * Updates the "active" class on navbar links based on
 * which section is currently visible in the viewport.
 */
function updateActiveNav() {
  let currentId = '';

  sections.forEach(function(section) {
    // Section is "active" when its top is within 90px of viewport top
    if (window.scrollY >= section.offsetTop - 90) {
      currentId = section.id;
    }
  });

  navLinks.forEach(function(link) {
    const isActive = link.getAttribute('href') === '#' + currentId;
    link.classList.toggle('active', isActive);
  });
}

window.addEventListener('scroll', updateActiveNav);


/* ===== 4. NAVBAR SCROLL SHADOW ===== */

const header = document.querySelector('header');

/**
 * Adds a subtle shadow to the navbar when the user scrolls
 * past the initial position, to improve visual separation.
 */
window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
  } else {
    header.style.boxShadow = 'none';
  }
});


/* ===== 5. MOBILE MENU TOGGLE ===== */

const mobBtn   = document.getElementById('mobBtn');
const navLinksEl = document.querySelector('.nav-links');

/**
 * Toggles the mobile navigation menu open/closed.
 * On mobile, the nav links are hidden by default and
 * revealed as a dropdown when the hamburger is clicked.
 */
mobBtn.addEventListener('click', function() {
  const isOpen = navLinksEl.style.display === 'flex';

  if (isOpen) {
    navLinksEl.style.display = 'none';
    navLinksEl.style.position = '';
    navLinksEl.style.flexDirection = '';
  } else {
    navLinksEl.style.display        = 'flex';
    navLinksEl.style.position       = 'absolute';
    navLinksEl.style.top            = '56px';
    navLinksEl.style.left           = '0';
    navLinksEl.style.right          = '0';
    navLinksEl.style.flexDirection  = 'column';
    navLinksEl.style.background     = 'var(--bg-2)';
    navLinksEl.style.borderBottom   = '1px solid var(--border)';
    navLinksEl.style.padding        = '8px 16px 16px';
    navLinksEl.style.gap            = '2px';
    navLinksEl.style.zIndex         = '99';
  }
});

// Close mobile menu when a nav link is clicked
navLinksEl.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 840) {
      navLinksEl.style.display = 'none';
    }
  });
});

// Reset mobile menu styles when resizing to desktop
window.addEventListener('resize', function() {
  if (window.innerWidth > 840) {
    navLinksEl.style.cssText = '';
  }
});