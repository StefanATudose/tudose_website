# Architecture Documentation

This document describes the high-level architecture and structure of the personal portfolio website.

## Technical Stack
*   **Framework**: Next.js (App Router)
*   **Library**: React
*   **Styling**: Tailwind CSS
*   **Language**: TypeScript

## Current Structure
At the moment, the entire project is implemented as a single Home Page (`app/page.tsx`) that coordinates rendering several responsive sections and manages conversational state using a custom React hook.

### Key Directories & Files
*   **`app/layout.tsx`**: Defines the global HTML wrapper, metadata, and stylesheet imports.
*   **`app/page.tsx`**: Serves as the main coordinator for the landing page sections.
*   **`app/components/`**: Houses modular UI components:
    *   `sections/`: Hero section, Projects grid, Startup mockup, and Footer.
    *   `chat/`: Sub-components for the interactive chatbot widget (input, message bubbles, indicators).
*   **`app/hooks/useChat.ts`**: Encapsulates the interactive state logic and scrolling behaviors for the chatbot widget.
*   **`app/data/index.ts`**: Static configuration data for projects, chat auto-responses, and screen-time statistics.
*   **`app/types/index.ts`**: Core TypeScript interface definitions (e.g., `Message`, `Project`).
