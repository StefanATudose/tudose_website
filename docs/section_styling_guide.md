# Section Styling & Copy Guide

This document defines the visual and copy standards established during the revamp of the **TechVector** section. Use these guidelines to maintain design consistency and readability across all landing page sections.

---

## 1. Core Principles

### Readability & High Contrast
*   **Contrast**: Avoid low-contrast text (e.g., light gray on white or dark gray on dark backgrounds). Text must be easily legible. Use `text-gray-900` or `text-black` on light backgrounds and `text-white` or `text-white/90` on dark backgrounds.
*   **Sizing**: Avoid small text that requires squinting. Body paragraphs should use at least `text-lg` scaling up to `text-xl` on medium/large viewports.
*   **Spacing**: Ensure ample vertical breathing room between paragraphs using layout utilities like `space-y-6` or `space-y-8`.

### Copy Architecture
*   **One Sentence Per Line**: To guarantee scanning readability, write copy with exactly one sentence per paragraph/block. Do not combine multiple sentences into a single `<p>` tag.
*   **Grounded & Benefit-First**: Tone must be sharp, witty, and grounded. Emphasize operational benefits, time saved, and business outcomes (ROI) over engineering jargon.
*   **No Hardcoded Years**: Dynamic references to the current year must use JavaScript: `{new Date().getFullYear()}`.

### CTAs & Button Layout
*   Avoid basic inline text links. High-priority external links and primary actions must be styled as prominent, rounded-full pill buttons:
    ```tsx
    className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl text-center"
    ```
    *(Adjust colors for dark-themed sections, e.g., using `bg-white text-black hover:bg-gray-100`)*

### Interactive Media & Widgets
*   Ditch static CSS-based layout mockups where possible in favor of interactive widgets (such as the React-state driven `ImageCarousel` implemented in the `TechVectorSection`).
*   Include descriptive text directly mapped to each slide/view state underneath the media container.

---

## 2. Instructions for Future Agent Conversations

When tasked with refactoring other landing page sections (specifically `GymSection` and `KaizenSection`), follow these execution instructions:

### Step 1: Re-evaluate and Restructure the Copy
1.  Read the target section's copy.
2.  Rewrite the text to follow the **one-sentence-per-line** paradigm (each sentence enclosed in its own `<p>` tag).
3.  Adjust the tone to match the grounded, benefit-driven style of the new TechVector copy.
4.  Remove any engineering jargon and rephrase it into direct business value (e.g., "automated recurring billing webhooks" -> "invoices processed automatically").

### Step 2: Elevate Typography & Contrast
1.  Verify the background color:
    *   `TechVectorSection` (Light: `bg-white`)
    *   `GymSection` (Dark: `bg-[#121318]`)
    *   `KaizenSection` (Dark/Gradient: `bg-linear-to-r from-[#0a1628]...`)
2.  Set the copy container class to use high-contrast text:
    *   On light sections: `text-gray-900 font-medium text-lg md:text-xl`
    *   On dark sections: `text-white/90 font-medium text-lg md:text-xl` (or `text-white`)
3.  Apply `space-y-6` to the copy container for clean vertical distribution.

### Step 3: Standardize the Call to Action (CTA)
1.  Find the main redirect link at the bottom of the copy side.
2.  Convert it into a rounded-full pill button.
3.  Use contrasting styling:
    *   For dark sections: `bg-white text-black hover:bg-gray-100` or a high-contrast theme accent (like `bg-[#db5f32] text-white hover:bg-[#c25026]`).
    *   Add an icon (e.g. `<i className="fas fa-arrow-right text-sm"></i>`) with appropriate spacing.

### Step 4: Validate Interactive Elements
1.  Ensure all media query wrappers and mockups are clean and performant.
2.  If the section contains a phone mockup or dashboard view, ensure it supports actual states or has high-contrast presentation values.
3.  Run `npm run lint` and `npx tsc --noEmit` after editing to ensure zero build or type-checking issues.
