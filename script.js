const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const revealables = document.querySelectorAll(
  '.card, .process-step, .showcase-card, .team-card, .contact-panel, .hero-media-card'
);

const handleReveal = () => {
  revealables.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('revealed');
    }
  });
};

handleReveal();
document.addEventListener('scroll', handleReveal, { passive: true });
