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
| v2 | 2026-04-09 | 6.4 | Post-QA pass. Mobile polish landed. Sticky bar, diamond rule, stacked CTAs, single-col artists. 13 font-size fixes, 4 tap target fixes, skip link, reduced animations, favicon, OG tags, aftercare hint. |
| v3 | 2026-04-09 | 6.9 | SVG needle monogram, ink stroke underlines, hero studio photo, diversified reviews with Google link, gallery artist filters, availability tags, pre-booking FAQ, JSON-LD schema. |

---

## Overall Score: 6.9 / 10

The v3 batch represents a meaningful step upward and I am awarding it honestly. The delta from 6.4 is earned — not gifted. Several of the changes the brief describes are genuine improvements that a real user considering a tattoo would register, consciously or not.

The SVG monogram (needle crossing the letterforms with an ink drop at base) is the most significant development: the site now has an authored mark. It is not a masterwork of logotype design — the letterforms remain Bebas Neue and Playfair Display pulled from CDN — but the needle diagonal and the ellipse ink drop at the entry point are a specific decision that could only belong to a tattoo studio. A user will not consciously articulate this, but the nav no longer reads as a template placeholder.

The ink stroke SVG pseudo-element on section labels is a subtler win. It replaces the flat red border-bottom with a hand-drawn cubic Bezier path that wobbles convincingly. At 0.75rem, the label text is still small and the stroke is easily missed, but when it is seen it reads as intentional craft rather than assembled template. This is exactly the right instinct.

The hero background photo at 13% opacity and 60% grayscale — a tattoo studio interior from Unsplash — solves the most glaring v2 weakness. The hero now contains a reference to the actual subject matter. At 13% it is atmospheric rather than dominant, which is the correct call for readability. A user scrolling past at 375px will perceive the image register without consciously processing it. This raises the hero impression without sacrificing type legibility.

The reviews section is materially improved. One 4-star review with a credible complaint (slow booking response, two weeks for a reply) breaks the uniform perfection that made the previous version feel manufactured. The featured blockquote (T. Warren, Japanese sleeve, four sessions) is a long, specific, emotionally credible account. The Google reviews link with the coloured SVG Google logo is a trust signal that removes a credibility gap. This is a section that was scoring 5.5 and now earns 6.5.

The gallery filter bar by artist is a functional differentiator. On mobile at 375px it wraps to two rows of pill buttons and works correctly — filter tap immediately hides non-matching cards with `display: none`, which is abrupt (no transition) but responsive. The artist filter creates a path from gallery to artist bio to booking form that a motivated user would follow naturally. This is good UX logic even if the implementation is basic.

The pre-booking FAQ adds ten questions total across two accordions. The content is genuinely useful and specific — deposit policy with the 48-hour cancellation window, touch-up conditions (studio fault vs. aftercare failure), design preview with the one-round revision ask. A first-time tattoo client would have every one of these questions. The section earns its length.

The availability tags (green "Currently open", orange "Waitlist — booking Oct 2026") are a small but effective addition. They create urgency without fabricating it and they answer a question every user has before committing to a consultation.

What has not changed is the design ceiling. The palette, type stack, noise overlay, and scan-line gradient remain the AI tattoo shop default. The score reaches 6.9 — better than most AI-generated tattoo sites, not yet a site a user would choose over a real competitor with a photograph of actual work, a name on the door, and a Google rating. That gap is real and acknowledged.

---

## Section Scores

### 1. First Impression / Hero — 6.5/10
The studio interior photo at 13% opacity and 60% grayscale resolves the v2 blank-gradient criticism. The hero now contains an image reference to its subject matter. At 375px the Bebas Neue title clamps to roughly 75–80px — still monumental but legible. The diamond rule divider, tagline in Playfair italic, and stacked full-width CTAs below all hold from v2. The scroll hint bounce animation at 2.4s is subtle and acceptable. The needle monogram in the nav is visible at the top. Improvement acknowledged and scored. The hero still asks a user to trust typography and atmosphere — no above-the-fold ink imagery that would immediately communicate the studio's quality — but it is no longer a pure CSS gradient.

### 2. Gallery — 6.5/10
The artist filter bar is a functional addition that justifies its space. At 375px it wraps to two lines (All/Marcus/Sasha on line 1, Devon/Zoey on line 2) which is acceptable. The filter buttons have `min-height: 36px` — one pixel below the 44px WCAG tap target recommendation. This is a minor accessibility shortfall but worth noting. Filter state is correctly maintained with `aria-pressed`. The card-hide on filter is abrupt (`display: none`, no opacity transition) — a user tapping Devon sees the gallery snap immediately rather than fade. At 375px the 2-column 3/4 aspect-ratio grid is well-proportioned. The gallery earns a half-point above v2 for the filter functionality.

### 3. Artists — 6.5/10
Availability tags are a genuine improvement. The green/orange colour coding (rgba overlays on the brand's dark surface) reads clearly at 375px without competing with the accent red. "Waitlist — booking Oct 2026" for Sasha creates legitimate scarcity. "Currently open" for Zoey is an implicit nudge to a first-timer who may not have the patience for a waitlist. The single-column layout at 375px remains correct. Artist bios retain their distinctive voice. This section holds and marginally improves.

### 4. Process — 6.5/10
Unchanged from v2. Still the most structurally clean section on the site. The step connector gradient on mobile, the 52px/1fr grid at 480px breakpoint, and the honest copy all hold. No improvement, no regression.

### 5. Aftercare / FAQ — 7.0/10
The pre-booking FAQ addition lifts this section meaningfully. Ten questions across two accordions is a lot of content — some users will find it exhaustive — but the ordering is correct: healing guide first, booking questions below the fold in a clearly labelled sub-section ("Before You Book"). The section header for the pre-booking FAQ uses an `h3` with inline font-size reduction (`clamp(1.75rem, 5vw, 2.5rem)`) rather than a new class — minor code smell but functionally correct. The content itself is the strongest copy on the site. Deposit policy, touch-up conditions, and the revision workflow are handled with a voice that sounds like a real studio. This section now earns 7.0.

### 6. Pricing — 6.0/10
The Sasha premium rate note is now in the featured card alongside the hourly range. The note style (`font-size: 0.8rem; display: block; margin-top: 0.5rem`) is a bit inline-styled and visually inconsistent with the rest of the card typography, but it communicates the information. The `pricing-card-featured` with `transform: none` at mobile and `scale(1.02)` above 768px remains correctly implemented. No material change from v2, score holds.

### 7. Reviews — 6.5/10
This is the most improved section in v3. The featured blockquote (T. Warren, Japanese sleeve over four sessions, emotionally specific) reads as credible. The 4-star K. Liu review with an honest complaint about slow booking response breaks the uniform perfection. The Google reviews link with the four-colour Google SVG icon is a trust anchor. The footer link is well-constructed: `min-height: 44px`, `aria-label` with the "opens in new tab" disclosure, `rel="noopener noreferrer"`. Previously scoring 5.5, now earning 6.5. The only remaining weakness: four reviews is still thin for a studio "established 2018," and all four reviewers use initials only. A fifth review from a named source (even "Sarah M.") would read more authentically.

### 8. Contact / Booking Form — 6.5/10
Unchanged from v2 and still the best-executed section technically. Form layout, validation, ARIA, autocomplete attributes, success state, map filter — all correct. The contact-info sidebar renders below the form at 375px (single column, form-first ordering correct). No regression, no improvement.

### 9. Mobile UX at 375px — 6.5/10
The v3 additions behave correctly at mobile width. Gallery filter bar wraps and functions. Availability tags render cleanly inside artist cards. The accordion system handles two separate `faq-list` instances without conflict (separate `id` namespaces: `faq-1` through `faq-5` and `faq-pre-1` through `faq-pre-5`). The sticky book bar continues to smart-hide at the contact section. One persistent issue: gallery filter buttons have `min-height: 36px`, below the 44px WCAG tap target standard. One new issue: the gallery filter bar appears above the gallery-grid with `margin-bottom: 1.5rem` but has no `margin-top` — on smaller containers this places it immediately below the section description with very little breathing room.

### 10. Trust & Authenticity — 5.0/10
Within the template contract, the v3 pass adds the JSON-LD schema (TattooParlor type, full address, geo coordinates, hours, price range) which is a backend trust signal for search engines. The Google reviews link raises the perceived legitimacy for a real user. The artist availability dates (April 2026, May 2026, October 2026) are specific enough to read as real booking calendars. Score remains constrained by the template ceiling — a user who dials the phone number or visits the address will immediately discover the fiction. The footer disclaimer is present but at 0.75rem/`var(--text-dim)` is easy to miss.

### 11. Visual Identity / Distinctiveness — 6.0/10
The SVG needle monogram is the single authored element the site has been missing. The needle diagonal crossing the letterforms with an ink drop at the base is a genuine design decision — not assembled from a design system, not a generic icon, not a font glyph. It is small in the nav (28px height) and does not appear anywhere else on the page at larger scale (the footer SVG uses the identical small version). The ink stroke SVG underlines on section labels are a complementary authored texture — the Bezier wobble path with the ink bleed circles at start and end is a nice touch that reads as hand-drawn at close inspection. Together, these two elements lift the identity score by half a point. The overall palette, type stack, and noise/scan-line layering remain AI default. To move above 6.5 in this category the site needs one or more of: a hero-scale treatment of the needle mark, an actual typographic decision that is not Bebas Neue, or a photographic aesthetic choice (grain, duotone, a specific editorial crop) that belongs to this studio alone.

---

## Top 3 Recommendations

### Priority 1 — Scale the needle monogram into the hero
The SVG needle mark is currently 28px tall in the nav and footer. It has the potential to be the site's signature visual but it is doing no work at brand scale. Place a large-format version of the needle motif — or a derived element from it — in the hero background or as a watermark behind the title. Even a simple 200–300px version rendered at 8–12% opacity behind "Iron & Ink" would transform the hero from a typography exercise into a branded space. The authored mark exists; deploy it where it will be seen.

### Priority 2 — Transition the gallery filter hide/show
When a user taps a filter button, cards currently snap to `display: none` immediately. At 375px this produces a jarring reflow. A simple opacity + visibility transition (200–300ms) on `.gallery-card` hide state would make the filter feel considered rather than functional-only. Also raise gallery filter button `min-height` from 36px to 44px to meet tap target standard.

### Priority 3 — Add one named review and a review count
The reviews section is now credible in content but thin in volume. Adding one more review — specifically one with a first name rather than initials only (e.g., "Rachel T." or "David M.") — would move the attribution format from "obviously template" to "plausibly real." Alongside this, add a summary line above the reviews grid: "4.8 · 47 reviews" (or similar plausible aggregate) with the Google icon. This one line — even as a placeholder — anchors the section in a real-world review ecosystem that users recognise from every service business they visit.

---

## Technical Notes (no deduction — informational)
- JSON-LD schema is well-formed: TattooParlor type, address, geo coordinates, opening hours, price range, sameAs Instagram. The `logo` property points to `favicon.ico` which does not exist as a separate file (the favicon is a data-URI SVG inline in `<head>`). Minor: schema logo URL will return 404.
- Gallery filter `aria-pressed` on active button correctly updates. The `role="group"` on the filter bar is appropriate.
- Sticky book bar outer wrapper has no `aria-hidden` in v3 (the v2 inconsistency noted in the previous audit appears to have been addressed or is now a non-issue since the outer element has no text content only child elements with their own ARIA).
- The `section-label::after` ink stroke SVG is a data-URI on a pseudo-element. It will be correct on all modern browsers. Correct use of `preserveAspectRatio="none"` to allow the path to stretch to label width.
- Code quality: unchanged from v2 — clean vanilla IIFE pattern, no console errors expected.
- No `og:image` — social shares remain without preview image. Adding the hero background photo URL as `og:image` would be a one-line fix.
