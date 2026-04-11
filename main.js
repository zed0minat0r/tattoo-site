/* ============================================================
   IRON & INK TATTOO — main.js
   Scroll-driven immersive experience
   No frameworks. Native scrollY + IntersectionObserver.
   ============================================================ */

(function () {
  'use strict';

  /* ─── UTILS ─── */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return [...(ctx || document).querySelectorAll(sel)]; }

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function lerp(a, b, t) { return a + (b - a) * clamp(t, 0, 1); }
  function unlerp(v, a, b) { return clamp((v - a) / (b - a), 0, 1); }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ════════════════════════════════════════════════════
     NAV
  ════════════════════════════════════════════════════ */
  (function initNav() {
    var header = $('#site-header');
    var toggle = $('.nav-toggle');
    var menu = $('#nav-menu');
    if (!header) return;

    // Scroll tint
    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Hamburger
    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        var open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        menu.classList.toggle('open', !open);
      });

      $$('.nav-link', menu).forEach(function (link) {
        link.addEventListener('click', function () {
          toggle.setAttribute('aria-expanded', 'false');
          menu.classList.remove('open');
        });
      });

      document.addEventListener('click', function (e) {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
          toggle.setAttribute('aria-expanded', 'false');
          menu.classList.remove('open');
        }
      });
    }
  })();

  /* ════════════════════════════════════════════════════
     SMOOTH ANCHOR SCROLL
  ════════════════════════════════════════════════════ */
  (function initAnchors() {
    $$('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href').slice(1);
        var target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
        var top = target.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top: top, behavior: reduced ? 'auto' : 'smooth' });
      });
    });
  })();

  /* ════════════════════════════════════════════════════
     SECTION 1: HERO — SCROLL-DRIVEN INK REVEAL
  ════════════════════════════════════════════════════ */
  (function initHero() {
    var section = $('.hero-scroll-section');
    var cityLine = $('#heroCityLine');
    var tagline = $('#heroTagline');
    var actions = $('#heroActions');
    var scrollCue = $('#heroScrollCue');

    if (!section) return;

    if (reduced) return;

    // On scroll: hero content fades/parallaxes out as you leave the section
    function updateHero() {
      var rect = section.getBoundingClientRect();
      var sectionH = section.offsetHeight;
      var scrolled = -rect.top;
      var t = unlerp(scrolled, 0, sectionH - window.innerHeight);

      // Parallax: content moves up slightly and fades as you scroll away
      var fadeOut = 1 - unlerp(t, 0.3, 0.9);
      var parallaxY = t * -40;

      var contentEl = section.querySelector('.hero-content');
      if (contentEl) {
        contentEl.style.opacity = fadeOut;
        contentEl.style.transform = 'translateY(' + parallaxY + 'px)';
      }

      // Background parallax (subtle)
      var bgEl = section.querySelector('.hero-bg');
      if (bgEl) {
        bgEl.style.transform = 'translateY(' + (t * 30) + 'px)';
      }

      // Hide scroll cue once we start scrolling
      if (scrollCue) {
        scrollCue.classList.toggle('hidden', t > 0.05);
      }
    }

    window.addEventListener('scroll', updateHero, { passive: true });
    updateHero();
  })();

  /* ════════════════════════════════════════════════════
     SECTION 2: HORIZONTAL GALLERY SCROLL
  ════════════════════════════════════════════════════ */
  (function initHscroll() {
    var section = $('.hscroll-section');
    var track = $('#hscrollTrack');
    var fill = $('#hscrollFill');
    var label = $('#hscrollLabel');

    if (!section || !track) return;

    var cards = $$('.hcard', track);
    var numCards = cards.length;

    if (reduced) {
      // Let it be a normal vertical section
      return;
    }

    function updateGallery() {
      var rect = section.getBoundingClientRect();
      var sectionH = section.offsetHeight;
      var scrolled = -rect.top;
      var t = unlerp(scrolled, 0, sectionH - window.innerHeight);

      // Calculate total scroll distance needed to traverse all cards
      // We want the last card to be fully visible at t=1
      var trackW = track.scrollWidth;
      var viewportW = window.innerWidth;
      var maxOffset = trackW - viewportW + 64; // 64 for padding
      if (maxOffset < 0) maxOffset = 0;

      var offset = t * maxOffset;
      track.style.transform = 'translateX(-' + offset + 'px)';

      // Progress indicator
      if (fill) fill.style.width = (t * 100) + '%';

      // Card label
      if (label) {
        var cardIdx = Math.min(Math.ceil(t * numCards), numCards);
        if (t <= 0) cardIdx = 1;
        label.textContent = String(cardIdx).padStart(2, '0') + ' / ' + String(numCards).padStart(2, '0');
      }
    }

    window.addEventListener('scroll', updateGallery, { passive: true });
    updateGallery();

    // Also trigger on resize
    window.addEventListener('resize', updateGallery, { passive: true });
  })();

  /* ════════════════════════════════════════════════════
     SECTION 3: STICKY ARTIST SHOWCASE
  ════════════════════════════════════════════════════ */
  (function initArtists() {
    var section = $('.artists-scroll-section');
    var infoPanels = $$('.artist-info');
    var photos = $$('.artist-photo');
    var dots = $$('.artist-dot');

    if (!section || !infoPanels.length) return;

    var numArtists = infoPanels.length;
    var currentIdx = 0;

    function setArtist(idx) {
      if (idx === currentIdx && infoPanels[idx].classList.contains('active')) return;

      // Deactivate old
      infoPanels[currentIdx].classList.remove('active');
      photos[currentIdx] && photos[currentIdx].classList.remove('active');
      dots[currentIdx] && dots[currentIdx].classList.remove('active');
      dots[currentIdx] && dots[currentIdx].setAttribute('aria-selected', 'false');

      currentIdx = idx;

      // Activate new
      infoPanels[currentIdx].classList.add('active');
      photos[currentIdx] && photos[currentIdx].classList.add('active');
      dots[currentIdx] && dots[currentIdx].classList.add('active');
      dots[currentIdx] && dots[currentIdx].setAttribute('aria-selected', 'true');
    }

    // Initialize first artist
    setArtist(0);

    // Dot click to switch artists
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        setArtist(i);
      });
    });
  })();

  /* ════════════════════════════════════════════════════
     GALLERY FILTER BAR
  ════════════════════════════════════════════════════ */
  (function initGalleryFilter() {
    var filterBtns = $$('.gallery-filter-btn');
    var cards = $$('.hcard');
    var section = $('.hscroll-section');
    if (!filterBtns.length || !cards.length || !section) return;

    // Heights per visible card count — fewer cards = shorter scroll distance
    // Base is 400vh (6 cards). Each visible card gets ~67vh of scroll room (min 150vh).
    var BASE_VH = 400;
    var TOTAL_CARDS = 6;

    function adjustSectionHeight(visibleCount) {
      if (visibleCount >= TOTAL_CARDS) {
        section.style.height = BASE_VH + 'vh';
      } else {
        // Scale proportionally, floor at 150vh so there's still enough to scroll
        var scaled = Math.round((visibleCount / TOTAL_CARDS) * BASE_VH);
        var clamped = Math.max(150, scaled);
        section.style.height = clamped + 'vh';
      }
      // Retrigger scroll calc after height change settles
      setTimeout(function () {
        window.dispatchEvent(new Event('scroll'));
      }, 50);
    }

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');

        // Update button states
        filterBtns.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        // Show/hide cards with transition + collapse after fade
        var visibleCount = 0;
        cards.forEach(function (card) {
          var artist = card.getAttribute('data-artist') || '';
          if (filter === 'all' || artist === filter) {
            card.style.display = '';
            // Use rAF to ensure display change renders before removing hidden class
            requestAnimationFrame(function () {
              card.classList.remove('gallery-hidden');
            });
            visibleCount++;
          } else {
            card.classList.add('gallery-hidden');
            // After transition, fully remove from layout flow
            card.addEventListener('transitionend', function handler(e) {
              if (e.propertyName === 'opacity' && card.classList.contains('gallery-hidden')) {
                card.style.display = 'none';
              }
              card.removeEventListener('transitionend', handler);
            });
          }
        });

        // Dynamically resize section height based on visible card count
        adjustSectionHeight(visibleCount);
      });
    });
  })();

  /* ════════════════════════════════════════════════════
     SECTION 4: PROCESS TIMELINE — SELF-DRAWING SVG LINE
  ════════════════════════════════════════════════════ */
  (function initProcess() {
    var section = $('.process-section');
    var timeline = $('#processTimeline');
    var lineFill = $('#processLineFill');
    var stops = $$('.process-stop');

    if (!section || !timeline) return;

    // We need to know the timeline's actual height for the SVG
    function syncLineSvgHeight() {
      var h = timeline.offsetHeight;
      if (lineFill) {
        lineFill.setAttribute('d', 'M2,0 L2,' + h);
        lineFill.style.strokeDasharray = h + 'px';
        if (reduced) {
          lineFill.style.strokeDashoffset = '0';
        } else {
          lineFill.style.strokeDashoffset = h + 'px';
        }
      }
      var trackPath = $('.process-line-track');
      if (trackPath) trackPath.setAttribute('d', 'M2,0 L2,' + h);
    }

    syncLineSvgHeight();
    window.addEventListener('resize', syncLineSvgHeight, { passive: true });

    if (reduced) {
      stops.forEach(function (s) { s.classList.add('lit'); });
      return;
    }

    // Use IntersectionObserver for the section, then scroll-link within it
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', updateProcess, { passive: true });
          updateProcess();
        } else {
          window.removeEventListener('scroll', updateProcess);
        }
      });
    }, { threshold: 0 });
    observer.observe(section);

    function updateProcess() {
      var rect = section.getBoundingClientRect();
      var sectionH = section.offsetHeight;
      // Start drawing when section top enters viewport bottom
      var start = rect.top - window.innerHeight;
      var end = rect.bottom;
      var t = unlerp(-start, 0, sectionH + window.innerHeight * 0.5);

      // Drive SVG line
      var lineH = timeline.offsetHeight;
      if (lineFill) {
        lineFill.style.strokeDashoffset = (lineH * (1 - t)) + 'px';
      }

      // Light up stops as line passes through them
      stops.forEach(function (stop, i) {
        var stopT = (i + 0.5) / stops.length;
        stop.classList.toggle('lit', t >= stopT);
      });
    }
  })();

  /* ════════════════════════════════════════════════════
     ARTIST BOOK LINKS — pre-select artist in form
  ════════════════════════════════════════════════════ */
  (function initArtistBookLinks() {
    var artistSelect = document.getElementById('artist');
    if (!artistSelect) return;

    $$('.artist-book-link').forEach(function (link) {
      link.addEventListener('click', function () {
        var artistVal = link.getAttribute('data-book-artist');
        if (artistVal && artistSelect) {
          artistSelect.value = artistVal;
        }
      });
    });
  })();

  /* ════════════════════════════════════════════════════
     GENERIC REVEAL (intersection observer)
  ════════════════════════════════════════════════════ */
  (function initReveal() {
    if (reduced) {
      $$('.reveal').forEach(function (el) { el.classList.add('in-view'); });
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

    $$('.reveal').forEach(function (el) { obs.observe(el); });
  })();

  /* ════════════════════════════════════════════════════
     BOOKING FORM
  ════════════════════════════════════════════════════ */
  (function initForm() {
    var form = $('#bookingForm');
    var success = $('#formSuccess');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var invalid = false;
      $$('[required]', form).forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = 'var(--accent)';
          invalid = true;
        } else {
          field.style.borderColor = '';
        }
      });

      if (invalid) return;

      var btn = form.querySelector('button[type="submit"]');
      var original = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(function () {
        form.reset();
        btn.textContent = original;
        btn.disabled = false;
        if (success) {
          success.hidden = false;
          success.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest' });
          setTimeout(function () { success.hidden = true; }, 6000);
        }
      }, 900);
    });
  })();

  /* ════════════════════════════════════════════════════
     STICKY MOBILE CTA — hide when contact is visible
  ════════════════════════════════════════════════════ */
  (function initStickyCta() {
    var cta = $('#stickyCta');
    var contact = $('#contact');
    if (!cta || !contact) return;

    // Show after scrolling past hero, hide near contact
    var contactObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          cta.classList.remove('visible');
          cta.querySelector('a').setAttribute('tabindex', '-1');
        } else {
          // Only show if past the hero
          if (window.scrollY > window.innerHeight * 0.5) {
            cta.classList.add('visible');
            cta.querySelector('a').removeAttribute('tabindex');
          }
        }
      });
    }, { threshold: 0.2 });

    contactObs.observe(contact);

    window.addEventListener('scroll', function () {
      var pastHero = window.scrollY > window.innerHeight * 0.5;
      var nearContact = contact.getBoundingClientRect().top < window.innerHeight;
      if (pastHero && !nearContact) {
        cta.classList.add('visible');
        cta.querySelector('a').removeAttribute('tabindex');
      } else {
        cta.classList.remove('visible');
        cta.querySelector('a').setAttribute('tabindex', '-1');
      }
    }, { passive: true });
  })();

})();
