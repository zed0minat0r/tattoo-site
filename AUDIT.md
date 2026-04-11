# Iron & Ink Tattoo — Nigel's Audit
**Date:** 2026-04-09
**Auditor:** Nigel (strict British standards)
**Viewport:** 375px mobile, first-time visitor perspective
**Live URL:** https://zed0minat0r.github.io/tattoo-site/

---

## Score History

| Version | Date | Score | Notes |
|---------|------|-------|-------|
| v1 | 2026-04-09 | 5.8 | Initial audit. Functional but generic. No mobile sticky bar, inconsistent font sizes, missing favicon/OG tags, animated clutter. |
| v2 | 2026-04-09 | 6.4 | Post-QA pass. Mobile polish landed. Sticky bar, diamond rule, stacked CTAs, single-col artists. 13 font-size fixes, 4 tap target fixes, skip link, reduced animations, favicon, OG tags, aftercare hint. Score adjusted for template context per brief. |

---

## Overall Score: 6.4 / 10

The gap between v1 and v2 is real and earnable. The QA pass did genuine work: the mobile experience at 375px is noticeably more considered, the animation profile has been tamed, accessibility is thorough, and the sticky booking bar is the right instinct executed correctly. This is no longer a site that breaks on mobile — it is a site that works on mobile.

What has not changed is the design ceiling. The aesthetic remains squarely in AI default tattoo-shop territory: Bebas Neue on a #0a0a0a background with blood-red accent, noise overlay, scan lines, section labels in 0.75rem uppercase tracked to 0.2em with a red underline border. These are stock choices. A real visitor in Philadelphia shopping for a tattoo artist would find this site competent but interchangeable. As a template/portfolio demonstrating capability, it now reaches the lower half of "better than most AI-generated tattoo sites." It does not yet reach "I would choose this over a competitor."

---

## Section Scores

### 1. First Impression / Hero — 6.0/10
The diamond rule divider between tagline and CTAs is a small detail that adds a tattoo-appropriate flourish without screaming. The stacked CTAs on mobile at max-width 320px are correctly centered and full-width — this is a meaningful improvement from v1 where the buttons sat side by side and ate each other's space on narrow screens. The hero-title clamp recalibrated for 480px breakpoint (`clamp(4.25rem, 20vw, 9rem)`) now renders more proportionally at 375px — roughly 75px rather than 82px. Still enormous, but no longer wall-filling. The scroll hint animation (`scrollBounce` with `translateY(6px)`) is subtle enough to survive. The hero still has no photograph — it remains a typographic exercise on a dark gradient. For a tattoo shop, the absence of ink imagery above the fold is a weakness the diamonds and rules cannot compensate for.

### 2. Gallery — 6.0/10
Two-column grid at 375px is correct. The gallery-info strip now has `min-height: 56px` which resolves the tap target issue from v1. The lightbox is accessible and correctly traps focus. The 3/4 aspect ratio cards look good at this column width. Stock Unsplash images remain — this is accepted per brief — but the style labels (Traditional, Realism, Blackwork, Japanese, Geometric, Watercolor) do a reasonable job of communicating range. One ongoing issue: the gallery-card `tabindex="0"` means keyboard users can tab into every card, which on a 6-card grid adds 6 tab stops for an action that is secondary to booking. The gallery works; it does not delight.

### 3. Artists — 6.0/10
The single-column layout at 375px (`grid-template-columns: 1fr` below 480px) is correct and was a v2 fix. Previously cards could crowd at mid-narrow widths. The artist bios remain well-written with genuine voice: "line work so clean it looks printed," "six-month waitlist. Worth it." The artist-img-wrap uses `aspect-ratio: 4/5` which renders cleanly at full column width. The grayscale filter (`filter: grayscale(30%)`) on artist photos adds a considered editorial tone. No score drag for stock photos per brief. The artist-badge positioning (bottom-left, blood red) is clean.

### 4. Process — 6.5/10
Unchanged from v1 and still the strongest section on the site. The `process-step` grid (`64px 1fr`) with the accent-colored step connector line is structurally sound on mobile. The step-connector CSS (`position: absolute; left: 30px; top: calc(3rem + 0.5rem)`) aligns correctly with the 2.25rem step number at 480px breakpoint. Copy is direct, honest, and practically useful. The 480px fix (`grid-template-columns: 52px 1fr; step-number: 2.25rem`) prevents overflow at narrow viewport. Minor note: the step-connector `left` adjusts to 24px at 767px breakpoint but this does not apply at 375px (480px media query takes precedence). No issue in practice.

### 5. Aftercare / FAQ — 6.5/10
The "Tap any question below to expand" prompt added in v2 is exactly the right intervention — the previous version left users staring at a collapsed list with no invitation. The hint is styled correctly in `var(--text-dim)` at 0.8125rem so it reads as supplementary without competing with the section description. Accordion ARIA is correct: `aria-expanded`, `aria-controls`, `hidden` toggle, single-open behaviour. FAQ content is genuinely useful and specific (names actual products: Aquaphor, Lubriderm). This section earns its score.

### 6. Pricing — 6.0/10
The v2 fix of `transform: none` on `.pricing-card-featured` at the 480px breakpoint resolves the clipping concern from v1 — the featured card no longer attempts to scale outside its container on narrow mobile. All three cards stack single-column correctly. The "Most Common" badge at `top: -0.75rem` and `transform: translateX(-50%)` is clean and does not clip. The pricing-note callout with the left accent border is a good visual choice. The content gap — no per-artist rate differentiation — remains, but pricing structure is clear and honest.

### 7. Reviews — 5.5/10
A modest improvement from v1's 5.0 — the styling is tighter and the Playfair Display italic on review text reads as considered. But the fundamental credibility issue is unchanged: four five-star reviews with identical structure, initials-only attribution, and zero platform links. A real Philadelphia person shopping for a tattoo will immediately note the absence of Google review links, the initials-only format, and the sameness of tone. The "Word on the Street" section label is good voice — the content underneath it does not match. Half-point improvement for the typography alone.

### 8. Contact / Booking Form — 6.5/10
The form is the best-executed section technically. `autocomplete` attributes correct, `aria-required`, `novalidate` with JS validation, `form-row` correctly collapses to single column at 375px per the 480px media query (`grid-template-columns: 1fr`). The `form-success` alert uses `role="alert"` and scrolls into view — correct. The contact-info sidebar renders below the form at mobile width (single column, gap 2rem), which is the right order: form first, then map. The Google Maps iframe uses `filter: grayscale(80%) invert(90%) hue-rotate(180deg)` to fit the dark aesthetic — a thoughtful detail. The sticky book bar smart-hides when contact section intersects at 15% threshold — this works correctly.

### 9. Mobile UX at 375px — 6.5/10
This is where v2 improvement is most tangible. Specific gains:
- Sticky book bar: correctly fixed at bottom, safe-area-inset-bottom respected, hides at contact section, 48px button tap target
- Hero CTAs stacked full-width at max-width 320px — correct
- Artists single-column — correct
- Gallery info strip with min-height 56px — correct
- Featured pricing card with `transform: none` at narrow — correct
- Nav links at 44px min-height with 1rem vertical padding at 480px — correct
- Nav-CTA at 48px min-height in mobile menu — correct
- Reduced animation: cards/steps/FAQ use opacity-only reveal, no translate — correct
- Section-title clamp tightened at 767px (`clamp(2.25rem, 9vw, 4.5rem)`) — prevents overflow

One remaining friction point: the sticky bar has `aria-hidden="true"` on the outer div, but the anchor inside (`<a href="#contact" class="sticky-book-btn" aria-label="Book a consultation">`) is keyboard-reachable and screen-reader-visible. The outer `aria-hidden` hides the text "Ready to get inked? / Tue–Sat 11am–8pm" but not the link. This is a minor inconsistency — the link should either have the outer aria-hidden removed, or the anchor should also carry aria-hidden. Not a blocking issue, but worth tidying.

### 10. Trust & Authenticity — 4.5/10
Per brief, placeholder content is not the primary scoring drag. Assessment within template context: the site maintains a consistent fiction (real address on 9th Street, plausible Philly studio hours, artist bios with local specificity). The footer disclaimer is visible but small enough that a casual browser would miss it. The Instagram handle `@ironandink_phl` is shown consistently in two places (contact info and footer). The map embed points to a real-looking Philadelphia location. Within the template contract, this is competent. The score reflects the inherent ceiling of placeholder content on a trust-sensitive category.

### 11. Visual Identity / Distinctiveness — 5.5/10
A half-point improvement acknowledged for intentional choices that survive scrutiny: the diamond rule in the hero is a small signature; the grayscale artist photo treatment is a considered editorial decision; the step connector gradient is a real piece of design. But the overall palette, type stack, and section architecture remains the AI tattoo shop default. Bebas Neue on #0a0a0a with #c41e3a accent, noise overlay, scan lines, section labels at 0.75rem/0.2em letter-spacing — these are the signature of generative templates, not a studio with a hand. No unique logo, no brand mark, no typographic decision that could only belong to Iron & Ink. The site looks like every other dark tattoo shop generated by Claude or GPT. Until there is a visual choice that feels authored rather than assembled, this category is capped around 5.5.

---

## Top 3 Recommendations

### Priority 1 — Add one genuinely distinctive visual element
The site needs a single design decision that breaks the AI template pattern. Options: a hand-drawn logotype or monogram that replaces the Bebas Neue text logo; a photographic texture or distressed print aesthetic in the hero instead of pure CSS gradients; a typographic treatment for section headings that is not Bebas Neue uppercase. The bar is low — one authored element would lift the entire impression. This is the highest-leverage change available.

### Priority 2 — Replace the reviews section or restructure it
Four identical five-star reviews with initials only is the most immediately suspicious section on the site. Even within the template contract, this can be improved: use different star ratings (4.5 stars, 4 stars), break the identical structure, include a "Read more reviews on Google" link (even placeholder), or replace with a single longer featured testimonial. The section label "Word on the Street" sets up an authentic voice that the content immediately undercuts.

### Priority 3 — Give the hero an image or graphic presence
A full-viewport hero with no imagery asks the user to trust a dark gradient and large type. Even a subtle background photograph (desaturated, low opacity, behind the noise layer) would communicate this is a tattoo studio rather than a generic dark-mode landing page. The hero is the most viewed section on any single-page site and it currently shows nothing that could only belong to a tattoo studio.

---

## Technical Notes (no deduction — informational)
- Accessibility: ARIA labelling is thorough. Skip link present and correctly positioned. Focus styles correct (`outline: 2px solid var(--accent); outline-offset: 3px`). `prefers-reduced-motion` properly collapses all animations immediately (`animation-duration: 0.001ms !important`).
- `sticky-book-bar` has `aria-hidden="true"` on the wrapper but the child anchor is still reachable — minor inconsistency noted above.
- Code quality: Vanilla JS IIFE pattern, no framework. Clean, well-commented, all event listeners passive where appropriate. No console errors expected.
- Performance: Three Google Font families (Bebas Neue, Inter, Playfair Display) with `preconnect` — correct. `display=swap` on the font stack is present. Lazy loading on all images.
- Favicon: inline SVG data-URI with pen emoji — works but a custom mark would serve the brand better.
- OG tags: present and correctly formed. No `og:image` — social shares will have no preview image.
- GitHub Pages deploy workflow: present and functional.
