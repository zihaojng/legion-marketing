---
description: "Workflow for generating marketing materials from design exports using the monorepo factory."
author: "Cline"
version: 1.0
tags: ["workflow", "pdf", "figma", "monorepo", "renderer"]
globs: ["*"]
---

# Marketing Material Factory Workflow

This document outlines the process for creating new marketing materials (like brochures, flyers, etc.) from design tool exports (e.g., Figma Make) using the project's reusable rendering engine.

## Project Structure

The repository is a monorepo with two main directories:

-   `/renderer`: A pre-configured Vite/React application that contains all the necessary tools (Tailwind, Puppeteer) to render a project and convert it to a PDF. **This directory should rarely be modified.**
-   `/packages`: This directory contains the source code for individual marketing projects. Each sub-directory is a self-contained set of components.

## Workflow for New Projects

Follow these steps to create a new piece of marketing material.

### 1. Create a New Package

Create a new directory inside `/packages`. The name should be descriptive of the project.

**Example:**
```bash
mkdir packages/new-product-flyer
```

### 2. Add Source Files

Place the React components exported from your design tool into the new package directory. The expected structure is:
-   `App.tsx` (The main component that lays out the entire page)
-   `components/` (A directory containing all sub-components)

**Example:**
```
packages/
└── new-product-flyer/
    ├── App.tsx
    └── components/
        ├── Header.tsx
        └── FeatureCard.tsx
```

### 3. Preview in Browser (Development)

To start a live-reloading development server and preview your new package in a web browser, run the following command from the **root directory** of the project.

Replace `<package-name>` with the name of your new package folder.

```bash
npm run dev -- <package-name>
```

**Example:**
```bash
npm run dev -- new-product-flyer
```
This will start a server, and you can view the rendered component at the local URL provided in the terminal.

### 4. Build for Production

To build a package for production, run the following command from the **root directory**:

```bash
npm run build -- <package-name>
```

### 5. Generate the Final Asset

To generate a final asset from your package, run the following command from the **root directory**. This script will automatically start the server, generate the file, and then shut the server down.

You must specify the package name and the desired format.

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

The final asset will be saved in the **root directory** of the project, named after your package with the correct file extension (e.g., `brochure-2025.pdf`).
