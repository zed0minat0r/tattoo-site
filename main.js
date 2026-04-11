/* ============================================================
   IRON & INK TATTOO — main.js
   No frameworks. Pure DOM.
   ============================================================ */

(function () {
  'use strict';

  /* ─── UTILS ─── */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return [...(ctx || document).querySelectorAll(sel)]; }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ─── NAV HAMBURGER ─── */
  (function initNav() {
    var toggle = $('.nav-toggle');
    var menu = $('.nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('open', !expanded);
    });

    // Close on link click (mobile)
    $$('.nav-link', menu).forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
      }
    });

    // Header scroll tint
    var header = $('.site-header');
    if (header) {
      window.addEventListener('scroll', function () {
        header.style.background = window.scrollY > 40
          ? 'rgba(10,10,10,0.97)'
          : 'rgba(10,10,10,0.85)';
      }, { passive: true });
    }
  })();

  /* ─── REVEAL ON SCROLL ─── */
  (function initReveal() {
    if (prefersReducedMotion) {
      $$('.reveal').forEach(function (el) {
        el.classList.add('in-view');
      });
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Stagger siblings if they appear close together
          var siblings = $$('.reveal', entry.target.parentElement);
          var idx = siblings.indexOf(entry.target);
          var delay = Math.min(idx * 0.08, 0.4);
          entry.target.style.transitionDelay = delay + 's';
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    $$('.reveal').forEach(function (el) { obs.observe(el); });
  })();

  /* ─── GALLERY LIGHTBOX ─── */
  (function initLightbox() {
    var lightbox = $('#lightbox');
    var lightboxImg = $('#lightboxImg');
    var lightboxStyle = $('#lightboxStyle');
    var lightboxDesc = $('#lightboxDesc');
    var closeBtn = $('#lightboxClose');
    if (!lightbox) return;

    var lastFocused = null;

    function openLightbox(card) {
      lastFocused = document.activeElement;
      lightboxImg.src = card.dataset.img || '';
      lightboxImg.alt = 'Large view of ' + (card.dataset.style || '') + ' tattoo style';
      lightboxStyle.textContent = card.dataset.style || '';
      lightboxDesc.textContent = card.dataset.desc || '';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.style.overflow = '';
      if (lightboxImg) lightboxImg.src = '';
      if (lastFocused) lastFocused.focus();
    }

    $$('.gallery-card').forEach(function (card) {
      card.addEventListener('click', function () { openLightbox(card); });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(card);
        }
      });
    });

    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
  })();

  /* ─── FAQ ACCORDION ─── */
  (function initFaq() {
    $$('.faq-trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var expanded = trigger.getAttribute('aria-expanded') === 'true';
        var bodyId = trigger.getAttribute('aria-controls');
        var body = document.getElementById(bodyId);
        if (!body) return;

        // Close all others
        $$('.faq-trigger').forEach(function (t) {
          if (t !== trigger) {
            t.setAttribute('aria-expanded', 'false');
            var id = t.getAttribute('aria-controls');
            var b = document.getElementById(id);
            if (b) b.hidden = true;
          }
        });

        // Toggle this one
        trigger.setAttribute('aria-expanded', String(!expanded));
        body.hidden = expanded;
      });
    });
  })();

  /* ─── BOOKING FORM ─── */
  (function initForm() {
    var form = $('#bookingForm');
    var success = $('#formSuccess');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic validation
      var invalid = false;
      $$('[required]', form).forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = 'var(--accent)';
          invalid = true;
        } else {
          field.style.borderColor = '';
        }
      });

      if (invalid) {
        // Focus first invalid
        var first = form.querySelector('[required]:invalid, [required][value=""]');
        if (first) first.focus();
        return;
      }

      // Simulate submission
      var btn = form.querySelector('button[type="submit"]');
      var original = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(function () {
        form.reset();
        btn.textContent = original;
        btn.disabled = false;
        if (success) success.hidden = false;
        success.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'nearest' });
        setTimeout(function () { if (success) success.hidden = true; }, 6000);
      }, 900);
    });
  })();

  /* ─── SMOOTH SCROLL POLYFILL (for anchor nav) ─── */
  (function initSmoothScroll() {
    if (prefersReducedMotion) return;
    $$('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var target = document.getElementById(link.getAttribute('href').slice(1));
        if (!target) return;
        e.preventDefault();
        var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '64');
        var top = target.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  })();

  /* ─── STICKY BOOK BAR — hide when contact section is visible ─── */
  (function initStickyBar() {
    var bar = $('.sticky-book-bar');
    var contact = $('#contact');
    if (!bar || !contact) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        // Hide bar when booking form is on screen
        bar.style.opacity = entry.isIntersecting ? '0' : '1';
        bar.style.pointerEvents = entry.isIntersecting ? 'none' : '';
      });
    }, { threshold: 0.15 });

    observer.observe(contact);

    // Transition for smooth show/hide
    bar.style.transition = 'opacity 0.3s ease';
  })();

})();
