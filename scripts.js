// Fade-in on scroll
function reveal() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 60) el.classList.add('visible');
  });
}
reveal();
window.addEventListener('scroll', reveal, { passive: true });

// Smooth scroll for anchor links, mobile ready
document.querySelectorAll('.sidebar-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if(href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

// Go to top button
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  if(window.scrollY > 200) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});
if(topBtn) {
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
