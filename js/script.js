/* =========================================
   APIP ROMLI — PORTFOLIO JS
   Features:
   - Dark / Light Mode Toggle
   - Navbar scroll effect + active link
   - Hamburger mobile menu
   - Typed.js-style typewriter effect
   - AOS initialization
   - Skill bar animation on scroll
   - Counter animation (about stats)
   - Project filter tabs
   - Contact form validation
   - Particle background generator
   - Back to top button
   - Footer year
   ========================================= */

'use strict';

/* ===== DOM READY ===== */
document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initThemeToggle();
  initNavbar();
  initHamburger();
  initTypewriter();
  initParticles();
  initSkillBars();
  initCounters();
  initProjectFilter();
  initContactForm();
  initBackToTop();
  initFooterYear();
  initSmoothScroll();
});

/* ===== AOS INIT ===== */
function initAOS() {
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80,
  });
}

/* ===== DARK / LIGHT THEME TOGGLE ===== */
function initThemeToggle() {
  const html        = document.documentElement;
  const toggleBtn   = document.getElementById('themeToggle');
  const themeIcon   = document.getElementById('themeIcon');

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme, themeIcon);

  toggleBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next, themeIcon);

    // Add a brief spin animation to the icon
    themeIcon.style.transform = 'rotate(360deg)';
    setTimeout(() => { themeIcon.style.transform = ''; }, 400);
  });
}

function updateThemeIcon(theme, icon) {
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

/* ===== NAVBAR SCROLL EFFECT & ACTIVE LINK ===== */
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link spy
    updateActiveLink(sections, navLinks);
  }, { passive: true });
}

function updateActiveLink(sections, navLinks) {
  let current = '';
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

/* ===== HAMBURGER MENU ===== */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('navMobile');
  const mobileLinks = navMobile.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMobile.classList.toggle('open');
  });

  // Close on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMobile.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMobile.contains(e.target)) {
      hamburger.classList.remove('open');
      navMobile.classList.remove('open');
    }
  });
}

/* ===== TYPEWRITER EFFECT ===== */
function initTypewriter() {
  const el      = document.getElementById('typedText');
  if (!el) return;

  const phrases = [
    'Software Engineer',
    'Web Developer',
    'Backend Developer',
    'Laravel Developer',
    'Tech Enthusiast',
  ];

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let pause       = false;

  function type() {
    if (pause) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      el.textContent = currentPhrase.substring(0, charIndex);
    } else {
      charIndex++;
      el.textContent = currentPhrase.substring(0, charIndex);
    }

    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end
      pause = true;
      setTimeout(() => {
        pause = false;
        isDeleting = true;
        setTimeout(type, speed);
      }, 1800);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting   = false;
      phraseIndex  = (phraseIndex + 1) % phrases.length;
      speed        = 300;
    }

    setTimeout(type, speed);
  }

  setTimeout(type, 1000);
}

/* ===== PARTICLE BACKGROUND ===== */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = 30;

  for (let i = 0; i < count; i++) {
    createParticle(container);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // Random position and size
  const size = Math.random() * 3 + 1;
  const left = Math.random() * 100;
  const delay = Math.random() * 15;
  const duration = Math.random() * 15 + 10;
  const colors = ['#6366f1', '#a855f7', '#818cf8', '#c084fc'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  particle.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${left}%;
    top: ${Math.random() * 100}%;
    background: ${color};
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
  `;

  container.appendChild(particle);
}

/* ===== SKILL BARS ANIMATION ===== */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar   = entry.target;
        const width = bar.getAttribute('data-width');
        bar.style.width = `${width}%`;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
}

/* ===== COUNTER ANIMATION ===== */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target   = parseInt(el.getAttribute('data-target'), 10);
  const duration = 1600;
  const step     = Math.ceil(duration / target);
  let current    = 0;

  const timer = setInterval(() => {
    current += Math.ceil(target / 60);
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current;
  }, step);
}

/* ===== PROJECT FILTER ===== */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';

        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('hide');
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}

/* ===== CONTACT FORM VALIDATION ===== */
function initContactForm() {
  const form       = document.getElementById('contactForm');
  if (!form) return;

  const submitBtn  = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    let isValid = true;

    if (!name || name.length < 2) {
      showError('nameError', form.name, 'Nama minimal 2 karakter');
      isValid = false;
    }

    if (!email || !isValidEmail(email)) {
      showError('emailError', form.email, 'Masukkan email yang valid');
      isValid = false;
    }

    if (!subject || subject.length < 3) {
      showError('subjectError', form.subject, 'Subjek minimal 3 karakter');
      isValid = false;
    }

    if (!message || message.length < 10) {
      showError('messageError', form.message, 'Pesan minimal 10 karakter');
      isValid = false;
    }

    if (!isValid) return;

    // Simulate sending (no backend)
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan';
      successMsg.classList.add('show');

      // Build mailto link for real sending
      const mailtoLink = `mailto:apipromli08@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Dari: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.location.href = mailtoLink;

      setTimeout(() => {
        successMsg.classList.remove('show');
      }, 6000);
    }, 1200);
  });

  // Live validation on input
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errId = `${input.id}Error`;
      const errEl = document.getElementById(errId);
      if (errEl) errEl.textContent = '';
    });
  });
}

function showError(errorId, inputEl, message) {
  const errEl = document.getElementById(errorId);
  if (errEl) errEl.textContent = message;
  if (inputEl) inputEl.classList.add('error');
}

function clearErrors() {
  document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
  document.querySelectorAll('.input-wrap input, .input-wrap textarea').forEach(el => {
    el.classList.remove('error');
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ===== BACK TO TOP BUTTON ===== */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===== FOOTER YEAR ===== */
function initFooterYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ===== SMOOTH SCROLL FOR ANCHOR LINKS ===== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;

      e.preventDefault();

      const navHeight = document.getElementById('navbar').offsetHeight;
      const top       = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}
