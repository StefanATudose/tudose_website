# Data Persistence Documentation

This document describes how data and configuration are managed within the personal portfolio website.

## Current State
The website is designed as a fully static personal portfolio page. It does not connect to external databases, authentication servers, or dynamic persistence layers:

1.  **Static Configuration Data (`app/data/index.ts`)**: All project data, including copywriting, subtitles, tech stacks, links, and mobile screen-time data, is defined as typed TypeScript constants. This simplifies content updates and allows fast, zero-downtime deployments.
2.  **Local UI State**: Temporary state required for interactive elements (such as the active slide index in the Florin Gold Gym screenshot carousel) is managed in-memory using standard React `useState` hooks.

## Future Considerations
If the portfolio requires database-driven functionality in the future:
*   **Headless CMS Integration**: A headless CMS (such as Sanity, Contentful, or Strapi) can be integrated. Next.js can pull this data at build time using incremental static regeneration (ISR) to keep page loads fast.
*   **Analytics / Contact Form Database**: A contact form handler can be wired to a serverless function connecting to a database (such as Supabase or Prisma) to record inquiries and messages.
