/* ============================================================
   SCRIPT.JS — ClientOnboard.io Landing Page
============================================================ */

(function () {
  'use strict';

  // ── NAV: add scrolled class for border ──────────────────────
  const nav = document.getElementById('nav');

  function handleNavScroll() {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ── TOAST helper ────────────────────────────────────────────
  const toast = document.getElementById('toast');
  let toastTimeout = null;

  function showToast() {
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      toast.classList.remove('show');
    }, 4000);
  }

  // ── PROGRESS BAR: simulate typing activity in mockup ─────────
  const revealEls = document.querySelectorAll(
    '.problem-card, .feature-card, .step, .quote-card, .pricing-card, .section-header'
  );

  const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealEls.forEach(function (el) {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // ── NAV CTA smooth scroll ────────────────────────────────────
  const navCta = document.getElementById('nav-cta');
  if (navCta) {
    navCta.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById('hero-form');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(function () {
          const input = target.querySelector('input[type="email"]');
          if (input) input.focus();
        }, 500);
      }
    });
  }

  // Pricing CTA smooth scrolls
  document.querySelectorAll('a[href="#hero-form"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById('hero-form');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(function () {
          const input = target.querySelector('input[type="email"]');
          if (input) input.focus();
        }, 500);
      }
    });
  });

  // ── PROGRESS BAR: simulate typing activity in mockup ─────────
  // Small animation to make the portal mockup feel alive
  const progressFill = document.querySelector('.progress-fill');
  let progAnimated = false;

  const progressObs = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && !progAnimated) {
      progAnimated = true;
      let w = 33;
      const target = 33;
      progressFill.style.width = '0%';
      setTimeout(function () {
        progressFill.style.width = target + '%';
      }, 300);
    }
  }, { threshold: 0.5 });

  if (progressFill) {
    progressObs.observe(progressFill.closest('.browser-chrome'));
  }

})();
