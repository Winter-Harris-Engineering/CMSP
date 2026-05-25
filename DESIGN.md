# Tactical Pulse Design System

## 1. Overview & Creative North Star
**Creative North Star: The Sovereign Operator**
Tactical Pulse is a high-fidelity design system engineered for mission-critical clarity and technical authority. It moves away from the "friendly SaaS" aesthetic into a realm of "Industrial Sophistication." The system leverages high-contrast typography, asymmetrical layout anchors, and a "HUD-inspired" (Heads-Up Display) visual language. It is designed to feel like a high-end command console—precise, powerful, and unyielding.

Key characteristics include:
- **Intentional Asymmetry:** Using bold, left-aligned typography contrasted with technical data overlays.
- **Micro-interactions:** Scale-based feedback (e.g., button shrinks) to simulate physical hardware triggers.
- **Monospace Accents:** Strategic use of mono-weighting for technical IDs to emphasize data integrity.

### 1.1 Refined Enterprise Voice & Copy Guidelines
To inspire professional trust in highly regulated sovereign and enterprise cybersecurity compliance environments, all promotional copy must conform to strict semantic and realistic limits.
- **Tone Down Marketing Hype:** Avoid overly dramatic words like "elite," "magic," "unyielding," or "unbreakable." Speak like an authoritative compliance authority.
- **De-center AI Jargon:** Replace raw AI references ("neural engine," "custom AI copilot," "intelligent classification") with grounded technical functionality description ("automated parsing engine," "semantic analysis core," "automated evidence-to-control mapping").
- **Factual Realism:** Never promise impossible metrics like "0% Human Error Rate." Instead, emphasize "highly standardized logic validation" or "remediation consistency."
- **Professional Success Modals:** Never use vanilla browser alerts (`alert()`). If a success or diagnostic popup is required, present it within an elegant, glassmorphic layout modal.

## 2. Colors
Tactical Pulse utilizes a deep obsidian foundation punctuated by "Electric Cyan" and "Radioactive Green" to signify activity and health.

- **Primary Role (Electric Cyan - #00DAF3):** Used for primary actions, critical status markers, and focus states.
- **Tertiary Role (Radioactive Green - #00E639):** Reserved exclusively for "System Passed" or "Safe" states to provide instant cognitive recognition.
- **Error Role (Electric Crimson - #FF453A):** Used for "Non-Compliant," "Critical POA&M," or warning states.
- **Warning Role (Electric Yellow - #FFD60A):** Used for "Medium Risk," warning badges, or transient alert states.
- **The "No-Line" Rule:** Visual boundaries are created via the transition from `surface-container-low` (#1B1B1F) to `surface-container-lowest` (#0E0E12). Borders are strictly prohibited for sectioning layout columns or rows; only use them as "Tactical Accents" (e.g., 2px left-border on a secondary card).
- **Surface Hierarchy:** 
    - **Base:** `surface` (#131317)
    - **Nesting:** Deeply nested elements move to `surface-container-high` to "pull" them toward the user visually.
- **Glass & Gradient:** Hero elements use "Tactical Gradients" (linear 135deg, Cyan to Deep Teal) and "Glass Panels" (rgba 53, 52, 57 at 0.6 opacity with 20px blur) to create a sense of depth without adding visual weight.

## 3. Typography
The system uses a dual-font strategy to balance futuristic character with high-density readability.

- **Headline Font (Space Grotesk):** A geometric sans-serif used for Display and Headline levels. Its wide apertures and technical character evoke a modern, engineered feel.
- **Body & Label Font (Inter):** Chosen for its exceptional legibility at small sizes (10px - 14px) and neutral tone, ensuring data remains the focus.

**Typographic Scale (Actuals):**
- **Display/Hero:** 3rem (48px) to 4.5rem (72px), Light weight (300) to create a sophisticated, editorial contrast.
- **Section Headers:** 1.875rem (30px) to 2.25rem (36px), Bold.
- **Body Text:** 1.125rem (18px) for primary narrative; 0.875rem (14px) for secondary descriptions.
- **Micro-Labels:** 10px Bold, All-caps with 0.2em letter-spacing for technical metadata.

## 4. Elevation & Depth
Tactical Pulse avoids traditional drop shadows in favor of "Luminous Depth."

- **The Layering Principle:** Depth is achieved by "stacking" dark tones. A higher-priority item sits on a lighter surface container (`surface-container-high`) compared to the background.
- **Ambient Shadows:** When shadows are used, they are strictly luminous. Example: `shadow-[0_24px_48px_-12px_rgba(0,218,243,0.08)]`—a cyan-tinted shadow that suggests the UI is "projected" rather than sitting on a surface.
- **Glassmorphism:** Navigation and dashboard panels use `backdrop-filter: blur(20px)` to maintain context of the background while providing a clear interactive plane.

## 5. Components
- **Primary Buttons:** Utilize the `tactical-gradient`. They are all-caps, bold, and feature high letter-spacing. Interaction includes a scale-down effect (scale-95) to mimic a physical depress.
- **Secondary Buttons:** Ghost-style with a heavy 2px left-border of the primary color. This creates a "tab" appearance that feels structural.
- **Data Tables:** Borderless. Rows are separated by subtle tonal shifts. Status indicators (PASSED/POAM) are pill-shaped with 10% opacity backgrounds of their respective status color.
- **Progress Bars:** Dual-tone gradients (`tactical-gradient`) on a `surface` background. No rounded caps; strictly rectangular for a more industrial feel.
- **Input Fields:** Dark-fill (`surface-container-low`) with a focus-state bottom-border only.
- **Mock Interfaces / illustrative Controls:** Interactive elements within diagrams and mockups representing unmapped options (e.g. filters, checklist toggles) should be clearly marked as read-only or styled cleanly as static illustrative components.

## 6. Do's and Don'ts
- **Do:** Use all-caps for labels and small buttons to enhance the "tactical" aesthetic.
- **Do:** Mix font weights (Light 300 with Bold 700) within the same headline for emphasis.
- **Do:** Use background color tone shifts (e.g. `bg-surface` vs. `bg-surface-container-lowest`) to isolate sections of a page.
- **Don't:** Use standard 1px grey borders for layout division. This breaks the "Sovereign Operator" immersion.
- **Don't:** Use rounded corners larger than 8px (except for specific pill-status tags). The system demands a rigid, sharp geometry. All default Tailwind `xl` (12px) or `3xl` (24px) corners are strictly prohibited.
- **Don't:** Use pure white text. Use `on-surface` (#E4E1E7) to prevent "halo" effects on deep black backgrounds.