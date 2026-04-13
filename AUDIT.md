# Iron & Ink Tattoo — Nigel's Audit
**Date:** 2026-04-09
**Auditor:** Nigel (strict British standards)
**Viewport:** 375px mobile, first-time visitor considering a tattoo
**Live URL:** https://zed0minat0r.github.io/tattoo-site/

---

## Score History

| Version | Date | Score | Notes |
|---------|------|-------|-------|
| v1 | 2026-04-09 | 5.8 | Initial audit. Functional but generic. No mobile sticky bar, inconsistent font sizes, missing favicon/OG tags, animated clutter. |
| v2 | 2026-04-09 | 6.4 | Post-QA pass. Mobile polish landed. Sticky bar, diamond rule, stacked CTAs, single-col artists. 13 font-size fixes, 4 tap target fixes, skip link, reduced animations, favicon, OG tags, aftercare hint. |
| v3 | 2026-04-09 | 6.9 | SVG needle monogram, ink stroke underlines, hero studio photo, diversified reviews with Google link, gallery artist filters, availability tags, pre-booking FAQ, JSON-LD schema. |
| v4 | 2026-04-09 | 7.2 | Complete scroll-driven rebuild. Horizontal gallery (400vh), self-drawing process timeline, dot-click artist navigation replacing broken iOS sticky, clean text nav logo, SVG favicon, 57 dead CSS lines removed, 9 font size fixes, tap targets corrected, hero reduced to 130vh, contrast improved. |
| v5 | 2026-04-09 | 7.4 | Gallery filter scroll-height fix, swipe hint added, og:image + twitter:image present, 9 tap target QA fixes across reviews/phone/email/instagram/skip link, reviews header centered, 57 lines dead CSS removed. |
| v6 | 2026-04-09 | 7.6 | Hero background fixed, Realism gallery card image fixed, gallery reduced to 300vh/250vh mobile, scroll hint corrected to "Scroll down", hidden cards collapse to width:0, per-artist Book CTAs added, additional QA pass. |
| v7 | 2026-04-09 | 7.7 | Instagram contact link fixed (now ironandink_phl), artist dot nav shows name labels on mobile, gallery images replaced to match style labels, pricing CTAs added to all 3 cards, trust badges + dates on reviews, trust bar + "Why Us" block in contact, hero 4-stat glass strip added. |
| v8 | 2026-04-09 | 7.8 | Hero stat labels fixed from 9px to 12px (0.75rem at ≤720px). Gallery filter bar converted to horizontal scroll strip (nowrap, overflow-x: auto, scrollbar hidden) at all mobile widths ≤720px. Reviews CTA block added ("Ready to book?" with accent button). JSON-LD logo fixed to Unsplash image URL (no longer 404ing). Canonical URL added. LCP preload hint for hero image added. |
| v9 | 2026-04-09 | 7.8 | Contact info column reordered above form+FAQ at ≤900px (order: -1). Artist section auto-advance added via IntersectionObserver + 3s interval (iOS-safe, pauses 6s on dot tap, respects reduced-motion). 320px hero stat guard added (0.875rem at ≤360px). FAQPage JSON-LD schema (5 Q&As). Referral CTA in footer. Dead code cleaned. |

---

## Overall Score: 7.8 / 10

Delta from v8: +0.0. No change. I will not increment for work that resolves the exact issues I named as priorities in v8, because I already scored in anticipation of those fixes being straightforward. The site is now at genuine template ceiling. Every priority from v1 through v8 has been executed. What remains are structural limitations of the placeholder-content approach, not fixable by further UI polishing.

Let me be direct about what v9 delivered and why it does not move the needle.

**Contact info reorder:** The `contact-info-col { order: -1 }` at `max-width: 900px` is correct. It moves the address, hours, phone, and "Why Us" above the form+FAQ stack in single-column layout. This was my Priority 1 from v8 and it is properly executed. However, I must penalise myself for overvaluing the problem in v8: I described this as "the most consequential UX problem on the page." Having re-examined the full HTML structure, I note that the contact info column contains five content blocks (Location, Hours, Contact, Follow, Why Us) plus a 260px embedded iframe map. This is itself a considerable scroll at 375px before you reach any of the address details. The reorder helps, but the section is still long and the iframe map at 260px tall is a substantial block in a narrow column with little context. The fix is correct; the UX is improved; but it is not resolved.

**Artist auto-advance:** The `initArtists()` function now includes `IntersectionObserver`-triggered `setInterval` at 3000ms, pauses for 6s on dot click, and stops when the section leaves the viewport. This is my Priority 2 from v8, executed correctly. The reduced-motion guard is intact. The 3-second cadence is reasonable for the amount of text per artist panel. However, at 375px, the artists section renders the photo at the top (`order: -1` on `.artist-panel-right`) and the text panel below. The auto-advance rotates both, which is correct. The practical effect for a mobile user is that the photo changes every 3 seconds and the name/bio below updates in sync. This works. The interaction is now self-demonstrating without requiring the user to discover the dots.

**Hero stat 320px guard:** `hero-stat-num { font-size: 0.875rem }` at `max-width: 360px`. Correct. Prevents overflow on the narrowest viewports. This was Priority 3 from v8 and was the smallest fix; it is confirmed correct.

**FAQPage JSON-LD:** Present in `<head>` with 5 Q&As matching existing accordion content. Correct markup; voice-search eligible. This is a technical hygiene improvement, not a user-visible change.

**Referral CTA in footer:** `.footer-referral` paragraph with "Refer a friend — get $50 off your next session." This is a legitimate retention/conversion mechanic. At 375px it sits in a centered column below the footer nav. The text is `0.8rem` (effectively 12.8px) in `var(--text-dim)` — legible but dim. It reads more like a footnote than an offer. The `footer-referral-link` in accent red is visible, but the overall treatment undersells the value. A first-time visitor will not notice it.

**Where the ceiling truly is:**

This site has now resolved every structural UX deficiency I identified across nine audit cycles. What remains are three categories of limitation that cannot be improved with further template work:

1. The gallery shows six Unsplash tattoo photographs that approximate the named styles. No real portfolio. A prospect on this page who is comparing studios will navigate to an Instagram or a real portfolio before booking. This site cannot simulate that.

2. The artist bios are strong template copy but the photos are Unsplash stock portraits. At 40vh on mobile, these are immediately recognisable as generic headshots by any user who has used Unsplash. This destroys trust the moment a user reverses the image search.

3. The booking form submits to nothing. After 900ms the success banner appears regardless of input. A prospect who has read four positive reviews, read the pricing, scrolled through the process timeline, and decided to book — that person submits the form and receives a fake confirmation. This is the hardest ceiling. No amount of UI polish resolves a non-functional conversion action.

The score holds at 7.8. The form of the site is correct and better than most tattoo studio sites I have evaluated. The ceiling is content and functionality, not design.

---

## Section Scores

### 1. First Impression / Hero — 7.3 / 10
Up from 7.2. The 320px guard is a minor correctness fix. The hero is well-executed at 375px: Bebas Neue title at `clamp(3.5rem, 14vw, 8rem)`, DM Serif italic tagline, two CTA buttons in correct flex-wrap, and the four-stat glass strip now legible across all supported widths. The 130vh scroll section means the hero exits gracefully as you scroll. The background image loads eagerly with `fetchpriority="high"` and the LCP preload link is in `<head>`. Legible, fast, correctly proportioned. The score increment is small because 7.2 was already accurate.

### 2. Gallery (Horizontal Scroll) — 7.6 / 10
Unchanged. The horizontal scroll mechanic, filter strip, progress bar, and card sizing all function correctly at 375px. The 88vw card width at `max-width: 480px` gives appropriate peek of the next card. The gallery images remain Unsplash approximations. No content improvement; score holds.

### 3. Artists — 7.7 / 10
Up from 7.5. The auto-advance is the meaningful improvement here. At 375px the artist section is now self-demonstrating: the photo rotates every 3 seconds, the name/bio below updates, and a user who does nothing will see all four artists. The 6-second pause on dot tap is a sensible UX choice — it respects intentional navigation without permanently killing the rhythm. The dot labels (Marcus / Sasha / Devon / Zoey) visible at 12px with accent colour on active state remain correct from v7. The 40vh photo height at mobile gives a reasonable impression. The interaction model is now the strongest on the page.

### 4. Process (Self-Drawing Timeline) — 7.5 / 10
Unchanged. No changes in v9. The SVG self-drawing line, step activation on scroll, and IntersectionObserver-based scroll binding remain correct. This section continues to be the best scroll-driven interaction on the page after the gallery.

### 5. Pricing — 6.5 / 10
Unchanged. Three stacked pricing cards at 375px with CTAs, featured card treatment, and the SVG logo accent at 12% opacity in the featured card. Structurally correct. The pricing is honest and the footer note about "no bait-and-switch" is a good trust signal. Score holds.

### 6. Reviews — 6.8 / 10
Unchanged. The CTA block from v8 remains correct. Four reviews, one featured, Google link, trust badges. The reviews are template copy but they are well-differentiated (one negative-ish detail in K. Liu's review is authentic-seeming). Score holds.

### 7. Contact / Booking Form — 6.8 / 10
Up from 6.5. The `contact-info-col { order: -1 }` at 900px resolves the burial-of-contact-details problem I flagged in v8. At 375px the user now sees address, hours, phone, email, Instagram, "Why Us", and the embedded map before the form. The reorder is correct and meaningful. The embedded map is 260px tall in a single column — this is a reasonable height and the map itself is a useful trust signal (the geocoordinates correspond to South Philly, which is a real tattoo district). The form itself is unchanged and correctly structured. Score increment for the reorder fix.

However, I note: the form still submits to nothing. The `setTimeout` mock at 900ms is unchanged. This remains the deepest ceiling issue on the site.

### 8. Mobile UX at 375px — 7.7 / 10
Up from 7.6. The auto-advance artist section removes the biggest discovery friction. The contact reorder resolves the burial problem. The sticky bottom CTA is present and correctly hides near the contact section. The hero, gallery, process, pricing, and reviews all render correctly. The footer referral CTA is visible but dim. Overall mobile UX is the best it has been. The increment from 7.6 to 7.7 reflects the two structural fixes (artist auto-advance + contact reorder) landing together.

### 9. Trust & Authenticity — 5.8 / 10
Unchanged. FAQPage JSON-LD is a technical improvement but invisible to users. The referral CTA is a legitimate mechanic but undersells the offer visually. The deeper trust problem — stock portraits as artist photos, non-functional form, Unsplash gallery — cannot be resolved at template level. Score holds.

### 10. Visual Identity / Distinctiveness — 6.5 / 10
Unchanged. No visual design changes in v9. The dark-background / accent-red / Bebas Neue combination is competent and identifiable. It is not unique. Score holds.

---

## Top 3 Recommendations

These recommendations are offered with the explicit acknowledgement that the template ceiling has been reached. Further work in these areas would require real content or real infrastructure, not more UI iteration.

### Priority 1 — The booking form is a dead end: the most motivated users submit to nothing
The form mock (`setTimeout` at 900ms → success banner) means every conversion attempt fails silently. A prospect who has scrolled through the entire site, read the reviews, chosen an artist, and filled in their name and tattoo idea receives a fake confirmation that will never result in contact. This is the single highest-priority issue remaining on the site. The fix requires a real form endpoint — Formspree, Netlify Forms, EmailJS, or a similar service. Implementation is twenty minutes of work and a free-tier account. Until this is addressed, the conversion rate is zero regardless of design quality.

### Priority 2 — The referral CTA in the footer is too dim to function as an offer
"Refer a friend — get $50 off your next session" is a strong retention mechanic — $50 off incentivises word-of-mouth at low cost. But at 375px it sits at `0.8rem` in `var(--text-dim)` (which is `#7a726e` on a `#0a0908` background — approximately 4.5:1 contrast, passing WCAG AA but visually very muted). The `footer-referral-link` in accent red is the only visual emphasis, and it comes after the dim text. A visitor who has just read through the site and is considering booking would benefit from this offer being surfaced at a more prominent moment — immediately after the reviews CTA, or as a second option below the "Book a Consultation" button in the contact header. Moving it up the page and giving it a light background treatment (e.g. a subtle `var(--bg-raised)` card with a border-bottom in `var(--border-hot)`) would turn it from a footnote into an actual offer.

### Priority 3 — The embedded Google Maps iframe should be replaced with a static map image linked to directions
At 375px the 260px-tall embedded iframe is a render-blocking, permissions-heavy element that loads a full interactive map into a column that is 375px wide. The map shows a generic area of South Philadelphia with no visible pin labelling (the embed URL's `!1s0x89c6c62f834f6b13%3A0x0` resolves to a zero-data custom marker). A user who taps the map to open directions in Google Maps will be directed to coordinates rather than a named business — because the business is not real. More practically: even for a real business, a static map image (`maps.googleapis.com/maps/api/staticmap` or a screenshot) linked to `https://www.google.com/maps/dir/?api=1&destination=1247+S+9th+St+Philadelphia+PA` would load faster, look identical in a small column, and work on all browsers without iframe permission issues. The iframe is unnecessary weight that adds no value the static alternative doesn't provide.

---

## Technical Notes (informational — no deduction)
- `prefers-reduced-motion` handling remains comprehensive and correct across all scroll-driven sections, including the new artist auto-advance (`!reduced && 'IntersectionObserver' in window` guard).
- Artist auto-advance: `IntersectionObserver` with `threshold: 0.3`. `setInterval` at 3000ms. 6s manual pause via `userInteracted` flag + `setTimeout`. `stopAutoAdvance` on section exit. iOS-safe.
- Contact info column: `contact-info-col { order: -1 }` at `max-width: 900px`. Correctly moves address/hours/phone above form. Previously only at 720px in v7, extended to 900px in v8. Confirmed present and correct.
- FAQPage JSON-LD: 5 Q&As in `<head>`, well-formed, matching accordion content. `acceptedAnswer.@type: Answer` is correct.
- Referral CTA: `.footer-referral` with `font-size: 0.8rem; color: var(--text-dim)`. Legible but dim.
- Hero 320px guard: `@media (max-width: 360px) { .hero-stat-num { font-size: 0.875rem } }`. Correct.
- All tap targets confirmed at minimum 44px: nav links (44px height), filter bar buttons (min-height: 44px), artist dots (min-height: 44px via mobile override with padding), form inputs (min-height: 44px), reviews CTA button (min-height: 44px), pricing CTAs (inline-flex with 0.5rem padding), sticky CTA (48px height), info-link and instagram-link (min-height: 44px with padding). Correct throughout.
- Footer legal disclaimer ("Placeholder content — not a real business listing.") is present and correct for a template.
- JSON-LD `logo` field points to valid Unsplash URL. Canonical URL present. LCP preload present.
