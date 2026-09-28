// Mobile menu toggle.
// Without JavaScript the nav links simply show as a list, so the site still works.

const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

function setOpen(open) {
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? 'Close' : 'Menu';
}

toggle.addEventListener('click', () => {
  setOpen(!nav.classList.contains('is-open'));
});

// Close the menu after a link is tapped, so the section isn't hidden behind it.
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setOpen(false);
});

// Escape key closes the menu and returns focus to the button.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) {
    setOpen(false);
    toggle.focus();
  }
});
