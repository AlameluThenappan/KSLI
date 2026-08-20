---
name: Academic Stewardship
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#45474d'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#525e79'
  primary: '#05132a'
  on-primary: '#ffffff'
  primary-container: '#1b2840'
  on-primary-container: '#828fac'
  inverse-primary: '#bac7e6'
  secondary: '#1a6a5b'
  on-secondary: '#ffffff'
  secondary-container: '#a4eedb'
  on-secondary-container: '#216e5f'
  tertiary: '#1d1100'
  on-tertiary: '#ffffff'
  tertiary-container: '#362504'
  on-tertiary-container: '#a68b61'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#bac7e6'
  on-primary-fixed: '#0e1b33'
  on-primary-fixed-variant: '#3a4760'
  secondary-fixed: '#a7f1de'
  secondary-fixed-dim: '#8bd4c2'
  on-secondary-fixed: '#00201a'
  on-secondary-fixed-variant: '#005144'
  tertiary-fixed: '#fedead'
  tertiary-fixed-dim: '#e0c293'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#58431f'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  institute-navy: '#1B2840'
  sustainability-teal: '#85CEBC'
  surface-muted: '#F8F9FA'
  eco-accent: '#2D6A4F'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 80px
---

## Brand & Style

The design system is rooted in the "Academic Stewardship" philosophy—a blend of institutional prestige and forward-thinking environmental consciousness. It reflects the authority of the Kumaraguru Institutions while introducing a contemporary, clean aesthetic suitable for a modern sustainability institute.

The visual direction follows **Modern Corporate** principles: highly structured, reliable, and balanced. It prioritizes clarity and whitespace to evoke a sense of calm and precision. The aesthetic is "Intellectual Minimalist"—using color and weight to guide the eye without decorative distractions, ensuring the mission of sustainability and livelihood remains the focal point.

## Colors

This design system utilizes a high-contrast palette anchored by **Institute Navy** to establish authority and trust. **Sustainability Teal** is used as a secondary bridge color for highlights, links, and progress indicators, providing a modern alternative to traditional corporate blues.

**Neutrality and Whitespace:**
- The primary background is absolute white (#FFFFFF).
- `#EFEFEF` and `#F8F9FA` are used for section backgrounds and surface layering to prevent visual fatigue.
- **Eco-Accent (Green):** Reserved strictly for semantic indicators related to sustainability metrics, leaf icons, or "active/success" status tags. It must never exceed 5% of the total screen real estate.

## Typography

The typography strategy pairs the geometric confidence of **Montserrat** for headings with the high legibility of **Inter** for body content. 

- **Headings:** Always set in `institute-navy` to maintain brand hierarchy. 
- **Tracking:** Headings use slight negative letter-spacing for a tighter, more professional appearance. Labels and captions use increased letter-spacing to ensure readability at small scales.
- **Hierarchy:** Use `label-caps` for eyebrows (small text above headers) to categorize content types without adding visual weight.

## Layout & Spacing

This design system employs an **8px linear grid** (with a 4px half-step for micro-adjustments). 

**Grid System:**
- **Desktop:** 12-column fluid grid with 24px gutters and 80px side margins.
- **Tablet:** 8-column grid with 24px gutters and 40px side margins.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

**Rhythm:** Vertical rhythm should follow multiples of 8px. Use `xxl` (64px) spacing between major sections to emphasize the "clean and spacious" brand promise.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Soft Ambient Shadows**. This system avoids heavy black shadows in favor of tinted shadows that feel more integrated with the background.

- **Level 0 (Flat):** Used for the main canvas background.
- **Level 1 (Subtle):** Used for cards and input fields. Shadow: `0px 2px 4px rgba(27, 40, 64, 0.05)`.
- **Level 2 (Raised):** Used for hover states on cards and navigation menus. Shadow: `0px 8px 16px rgba(27, 40, 64, 0.10)`.
- **Level 3 (Overlay):** Used for modals and dropdowns. Shadow: `0px 12px 24px rgba(27, 40, 64, 0.15)`.

Outlines should be used sparingly, primarily in `neutral_color_hex` to define boundaries on white surfaces without adding visual noise.

## Shapes

The shape language is **Rounded**, striking a balance between the rigid "sharp" corners of traditional academia and the "soft" corners of modern tech.

- **Standard Radius:** 8px (`0.5rem`) for buttons, input fields, and small components.
- **Large Radius:** 16px (`1rem`) for containers and layout cards.
- **Interactive Elements:** Ensure consistent corner rounding across all form elements to maintain a cohesive "container" language.

## Components

### Buttons
- **Primary:** Solid `institute-navy` with white text. 8px corner radius.
- **Secondary:** Outlined `institute-navy` or solid `sustainability-teal`.
- **Ghost:** Text-only with `institute-navy`, used for less prominent actions.

### Cards
- White background, 16px corner radius, and Level 1 shadow. 
- Content padding should be `lg` (24px).
- Use `sustainability-teal` for thin top-borders (2px) to denote special featured content.

### Inputs & Form Fields
- 8px corner radius.
- Light gray border (#EFEFEF) that transitions to `sustainability-teal` on focus.
- Labels use `body-sm` in `institute-navy`.

### Navbar
- Fixed height (80px), white background with a subtle bottom border or Level 1 shadow.
- Logo positioned on the left, primary navigation links in `institute-navy` (semi-bold) on the right.

### Icon-Based Stats Strips
- Horizontal containers using `surface-muted` (#F8F9FA).
- Icons should be monolinear, utilizing `sustainability-teal` for the icon and `institute-navy` for the numerical value.