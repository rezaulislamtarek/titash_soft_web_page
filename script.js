if (document.body) {
  document.body.classList.remove('no-js');
  document.body.classList.add('js-enabled');
}

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const revealables = document.querySelectorAll('[data-reveal]');

const handleReveal = () => {
  revealables.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('is-visible');
    }
  });
};

handleReveal();
document.addEventListener('scroll', handleReveal, { passive: true });
