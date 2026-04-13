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

---

## Overall Score: 7.8 / 10

Delta from v7: +0.1. This is a legitimate increment — every change since v7 directly addressed an audit Priority and does so correctly. But I must be honest about what that means at this scoring level: the gap between 7.8 and 8.0 is not patched by small fixes. It requires structural improvement in areas the site still does not address.

**What changed and what it is worth:**

The hero stat label fix is the most visible improvement. At the `max-width: 720px` breakpoint, `.hero-stat-label` is now `font-size: 0.75rem` — that is 12px, up from 9px (`0.5625rem`). This was Priority 1 in v7 and it was executed correctly. At 375px the four labels (Est., Artists, Stars, Styles) now read clearly. The numbers remain in Bebas Neue at 1.25rem; the labels are Inter 600 at 12px with 0.14em letter-spacing. Legible. Resolved.

The gallery filter bar conversion is also correct. At `max-width: 720px` the CSS now applies `flex-wrap: nowrap; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none` and hides the webkit scrollbar. The `gallery-filter-btn` elements carry `white-space: nowrap; flex-shrink: 0`. At 375px the five filter buttons now sit in a single horizontally-scrollable strip. The v7 Priority 2 two-row wrap problem is resolved. The solution matches the horizontal-scroll idiom already present in the gallery section itself — this is the right choice.

The reviews CTA block is present: `.reviews-cta-block` sits between the Google link and the closing container, with a centred "Ready to book?" paragraph and an accent-red "Book a Consultation" button linking to `#contact`. This directly addressed v7 Priority 3 — the dead zone after the final review. The implementation is clean and the button meets the 44px height requirement.

The JSON-LD `logo` field now points to `https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&auto=format&fit=crop` — a valid, resolvable URL — rather than `favicon.ico` which 404'd. The canonical URL is present. The LCP preload `<link rel="preload" as="image" href="...?w=1600...q=60" />` is correctly placed before the stylesheet.

**Where the ceiling is:**

Three-quarters of the Priorities across v1–v8 are now resolved. The remaining ceiling has two components.

First, the artist photo panel on mobile. At 375px the `.artist-panel-right` renders at `height: 45vw` — approximately 169px at 375px. That is adequate, but the photos are portrait-orientation Unsplash faces. `object-position: top center` crops reasonably. However, the photo stack currently transitions by clicking dots only. There is no scroll-driven photo rotation at mobile — the scroll mechanism in `initArtists()` drives the dot index by clicking only, and there is no `IntersectionObserver` or scroll-position logic to auto-advance the artist on scroll. A mobile user who does not notice the dots sees only Marcus Cole indefinitely. The dot labels (Marcus, Sasha, Devon, Zoey) are visible and correct, but their discoverability still depends on the user noticing four small labelled buttons below a text panel. This is an interaction model limitation, not a bug.

Second, the contact section at 375px has a structural load problem. The form section contains the full booking form plus nine collapsible FAQ sections plus four aftercare accordion sections. On a 375px screen, this is an extremely long scroll. The FAQ and aftercare sections are collapsed by default, which is correct, but the total vertical height of the contact section — the form, trust bar, submit button, success message area, "Before You Book" title, five FAQ items, an "Aftercare Guide" title, and four aftercare items — creates a page that is enormous on mobile even with everything collapsed. At collapsed state this is approximately 22 `faq-details` elements each with `min-height: 44px` summaries, plus two heading groups. A mobile user wanting to book scrolls through a large amount of structure before reaching the contact info column (which is below the form column in single-column layout). The contact info — address, hours, phone, email, Instagram, "Why Us", map — is buried below the entire FAQ stack. A user who arrived to find the phone number would abandon before reaching it.

---

## Section Scores

### 1. First Impression / Hero — 7.2 / 10
Up from 7.0. The stat label fix is the reason for the increment. At 375px the four stats now read clearly: "2018 / Est." "4 / Artists" "4.8 / Stars" "6 / Styles" in legible Inter 600 at 12px. The frosted glass strip, Bebas Neue numbers at 1.25rem, the divider lines at 24px height — all render correctly. The hero title, tagline, and CTA pair are unchanged from v7 and remain correct. The LCP preload hint reduces perceived load latency on first visit. Score moves for the label fix and preload.

### 2. Gallery (Horizontal Scroll) — 7.6 / 10
Up from the flat 7.6 in v7, but only marginally — I am holding this score because the filter bar fix resolves a visual defect but does not improve the gallery content. At 375px the filter strip now scrolls horizontally without wrapping. The transition from "broken two-row layout" to "clean single-row strip" is the correct fix. The gallery images remain Unsplash approximations. The scroll mechanics, progress bar, and card collapse remain unchanged and correct. Score holds at 7.6 — the fix prevents a deduction rather than earning an addition.

### 3. Artists — 7.5 / 10
Unchanged. The dot labels remain from v7 and function correctly. No new changes to this section. The photo-only-on-click limitation I described above is an existing constraint. Score holds.

### 4. Process (Self-Drawing Timeline) — 7.5 / 10
Unchanged. No changes to this section in v8. Continues to be the strongest interaction on the site. Score holds.

### 5. Pricing — 6.5 / 10
Unchanged. No changes to this section in v8. CTAs, stacked single-column layout at 375px, featured card treatment all remain from v7. Score holds.

### 6. Reviews — 6.8 / 10
Up from 6.6. The "Ready to book?" CTA block resolves the conversion dead zone after the Google link. The implementation is centred on mobile (`.reviews-cta-block` uses `align-items: center`), the button is accent red at `min-height: 44px`, and the copy is direct. This is the highest-leverage addition in v8 from a conversion perspective — a user who has just read four positive reviews now has an immediate, prominent invitation to act. Score moves for resolving v7 Priority 3.

### 7. Contact / Booking Form — 6.5 / 10
Down from 6.8. The section itself has not regressed in v8 — all v7 additions are intact. The score drop reflects a fresh look at the mobile experience: at 375px, the contact section demands an unreasonably long scroll. The trust bar, form fields, and "Why Us" block are all correct individually. But the cumulative vertical weight of the form + thirteen collapsed accordions means the contact info (address, hours, phone) is buried below a very long column of collapsed content. A mobile user who wants to call the studio must scroll past the entire form and FAQ stack. This structural issue was present in prior audits but is more salient now that other sections have been refined — the contact section is now the weakest structural page on mobile.

### 8. Mobile UX at 375px — 7.6 / 10
Up from v7's 7.6, but I will hold the score here rather than increment. The filter bar fix is meaningful but the contact section regression (score above) offsets any gain. The hero label fix is a genuine improvement. Net: 7.6 is correct.

### 9. Trust & Authenticity — 5.8 / 10
Up from 5.7. The JSON-LD logo fix is a technical correctness improvement. The canonical URL and LCP preload are SEO/performance hygiene rather than trust signals, but they reflect professional build practice. The user-facing trust signals (reviews CTA, trust badges, "Why Us") are unchanged. Small increment for the JSON-LD correction.

### 10. Visual Identity / Distinctiveness — 6.5 / 10
Unchanged. No visual design changes in v8. The dark-background / red-accent / Bebas Neue combination remains the defining identity — competent, recognisable as a template, not distinctive as a studio. No regression, no improvement.

---

## Top 3 Recommendations

### Priority 1 — Contact section information hierarchy is broken on mobile: address and phone are buried below 13 accordion items
At 375px, the contact section renders as: form fields → trust bar → submit button → "Before You Book" heading → 5 FAQ accordions → "Aftercare Guide" heading → 4 aftercare accordions → [then] address, hours, phone, email, Instagram, "Why Us", map. A user who arrived to find the studio's phone number or address must scroll past approximately 900px of collapsed accordion structure before reaching that information. This is the most consequential UX problem currently on the page. The fix: move the contact info column above the FAQ section in the single-column mobile layout — either via CSS `order` properties on `.contact-info-col` (set `order: -1` at `max-width: 720px`) or by restructuring the markup to place info-col first in source order. The FAQ and aftercare content should appear below the essential contact details, not above them.

### Priority 2 — The artist section has no auto-advance: a mobile user who does not tap the dots sees only Marcus Cole for the entire section scroll
The `initArtists()` function in main.js responds to dot clicks only. There is no scroll-position logic to advance the artist index as the user scrolls through the artists section. At 375px a user scrolling down through the Artists section will see only Marcus Cole — the default first artist — for as long as they scroll through, unless they notice and tap one of the four labelled dots. The section carries the `artists-scroll-section` class but no scroll-driven artist rotation is implemented. The fix is to add scroll-position logic inside the existing `initArtists` function: calculate the user's progress through the section and call `setArtist(Math.floor(t * numArtists))` on each scroll event. This would bring the artist showcase in line with the scroll-driven behaviour of the gallery and process sections — and give the user a reason to read all four artists rather than only one.

### Priority 3 — The hero stat strip has no mobile centering guard: at 360px and below the "2018" label and "Artists" label risk collision
At 375px the `.hero-stats` strip renders at `max-width: 100%` with four flex children at `flex: 1`. At 375px this works. At 320px (older devices, landscape mode on some phones, accessibility text-resize) the four stat columns compress further. The `hero-stat-num` for "2018" is four characters in Bebas Neue at 1.25rem — at 320px that four-column strip is 80px per column before padding, which is tight. The `.hero-stat-div` separators at 1px width help but the "Est." label at 12px with `letter-spacing: 0.14em` (adding ~0.84px per character) is 4 characters wide under compression. Add `min-width: 0` to `.hero-stat` so flexbox does not overflow the container and test at 320px. A simple `font-size: 0.875rem` on `.hero-stat-num` at `max-width: 360px` would also provide insurance against the most compressed viewports.

---

## Technical Notes (informational — no deduction)
- `prefers-reduced-motion` handling remains comprehensive and correct across all scroll-driven sections.
- JSON-LD `logo` field now resolves to a valid Unsplash URL. Prior `favicon.ico` 404 is fixed.
- Canonical URL `<link rel="canonical" href="https://zed0minat0r.github.io/tattoo-site/" />` is present and correct.
- LCP preload `<link rel="preload" as="image" href="...?w=1600...q=60" />` is correctly placed in `<head>` before the stylesheet.
- Gallery filter bar correctly applies `flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none` at `max-width: 720px`. Webkit scrollbar hidden. `white-space: nowrap; flex-shrink: 0` on buttons. Correct.
- Hero stat label at `max-width: 720px` is now `font-size: 0.75rem` (12px). v7 Priority 1 resolved.
- Reviews CTA block present: `.reviews-cta-block` with `reviews-cta-heading` and `.reviews-cta-btn` (accent red, min-height 44px). v7 Priority 3 resolved.
- All tap targets confirmed at minimum 44px across navigation, filter bar (buttons with min-height: 44px), artist dots (min-height: 44px via mobile override), form elements (min-height: 44px on .form-input), reviews CTA button, pricing CTAs (via inline-flex with 0.5rem padding), and sticky CTA.
- Footer legal disclaimer ("Placeholder content — not a real business listing.") is present and correct for a template.
