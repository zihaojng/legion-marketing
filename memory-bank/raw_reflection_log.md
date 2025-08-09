---
Date: 2025-08-09
TaskRef: "Create high-fidelity PDF from Figma Make React export"

Learnings:
- Figma Make exports React components and CSS, but not a complete, runnable project structure. It omits `package.json`, build tool configs (e.g., `vite.config.ts`), and other scaffolding.
- CSS exported from Figma Make for `shadcn/ui`-style components requires a detailed `tailwind.config.js`. The theme must be extended to map the CSS variables (e.g., `--border`, `--background`) to Tailwind's theme keys (e.g., `colors.border`, `colors.background`). A default Tailwind config is insufficient.
- Exported CSS from design tools can sometimes include overly broad or faulty global CSS rules (e.g., applying styles to the `*` selector). These may need to be removed entirely rather than fixed, to allow component-level styles to apply correctly.
- Puppeteer is a highly effective tool for creating high-fidelity, vector-perfect PDFs from web pages, preserving gradients, fonts, and layout accurately. Using `waitUntil: 'networkidle0'` and a small extra delay helps ensure all dynamic content and scripts have finished before printing.

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
