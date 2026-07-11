# Getting Started

This guide provides instructions on how to set up, run, and build the personal portfolio website for **A. Stefan Tudose**.

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:
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

During development, you can use the following npm scripts defined in `package.json`:

### Run Development Server
Starts the Next.js development server with hot-reloading at [http://localhost:3000](http://localhost:3000):
```bash
npm run dev
```

### Build for Production
Compiles the application and generates an optimized production build:
```bash
npm run build
```

### Start Production Server
Runs the compiled production build locally (requires `npm run build` to have run first):
```bash
npm run start
```

### Code Linting
Runs ESLint to analyze static code quality and find problems:
```bash
npm run lint
```

## Project Settings & Configuration

*   **`package.json`**: Declares dependencies (`next`, `react`, `react-dom`) and development scripts.
*   **`tsconfig.json`**: Configures TypeScript compilation settings, including path aliases like `@/*` mapping to the root directory.
*   **`next.config.ts`**: Contains Next.js-specific configurations.
*   **`eslint.config.mjs`**: Contains ESLint rules and settings for linting JavaScript/TypeScript.
