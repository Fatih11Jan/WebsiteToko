// ========== CONFIG ==========
const WA_NUMBER = '6282120776989';
const WA_MESSAGE = 'Halo%20AHS%20Lariza%2C%20saya%20mau%20pesan%3A';

function waUrl(message) {
  const text = message ? `${WA_MESSAGE}%20${encodeURIComponent(message)}` : '';
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}

function handleWaOrder(product) {
  window.open(waUrl(product), '_blank');
}

function handleWaGeneral() {
  window.open(waUrl(), '_blank');
}

// ========== NAVBAR TOGGLE ==========
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ========== ACTIVE NAV LINK ==========
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  }
});

// ========== SCROLL HEADER ==========
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const message = formData.get('message');
    const product = formData.get('product') || '';

    let waText = `Halo%20AHS%20Lariza%2C%20saya%20${encodeURIComponent(name)}.%20`;
    if (product) waText += `Saya%20tertarik%20dengan%20${encodeURIComponent(product)}.%20`;
    if (message) waText += `${encodeURIComponent(message)}`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${waText}`, '_blank');
  });
}

// ========== ANIMATION ON SCROLL (simple) ==========
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .product-card, .value-card, .about-image, .about-content').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
