---
Date: 2025-08-20
TaskRef: "Fix PDF generation for brochure-reborn in legion-marketing-brochure"

Learnings:
- The project uses a factory pattern with a central `renderer` that builds packages from the `/packages` directory.
- The core logic is in `renderer/generate-asset.js`, which uses Puppeteer to create assets from a Vite dev server.
- The root cause of the build failure was an incorrect dynamic import path in `renderer/src/main.tsx`. The path was missing the `/src` segment. The import needed to be `import(\`@current-package/src/App.tsx\`)`, not `import(\`@current-package/App.tsx\`)`.
- A subsequent TypeScript error, "Cannot find module...", was a design-time issue in the IDE because the TS server couldn't resolve the dynamic alias statically. The Vite build process, however, could resolve it correctly, allowing the build to succeed.

Difficulties:
- Initial debugging steps were incorrect. I mistakenly focused on the `TARGET_PACKAGE` environment variable instead of tracing the file resolution path.
- I incorrectly assumed the PDF was created on a previous attempt, which caused confusion. It's critical to verify file creation with `list_files` after a generation command.

Successes:
- Correctly traced the command execution from the root `package.json` to `renderer/package.json` and finally to the `generate-asset.js` script.
- Identified the incorrect import path as the true root cause.
- Correctly identified the final TypeScript error as a non-blocking, design-time issue.

Improvements_Identified_For_Consolidation:
- General Pattern: When debugging monorepo build issues with path aliases, verify that both the build-time alias (e.g., in `vite.config.js`) and the actual import statement point to the correct file path, including subdirectories like `src`.
- General Pattern: Recognize that IDE-level TypeScript errors for dynamic aliases may not block the actual build process.
- Project: The `legion-marketing-brochure` factory expects package source code to be in a `src` directory within the package folder.
---
