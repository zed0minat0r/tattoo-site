# Iron & Ink Tattoo — Nigel's Audit
**Date:** 2026-04-09
**Auditor:** Nigel (strict British standards)
**Viewport:** 375px mobile, first-time visitor perspective
**Live URL:** https://zed0minat0r.github.io/tattoo-site/

---

## Overall Score: 5.8 / 10

Competent construction, deeply generic execution. The site functions without crashing, the code is clean, and the developer clearly knows what they're doing technically. However, from the perspective of a real person in Philadelphia searching for a tattoo studio, this reads as an AI-generated template wearing a dark theme. Nothing here would make someone stop scrolling on Google and think "that's the shop." It needs a soul, not more polish.

---

## Section Scores

### 1. First Impression / Hero — 5.5/10
The full-viewport hero with "Iron & Ink" in massive Bebas Neue and a red ampersand is the single most overused layout in tattoo shop web design. The tagline "Where art meets skin." is generic to the point of being invisible — every tattoo site says a version of this. The noise overlay and scan-line gradient are decorative effort that do not translate to authenticity. The animated scroll indicator is unnecessary and adds visual noise. There is no actual imagery in the hero; a real user's first impression is: dark, text, and an abstract gradient. That does not inspire confidence in the quality of the work.

### 2. Gallery — 6.0/10
Six Unsplash stock photos organised into a 2-column grid at 375px. This is the most damaging section on mobile: **these are not Iron & Ink's tattoos.** A first-time visitor looking to book will immediately notice the images are generic stock photography (a generic portrait photo labelled "Realism", a woman's face labelled "Watercolor", geometric line art clearly not from a machine). The lightbox works and is accessible. The cards are well-proportioned. But the content kills any trust the layout might build. No real shop would launch with stock images — this is a placeholder site presenting itself as a real portfolio.

### 3. Artists — 5.5/10
Unsplash headshots of random people labelled as the studio's artists. Marcus Cole is a stock photo of a white man, Sasha Reyes is a stock photo of a young woman. Devon and Zoey continue the pattern. The bios are well-written and have specificity ("six-month waitlist", "line work so clean it looks printed") but the photos undermine everything. At 375px, each card stacks individually and the aspect-ratio images show well. However a real user would do a reverse image search or check Instagram and immediately find these faces on stock photo sites.

### 4. Process — 6.5/10
This section is the strongest on the site. The four-step numbered layout is clear, well-paced, and actually useful content. The copy is direct and honest ("No deposit yet." / "We move at your pace."). On mobile the vertical step list with the accent line connector reads cleanly. Minor issue: the step-connector line disappears at desktop but on mobile at 375px it works. This section earns its score — it's functional, clear, and genuinely helpful to a first-time visitor.

### 5. Aftercare / FAQ — 6.0/10
Solid accordion with correct ARIA attributes. The content is detailed and practical — probably the best-written section on the site. The FAQ pattern works on mobile. One issue: this section is misnamed "Aftercare" in the nav but the section heading says "Aftercare" and the label says "Healing Guide" — no great harm, but slightly confusing. The accordion visually collapses everything; a first-time user may not know to tap. An introductory line prompting interaction would help.

### 6. Pricing — 5.5/10
Three cards with Shop Minimum / Hourly Rate / Large Pieces. The featured "Most Common" card uses `transform: scale(1.02)` at mobile width — on a 375px screen, where horizontal space is critical, scaling a card slightly outside its container can cause subtle clipping or feel off-balance. The pricing numbers are clear. The "no bait-and-switch" note is good. However all three prices are round guesses with no differentiation by artist (Sasha, for instance, with a six-month waitlist presumably commands more than the standard rate — this contradicts the bio copy).

### 7. Reviews — 5.0/10
All four reviews are five stars. All four are effusive. All four follow the exact same structure: "[Artist] did [piece]. I [emotional reaction]. [Social proof moment]." They read as fabricated, and the reviewer names are initials only — "T. Warren", "A. Delgado". This is the standard AI pattern for generating fake social proof. Real tattoo clients have Google or Yelp reviews with full names and photos. A real user who has browsed other tattoo sites will clock this immediately. The styling is fine. The credibility is zero.

### 8. Contact / Booking Form — 6.0/10
The form is well-structured with appropriate fields, proper labels, autocomplete attributes, and validation. The 24-hour response promise is realistic and reassuring. The contact sidebar with address, hours, and a Google Maps embed is exactly what a first-time visitor needs. However: the phone number (215) 555-0192 is obviously fake, the email is `ink@ironandink.example`, the Instagram link goes to `instagram.com` (no actual handle), and the footer explicitly says "Placeholder content — not a real business listing." The form does not actually submit anywhere — it simulates a delay and shows success. This is a demo, not a live business site.

### 9. Mobile UX at 375px — 6.0/10
- Hamburger nav works correctly, opens/closes, closes on outside tap.
- Nav links properly close the menu on click.
- Form rows stack to single column below 540px — correct.
- Gallery grid is 2-column at 375px — cards are usable but small.
- The hero title at `clamp(5.5rem, 22vw, 14rem)` renders at roughly 82px at 375px — that's enormous, taking up the full viewport width on "Iron" and "Ink". It works visually but feels more like a poster than a navigable page.
- Scroll animations are staggered with `reveal` class — they fire correctly as the user scrolls. Not egregious but there are a lot of them; nearly every element on the page slides in. The cumulative effect is that the page never feels still.

### 10. Trust & Authenticity — 4.0/10
This is the critical failure. The site is technically a demo:
- Stock photos for both artist portraits and gallery work
- Fake phone number and email
- Instagram link pointing to homepage, not a real handle
- Footer disclaimer admitting placeholder content
- All-five-star reviews with fabricated specificity
- Form submits nowhere

A real user investigating this studio before booking would abandon within two minutes of opening Instagram or doing a map search. The site looks credible enough to get a click but cannot survive a moment of scrutiny.

### 11. Visual Identity / Distinctiveness — 5.0/10
Dark background, blood red accent, Bebas Neue display font, noise overlay, scan-line gradient, section labels in tiny uppercase with an accent underline, cards with subtle hover lift. This is the Claude/AI default tattoo shop aesthetic. It is technically competent but visually indistinguishable from a dozen other dark-theme tattoo or barbershop sites generated by AI tools. There is no unique mark — no logo, no actual brand identity, no visual choice that says this is Iron & Ink specifically rather than Any Dark Shop. A real tattoo studio has a hand, a signature, a style. This has a theme.

---

## Top 5 Actionable Recommendations

### Priority 1 — Replace ALL placeholder content before treating this as live
The footer says "Placeholder content — not a real business listing." Either this site is a demo (fine — label it clearly) or it needs real photos, a real phone number, a real email, a real Instagram handle, and form submission to an actual endpoint (Formspree, Netlify Forms, or equivalent). Launching with fake contact details to real users is the fastest way to destroy trust permanently.

### Priority 2 — Replace stock gallery photos with actual work
The gallery is the entire value proposition of a tattoo studio site. Stock photos of random ink from Unsplash actively harm credibility. Even 6 real photos from each artist's Instagram — properly credited — are worth infinitely more than polished placeholder images. The grid and lightbox are solid; fill them with real work.

### Priority 3 — Replace stock artist portraits with real photos, or remove them
Headshots of random stock people labelled as named artists is the single most trust-destroying element on this site. If real photos are not available, use illustrated/graphic placeholders with a note that photos are coming. Do not use someone else's face.

### Priority 4 — Add a genuine CTA in the hero with a real phone number or Instagram
"Book a Consultation" scrolling to a fake form is not a real conversion path. Real tattoo shops convert primarily through Instagram DMs. The hero should include the actual Instagram handle as a primary CTA alongside the form link. Add a real phone number above the fold — this is what a walk-in or local searcher needs first.

### Priority 5 — Reduce animation frequency
The `reveal` class is applied to nearly every element on every section. The cumulative stagger effect means the page is constantly in motion as the user scrolls. Limit reveal animations to section headings and primary content blocks only — not every card, every step, every FAQ item. Excess animation reads as compensating for weak content.

---

## Technical Notes (no deduction — informational)
- Accessibility: ARIA labelling is thorough and correct. Skip link present. Focus styles are defined. Reduced motion is respected. This is genuinely good work.
- Code quality: Vanilla JS, no framework dependencies, clean module pattern. Well-commented. `prefersReducedMotion` respected in animations. No console errors expected.
- Performance: Three Google Font families (Bebas Neue, Inter, Playfair Display) loaded simultaneously. Consider subsetting or reducing to two if LCP is a concern.
- No favicon defined in the HTML head.
- No Open Graph / social preview tags.
- GitHub Pages deploy workflow present and functional.
