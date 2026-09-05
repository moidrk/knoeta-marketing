# Knoeta marketing visual QA

Source visual truth: `C:/Users/Intel/AppData/Local/Temp/codex-clipboard-676afaf5-5040-4efa-9f93-4f85b600a397.png` plus the supplied written art direction.

Implementation: `http://localhost:3001/` (browser-rendered in the Codex in-app browser).

Viewport coverage: 1440×1000, 1280×900, 1024×768, 768×1024, and 390×844. Browser captures are deviceScaleFactor 1. The browser viewport includes a small scrollbar/capture trim; each implementation capture was checked against its CSS viewport and has no horizontal overflow.

Captured evidence: `qa/1440x1000-final.png`, `qa/1280x900-final.png`, `qa/1024x768-final.png`, `qa/768x1024-final.png`, `qa/390x844-final.png`, with corresponding above-the-fold captures named `*-hero.png`.

State: default page, plus interaction checks for mobile navigation, simulation choice changes, and Expert Coach perspective/reflection tabs.

## Required fidelity surfaces

- Fonts and typography: Geist is loaded through `next/font`; display scale, deliberate line breaks, and compact uppercase eyebrows were checked at all five sizes.
- Spacing and layout rhythm: hero is one rounded environment; the page resets into a spacious ivory editorial canvas; stories become vertical at tablet/mobile; product stages remain readable.
- Colors and visual tokens: warm ivory and aubergine carry the page; the production Knoeta violet comes from the clinical repository; coral, lilac, and sage are concentrated accents.
- Image quality and asset fidelity: the approved Knoeta orbital mark is copied from clinical `public/logos/knoeta_small.png`; the closing landscape is a generated raster asset at `public/images/dawn-landscape.webp` with no text or UI baked into it. Product interfaces are live DOM/SVG representations rather than screenshots.
- Copy and content: marketing language stays at capability level—simulation, expert guidance, reflection, competency, and longitudinal learning. No patient names, case-level treatment decisions, medical claims, fabricated testimonials, or usage metrics are exposed.

## Interaction and accessibility checks

- Mobile menu opens, exposes four anchor destinations and sign-in, closes with Escape, and returns focus to its toggle.
- Simulation choices update the live reflection prompt with `aria-pressed` and `aria-live` state.
- Expert Coach tabs update the guidance copy with `aria-pressed` and `aria-live` state.
- Navigation and CTA links resolve to page anchors or `https://clinical.knoeta.com` destinations.
- Semantic landmarks, heading hierarchy, skip link, focus-visible styles, decorative `aria-hidden` graphics, and `prefers-reduced-motion` support are present.
- Browser console had no runtime errors. One Fast Refresh warning appeared during development editing and is not present in production output.

## Comparison history

1. Initial desktop render: hero was visually strong but product stage positioning was too close to the CTA at shorter landscape viewports; tablet stories were too compressed.
2. Fix: moved the stage into normal hero flow with a consistent gap and switched tablet stories to a readable single-column editorial layout.
3. Initial mobile render: the hidden desktop `<br>` joined words in the headline and a preview CTA was clipped by the hero crop.
4. Fix: retained the intentional headline break on mobile, replaced the clipped preview CTA with a compact inline note, and re-captured all requested sizes.

## Final result

passed
