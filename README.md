# The Prompt-to-Production Marketing Asset Factory

This repository is a powerful, reusable "factory" for anyone who wants to create professional marketing assets without being a traditional designer. It empowers technically-minded users (like Product Managers, Marketers, and Developers) to bridge the gap between modern AI prototyping tools and final, production-quality output.

**A strong design sense is recommended, though proficiency with design tools is not necessary.**

## The New Workflow: From Prompt to Asset

This factory enables a new, powerful, two-step workflow for producing marketing assets:

1.  **Idea to Prototype (AI Tools)**: Use a prompt-based AI tool like **Lovable** or **Figma Make** to generate a visually appealing design and its corresponding React code. This bypasses the need for manual design skills on a traditional canvas.
2.  **Prototype to Production (This Factory)**: Use this repository to take that generated code and produce a polished, professional asset in a variety of formats (PDF, PNG, SVG, etc.). This bypasses the need for a separate, manual production or export process.

## Who is this for?

This project is for the "technically-minded, non-designer"—anyone who wants to create professional assets without being a Figma expert. This includes:

-   **Product Managers & Owners**: Quickly create materials for presentations, stakeholder updates, or sales enablement.
-   **Marketing Technologists**: Work at the intersection of marketing and code to produce assets that are on-brand and data-driven.
-   **Growth Hackers**: Rapidly prototype and produce materials for experiments and campaigns.
-   **Developers**: Leverage existing React skills to build marketing collateral directly from a component library, ensuring perfect brand consistency.

## Why Use This Over a Tool Like Canva?

This factory is not a replacement for tools like Canva; it's an alternative for a different type of user and workflow. This approach is superior when:

-   **You Start with Code**: Your "design" already exists as React components from an AI tool or a developer. This factory meets you where you are.
-   **You Need Perfect Fidelity**: The process guarantees the PDF is a 1:1, vector-perfect match of the browser render.
-   **You Value Brand Consistency**: Materials can be built directly from a production React component library, ensuring consistency is enforced by code.
-   **You Need to Generate Documents Programmatically**: This factory can be used as an engine to dynamically create personalized documents by pulling data from an API.

## Core Architecture

This project is a monorepo that separates the engine from the content.

-   **`renderer/`**: A pre-configured Vite/React application that contains all the necessary tools (Tailwind, Puppeteer) to render a project and convert it to various asset formats. This is the core engine and should rarely be modified.
-   **`packages/`**: This directory contains the source code for individual marketing projects. Each sub-directory is a self-contained set of components that can be rendered by the factory.

## Usage Guide

### 1. Create a New Package

Create a new directory inside `/packages`. The name should be descriptive of the project.

```bash
mkdir packages/new-product-flyer
```

### 2. Add Source Files

Place the React components exported from your AI design tool into the new package directory.

### 3. Preview in Browser

To start a live-reloading development server for a specific package, run the following command from the **root directory**, replacing `<package-name>` with your folder's name.

```bash
TARGET_PACKAGE=<package-name> npm run dev
```
**Example:**
```bash
TARGET_PACKAGE=new-product-flyer npm run dev
```

### 4. Generate the Final Asset

To generate a final asset from your package, run the following command from the **root directory**.

-   **Supported Formats**: `pdf`, `png`, `jpeg`, `webp`, `svg`

```bash
npm run generate -- --package=<package-name> --format=<format>
```

**PDF Example:**
```bash
npm run generate -- --package=brochure-2025 --format=pdf
```

**PNG Example:**
```bash
npm run generate -- --package=social-card --format=png
```

The final asset will be saved in the **root directory**, named after your package with the correct file extension (e.g., `brochure-2025.pdf`).
