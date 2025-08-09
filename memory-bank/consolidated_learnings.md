# Consolidated Learnings

This document contains curated, actionable insights and patterns derived from project tasks.

## Project Scaffolding & Design-to-Code Tools

**Pattern: Handling Incomplete Project Exports (e.g., Figma Make)**
- **Observation:** Design-to-code tools often export UI components (`.tsx`, `.css`) but not the full project scaffolding (`package.json`, build configs, etc.).
- **Action:** When receiving code from such a tool, the first priority is to build a valid project structure around it. This includes creating a `package.json`, installing dependencies (React, etc.), and setting up a build tool (like Vite) with the necessary configurations (`vite.config.ts`, `tailwind.config.js`, `tsconfig.json`).

## Tailwind CSS & shadcn/ui

**Pattern: Configuring Tailwind for `shadcn/ui`-style Projects**
- **Observation:** Projects using `shadcn/ui` or a similar methodology rely on a tight integration between CSS custom properties (variables) and the Tailwind theme. Errors like "class does not exist" for `@apply` directives often point to a misconfiguration.
- **Action:**
    1.  Ensure the main CSS file (`globals.css`) begins with the three required Tailwind directives: `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`.
    2.  The `tailwind.config.js` file **must** be configured to map the CSS variables to Tailwind's theme. For example, `colors: { border: "hsl(var(--border))", ... }`.
    3.  Install and include the `tailwindcss-animate` plugin.
    4.  Be wary of overly broad global styles (e.g., `* { @apply ... }`) in the exported CSS. These are often incorrect and should be removed to let component-level classes work as intended.

## Monorepo & Reusable Tooling

**Pattern: Reusable Renderer Factory**
- **Observation:** For tasks that involve repeatedly applying the same toolchain to different sets of source files, a monorepo is highly effective.
- **Action:**
    1.  Structure the project with a `renderer` workspace and a `packages` workspace.
    2.  The `renderer` contains the stable toolchain (Vite, Puppeteer, configs).
    3.  Each new set of source files becomes a new folder inside `packages`.
    4.  Use npm workspaces to manage dependencies and scripts from the root.
    5.  Use environment variables (e.g., `TARGET_PACKAGE`) passed to the build tool (Vite) to dynamically select which package to render. This allows for a single command to target any package.

**Pattern: Self-Contained Automation Scripts**
- **Observation:** Scripts that depend on a server (like a PDF generator needing a dev server) are more robust if they manage the server's lifecycle themselves.
- **Action:** Instead of requiring the user to manually start a server, have the main script programmatically `spawn` the server process, wait for it to be ready, perform its actions, and then `kill` the server process in a `finally` block to guarantee cleanup.
