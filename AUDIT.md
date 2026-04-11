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

---

## Overall Score: 7.2 / 10

This is a genuine step forward. The v4 rebuild resolves the single most damaging structural problem from earlier versions — the artist section on iOS Safari was broken, and it has now been replaced with dot-click navigation that actually works. That alone is worth a meaningful portion of the delta. A user encountering a broken layout on their phone does not give benefit of the doubt; they leave. The fix is invisible to anyone who was not previously burned by it, which is exactly correct.

The horizontal scroll gallery at 400vh is an ambitious choice and it largely lands. At 375px the cards snap to 80vw width and the scroll progress bar provides orientation feedback. The section does not confuse — the user understands they are scrolling through style categories. The gallery filter bar above the track adds functional value: tapping "Sasha" collapses the track to her two cards with an opacity fade transition (not a snap) — this is improved over what the v3 audit noted as abrupt `display: none`. That transition is now properly handled via `opacity: 0.15 + scale(0.97) + pointer-events: none`, which is far more considered.

The process timeline with the self-drawing SVG vertical line is the site's best scroll interaction. The `IntersectionObserver` + `strokeDashoffset` technique is well-implemented — the line literally draws itself down through the four steps as you scroll, each dot lighting up with a red glow as the line passes through. On mobile this is visible and legible. It is the kind of interaction that a real competitor would pay a design agency to produce. It earns the score it gets.

The clean text nav logo is the correct call. The removal of the SVG needle from the nav removes an element that was ambiguous at small scale and not rendering cleanly on all iOS clients. "IRON & INK" in Bebas Neue with the red ampersand is unambiguous, fast to render, and correctly sized.

The contrast improvements and font-size corrections are hygiene work — they do not elevate the score but they remove the small cuts that accumulated. Nine type sizes corrected to minimum 12px means the site no longer has text that a mobile user would squint at. The border opacity increase from the earlier iteration means the card boundaries are properly visible against the dark background.

What keeps this below 7.5: the site has no actual tattoo photography. Every image is an Unsplash stock photograph that has no particular relationship to the described artists. A user who lands on this site and has seen any real tattoo studio website will register this gap. The artist photos are generic stock portraits — Marcus Cole's photo is a man who could be selling insurance. No ink visible anywhere in the artist portraits. This is the single largest remaining credibility gap and no amount of scroll engineering closes it.

The trust ceiling remains. This is now a very well-built template. It is not yet a site that belongs to a specific studio.

---

## Section Scores

### 1. First Impression / Hero — 6.8 / 10
At 130vh the hero no longer overstays its welcome. The scroll-out parallax (content fades and lifts, background shifts down at a different rate) is smooth and appropriate — not showy, just polished. The `clamp(3.5rem, 14vw, 8rem)` Bebas Neue title renders at approximately 52px on a 375px viewport — large enough to dominate, not so large it clips. The red ampersand is a useful visual accent. The "Philadelphia, PA" overline in tight uppercase tracking and the italic DM Serif tagline below create a three-register hierarchy that works well typographically. The background photo (Unsplash studio interior) at the overlay levels coded shows through adequately on a real screen. CTA buttons are 52px tall, full-width stacking is handled at mobile via `flex-wrap: wrap`. This is a competent hero. It does not yet say anything unique about this studio.

### 2. Gallery (Horizontal Scroll) — 7.0 / 10
The 400vh scroll-pinned horizontal track is the site's signature interaction. At 375px, cards are 80vw (300px), tall, with a 1rem gap and 1.25rem side padding. The scroll progress bar and "01 / 06" label provide orientation for a user who may not immediately understand horizontal scroll through vertical movement. The filter bar (5 buttons: All + 4 artists) at the top of the sticky panel works correctly — active state uses `background: var(--accent)` which is clearly visible. The `gallery-hidden` transition (opacity to 0.15, scale to 0.97) is better than the previous abrupt hide. One remaining concern: when a filter is active and only 1–2 cards match, the hidden cards still occupy scroll distance in the 400vh section — the user scrolls through empty space where dimmed cards sit off-screen. This is a UX gap. A user who taps "Zoey" and sees one visible card then scrolls 400vh through the track will not understand why so much scroll distance remains. The filter logic should either reset the section height or provide a fallback scroll shortcut.

### 3. Artists — 7.0 / 10
The dot-click navigation replacing the iOS-broken sticky-scroll is the correct architectural decision. Four dots with 44px tap targets (confirmed in CSS: `width: 44px; height: 44px` outer button), cross-fade opacity transitions (0.6s ease-out-expo), and the artist info panel animating in from `translateY(20px)` with `opacity: 0 to 1`. At 375px the artist photo sits below the info panel at `45vw` height with `min-height: 200px` — just enough to see the portrait crop. The availability badges (green "Booking April 2026", amber "Waitlist — booking Oct 2026") are correctly colour-coded without relying on colour alone (the text carries the meaning). Artist bios are well-written and specific. The section earns 7.0 by being reliable, legible, and functionally complete — the dock at the bottom for navigation works without any hint of broken behaviour. This is a clear improvement over v3.

### 4. Process (Self-Drawing Timeline) — 7.5 / 10
The strongest scroll interaction on the site. The SVG `strokeDashoffset` technique drawing the vertical red line through the four process steps as you scroll is well-calibrated — the IntersectionObserver activates the scroll listener when the section enters viewport, and each step lights up (dot glows red, step number becomes visible, text brightens, description slides in from `translateX(-8px)`) as the line passes through. At 375px the grid is `2.5rem 1fr` with `1rem` gap — the dot column is tight but functional. The copy for each step is the second-best writing on the site ("Come fed, rested, and hydrated. Your artist will walk you through the stencil placement before any ink hits. We move at your pace."). The `prefers-reduced-motion` fallback correctly removes the animation and shows all steps lit at once. One technical note: the SVG `viewBox="0 0 4 400"` with `preserveAspectRatio="none"` combined with dynamic height recalculation on resize is a thoughtful approach. Score docked half a point only because the section is visually thin — it is four steps in a narrow column with no imagery. Correct for the subject matter, but visually underwhelming between the richer sections on either side.

### 5. Pricing — 6.0 / 10
Unchanged in structure. At 375px the three pricing cards stack vertically as a single column (via the `900px` breakpoint). The featured card (Hourly Rate) still carries the `pricing-needle-accent` SVG — the small inline monogram at 12% opacity in the top-right of the card. This is fine as a design detail. The "Most Common" badge on the featured card is readable. The `pricing-footer-note` ("Every piece is custom — text us your idea...") is the right closing line for a section that could feel clinical. No material change from v3, score holds at 6.0. The section does its job without distinction.

### 6. Reviews — 6.5 / 10
Four reviews, three with initials-only attribution. One 4-star review with a credible complaint. The aggregate rating display (`4.8 · 47 reviews` with gold stars) has been added and is visible above the grid. The Google reviews link is present. At 375px the grid collapses to a single column via the `900px` breakpoint — cards stack with `grid-template-columns: 1fr` and the featured card loses its `grid-row: span 2` treatment. The featured review from T. Warren (Japanese sleeve, four sessions) is long and emotionally specific — it reads as authentic. The K. Liu review with the complaint is a credibility anchor. Sasha's review ("I cried in the chair") is appropriately brief. Rachel T.'s first-tattoo account is a good closer. The section is credible but thin — 47 claimed reviews, four shown, none with a social link or verifiable identity. One named reviewer (first + last initial minimum) would push this to 7.0. No change from v3 assessment.

### 7. Contact / Booking Form — 6.5 / 10
Structurally unchanged and still the best-executed form on any version of this site. At 375px the `form-row` collapses to single column (via `720px` breakpoint: `grid-template-columns: 1fr`). All tap targets meet 44px minimum. Labels are 12px/uppercase/tracked — above minimum. Validation highlights required fields with `border-color: var(--accent)` on empty submit attempt. The fake success state (900ms delay then "Request sent. We'll be in touch within 24 hours.") is correctly implemented with `hidden` attribute toggle and `scrollIntoView`. The pre-booking FAQ and aftercare accordions below the form remain the best content on the site. Nine questions across two groups, content is accurate and specific. The map iframe below the contact info column renders correctly at mobile width — `width: 100%, height: 260px`, clipped to `border-radius: var(--r-md)`. No regression, no improvement. Score holds.

### 8. Mobile UX at 375px — 7.0 / 10
This is the most improved category from v3. Gallery filter buttons now correctly meet `min-height: 44px` (confirmed — earlier audit noted 36px which has been corrected). The horizontal scroll section provides orientation via the progress bar. The sticky mobile CTA ("Book Now") bar appears after the hero and correctly hides near the contact section via both IntersectionObserver and a scroll event listener — no flash or unexpected reappearance. The hamburger menu animation (3 lines collapsing to X) at 44px square is correctly sized. The dot navigation in Artists is 44px per dot. The `prefers-reduced-motion` fallback is comprehensive — hero collapses to 100vh, gallery un-pins, artists de-stacks, all transitions eliminated. One mobile-specific concern: the gallery filter bar and the horizontal scroll section together mean that on mobile a user must scroll 300vh of vertical distance while watching cards move horizontally AND manage a filter bar that is visible only at the top of the sticky panel. The cognitive load of the interaction is higher than it appears on desktop. A user who does not understand scroll-driven horizontal movement (a non-trivial percentage of non-tech users) may simply think the gallery section is broken. There is no instruction text.

### 9. Trust & Authenticity — 5.5 / 10
JSON-LD schema is present and well-formed. The `og:image` meta tag remains absent — social shares will render without a preview image. The footer disclaimer ("Placeholder content — not a real business listing.") is present at 0.75rem in `var(--text-dim)` at 0.6 opacity — a user reading quickly will not register it, but it is there. The phone number, address, and email are placeholder-format but plausible. Artist availability dates are specific. The largest ongoing trust gap: every artist photograph is a stock portrait with no visible tattoos. No artist's portfolio is linked. No Instagram shows actual work from the studio. A prospective client checking this against a real competitor will notice the absence of verifiable work immediately.

### 10. Visual Identity / Distinctiveness — 6.5 / 10
The site is cleaner in v4 than v3. The removal of the SVG needle from the nav and the text-only logo is a more confident typographic statement than the small, occasionally mis-scaled monogram. The palette (near-black `#0d0c0b`, crimson `#c4201c`, warm gold `#c9a84c`) is cohesive. The three-font stack (Bebas Neue for display, DM Serif Display italic for voice, Inter for body) is the AI default for premium dark-theme studios but it is well-executed within that convention. The horizontal scroll gallery and self-drawing timeline are interaction signatures that most template sites do not have — they create a brief moment of genuine visual surprise. The site does not yet have a singular designed element that could only belong to it. To move above 7.0 in this category the site needs one decision that breaks the default: a custom photograph, an unexpected colour break, a typographic choice that is not Bebas Neue.

---

## Top 3 Recommendations

### Priority 1 — Add a "No instruction = confusion" scroll cue for the gallery section
The horizontal scroll gallery is the site's most impressive interaction but the most likely point of abandonment for a non-technical user. At 375px there is no instruction that vertical scrolling moves the gallery horizontally. The progress bar at the bottom helps — but only for a user who has already discovered the mechanism. Add a brief text hint in the gallery header: "Scroll to explore" (or a horizontal arrow indicator) visible only on touch devices via `@media (pointer: coarse)`. This is a one-line HTML addition and 3 lines of CSS. Without it, a portion of mobile users will assume the gallery shows only one card.

### Priority 2 — Fix the empty-scroll problem when gallery filter has few matches
When a user taps an artist filter with only 1–2 matching cards, the 400vh section height does not change. The user scrolls through 300+vh of vertical distance while only 1–2 cards are visible and the rest sit dimmed and unusable. Either: (a) add a JS listener that sets the section to a shorter fixed height when filtered results are fewer than 3, then restores on "All"; or (b) add a "Scroll to see X results" count that updates dynamically so the user knows what is ahead. Option (a) is architecturally cleaner. This is the single most broken UX interaction remaining in the site.

### Priority 3 — Add og:image for social sharing
Every social share (iMessage link preview, Twitter card, Facebook, Slack paste) renders as a blank card. The hero background image URL is already in the HTML as an `<img>` src. Adding `<meta property="og:image" content="https://images.unsplash.com/photo-1588776814546-ec7e0a40d4f7?w=1200&auto=format&fit=crop" />` and the corresponding `twitter:image` tag is a one-line fix that materially improves how the site presents when shared. Every tattoo client who considers this studio will send the link to a friend or partner first. That preview card is the site's second first impression.

---

## Technical Notes (informational — no deduction)
- `prefers-reduced-motion` handling is comprehensive and correct across all scroll-driven sections.
- The sticky CTA aria management (`aria-hidden="true"` on wrapper, `tabindex="-1"` on child link toggled by JS) is correctly implemented.
- Gallery filter `aria-pressed` correctly toggles on all filter buttons. `role="group"` on the filter bar is appropriate.
- JSON-LD schema `logo` still points to `favicon.ico` (a non-existent file — the favicon is a data-URI inline). Minor: schema logo URL will 404. Fix: remove the logo property or point to a hosted asset.
- Dead SVG logo classes (`logo-svg-text`, `logo-needle-shaft`, etc.) remain in CSS but are used by the pricing card SVG accent — they are not dead. Correct to retain.
- Code quality: clean vanilla IIFE pattern, passive scroll listeners throughout, IntersectionObserver used correctly with threshold and rootMargin. No frameworks. No expected console errors.
- `og:image` remains absent. See Priority 3 above.
