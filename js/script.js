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

/* ===== TRANSLATIONS ===== */
const translations = {
  id: {
    'nav.home': 'Beranda', 'nav.about': 'Tentang', 'nav.skills': 'Keahlian',
    'nav.projects': 'Proyek', 'nav.contact': 'Kontak',
    'hero.badge': 'Selamat datang di portofolio saya',
    'hero.greeting': 'Halo, Saya ', 'hero.prefix': 'Saya seorang ',
    'hero.typed': ['Software Engineer', 'Web Developer', 'Backend Developer', 'Laravel Developer', 'Tech Enthusiast'],
    'hero.desc': 'Fresh graduate S1 Informatika dengan pengalaman sebagai Software Engineer Intern & Web Developer. Passionate dalam membangun aplikasi web yang modern, scalable, dan user-friendly.',
    'hero.cta.contact': ' Hubungi Saya', 'hero.cta.projects': ' Lihat Proyek',
    'about.tag': 'Kenali Saya', 'about.title1': 'Tentang', 'about.title2': 'Saya',
    'about.subtitle': 'Software Engineer & Web Developer',
    'about.text1': 'Saya adalah fresh graduate S1 Informatika dari <strong>Sekolah Tinggi Teknologi Cipasung</strong> (GPA 3.86/4.0) dengan pengalaman nyata di industri sebagai Software Engineer Intern, Web Developer, dan Operator Kampus.',
    'about.text2': 'Passionate dalam back-end development dan arsitektur sistem. Terampil menggunakan <strong>PHP/Laravel, Vue.js, JavaScript</strong>, serta database <strong>MySQL & PostgreSQL</strong>. Selalu antusias belajar teknologi baru dan berkontribusi dalam tim yang dinamis.',
    'about.stat.exp': 'Tahun Pengalaman', 'about.stat.projects': 'Proyek Selesai',
    'about.lbl.name': 'Nama', 'about.lbl.location': 'Lokasi', 'about.lbl.email': 'Email',
    'about.lbl.education': 'Pendidikan', 'about.lbl.status': 'Status',
    'about.lbl.phone': 'Telepon', 'about.lbl.open': 'Buka untuk Bekerja',
    'about.exp.title': 'Pengalaman Terkini',
    'about.exp1.role': 'Software Engineer Intern', 'about.exp1.period': 'Feb 2026 – Sekarang',
    'about.exp2.role': 'Staff Operator & Web Developer', 'about.exp2.period': 'Nov 2025 – Sekarang',
    'about.exp3.role': 'Software Engineer Trainee', 'about.exp3.period': 'Des 2025 – Jan 2026',
    'about.exp4.role': 'Web Developer Intern', 'about.exp4.period': 'Jul 2024 – Agu 2024',
    'skills.tag': 'Yang Saya Kuasai', 'skills.title1': 'Keahlian', 'skills.title2': 'Saya',
    'skills.technical': 'Keahlian Teknis', 'skills.stack': 'Tech Stack', 'skills.soft': 'Kemampuan Lunak',
    'projects.tag': 'Pekerjaan Saya', 'projects.title1': 'Proyek', 'projects.title2': 'Unggulan',
    'projects.filter.all': 'Semua', 'projects.filter.web': 'Web App',
    'projects.filter.ai': 'AI / ML', 'projects.filter.system': 'Sistem',
    'projects.cta.text': 'Lihat lebih banyak project saya di GitHub',
    'projects.cta.btn': ' Lihat Profil GitHub',
    'proj.fms.desc': 'Sistem pengelolaan keuangan berbasis web untuk PT Juara Gadai Jawa Barat. Fitur: manajemen jurnal keuangan, laporan otomatis, integrasi data real-time, dan pengelolaan transaksi gadai.',
    'proj.ecom.desc': 'Aplikasi e-commerce fullstack menggunakan .NET 8. Fitur: manajemen produk, keranjang belanja, proses checkout, dan autentikasi pengguna. Take-home task Fullstack .NET di Alkademi.',
    'proj.chatbot.desc': 'Proyek Skripsi — Chatbot akademik berbasis web untuk STT Cipasung menggunakan arsitektur LSTM. Mengintegrasikan REST API antara front-end dan back-end serta sistem informasi akademik kampus.',
    'proj.lppm.desc': 'Pengembangan website resmi LPPM (Lembaga Penelitian dan Pengabdian kepada Masyarakat) untuk Universitas Islam KH Ruhiyat Cipasung. Desain responsif dan modern.',
    'proj.paradaya.desc': 'Platform membaca buku digital berbasis web. Pengguna dapat menelusuri koleksi buku, membaca konten secara online, dan mengelola daftar bacaan. Tampilan nyaman dan responsif.',
    'proj.finance.desc': 'Aplikasi keuangan sekolah untuk SMK Riyadlut Tauhid. Mengelola SPP siswa, kas masuk/keluar, dan gaji guru. Dilengkapi laporan otomatis keuangan bulanan dan dashboard visualisasi data.',
    'proj.ppdb.desc': 'Sistem Penerimaan Peserta Didik Baru berbasis web untuk SMK Riyadlut Tauhid. Fitur: pendaftaran online, validasi data calon siswa, seleksi otomatis, dan laporan hasil seleksi.',
    'proj.mall.desc': 'Pengembangan website perusahaan PT Asia Tritunggal Jaya (Mall Plaza Asia Tasikmalaya). Dari analisis kebutuhan, desain antarmuka, hingga deployment menggunakan PHP, Laravel, Wix.',
    'contact.tag': 'Hubungi Saya', 'contact.title1': 'Kontak', 'contact.title2': 'Saya',
    'contact.intro': 'Tertarik bekerja sama atau punya pertanyaan? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk peluang baru dan kolaborasi menarik!',
    'contact.lbl.name': 'Nama', 'contact.lbl.subject': 'Subjek', 'contact.lbl.message': 'Pesan',
    'contact.ph.name': 'Nama lengkap Anda', 'contact.ph.subject': 'Subjek pesan Anda',
    'contact.ph.message': 'Tulis pesan Anda di sini...',
    'contact.btn': ' Kirim Pesan',
    'contact.success': 'Pesan berhasil dikirim! Saya akan segera membalas.',
    'footer.tagline': 'Membangun pengalaman digital dengan passion & presisi.',
    'footer.links': 'Tautan Cepat', 'footer.contact': 'Kontak',
    'footer.copy': '© {year} Apip Romli. Semua hak cipta dilindungi.',
    'footer.craft': 'Dibuat dengan ❤️ menggunakan HTML, CSS & JavaScript',
  },
  en: {
    'nav.home': 'Home', 'nav.about': 'About', 'nav.skills': 'Skills',
    'nav.projects': 'Projects', 'nav.contact': 'Contact',
    'hero.badge': 'Welcome to my portfolio',
    'hero.greeting': "Hi, I'm ", 'hero.prefix': "I'm a ",
    'hero.typed': ['Software Engineer', 'Web Developer', 'Backend Developer', 'Laravel Developer', 'Tech Enthusiast'],
    'hero.desc': "Fresh graduate in Informatics with experience as Software Engineer Intern & Web Developer. Passionate about building modern, scalable, and user-friendly web applications.",
    'hero.cta.contact': ' Contact Me', 'hero.cta.projects': ' View Projects',
    'about.tag': 'Get To Know Me', 'about.title1': 'About', 'about.title2': 'Me',
    'about.subtitle': 'Software Engineer & Web Developer',
    'about.text1': 'I am a fresh graduate in Informatics from <strong>Sekolah Tinggi Teknologi Cipasung</strong> (GPA 3.86/4.0) with real industry experience as a Software Engineer Intern, Web Developer, and Campus Operator.',
    'about.text2': 'Passionate about back-end development and system architecture. Skilled in <strong>PHP/Laravel, Vue.js, JavaScript</strong>, and databases <strong>MySQL & PostgreSQL</strong>. Always eager to learn new technologies and contribute to dynamic teams.',
    'about.stat.exp': 'Years Experience', 'about.stat.projects': 'Projects Done',
    'about.lbl.name': 'Name', 'about.lbl.location': 'Location', 'about.lbl.email': 'Email',
    'about.lbl.education': 'Education', 'about.lbl.status': 'Status',
    'about.lbl.phone': 'Phone', 'about.lbl.open': 'Open to Work',
    'about.exp.title': 'Recent Experience',
    'about.exp1.role': 'Software Engineer Intern', 'about.exp1.period': 'Feb 2026 – Present',
    'about.exp2.role': 'Staff Operator & Web Developer', 'about.exp2.period': 'Nov 2025 – Present',
    'about.exp3.role': 'Software Engineer Trainee', 'about.exp3.period': 'Dec 2025 – Jan 2026',
    'about.exp4.role': 'Web Developer Intern', 'about.exp4.period': 'Jul 2024 – Aug 2024',
    'skills.tag': 'What I Know', 'skills.title1': 'My', 'skills.title2': 'Skills',
    'skills.technical': 'Technical Skills', 'skills.stack': 'Tech Stack', 'skills.soft': 'Soft Skills',
    'projects.tag': 'My Work', 'projects.title1': 'Featured', 'projects.title2': 'Projects',
    'projects.filter.all': 'All', 'projects.filter.web': 'Web App',
    'projects.filter.ai': 'AI / ML', 'projects.filter.system': 'System',
    'projects.cta.text': 'See more of my projects on GitHub',
    'projects.cta.btn': ' View GitHub Profile',
    'proj.fms.desc': 'Web-based financial management system for PT Juara Gadai Jawa Barat. Features: financial journal management, automatic reports, real-time data integration, and pawn transaction management.',
    'proj.ecom.desc': 'Fullstack e-commerce app using .NET 8. Features: product management, shopping cart, checkout, and user authentication. Built as a take-home task for Fullstack .NET at Alkademi.',
    'proj.chatbot.desc': 'Thesis Project — Web-based academic chatbot for STT Cipasung using LSTM architecture. Integrates REST API between front-end and back-end with the campus academic information system.',
    'proj.lppm.desc': 'Development of the official LPPM website (Research & Community Service Institute) for Universitas Islam KH Ruhiyat Cipasung. Responsive and modern design.',
    'proj.paradaya.desc': 'Digital book reading platform. Users can browse book collections, read content online, and manage their reading list. Built with a comfortable and responsive UI.',
    'proj.finance.desc': 'School financial app for SMK Riyadlut Tauhid. Manages student fees, cash in/out, and teacher salaries. Includes automatic monthly reports and a data visualization dashboard.',
    'proj.ppdb.desc': 'Online New Student Enrollment system for SMK Riyadlut Tauhid. Features: online registration, student data validation, automatic selection, and selection result reports.',
    'proj.mall.desc': 'Company website for PT Asia Tritunggal Jaya (Mall Plaza Asia Tasikmalaya). From requirements analysis and UI design to deployment using PHP, Laravel, and Wix.',
    'contact.tag': 'Get In Touch', 'contact.title1': 'Contact', 'contact.title2': 'Me',
    'contact.intro': 'Interested in working together or have a question? Feel free to reach out. I am always open to new opportunities and exciting collaborations!',
    'contact.lbl.name': 'Name', 'contact.lbl.subject': 'Subject', 'contact.lbl.message': 'Message',
    'contact.ph.name': 'Your full name', 'contact.ph.subject': 'Your message subject',
    'contact.ph.message': 'Write your message here...',
    'contact.btn': ' Send Message',
    'contact.success': 'Message sent successfully! I will reply as soon as possible.',
    'footer.tagline': 'Building digital experiences with passion & precision.',
    'footer.links': 'Quick Links', 'footer.contact': 'Contact',
    'footer.copy': '© {year} Apip Romli. All rights reserved.',
    'footer.craft': 'Crafted with ❤️ using HTML, CSS & JavaScript',
  }
};

/* ===== DOM READY ===== */
document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initThemeToggle();
  initLangToggle();
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

/* ===== LANGUAGE TOGGLE ===== */
function initLangToggle() {
  const btn      = document.getElementById('langToggle');
  const langText = document.getElementById('langText');
  if (!btn) return;

  const saved = localStorage.getItem('lang') || 'id';
  applyLang(saved);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-lang') || 'id';
    const next    = current === 'id' ? 'en' : 'id';
    applyLang(next);
    localStorage.setItem('lang', next);
  });
}

function applyLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  const t = translations[lang];

  /* Text content / innerHTML */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] === undefined) return;
    if (key === 'footer.copy') {
      el.innerHTML = t[key].replace('{year}', new Date().getFullYear())
        .replace('❤️', '<i class="fas fa-heart" style="color:#ef4444"></i>');
    } else if (key === 'footer.craft') {
      el.innerHTML = t[key]
        .replace('❤️', '<i class="fas fa-heart" style="color:#ef4444"></i>');
    } else if (typeof t[key] === 'string' && t[key].includes('<')) {
      el.innerHTML = t[key];
    } else if (typeof t[key] === 'string') {
      el.textContent = t[key];
    }
  });

  /* Placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.setAttribute('placeholder', t[key]);
  });

  /* Update lang button label */
  const langText = document.getElementById('langText');
  if (langText) langText.textContent = lang === 'id' ? 'EN' : 'ID';

  /* Restart typewriter with new phrases */
  window._typedPhrases = t['hero.typed'];
  if (window._restartTyped) window._restartTyped();
}

/* ===== TYPEWRITER EFFECT ===== */
function initTypewriter() {
  const el = document.getElementById('typedText');
  if (!el) return;

  window._typedPhrases = translations[
    document.documentElement.getAttribute('data-lang') || 'id'
  ]['hero.typed'];

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let pause       = false;
  let timerId     = null;

  function type() {
    if (pause) return;
    const phrases = window._typedPhrases;
    phraseIndex = phraseIndex % phrases.length;
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
      pause = true;
      setTimeout(() => {
        pause = false;
        isDeleting = true;
        timerId = setTimeout(type, speed);
      }, 1800);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting  = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed       = 300;
    }

    timerId = setTimeout(type, speed);
  }

  /* Allow lang toggle to restart cleanly */
  window._restartTyped = () => {
    clearTimeout(timerId);
    pause       = false;
    isDeleting  = true;
    timerId = setTimeout(type, 100);
  };

  timerId = setTimeout(type, 1000);
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
