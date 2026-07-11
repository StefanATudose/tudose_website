# Getting Started

This guide provides instructions on how to set up, run, and build the personal portfolio website for **A. Stefan Tudose**.

## Prerequisites

Before setting up the project, ensure you have the following installed:
*   **Node.js**: Version 20.x or higher is recommended.
*   **npm**: Included with Node.js (version 10.x or higher).

## Installation

1.  Navigate to the project root directory:
    ```bash
    cd tudose_website
    ```

2.  Install the required dependencies:
    ```bash
    npm install
    ```

## Development Commands

Use the following npm scripts defined in `package.json` to manage development, compilation, and testing:

### Run Development Server
Starts the Next.js development server at [http://localhost:3000](http://localhost:3000):
```bash
npm run dev
```

### Build for Production
Compiles the application and generates an optimized production build:
```bash
npm run build
```

### Start Production Server
Runs the compiled production build locally (requires `npm run build` first):
```bash
npm run start
```

### Code Linting
Runs ESLint to check code syntax and rules compliance:
```bash
npm run lint
```

### Run Unit/Component Tests
Runs the Vitest test suite once (configured to scan for `.test.ts` / `.test.tsx` files and ignore Playwright files):
```bash
npm run test
```

### Run Tests in Watch Mode
Starts Vitest in watch mode:
```bash
npm run test:watch
```

### Run Integration Tests (Playwright)
Runs Playwright E2E tests targeting the local dev server on port 3000:
```bash
npm run test:e2e
```

## Project Configuration Files

*   **`package.json`**: Declares dependencies (`next`, `react`, `react-dom`), dev dependencies, and scripts.
*   **`tsconfig.json`**: Configures TypeScript compiler settings and path aliases (`@/*`).
*   **`next.config.ts`**: Next.js config (defines allowed remote patterns for Next.js `<Image />` component).
*   **`eslint.config.mjs`**: Declares ESLint code rules.
*   **`vitest.config.mts` & `vitest.setup.ts`**: Configures Vitest with `happy-dom` and mock configurations, excluding E2E directories.
*   **`playwright.config.ts`**: Configures Playwright E2E browser integration settings.
*   **`docs/testing.md`**: Detailed documentation explaining the test suite architecture.
