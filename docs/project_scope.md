# Project Scope

This document defines the scope, objectives, core features, and current status of the personal website for **A. Stefan Tudose**, AI Solutions Architect.

## Project Objectives

1.  **Professional Showcase**: Establish a premium online presence highlighting expertise in Artificial Intelligence (specifically custom chatbots, Retrieval-Augmented Generation (RAG) systems, and autonomous AI Agents).
2.  **Interactive Engagement**: Provide visitors with an immediate, hands-on demonstration of interactive AI technologies via a simulated chatbot.
3.  **Product Highlights**: Showcase ongoing entrepreneurial efforts, specifically the Android utility application **FocusFlow** developed under the startup name **kaiZen**.

## Target Audience

*   **Potential Clients**: Business owners, product managers, and engineering leaders seeking customized AI implementations.

## Core Features

### 1. Hero & Simulated Chat Widget
*   **Objective**: Demonstrate interactive capabilities directly upon landing.
*   **Design**: Glassmorphism styling blending into a background of purple and blue gradients.
*   **Functionality**:
    *   **Collapsed State**: Displays "AI Stefan" greeting preview and avatar. Expands automatically when the input field is focused.
    *   **Expanded State**: Displays a full messaging window with scrolling history, a typing indicator, and custom keyboard interaction support (Enter to send, prevent window scroll during focus).
    *   **Mock AI Logic**: Simulates AI messaging using realistic delays and a rotating pool of expert responses focusing on RAG, agents, and scheduling.

### 2. Featured Projects Grid
*   **Objective**: Display case studies of custom AI applications.
*   **Design**: Clean cards with hover translate-up and image scale-up animations, custom tags, and gradient boarders.
*   **Current Projects**:
    1.  *TechVector*: RAG, LangChain, pgvector, and GPT-4 implementation.
    2.  *Agent TBA*: Autonomous AI agents using NLP and WebSockets.
    3.  *Special Outputs TBA*: HIPAA-compliant medical symptom analyzer and appointment scheduler.

### 3. Startup Showcase (kaiZen - FocusFlow)
*   **Objective**: Highlight FocusFlow, a system-level Android application.
*   **Design**: Side-by-side section showing features alongside a CSS-rendered smartphone mockup (displaying screen-time usage analytics, progress rings, and specific app constraints).

### 4. Contact Footer
*   **Objective**: Make communication easy.
*   **Design**: Clean layout featuring Tudose's avatar, social icons (LinkedIn/GitHub), and email direct link (`contact@tudose.dev`).

---

## Current Implementation Status & Technical Debt

Since the project is currently in the initial frontend prototype phase, there are several "To Be Announced" (TBA) and placeholder items that represent outstanding tasks:

| Feature / Section | Current Code Reference | Status / TODO |
| :--- | :--- | :--- |
| **TechVector Description** | `app/data/index.ts` (line 8) | Needs real copy replacing `"TBA ."` |
| **Agent TBA Description** | `app/data/index.ts` (line 15) | Needs real copy replacing `"TBA."` |
| **FocusFlow Description** | `app/components/sections/StartupSection.tsx` (line 27) | Contains prefix `"TODO: CHANGE FocusFlow..."` |
| **FocusFlow URL Link** | `app/components/sections/StartupSection.tsx` (line 45) | Currently points to placeholder `"href="#"`"` |
| **Chat Autoreply** | `app/hooks/useChat.ts` (line 101-116) | Uses basic in-memory `setTimeout` with mock replies instead of a real API endpoint. |
