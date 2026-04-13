# Design System Specification: The Fluid Architect

## 1. Overview & Creative North Star
Most internal automation tools feel like rigid spreadsheets—cold, mechanical, and exhausting. This design system rejects the "mechanical grid" in favor of **The Fluid Architect**. 

Our North Star is the concept of **Sophisticated Flow**. We are moving away from the "boxed-in" layout of traditional SaaS. Instead, we treat the interface as a series of intentional, organic layers. By using high-contrast typography scales and asymmetric whitespace, we transform a functional tool into an editorial experience that feels authoritative yet effortless. The goal is to provide the user with a sense of "calm control" over complex automation logic.

---

## 2. Colors & Surface Philosophy
The palette is anchored by "Action Blue" (`primary: #0053db`), but its power is derived from the surrounding atmospheric neutrals.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define major sections. Structural separation must be achieved through background shifts.
*   **Example:** A side navigation using `surface-container-low` sitting against a `surface` main stage. 
*   **Why:** Lines create visual noise. Tonal shifts create "zones" that the eye traverses more naturally.

### Surface Hierarchy & Nesting
We use "Tonal Stacking" to define depth. Think of the UI as physical sheets of fine paper layered atop one another:
*   **Base Layer:** `surface` (#faf8ff) – The infinite canvas.
*   **Secondary Zones:** `surface-container-low` (#f2f3ff) – Large grouping areas.
*   **Interactive Cards:** `surface-container-lowest` (#ffffff) – To create a "pop" effect against darker containers.
*   **Actionable Overlays:** `surface-container-highest` (#d9e2ff) – For elements requiring immediate focus.

### The "Glass & Gradient" Rule
To break the "flat" SaaS aesthetic, floating elements (modals, popovers) must use **Glassmorphism**:
*   **Background:** `surface` at 80% opacity.
*   **Effect:** `backdrop-blur: 12px`.
*   **Signature Texture:** Main CTAs should utilize a subtle linear gradient: `primary` (#0053db) to `primary-dim` (#0048c1) at a 135-degree angle. This adds a "jewel-like" depth that flat hex codes lack.

---

## 3. Typography
We utilize **Inter** not just for legibility, but as a structural element. 

*   **Display (Display-LG/MD/SM):** Reserved for high-level dashboard summaries. Use `on-surface` (#113069) with a `-0.02em` letter spacing to feel "heavy" and premium.
*   **Headline (Headline-LG/MD):** Used for section titles. Ensure ample breathing room (top margin 2x the bottom margin) to create an editorial flow.
*   **Title & Body:** `title-sm` (1rem) is your workhorse for card headers. `body-md` (0.875rem) handles the bulk of the data. 
*   **The Narrative Hierarchy:** Contrast `on-surface` for primary text with `on-surface-variant` (#445d99) for supporting descriptions. This 30% reduction in visual weight guides the user's eye to the most critical data points first.

---

## 4. Elevation & Depth
In this system, "Elevation" is a color property, not a shadow property.

### The Layering Principle
Depth is achieved by stacking. A `surface-container-lowest` card placed on a `surface-container-low` background provides a crisp, "lifted" look without a single pixel of shadow.

### Ambient Shadows
Shadows are used only for "Floating" states (Modals, Dropdowns). 
*   **Specs:** `box-shadow: 0 20px 40px -10px rgba(17, 48, 105, 0.08)`. 
*   **Note:** Shadow color is a tinted version of `on-surface`, never pure black.

### The "Ghost Border" Fallback
If a border is required for accessibility (e.g., in a high-density data grid):
*   **Token:** `outline-variant` (#98b1f2).
*   **Opacity:** Reduce to 20%. 
*   **Rule:** Never use 100% opaque borders for decorative containment.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-dim`), `on-primary` text, `lg` (0.5rem) rounded corners.
*   **Secondary:** `secondary-container` fill with `on-secondary-container` text. No border.
*   **Tertiary:** No fill. `on-primary-container` text. Subtle `primary` underline on hover.

### Input Fields
*   **Surface:** `surface-container-lowest`.
*   **Border:** "Ghost Border" (10% `outline-variant`).
*   **State:** On focus, transition border to `primary` and add a 2px `primary-fixed-dim` outer glow.

### Cards & Lists
*   **Strict Rule:** No divider lines. Separate list items using 8px of vertical whitespace or by alternating background tones between `surface` and `surface-container-low`.
*   **Header:** Use `label-md` for "overlines" (small caps) to categorize card content.

### Automation Nodes (Custom Component)
For the "AutoFlow" logic builder:
*   **Node Surface:** `surface-container-lowest`.
*   **Connectors:** 2px stroke using `primary-fixed-dim`. 
*   **Active State:** Use a 4px "Glow" shadow utilizing the `primary` color at 15% opacity.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use extreme whitespace. If a section feels crowded, double the padding.
*   **Do** use `on-surface-variant` for non-essential metadata to maintain hierarchy.
*   **Do** leverage "Primary Fixed" colors for badges and status chips to ensure they don't shift too much between light and dark modes.

### Don't
*   **Don't** use `#000000` for text or shadows. It breaks the "high-tech" atmosphere.
*   **Don't** use 1px dividers to separate items in a list; use the Spacing Scale (0.5rem to 1rem) instead.
*   **Don't** mix corner radii. If a card is `lg` (8px), all nested elements must be `md` (6px) or `sm` (2px) to maintain nested harmony.