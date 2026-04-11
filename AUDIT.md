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

---

## Overall Score: 7.4 / 10

The v5 changes are QA work, correctly executed. All three of v4's priority recommendations have been addressed: the filter scroll math is fixed, the swipe hint is live, and the og:image and twitter:image meta tags are present. These are genuine improvements and the score reflects them — a delta of +0.2 over v4.

Let me be precise about what changed and whether it earned its points.

The gallery filter height fix is the most substantive change. The `adjustSectionHeight()` function in `main.js` now dynamically resizes the `.hscroll-section` element based on visible card count: 1–2 cards collapse to 150vh, 6 cards restore to 400vh, intermediate counts scale proportionally with a floor. On mobile at 375px this means a user filtering to "Zoey" (one card) no longer scrolls 300vh of dead space. That is a real fix for a real UX problem. The 50ms `setTimeout` before dispatching a synthetic `scroll` event to retrigger position calculations is slightly inelegant — a `requestAnimationFrame` would be cleaner — but it functions correctly. Score benefit: genuine.

The swipe hint ("Swipe to explore →") is present in the HTML and styled correctly: `display: none` by default, `display: block` only inside `@media (pointer: coarse)`. At 375px on a real iOS or Android device this will render at the bottom of the sticky gallery panel in `var(--text-dim)` at 0.7 opacity. It is small (0.75rem) and subtle, which is appropriate — it is a hint, not a shout. The placement is below the progress bar, which means it appears under the "01 / 06" label. This is the correct position: it is within the gallery panel, visible when the panel is visible, and does not visually compete with the cards. Score benefit: modest.

The og:image and twitter:image tags are present with the Unsplash studio interior image at 1200px width with q=80 and format=auto. The `twitter:card` is set to `summary_large_image`. This is complete. The audit's Priority 3 from v4 has been resolved. Score benefit: marginal for the user experience directly (meta tags are invisible in the browser) but meaningful for the site's utility as a sharing asset.

The tap target QA pass is hygiene. Confirming: `.reviews-google-link` at `min-height: 44px`, `.info-link` (phone, email) at `min-height: 44px`, `.instagram-link` at `min-height: 44px`, `.skip-link` at `min-height: 44px`, `.gallery-filter-btn` at `min-height: 44px`. All confirmed in CSS. The reviews header centered on mobile (`text-align: center` + `justify-content: center` on `.reviews-agg`) is also confirmed. These were correct hygiene fixes, not design improvements.

The score cannot move materially beyond 7.4 until the site's fundamental trust and authenticity ceiling is addressed. The Unsplash stock photography — artist portraits without visible tattoos, gallery images that are not linked to the described artists — remains the most visible gap between this site and a real studio's digital presence. A prospective client in Philadelphia who Googles "Iron & Ink Tattoo" and finds this site will notice within thirty seconds that the artist photographs show no tattoos and no portfolio links exist. That is the problem that costs bookings, and it cannot be fixed by meta tags or scroll mechanics.

---

## Section Scores

### 1. First Impression / Hero — 6.8 / 10
Unchanged from v4. At 130vh the hero does not overstay its welcome. The scroll-out parallax (content fades and lifts, background shifts at a different rate) is smooth and proportionate. The `clamp(3.5rem, 14vw, 8rem)` Bebas Neue title renders at approximately 52px on a 375px viewport. The red ampersand, "Philadelphia, PA" overline, and italic DM Serif tagline create a three-register hierarchy that reads correctly at mobile. CTA buttons stack via `flex-wrap: wrap` and are 52px tall — correct. No regression, no improvement. Score holds.

### 2. Gallery (Horizontal Scroll) — 7.3 / 10
Up from 7.0. The filter scroll-height fix resolves the most damaging UX gap in v4. When a user filters to a single artist the section height now collapses to 150vh — enough scroll room to traverse one card, not enough to strand the user in dead whitespace. The swipe hint renders on touch devices below the progress bar in the gallery panel. The card width at 375px is 80vw (300px), progress bar and "01 / 06" label provide navigation context. Remaining issue: the hidden gallery cards (opacity 0.15, pointer-events none) still physically occupy horizontal space in the scroll track when filtered — a user who scrolls to the right past their filtered card will see dimmed ghost cards before the track ends. The `gallery-hidden` class does not remove the card from the DOM or from the layout flow. This is a secondary nuisance, not a primary failure, but it is visible.

### 3. Artists — 7.0 / 10
Unchanged from v4. Dot-click navigation is reliable. Four dots at 44px tap targets, cross-fade transitions, availability badges correctly colour-coded with text redundancy. Artist bios are specific and well-written. At 375px the photo sits below the info panel at 45vw height. The section functions without any broken behaviour. Score holds.

### 4. Process (Self-Drawing Timeline) — 7.5 / 10
Unchanged from v4. Best scroll interaction on the site. `strokeDashoffset` SVG line draws through four steps as you scroll, each step lighting up with dot glow, text brightening, description sliding in. `prefers-reduced-motion` fallback correct. Copy for each step is the strongest writing on the site. Score holds.

### 5. Pricing — 6.0 / 10
Unchanged. Three cards stack to single column at 375px. Featured card carries the needle accent SVG at 12% opacity. "Most Common" badge readable. Pricing footer note closes the section appropriately. No improvement, no regression. Score holds.

### 6. Reviews — 6.5 / 10
The reviews header is now centered on mobile (confirmed: `text-align: center` on `.reviews-header`, `justify-content: center` on `.reviews-agg`). The Google reviews link is 44px tall. Four reviews, strong content, credibility anchors intact. The structural issue remains: 47 claimed reviews, four displayed, none with verifiable identity beyond initials. No score change — the alignment fix is hygiene, not substance. Score holds at 6.5.

### 7. Contact / Booking Form — 6.5 / 10
Phone link, email link, and instagram link now confirmed at `min-height: 44px`. Form validation, success state, and accordion FAQ unchanged and correct. Map iframe renders at full width with border-radius clip. No regression, no improvement. Score holds.

### 8. Mobile UX at 375px — 7.2 / 10
Up from 7.0. The swipe hint addition removes one gap that was flagged in v4: a non-technical user on a touch device now sees "Swipe to explore →" when the gallery panel is on screen. The filter scroll-height fix removes the dead-scroll problem on filtered views. Sticky CTA still appears after hero and hides near contact correctly. Hamburger at 44px, dots at 44px. `prefers-reduced-motion` fallback comprehensive. Remaining concern: the horizontal scroll paradigm (vertical scrolling drives horizontal card movement) is still an interaction model that a segment of mobile users will not discover through the swipe hint alone — the hint says "swipe" but the mechanic is actually vertical scroll. A user who swipes horizontally in the track expecting native swipe behaviour will find the track does not respond to direct touch swipe (it is CSS `overflow: hidden` with JS scroll-linked transform, not a scrollable element). This is a low-frequency edge case but it represents a conceptual mismatch between the hint text and the actual interaction.

### 9. Trust & Authenticity — 5.5 / 10
og:image and twitter:image are now present and correctly formed. JSON-LD schema remains well-structured (the `logo` property still points to a non-existent `favicon.ico` path — the favicon is a data-URI — but this is a minor technical note, not a user-facing issue). The footer disclaimer is present. Artist photos remain stock portraits with no visible tattoos. No portfolio links. No verifiable social presence beyond a generic Instagram URL. Trust ceiling unchanged. Score holds.

### 10. Visual Identity / Distinctiveness — 6.5 / 10
No visual changes in v5. The palette, font stack, and interaction signatures are unchanged from v4. The text nav logo in Bebas Neue with red ampersand remains the correct minimalist call. The horizontal gallery and self-drawing timeline remain the site's two distinctive interaction moments. No new decisions break the AI-default pattern. Score holds.

---

## Top 3 Recommendations

### Priority 1 — The gallery swipe hint says "swipe" but the mechanism is vertical scroll
The swipe hint ("Swipe to explore →") is correctly placed and visible on touch devices. However the gallery interaction is driven by vertical scroll (a JS `translateX` applied as the user scrolls down), not by horizontal swiping on the track. The track itself is `overflow: hidden` — a user who tries to swipe left on the card deck will get the browser's back gesture or nothing. The hint should read "Scroll down to explore" or use a downward arrow indicator rather than a horizontal "Swipe" instruction. This is a single word change in `index.html` but it removes a meaningful mismatch between expectation and behaviour that will cause confusion on first visit.

### Priority 2 — Hidden gallery cards still occupy scroll-track horizontal space after filtering
When a filter is applied (e.g., "Sasha" — 2 cards visible), the `gallery-hidden` cards are opacity-dimmed but remain in the layout flow of the `.hscroll-track`. At the corrected 150vh section height the user has enough scroll to see the 2 visible cards — but the dimmed cards from other artists are still physically present in the track at full width, creating visual noise and a confusing track edge. The fix: when a card receives `gallery-hidden`, additionally apply `width: 0; min-width: 0; padding: 0; margin: 0; overflow: hidden` so it collapses from the layout. This requires coordinating the collapse with the existing `transition: opacity 0.25s ease, transform 0.25s ease` to avoid a jarring snap. Either add `width` to the transition or use a `max-width: 0` collapse. This is approximately 5 lines of CSS and removes a visual artifact that a careful user will notice.

### Priority 3 — Artist section has no way to book directly from the panel
The Artists section is the most persuasive section on the site — the bios are specific, the availability badges create urgency, and the dot navigation works reliably. But there is no booking action from this section. A user who reads "Zoey Marsh — Currently open" and wants to act must scroll past the Process, Pricing, and Reviews sections to reach the contact form. Add a single "Book [Artist Name]" text link or small button below each artist-info panel, pre-selecting that artist in the contact form (via `#contact?artist=zoey` anchor scroll, or by setting the select value via JS before scrolling). This converts the Artists section from a showcase into a conversion point. It is the highest-leverage UX addition remaining on the site.

---

## Technical Notes (informational — no deduction)
- `prefers-reduced-motion` handling is comprehensive and correct across all scroll-driven sections.
- Sticky CTA `aria` management (`aria-hidden="true"` on wrapper, `tabindex="-1"` on child link toggled by JS) is correctly implemented.
- Gallery filter `aria-pressed` correctly toggles on all filter buttons. `role="group"` on the filter bar is appropriate.
- The `adjustSectionHeight()` `setTimeout(fn, 50)` before the synthetic scroll dispatch is functional but would be cleaner as `requestAnimationFrame`. No user-visible issue.
- JSON-LD schema `logo` points to `favicon.ico` (a non-existent path — favicon is a data-URI). Minor: schema `logo` URL will 404. No user-visible consequence.
- Dead SVG logo classes (`logo-svg-text`, `logo-needle-shaft`, etc.) remain in CSS but are used by the pricing card SVG accent — they are not dead. Correct to retain.
- Gallery track swipe: the `.hscroll-track` is `overflow: hidden` with JS-driven `translateX`. Native touch swipe on the track element does not scroll the gallery. The JS-driven mechanism only responds to vertical scroll. This is an intentional architectural choice but creates the hint-text mismatch noted in Priority 1.
- og:image and twitter:image confirmed present. summary_large_image card type confirmed. Priority 3 from v4 is resolved.
