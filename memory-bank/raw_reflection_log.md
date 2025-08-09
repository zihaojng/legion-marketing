---
Date: 2025-08-09
TaskRef: "Create high-fidelity PDF from Figma Make React export"

Learnings:
- Figma Make exports React components and CSS, but not a complete, runnable project structure. It omits `package.json`, build tool configs (e.g., `vite.config.ts`), and other scaffolding.
- CSS exported from Figma Make for `shadcn/ui`-style components requires a detailed `tailwind.config.js`. The theme must be extended to map the CSS variables (e.g., `--border`, `--background`) to Tailwind's theme keys (e.g., `colors.border`, `colors.background`). A default Tailwind config is insufficient.
- Exported CSS from design tools can sometimes include overly broad or faulty global CSS rules (e.g., applying styles to the `*` selector). These may need to be removed entirely rather than fixed, to allow component-level styles to apply correctly.
- Puppeteer is a highly effective tool for programmatic asset generation from web pages. Its `page.pdf()` method creates high-fidelity, vector-perfect PDFs, while `page.screenshot()` is excellent for producing raster image formats (PNG, JPEG, etc.) from specific page elements.

Difficulties:
- An initial attempt to fix a CSS `@apply` error was incorrect. I tried to simplify a custom class (`@apply border-border`) to a standard one (`@apply border`), which broke the layout. The user's visual feedback was essential to understanding the required subtlety. The correct fix was to configure Tailwind to understand the custom class definitions and then remove a faulty global style override.

Successes:
- The core strategy of rebuilding the project and then using Puppeteer was correct and successful.
- Correctly identifying the project as a `shadcn/ui`-style setup based on the CSS variables and file structure was the key to solving the configuration problems.
- The final PDF generation script worked as planned once the underlying web application was rendering correctly.

Improvements_Identified_For_Consolidation:
- General Pattern: When encountering code from a design-to-code tool (like Figma Make), suspect a missing or incomplete project scaffold. Prioritize creating a valid `package.json` and build configuration first.
- Project Pattern (shadcn/ui & Tailwind): If CSS contains many `--variable` definitions for colors and spacing, and the file structure includes `components/ui`, check for a `shadcn/ui`-style setup. Ensure `tailwind.config.js` is fully configured to map these variables and that the `tailwindcss-animate` plugin is present.
- Debugging Strategy: When a style fix breaks the layout, revert and reconsider. A faulty global style (`*`) is a common culprit in generated code and removing it is often the correct solution.
---
---
Date: 2025-08-09
TaskRef: "Refactor brochure project into a reusable monorepo"

Learnings:
- A monorepo structure using npm workspaces is an effective pattern for separating a core "renderer" or "engine" from multiple, distinct content "packages".
- A self-contained script (like the final `generate-asset.js`) that programmatically starts a dev server, performs its action, and then terminates the server is more robust and user-friendly than relying on a separate, manually-started process.
- Vite's `define` option is a clean method for passing environment variables to client-side code, which is ideal for enabling dynamic imports based on the build context.
- When using path aliases (e.g., `@current-package`) in a TypeScript/Vite project, the alias must be defined in both `vite.config.ts` (for the bundler) and `tsconfig.json` (for the TS language server and type checking).
- When creating or significantly altering an npm workspace structure, `npm install` must be run from the root to rebuild the dependency graph and link the workspace scripts. Forgetting this step leads to "command not found" errors for workspace scripts.

Difficulties:
- The initial refactoring plan was slightly flawed as it depended on a manually-run dev server. I successfully pivoted to a more automated approach where the generation script handles the server lifecycle, which is a better pattern.
- Forgot to run `npm install` after the monorepo refactor, causing a temporary script failure.

Successes:
- The refactoring into a `renderer` and `packages` structure was executed successfully and validated by generating multiple asset types from the new structure.
- The combination of npm workspaces, Vite aliases, environment variables, and dynamic imports created a flexible and reusable factory for future projects.

Improvements_Identified_For_Consolidation:
- Project Pattern (Reusable Renderer): For tasks that involve repeatedly processing different sets of source files with the same toolchain (e.g., design-to-code outputs), structure the project as a monorepo with a `renderer` workspace and multiple `packages`. This isolates the stable toolchain from the variable content.
- Scripting Pattern (Automated Lifecycle): When a script depends on a server, it's best for the script to manage the server's lifecycle (spawn, wait for ready, kill). This avoids coordination issues and makes the tool self-contained.
- Monorepo Workflow: Always run the package manager's install command after initializing or changing a workspace configuration to ensure scripts and dependencies are linked correctly.
---
