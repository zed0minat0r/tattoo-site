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

---

## Overall Score: 7.7 / 10

This is a +0.1 increment from v6. The changes land correctly but the aggregate impact is small because they address peripheral polish rather than structural gaps. Let me be specific.

**What changed and what it is worth:**

The Instagram link fix in the contact column is a one-line correction that was Priority 1 from the v6 audit. The `href` now points to `https://instagram.com/ironandink_phl` rather than the bare `https://instagram.com`. This is a genuine bug fix and it is the right call.

The dot navigation name labels on mobile — `.dot-label` blocks now display on `max-width: 720px` — resolve the discoverability concern from v6 Priority 2. A user landing on the Artists section at 375px now sees four labelled tabs (Marcus, Sasha, Devon, Zoey) rather than four anonymous dots. The implementation is clean: `flex-direction: column`, 11px label, `min-height: 44px` maintained, active dot label turns accent red. This is a meaningful mobile UX improvement.

The gallery images have been updated. The Realism card (photo-1648421831863) and Japanese card (photo-1659693707379) are now different from the prior broken state. The Watercolor card is photo-1516040090979 rather than the exercising-person image. However, I must be direct about what the gallery still shows at 375px: these are Unsplash images that approximate the category rather than demonstrate actual studio work. The Realism card is a person receiving a tattoo (not a realism tattoo). The Geometric card (photo-1531746020798) shows blurred circular bokeh, not crisp line geometry. This is a template constraint and expected, but a real user comparing studios would clock it immediately. No points deducted for the template nature — but no bonus points for approximation either.

The pricing CTAs are three inline text-links styled in underline-border fashion. At 375px the pricing row stacks to single column. The CTAs read "Book Now →", "Get a Quote →", "Discuss Your Project →". They function and are 44px minimum height via the `pricing-cta` flex rule. This converts a read-only pricing table into a conversion surface. Small but correct.

The reviews trust badges ("First-timer friendly", "No-pressure consultations", "Touch-ups included") appear above the Google link. The dates on reviews (2025, 2025, 2024, 2025) add credibility signal. Both are legitimate additions to the trust layer.

The contact section now has a form trust bar (Reply within 24hrs / No commitment required / Free consultation) above the submit button, and a "Why Us" block in the info column (Custom work only, 8 years avg experience, Licensed by Philadelphia, Vegan-friendly ink). These are appropriate for a booking form. The trust bar items are small (0.75rem) and icon-accompanied — they read clearly on mobile without taking undue space.

The hero 4-stat glass strip (Est. 2018 / 4 Artists / 4.8 Stars / 6 Styles) is the highest-profile addition. It occupies a frosted-glass strip below the CTAs, max-width 480px (scaling to 100% on mobile). At 375px it renders at full width with `.hero-stat-num` in Bebas Neue at 1.25rem. The four stats are the right choice — they answer the first questions a new client would have without requiring a scroll. This is good addition.

**Where the ceiling is:**

The site has now addressed every audit point raised since v4. The remaining ceiling is the authenticity layer: stock photography in place of real portfolio work, placeholder name/address/phone details, and review initials only. These are template constraints, not code failures. A real studio deployment would break through this ceiling immediately by substituting actual content.

The secondary ceiling is visual distinctiveness. The dark-background / red-accent / Bebas Neue pattern is familiar enough to read "tattoo studio template" on sight. The scroll interactions are well-executed but they do not create a visual identity that says "Iron & Ink specifically" — they say "premium template." This is a design brief problem, not a bug.

Neither of these ceilings is addressable within the template scope. Within that scope, the site is close to its practical ceiling.

---

## Section Scores

### 1. First Impression / Hero — 7.0 / 10
Up from 6.8. The 4-stat glass strip is the right addition — it gives a first-time mobile visitor immediate anchor data (how old, how many artists, what rating, what styles) without requiring a scroll. At 375px the strip renders clearly in Bebas Neue with `.hero-stat-num` at 1.25rem. The frosted glass treatment (`background: rgba(255,255,255,0.04); backdrop-filter: blur(8px)`) reads as intentional rather than tacked on. The CTA pair ("Book a Consultation" primary, "View Our Work" ghost) remains correct. Hero section height is 130vh — the scroll cue appears and disappears appropriately. Score moves for the stat strip landing cleanly.

### 2. Gallery (Horizontal Scroll) — 7.6 / 10
Unchanged from v6. The images are different Unsplash selections but remain approximations of the described styles. The filter bar, progress indicator, card collapse animation, and scroll behaviour are all correctly implemented from prior versions. No regression. No structural improvement. Score holds.

### 3. Artists — 7.5 / 10
Up from 7.4. The dot name labels on mobile resolve the discoverability gap. At 375px a user sees four labelled buttons (Marcus, Sasha, Devon, Zoey) with the active label turning accent red. The artist Book CTAs remain from v6. The photo panel renders at `45vw` height at 375px — adequate for a portrait orientation. The availability badges (Booking April 2026 / Waitlist Oct 2026 / Booking May 2026 / Currently open) add urgency. Score moves for the label fix.

### 4. Process (Self-Drawing Timeline) — 7.5 / 10
Unchanged. Best scroll interaction on the site. `strokeDashoffset` SVG line draws through four steps, each step lighting with dot glow, text brightening, description sliding in. `prefers-reduced-motion` fallback correct. Step copy remains the strongest writing on the site. Score holds.

### 5. Pricing — 6.5 / 10
Up from 6.0. The three CTAs convert a read-only table into a conversion surface. At 375px the cards stack to single column. The featured centre card carries the "Get a Quote →" CTA in accent red; the flanking cards carry "Book Now →" and "Discuss Your Project →" in text-dim with border-bottom underline. These are small interactive elements (0.8125rem) but meet 44px via the `inline-flex` declaration. The shop minimum ($80), hourly ($150–$200), and large piece (custom quote) structure is honest and clear. The pricing-footer-note reads naturally. Score moves for the CTAs.

### 6. Reviews — 6.6 / 10
Up from 6.5. The trust badges ("First-timer friendly", "No-pressure consultations", "Touch-ups included") and year dates on reviews are both legitimate additions. They address the hesitation a first-timer would feel at this stage in the scroll journey. The badges are small (0.6875rem) and centred on mobile via `justify-content: center`. The year dates (2025 / 2025 / 2024 / 2025) are visible in the `review-detail` at 0.75rem. Marginal score increase for the trust signal improvement.

### 7. Contact / Booking Form — 6.8 / 10
Up from 6.5. The form trust bar (three icon+text items) appears between the form and the submit button — exactly the right placement for reducing hesitation before the commitment action. The "Why Us" list in the info column is appropriate for a studio info sidebar. The Instagram link in the contact column now correctly links to `https://instagram.com/ironandink_phl` (the v6 Priority 1 bug is resolved). The per-artist pre-select JS from v6 still functions. The form itself is unchanged and correct. Score moves for the trust bar and the bug fix.

### 8. Mobile UX at 375px — 7.6 / 10
Up from 7.5. The artist dot labels add a meaningful discoverability improvement. At 375px the dots now read as labelled tab navigation rather than anonymous pagination dots. Everything else from v6 holds: 88vw card width, filter button collapse, sticky CTA behaviour, hamburger/nav, centre alignment across all section headers. The hero stat strip fits at full width without overflow. No new regressions. Score ticks up for the label addition.

### 9. Trust & Authenticity — 5.7 / 10
Up from 5.5. The "Why Us" credential block (custom work only, 8-year avg experience, City of Philadelphia licensed, vegan-friendly ink) and the form trust bar add concrete studio claims. The Instagram link now resolves to the correct handle. Review dates are present. These are incremental trust signals within template constraints. The ceiling — stock portraits, placeholder phone/address, initials-only reviews — remains unchanged. Small score movement for the additions.

### 10. Visual Identity / Distinctiveness — 6.5 / 10
Unchanged. No visual design changes in v7 beyond new Unsplash image selections. The palette, typeface stack, and scroll interactions remain identical. No regression, no improvement.

---

## Top 3 Recommendations

### Priority 1 — The hero stat strip has a readability problem at 375px: the label text is 0.5625rem (9px) on screen
The `.hero-stat-label` at `max-width: 720px` is set to `font-size: 0.5625rem` — that is 9px rendered. The labels "Est.", "Artists", "Stars", "Styles" at 9px in uppercase with `letter-spacing: 0.14em` are at the absolute lower bound of legibility on a standard mobile display. A user with any vision impairment will not read them. The stat numbers (Bebas Neue at 1.25rem) read clearly, but the labels that give them meaning are borderline illegible. Increase to `0.625rem` minimum or preferably `0.6875rem` at the 720px breakpoint. This is a one-line CSS change with direct impact on the most visible element of the hero.

### Priority 2 — The gallery filter bar wraps to two rows at 375px, breaking the visual hierarchy
At 375px with `flex-wrap: wrap` the five filter buttons ("All", "Marcus", "Sasha", "Devon", "Zoey") wrap to two rows. The first row gets "All", "Marcus", "Sasha"; the second gets "Devon", "Zoey". This looks broken — uneven rows with two orphaned buttons on the second line — and it competes with the gallery header above it for visual weight. Solutions: (a) reduce filter button padding from `1.125rem` to `0.75rem` at `max-width: 480px` so all five fit on one row; (b) replace the five discrete buttons with a `<select>` dropdown on mobile only; or (c) replace with a horizontal scrolling strip (`overflow-x: auto; flex-wrap: nowrap`) with no visible scrollbar. Option (c) is the most elegant — it matches the horizontal-scroll idiom already established by the gallery itself.

### Priority 3 — The reviews section has no call to action after the final review card
A user reading through four reviews and a Google link has finished the trust-building section but has no in-section prompt to act. The sticky CTA is present, but it is passive — it does not speak to what the user has just read. A brief CTA block below the Google link — something as simple as a centred "Ready to book?" header with a button linking to `#contact` — would capture the conversion intent at the moment of peak trust. This is the highest-leverage unconverted moment in the current page flow: the user has read the reviews, seen the ratings, checked the Google link — and then scrolls to Pricing with no explicit invitation. A six-line HTML addition between `.reviews-google-wrap` and the closing `.container` div would close this gap.

---

## Technical Notes (informational — no deduction)
- `prefers-reduced-motion` handling is comprehensive and correct across all scroll-driven sections.
- Sticky CTA `aria` management is correctly implemented.
- Gallery filter `aria-pressed` correctly toggles. `role="group"` on the filter bar is appropriate.
- JSON-LD schema `logo` still points to `favicon.ico` (non-existent path — favicon is a data-URI). Minor: schema logo URL 404s. No user-visible consequence.
- The `.gallery-hidden` collapse CSS uses `!important` on all dimension properties, which is acceptable here given the specificity context.
- Contact info Instagram `href` is now correctly `https://instagram.com/ironandink_phl`. V6 Priority 1 bug confirmed resolved.
- All tap targets confirmed at minimum 44px across filter bar, navigation, dots (now labelled), info links, form elements, pricing CTAs, and sticky CTA.
- Hero stat label font-size at `max-width: 720px` is `0.5625rem` (9px) — flagged as Priority 1 above.
