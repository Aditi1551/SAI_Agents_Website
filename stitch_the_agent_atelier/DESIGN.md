---
name: Intellectual Luxury System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#665d56'
  on-secondary: '#ffffff'
  secondary-container: '#ede0d7'
  on-secondary-container: '#6c635c'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1c'
  on-tertiary-container: '#848483'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#ede0d7'
  secondary-fixed-dim: '#d0c4bc'
  on-secondary-fixed: '#211a15'
  on-secondary-fixed-variant: '#4d453f'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 4.5rem
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 3rem
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.15em
  utility-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 2rem
  margin-edge: 4rem
  section-gap: 8rem
---

## Brand & Style

This design system embodies the intersection of high-fashion heritage and strategic intelligence. It is designed for an audience that values both aesthetic excellence and analytical rigor. The personality is visionary yet established—a digital environment that feels like a private gallery curated by a global consultancy.

The visual style is a refined **Minimalism** with an editorial edge. It prioritizes heavy whitespace and structured asymmetry to create a sense of "intellectual breathing room." By removing superfluous decorative elements, the system allows high-fidelity imagery and powerful typography to convey authority and prestige. The emotional response is one of calm confidence, high-stakes professionalism, and timeless quality.

## Colors

The palette is anchored by a high-contrast core of absolute black and crisp white, symbolizing clarity and uncompromising standards.

- **Primary (Charcoal/Black):** Used for typography, structural lines, and primary actions to project power and stability.
- **Secondary (Parchment):** A warm, sophisticated neutral that softens the high-contrast aesthetic, used for subtle backgrounds and sectional transitions to evoke the feel of high-quality heavy-stock paper.
- **Tertiary (Slate):** A technical grey used for utility elements, supporting text, and subtle borders.
- **Neutral (Pure White):** The primary canvas color, ensuring a clean, clinical backdrop for storytelling.

## Typography

The typographic strategy balances the literary authority of a traditional serif with the technical precision of a modern sans-serif.

- **Headlines:** Use the serif face to convey legacy and intellectual depth. Large-scale headlines should utilize tight letter-spacing to create a "locked" and powerful presence.
- **Body & Utility:** The sans-serif is used for all functional text. It provides a technical, data-driven feel that ensures legibility in complex reports or long-form insights.
- **Labels:** Small-caps are used for metadata, categories, and overlines to create a distinct visual hierarchy that mimics luxury brand labeling and professional document headers.

## Layout & Spacing

The system utilizes a **Fluid Grid** with a specific focus on "Mosaic Storytelling." While the foundation is a 12-column grid, the system encourages non-uniform layouts where elements span disparate column counts (e.g., a 7-column image adjacent to a 3-column text block with a 2-column void).

Spacing is intentionally generous. Large vertical gaps between sections (section-gap) signify a premium lack of rush. Elements should often be offset from the center to create a dynamic, editorial rhythm that guides the eye through a narrative rather than a standard list. Use margins to create significant "safe zones" around core insights.

## Elevation & Depth

Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows. 

The system remains largely flat to maintain a professional, paper-like quality. When separation is required, use hairline borders (0.5px - 1px) in Slate or light Parchment. For interactive elements, a subtle shift in background tone (from White to Parchment) is preferred over elevation. Image treatments may use "soft focus" or blurred background layers behind text to create a sense of atmospheric depth without breaking the minimalist aesthetic.

## Shapes

The shape language is strictly **Sharp (0px)**. 

To maintain an authoritative and architectural tone, all containers, buttons, and image masks must use 90-degree corners. This sharp geometry reflects the precision of a consulting firm and the structured elegance of high-fashion tailoring. Rounded corners are to be avoided entirely, as they introduce an approachability that conflicts with the "Established and Visionary" tone.

## Components

- **Buttons:** Rectangular with no radius. Primary buttons are solid Charcoal with White text; secondary buttons are Ghost-style with a 1px Charcoal border. Text is always uppercase labels with increased tracking.
- **Input Fields:** Minimalist underlines or 1px Charcoal borders. Labels should sit above the field in utility-sm styling. Error states are communicated through subtle Slate shifts rather than aggressive reds.
- **Cards:** Used sparingly for category discovery. Cards should feature full-bleed imagery with typography overlaid directly on the image or positioned in a wide white margin below. No shadows.
- **Mosaic Tiles:** A specialized component for storytelling that allows for varying aspect ratios (tall, wide, square) to be combined into a cohesive discovery wall.
- **Chips/Tags:** Small, rectangular boxes with light Slate backgrounds and uppercase utility text.
- **Lists:** Clean, spanning the full width of their container, separated by hairline rules.
- **Progress Indicators:** Thin, horizontal lines that reflect a "technical report" aesthetic rather than circular loaders.