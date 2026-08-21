 # Homepage Redesign Prompt

Redesign the homepage of the KSLI (Kumaraguru Sustainability and Livelihood Institute) website. Keep the existing content, copy, and section order exactly as-is. Only implement the following visual and interaction changes. Do not touch the About, Sustainability, Livelihood, Academic Programs, CoE & Partners, or Contact pages.

## 1. Hero Section — Full-Bleed Image + Floating Navbar

Current problem: the navbar sits in its own white bar above the hero image, so the image doesn't feel immersive.

Changes:
- Make the hero image span the full width and top of the viewport, edge-to-edge, with no white bar above it.
- Convert the navbar into a floating/transparent bar that sits **on top of** the hero image (position: fixed or absolute over the image), not in a separate section.
- At the top of the page, the navbar should be transparent (or a subtle dark gradient/glass background) so the image shows through behind it, with white/light text and logo for contrast.
- On scroll, toggle the navbar to a solid background (white or dark navy, matching the brand) with dark text, so it stays readable once the hero image has scrolled past. Animate this transition smoothly (200–300ms ease).
- Keep the existing nav structure, links, and "Submit a Project" CTA button exactly as they are — only change position and background behavior.

## 2. Stats Bar — Animated Entrance + Count-Up Numbers

Section: "20+ Research Areas / 50+ Active Projects / 100+ Global Partners / 5k+ Students Impacted"

Changes:
- On scroll-into-view, each stat card should animate in with a staggered slide-in (alternate direction per card — e.g., card 1 & 3 slide in from the left, card 2 & 4 slide in from the right, or a simple staggered left-to-right sequence). Use a ~400–600ms ease-out transition with ~100–150ms stagger delay between cards.
- The numbers themselves (20, 50, 100, 5k) should count up from 0 to their final value once the section enters the viewport (duration ~1.2–1.5s, ease-out).
- This animation should trigger once per page load (on first scroll into view), not loop repeatedly, and not replay every time the user scrolls up/down past it.
- Icons above each number can have a very subtle idle motion (e.g., gentle float/pulse) after the entrance animation completes — keep it minimal and non-distracting.

## 3. "Our Core Purpose" Section — Add Interactivity

Current: static centered heading with a two-line statement.

Changes:
- Add a lightweight interactive element to this section so it doesn't feel purely static. Options to choose from (pick whichever best fits the layout):
  - The heading text splits into 2–3 emphasized phrases that highlight (color/weight change) one at a time on a slow auto-cycle or on hover.
  - A subtle scroll-linked effect where the text fades/scales in as the user scrolls through the section.
  - Small interactive tags/chips beneath the statement (e.g., "Research," "Community," "Climate," "Partnerships") that highlight or expand slightly on hover, tying back to the mission statement.
- Keep it subtle and purposeful — this is a mission statement, not a game. Avoid anything gimmicky.

## 4. Color Palette — Professional, Timeless

Current palette leans on bright teal/mint accents against navy and off-white.

Changes:
- Refine the palette so it reads as professional, institutional, and won't look dated in 2–3 years. Avoid overly saturated or trendy neon/mint tones.
- Suggested direction: deep navy or charcoal as the primary dark (already close to current), a muted sage/forest green or slate teal as the accent (desaturate the current bright mint), warm off-white/stone for light backgrounds instead of pure white, and a neutral gray for secondary text.
- Maintain strong contrast and accessibility (WCAG AA minimum for text).
- Apply this palette consistently across the navbar, hero, stats, buttons, and footer — do not introduce new colors outside this refined palette.

## General Constraints
- Keep all existing copy, section order, and content blocks unchanged.
- Keep the site responsive — all changes must work cleanly on mobile (navbar becomes a standard mobile menu, stat cards stack vertically, etc.).
- Prioritize smooth, subtle motion over flashy effects — this is an institutional/academic site, not a marketing landing page.
