/* =========================================
   PORTFOLIO SCRIPT – Chanuka Lakshan
   Particles · Typed Text · Scroll Reveal
   Navbar · Stats Counter · Skill Bars
   ========================================= */

'use strict';

/* ------------------------------------------
   1. PARTICLE CANVAS BACKGROUND
------------------------------------------ */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx    = canvas.getContext('2d');

  let W = canvas.width  = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const PARTICLE_COUNT = 110;
  const COLORS = ['#9d4edd', '#c77dff', '#ff4060', '#e0aaff', '#6a0dad'];

  class Particle {
    constructor() { this.reset(true); }

    reset(initial) {
      this.x    = Math.random() * W;
      this.y    = initial ? Math.random() * H : H + 10;
      this.r    = Math.random() * 1.8 + 0.4;
      this.vx   = (Math.random() - 0.5) * 0.3;
      this.vy   = -(Math.random() * 0.5 + 0.1);
      this.alpha = Math.random() * 0.6 + 0.2;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.pulse = Math.random() * Math.PI * 2;
    }

    update() {
      this.pulse += 0.02;
      this.x += this.vx;
      this.y += this.vy;
      this.alpha = 0.2 + Math.abs(Math.sin(this.pulse)) * 0.5;
      if (this.y < -10) this.reset(false);
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle   = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur  = this.r * 6;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  /* Twinkling stars */
  class Star {
    constructor() {
      this.x     = Math.random() * W;
      this.y     = Math.random() * H;
      this.r     = Math.random() * 0.9 + 0.1;
      this.alpha = Math.random();
      this.dA    = (Math.random() * 0.004 + 0.001) * (Math.random() < 0.5 ? 1 : -1);
    }
    update() {
      this.alpha += this.dA;
      if (this.alpha <= 0 || this.alpha >= 1) this.dA *= -1;
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha * 0.55;
      ctx.fillStyle   = '#ffffff';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
  const stars     = Array.from({ length: 180 }, () => new Star());

  function loop() {
    ctx.clearRect(0, 0, W, H);

    /* Deep space gradient */
    const grad = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.75);
    grad.addColorStop(0, 'rgba(15,8,30,0.5)');
    grad.addColorStop(1, 'rgba(5,5,7,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    stars.forEach(s => { s.update(); s.draw(); });
    particles.forEach(p => { p.update(); p.draw(); });

    /* Draw subtle connection lines between nearby particles */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 90) * 0.12;
          ctx.strokeStyle = '#9d4edd';
          ctx.lineWidth   = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    requestAnimationFrame(loop);
  }

  loop();

  window.addEventListener('resize', () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
})();

/* ------------------------------------------
   2. NAVBAR – scroll class + mobile toggle
------------------------------------------ */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const toggle    = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');
  const allLinks  = navLinks.querySelectorAll('.nav-link');

  /* Scrolled class */
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* Mobile toggle */
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  /* Close menu on link click */
  allLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('active');
    });
  });

  /* Active section highlight on scroll */
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          allLinks.forEach(l => l.classList.remove('active'));
          const active = navLinks.querySelector(`[data-section="${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { threshold: 0.35 }
  );
  sections.forEach(s => observer.observe(s));
})();

/* ------------------------------------------
   3. TYPED ROLE ANIMATION
------------------------------------------ */
(function initTyped() {
  const roles = [
    'ICT Undergraduate',
    'AI & FinTech Enthusiast',
    'AAT Finalist',
    'Software Developer',
    'Rugby Player 🏉',
    'CA Student',
  ];

  const el   = document.getElementById('typed-role');
  let ri     = 0;
  let ci     = 0;
  let deleting = false;
  const SPEED_TYPE = 75;
  const SPEED_DEL  = 38;
  const PAUSE      = 1800;

  function type() {
    const word = roles[ri];

    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) {
        deleting = true;
        setTimeout(type, PAUSE);
        return;
      }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
      }
    }

    setTimeout(type, deleting ? SPEED_DEL : SPEED_TYPE);
  }

  setTimeout(type, 1200);
})();

/* ------------------------------------------
   4. STATS COUNTER ANIMATION
------------------------------------------ */
(function initStats() {
  const cards = document.querySelectorAll('.stat-card');
  let triggered = false;

  function animateCounters() {
    cards.forEach((card, idx) => {
      const target  = parseInt(card.dataset.target, 10);
      const el      = document.getElementById(`stat-${idx}`);
      const duration = 1600;
      const step     = duration / target;
      let current    = 0;

      const timer = setInterval(() => {
        current++;
        el.textContent = current + (target >= 10 ? '+' : '+');
        if (current >= target) clearInterval(timer);
      }, step);
    });
  }

  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting && !triggered) {
        triggered = true;
        animateCounters();
      }
    },
    { threshold: 0.4 }
  );
  observer.observe(document.getElementById('stats'));
})();

/* ------------------------------------------
   5. SKILL BAR FILL ANIMATION
------------------------------------------ */
(function initSkillBars() {
  const fills   = document.querySelectorAll('.skill-fill');
  let triggered = false;

  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting && !triggered) {
        triggered = true;
        fills.forEach(fill => {
          const pct = fill.dataset.width;
          setTimeout(() => { fill.style.width = pct + '%'; }, 200);
        });
      }
    },
    { threshold: 0.2 }
  );
  observer.observe(document.getElementById('skills'));
})();

/* ------------------------------------------
   6. SCROLL REVEAL (generic .reveal + timeline + projects)
------------------------------------------ */
(function initScrollReveal() {
  /* Generic reveal */
  document.querySelectorAll(
    '.stat-card, .about-grid, .skill-card, .contact-form, .contact-info'
  ).forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* Timeline items */
  const tlObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          tlObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll('.timeline-item').forEach(el => tlObserver.observe(el));

  /* Project cards with stagger */
  const projObserver = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 100);
          projObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.project-card').forEach(el => projObserver.observe(el));
})();

/* ------------------------------------------
   7. CONTACT FORM (EmailJS integration)
------------------------------------------ */
(function initContactForm() {
  const form           = document.getElementById('contact-form');
  const sendBtn        = document.getElementById('send-btn');
  const successMsg     = document.getElementById('success-message');
  const errorMsg       = document.getElementById('error-message');

  if (!form) return;

  /* Initialize EmailJS */
  emailjs.init('s3FDqCCL55ErBRX8N');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    /* Visual feedback */
    sendBtn.textContent = 'Sending…';
    sendBtn.disabled    = true;
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';

    /* Collect form data */
    const templateParams = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    /* Send email */
    emailjs.send('service_o5b2tn4', 'template_zym5ser', templateParams)
    .then(function(response) {
      console.log('SUCCESS:', response);
      successMsg.style.display = 'block';
      errorMsg.style.display = 'none';
      form.reset();
      sendBtn.textContent = 'Send Message ✦';
      sendBtn.disabled = false;

      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 5000);
    })
    .catch(function(error) {
      console.error('EmailJS Error:', error);
      errorMsg.style.display = 'block';
      successMsg.style.display = 'none';
      sendBtn.textContent = 'Send Message ✦';
      sendBtn.disabled = false;

      setTimeout(() => {
        errorMsg.style.display = 'none';
      }, 5000);
    });
  });
})();

/* ------------------------------------------
   8. SMOOTH MAGNETIC HOVER ON BUTTONS
------------------------------------------ */
(function initMagneticButtons() {
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x    = e.clientX - rect.left - rect.width  / 2;
      const y    = e.clientY - rect.top  - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
})();

/* ------------------------------------------
   9. CURSOR GLOW TRAIL (desktop only)
------------------------------------------ */
(function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return; /* Skip on touch */

  const dot   = document.createElement('div');
  const ring  = document.createElement('div');

  Object.assign(dot.style, {
    position: 'fixed', pointerEvents: 'none', zIndex: '9999',
    width: '8px', height: '8px', borderRadius: '50%',
    background: '#9d4edd', transform: 'translate(-50%,-50%)',
    transition: 'width 0.2s, height 0.2s',
    boxShadow: '0 0 10px #9d4edd',
  });
  Object.assign(ring.style, {
    position: 'fixed', pointerEvents: 'none', zIndex: '9998',
    width: '36px', height: '36px', borderRadius: '50%',
    border: '1.5px solid rgba(157,78,221,0.5)',
    transform: 'translate(-50%,-50%)',
    transition: 'transform 0.12s ease, width 0.25s, height 0.25s',
  });

  document.body.append(dot, ring);

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  /* Lag the ring slightly for a smooth trailing effect */
  (function animateRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  /* Expand on interactive elements */
  document.querySelectorAll('a, button, .project-card, .skill-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.width  = '14px';
      dot.style.height = '14px';
      ring.style.width  = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'rgba(255,64,96,0.6)';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.width  = '8px';
      dot.style.height = '8px';
      ring.style.width  = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(157,78,221,0.5)';
    });
  });
})();

/* ------------------------------------------
   10. SECTION ENTRANCE FADE (hero sublines)
------------------------------------------ */
(function initSectionFades() {
  const sectionHeaders = document.querySelectorAll('.section-header');
  const fadeObserver   = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  sectionHeaders.forEach(h => {
    h.style.opacity   = '0';
    h.style.transform = 'translateY(24px)';
    h.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    fadeObserver.observe(h);
  });
})();

/* ------------------------------------------
   11. FOOTER YEAR (auto-update)
------------------------------------------ */
(function updateYear() {
  const el = document.getElementById('footer-year');
  if (el) {
    el.textContent = new Date().getFullYear();
  }
})();
