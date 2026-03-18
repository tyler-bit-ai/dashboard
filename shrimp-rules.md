# Development Guidelines

## Project Overview

- Treat this repository as a Vite + React + TypeScript static dashboard for GitHub Pages.
- Keep the deployment target aligned with the repository path `/dashboard/`.
- Add new functionality through data-driven UI extension before introducing new architectural layers.

## Project Architecture

### Current Verified Structure

- Keep `.shrimp-data/` as tool-managed metadata. Do not edit, rename, or delete files inside it manually.
- Keep product code in `src/`.
- Keep reusable UI in `src/components/`, program metadata in `src/data/`, shared types in `src/types/`, and styling in `src/styles/`.
- Keep deployment automation in `.github/workflows/`.
- Keep all contributor-facing maintenance guidance in `README.md`.

### Initialization Rules

- When changing the runtime entry, update `src/main.tsx`, `src/App.tsx`, and any imported style entrypoints together.
- When changing build or deployment behavior, update `package.json`, `vite.config.ts`, and `README.md` in the same task.
- When changing Pages deployment, update `.github/workflows/deploy.yml` together with any required documentation.

## Code Standards

### Naming And File Creation

- Use ASCII for new file and folder names unless the repository already establishes a different convention.
- Keep one responsibility per new top-level file during initialization.
- Prefer explicit filenames over placeholders such as `temp.*`, `draft.*`, or `newfile.*`.

### Comments And Documentation

- Add comments only when they capture project-specific intent or constraints.
- Do not write generic tutorial comments.
- If you add a new top-level feature or workflow, update `README.md` in the same task.

## Functionality Implementation Standards

### Starting New Functionality

- Prefer extending `src/data/programs.ts` before creating new feature modules.
- Keep program content declarative. Do not hardcode project descriptions or CTA text directly inside UI components when it belongs in metadata.
- Add tests only if a test toolchain is intentionally introduced in the same task.

### Multi-file Coordination

- If you add a new program card field, update both `src/types/program.ts` and `src/data/programs.ts` together.
- If you change card or detail-panel structure, update both `src/components/ProjectGrid.tsx` or `src/components/ProjectDetailPanel.tsx` and the corresponding CSS files together.
- If you change the deployment base path, update both `vite.config.ts` and `README.md` together.
- If you add a new top-level folder, document its ownership in `README.md` or this file in the same task.

## Framework And Dependency Standards

- Keep the runtime dependency set minimal.
- Do not add UI libraries or state libraries unless the current component model is insufficient.
- Do not commit generated build artifacts outside `dist/`.

## Workflow Standards

### Change Workflow

- Scan the repository recursively before planning edits.
- Identify whether the task is initialization, extension, or refactor before creating files.
- For metadata additions, prefer editing `src/data/programs.ts` only, unless the UI truly needs a new field.
- Verify file references after edits so no config, import, or workflow points to missing paths.

## Key File Interaction Standards

- Treat `shrimp-rules.md` as the source of project-specific agent rules; update it when repository structure changes materially.
- Treat `README.md` as the required companion document for setup, deployment, and extension steps.
- Treat `src/data/programs.ts` as the source of truth for project cards and detailed content.
- Treat `.github/workflows/deploy.yml` as coupled to `package.json` build behavior and `vite.config.ts` base path.

## AI Decision-making Standards

### Decision Priority

- Prefer existing files over inferred conventions.
- Prefer metadata extensions over component rewrites.
- Prefer updating related docs and config in the same task over leaving follow-up synchronization work.
- Prefer responsive CSS changes in existing style files over introducing a styling framework.

### If Adding More Programs

- Add the new card data to `src/data/programs.ts`.
- Preserve the distinction between `app` access and `readme` access.
- Record new recurring metadata conventions in `src/types/program.ts` and document them in `README.md` if maintainers must fill them manually.

## Prohibited Actions

- Do not edit `.shrimp-data/` manually.
- Do not hardcode one-off program content into UI components.
- Do not change the GitHub Pages base path without changing the matching docs and workflow assumptions.
- Do not create placeholder directories "for future use".
- Do not add docs that describe features or commands that the repository cannot execute yet.

## Do And Don't Examples

- Do: add a new program entry in `src/data/programs.ts` when a new published tool is ready to list.
- Don't: hardcode a sixth program directly in `src/components/ProjectGrid.tsx`.
- Do: update `src/types/program.ts` and the detail panel together when adding a new metadata field.
- Don't: modify `.shrimp-data/` to store application settings.
