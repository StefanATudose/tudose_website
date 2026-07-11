# Project Scope

This document defines the scope, objectives, core features, and current status of the personal website for **A. Stefan Tudose**, Software Engineer and Business Partner.

## Project Objectives

1.  **Professional Storytelling Showcase**: Establish a premium online presence highlighting engineering expertise, positioning Stefan as a veteran technical partner rather than a pushy salesman.
2.  **Focus on Real Results**: Highlight delivered, high-stakes operational software (specifically the Florin Gold Gym case study) to show real-world capabilities.
3.  **Entrepreneurial Empathy**: Reflect on startup lessons (specifically the Kaizen Android project) to show business-first engineering values.

## Target Audience

*   **Potential Clients**: Business owners, founders, and technical leaders seeking reliable system development, process automation, or technical audits.

## Core Features

### 1. Hero & Consulting Pillars
*   **Objective**: Introduce Stefan in a humble, friendly, yet authoritative tone.
*   **Copy**: Software that helps your business work smarter.
*   **Consulting Pillars Grid**:
    *   *Technical Architecture*: Designing scalable, low-maintenance systems so your technology grows seamlessly with your business.
    *   *Process Automation*: Connecting APIs and databases to eliminate manual operations and reduce daily overhead.
    *   *Startup Advisory*: Applying startup experience to help you audit product features and build only what customers want.

### 2. Dedicated Case Study Narrative Sections
*   **Objective**: Present three sequential, storytelling-focused sections structured around client value:
    1.  *TechVector (What I Can Build)*: Custom AI & RAG system demonstrating how unstructured data can automate research and operations.
    2.  *Florin Gold Gym (Experience in Delivery)*: High-stakes software managing a gym of 500+ members, demonstrating 24/7 reliability where downtime is not an option.
    3.  *Kaizen (Business Background)*: Distraction blocker highlighting founder lessons, speaking in client/business terms rather than confusing technical jargon.
*   **Behavior**:
    *   External projects (TechVector, Kaizen) link out directly in new tabs.
    *   Internal case study (Florin Gold Gym) features a clean teaser block with a direct call-to-action routing to the dedicated page via Next.js `Link`.

### 3. Dedicated Case Study Path (`/florin-gold-gym`)
*   **Objective**: Show high-stakes engineering details.
*   **Design**: Premium dark gym theme (`#121318` background, `#db5f32` accents).
*   **Key Sections**:
    *   *Real-World Stakes*: Explains that the gym operations depend 100% on the codebase.
    *   *Interactive Carousel*: React-state slideshow displaying custom screen mockups (check-ins, scheduling, admin panel).
    *   *Technical Highlights*: Breakdowns of turnstile trigger cooldowns, Netopia MobilPay webhook idempotency, and cancellation constraints.
    *   *Video Testimonial Container*: Clean player mockup with space for a testimonial video.

### 4. Contact Footer
*   **Objective**: Simple direct call to action.
*   **Design**: Clean layout featuring social links (LinkedIn/GitHub) and email direct link (`contact@tudose.dev`).

---

## Current Implementation Status

All features are fully implemented. There are no placeholder, "TBA" strings, or mocked states in the repository.

| Feature / Section | Status | Notes |
| :--- | :--- | :--- |
| **TechVector Details** | Fully Implemented | Features concise copy explaining RAG business benefits. |
| **Florin Gold Gym Case Study** | Fully Implemented | Dedicated page with carousel and video elements. |
| **Kaizen Story** | Fully Implemented | Features streamlined copy explaining startup business lessons and ROI. |
| **E2E Test Coverage** | Fully Implemented | Playwright navigation tests verify page links and rendering. |
