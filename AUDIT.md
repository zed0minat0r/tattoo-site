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

---

## Overall Score: 7.6 / 10

Six versions in, the site has resolved every item raised in the v5 audit. Let me be specific about what changed, what it's worth, and what remains.

**What landed and whether it earned its points:**

The scroll hint correction is the most important change — and it was the top priority from v5. The gallery-swipe-hint text now reads "Scroll down to explore ↓" with a downward arrow rather than "Swipe to explore →". The mechanism is vertical scroll driving a JS `translateX` — the instruction now matches the actual interaction. This removes a genuine expectation mismatch that would have confused a real user on a first visit. Good fix.

The hidden card collapse is the second priority from v5, and it has been executed correctly. The `.gallery-hidden` class now sets `flex: 0 0 0 !important`, `min-width: 0 !important`, `max-width: 0 !important`, `width: 0 !important`, `padding: 0 !important`, `border-width: 0 !important`, `margin: 0 !important`. Cards visually and dimensionally disappear from the track layout. The transition properties on `.hcard` include `flex-basis 0.25s ease, max-width 0.25s ease, padding 0.25s ease, margin 0.25s ease` — the collapse is animated, not a snap. This fixes the "ghost width" problem correctly.

The per-artist Book CTAs are the third priority from v5. Each artist panel now has an `<a class="artist-book-link" href="#contact" data-book-artist="[name]">` link. The JS `initArtistBookLinks()` function pre-selects the matching option in the `#artist` select before scrolling to contact. This is the correct implementation — a 44px-tall link in accent red, styled with `letter-spacing: 0.1em` uppercase, with hover letter-spacing expansion. It converts the Artists section from a showcase into a conversion point. This was the highest-leverage UX addition flagged in v5 and it has landed cleanly.

The gallery section height reduction (400vh to 300vh desktop, 250vh mobile) and the Unsplash image fixes are infrastructure. The hero background and Realism card image were previously broken — now they are not. These are not improvements over a working state; they restore the site to the state it should have been in before. Worth noting but not worth bonus points.

The site is now a well-executed template. Every major UX gap across six iterations has been addressed. The ceiling is the trust and authenticity layer — stock portraits with no visible tattoos, no real portfolio, no verifiable social presence — and that ceiling will not move until the content changes.

---

## Section Scores

### 1. First Impression / Hero — 6.8 / 10
Unchanged. The Unsplash studio interior image loads at 1600px with q=60, `fetchpriority="high"` and `loading="eager"` — correct for LCP. The 135-degree gradient overlay at 85%/60%/75% opacity allows the image to read at centre while preserving text contrast at all edges. At 375px the hero title renders at approximately 52px (14vw of 375). Three-register hierarchy — red city overline, Bebas Neue title, italic DM Serif tagline — reads correctly. CTA buttons stack via `flex-wrap: wrap` at 52px tall. Score holds.

### 2. Gallery (Horizontal Scroll) — 7.6 / 10
Up from 7.3. The three v5 priority items for this section have all been resolved: scroll hint now reads "Scroll down to explore ↓" (correct to the interaction mechanic), hidden cards collapse to zero width in the track (no ghost space), and the section height is 300vh desktop / 250vh mobile. At 375px, 88vw card width (from the `@media (max-width: 480px)` rule), a single filtered card gives the user 250vh of scroll to traverse it — appropriate. The filter height adjustment via `adjustSectionHeight()` scales proportionally from 150vh (1 card) to 300vh (6 cards). No visible artifacts remain in filtered state. This is the most improved section across v5-v6.

### 3. Artists — 7.4 / 10
Up from 7.0. The Book CTAs are the substantive change: "Book Marcus →", "Join Sasha's Waitlist →", "Book Devon →", "Book Zoey →" — each at `min-height: 44px`, in accent red, with JS pre-selection of the correct artist dropdown value on click before the smooth-scroll to `#contact`. This is the correct implementation of the v5 Priority 3. The availability badges (open/waitlist) create urgency. The dot navigation is reliable at 44px tap targets. The photo sits below the info panel at 45vw height on mobile. Score moves up for the booking conversion addition.

### 4. Process (Self-Drawing Timeline) — 7.5 / 10
Unchanged. Best scroll interaction on the site. `strokeDashoffset` SVG line draws through four steps, each step lighting with dot glow, text brightening, description sliding in. `prefers-reduced-motion` fallback correct. Step copy remains the strongest writing on the site. Score holds.

### 5. Pricing — 6.0 / 10
Unchanged. Three cards stack to single column at 375px. Featured card carries the needle accent SVG at 12% opacity. Pricing footer note closes the section. The structure is clear and the copy is honest about the pricing framework. No movement because there is nothing wrong here and nothing distinctively good. Score holds.

### 6. Reviews — 6.5 / 10
Unchanged. Reviews header centered on mobile (confirmed in CSS). Google link at 44px. Four reviews, strong content. The trust ceiling is the same: 47 claimed reviews, four displayed, initials only. Score holds.

### 7. Contact / Booking Form — 6.5 / 10
Unchanged. Form validation, success state, and accordion FAQ function correctly. Phone, email, Instagram links at 44px. Map iframe at full width with border-radius. The per-artist Book CTAs now pre-populate the artist select, which makes the form context-aware for users arriving from the Artists section. Score holds — the pre-select is a nice touch but the form itself is unchanged.

### 8. Mobile UX at 375px — 7.5 / 10
Up from 7.2. The scroll hint correction removes the interaction-model mismatch that was the most significant remaining UX gap. The card width at 375px is 88vw (330px), the correct size for one-card-at-a-time reading. Filter collapse animation is smooth. Sticky CTA appears after hero and hides near contact. Hamburger at 44px, dots at 44px, all filter buttons at 44px. The center-alignment pass is consistent: gallery header, contact header, reviews header, reviews aggregate, Google link, and footer brand all center on mobile. The site passes a basic mobile usability scan without visible breakage at 375px. Score moves for the hint fix and the card collapse fix landing together.

### 9. Trust & Authenticity — 5.5 / 10
Unchanged. Stock portraits without visible tattoos. Gallery images not linked to named artists. No verifiable social presence beyond the generic Instagram URL (which links to `instagram.com` rather than `instagram.com/ironandink_phl`). JSON-LD schema logo still points to a non-existent `favicon.ico` path. The footer disclaimer ("Placeholder content — not a real business listing") is honest but for a template this is correct — real studio deployments would replace the content. Trust ceiling is a content problem, not a code problem.

### 10. Visual Identity / Distinctiveness — 6.5 / 10
Unchanged. No visual changes in v6. The palette (near-black bg, accent red, gold accents), Bebas Neue / Inter / DM Serif stack, and horizontal gallery plus timeline interactions remain the site's identity. No regression, no improvement.

---

## Top 3 Recommendations

### Priority 1 — Instagram link points to instagram.com, not the studio's handle
The footer nav and the contact info column both reference `@ironandink_phl` but the actual `href` on the contact info Instagram link is `https://instagram.com` (no handle). The footer nav Instagram link correctly goes to `https://instagram.com/ironandink_phl`. This inconsistency means the contact column Instagram link drops users on the Instagram homepage, not the studio profile. One-line fix: update `href="https://instagram.com"` to `href="https://instagram.com/ironandink_phl"` on the `.instagram-link` in the contact info column. For a real studio this would lose direct follows from interested clients.

### Priority 2 — The artist section is not scroll-driven on mobile — it just renders statically
On desktop, the `.artists-scroll-section` has a `height: 300vh` and the sticky panel switches artists as you scroll through the section. On mobile (`max-width: 720px`), the CSS sets `height: auto` and the sticky mechanic is effectively disabled — the section renders as a one-shot static layout. The scroll-driving JS (`initArtists()`) still relies on the section having scroll depth to drive artist switching. On mobile a user sees whichever artist is active (Marcus, by default) and the dots to switch. The dots work on click, which is functional, but there is no scroll behaviour to cycle through artists naturally. This is acceptable given the mobile layout constraints, but the artist info panel has `min-height: 220px` — at 375px there is enough room. Consider making the dots more visually prominent on mobile (e.g., artist name labels beside each dot, or "next artist" text link below the panel) to ensure users discover the full roster rather than landing on Marcus and leaving.

### Priority 3 — The gallery images do not match the described styles
The six gallery cards are labelled Traditional, Realism, Blackwork, Japanese, Geometric, Watercolor. A prospective client on mobile will look at the image and the label to understand what the studio can do. At present: the Traditional card (photo-1604881991720) shows a tattoo artist at work — correct. The Realism card (photo-1568515045052) shows a tattoo artist — not a realism tattoo. The Blackwork card (photo-1565058379802) shows a geometric pattern — arguably correct for blackwork. The Japanese card reuses the hero image (photo-1611501275019) — a studio interior, not a Japanese tattoo. The Geometric card (photo-1531746020798) shows blurred circular forms, not line geometry. The Watercolor card (photo-1518611012118) shows a person exercising, not a watercolor tattoo. A user filtering to "Sasha" (Realism) sees a photo of an artist at work, not a portrait tattoo. This undermines the gallery's entire purpose of demonstrating styles. This is the highest-priority change for any real studio deployment of this template — swap each card image for a photograph that actually shows the described tattoo style.

---

## Technical Notes (informational — no deduction)
- `prefers-reduced-motion` handling is comprehensive and correct across all scroll-driven sections.
- Sticky CTA `aria` management is correctly implemented.
- Gallery filter `aria-pressed` correctly toggles. `role="group"` on the filter bar is appropriate.
- The `adjustSectionHeight()` `setTimeout(fn, 50)` before synthetic scroll dispatch is functional but would be cleaner as `requestAnimationFrame`.
- JSON-LD schema `logo` points to `favicon.ico` (non-existent path — favicon is a data-URI). Minor: schema logo URL 404s. No user-visible consequence.
- The `.gallery-hidden` collapse CSS uses `!important` on all dimension properties, which is acceptable here given the specificity context.
- Contact info Instagram `href="https://instagram.com"` does not match footer Instagram `href="https://instagram.com/ironandink_phl"`. This is the Priority 1 bug above.
- All tap targets confirmed at minimum 44px across filter bar, navigation, dots, info links, form elements, and sticky CTA.
