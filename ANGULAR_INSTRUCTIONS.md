# Angular Instructions (Shared)

Purpose

This document is the single, canonical set of Angular-specific instructions, patterns, and best practices for contributors and automated agents operating on this repository. Agents should reference this file when asked for Angular coding guidance.

Scope

- Applies to all Angular frontend code in this repository (apps/ui and any Angular libs under `libs/`).
- Covers formatting, linting, testing, architecture patterns, and minimal examples.

How agents should use this doc

- When an agent needs to provide or enforce Angular code guidance (scaffolding, linting rules, testing strategy, code samples), link to or follow the recommendations in this file.
- Do not duplicate or produce alternate Angular guidelines elsewhere — update this file instead.

Formatting & linting

- Eslint is the primary linter. Follow rules defined in the workspace's ESLint configs (`eslint.config.mjs`, project-level `.eslintrc` files).
- Prettier is used for formatting; run `npm run format` (or the repository's preferred command) before committing.
- Keep TypeScript `tsconfig` settings in `tsconfig.base.json` and project `tsconfig.*` files.

Testing

- Unit tests: use Karma/Jasmine (Angular default) or Vitest if configured for specific libs. Run tests via Nx: `nx test <project>`.
- E2E tests: Playwright is used for end-to-end testing. Run via Nx: `nx e2e <e2e-project>` or the repository's e2e scripts.
- Coverage: Instrument code via Istanbul when needed (CI/playwright coverage workflows).

Component & Styling patterns

- Prefer small, focused components. Keep presentational components separate from container/stateful components.
- Use `OnPush` change detection where appropriate for performance.
- Prefer `scss` modules where the project uses SCSS; follow the workspace `styles.scss` and theme files.

Services, State & Dependency Injection

- Use Angular services (providedIn root or via module providers) for shared state and side effects.
- For complex state, prefer NgRx or a clear service-based state pattern consistent across the app. Document exceptions.

Routing & Lazy loading

- Use feature modules and lazy-load routes for large sections of the app.
- Keep routing definitions in the feature module where feasible.

Examples

- Component stub:

  ```ts
  // ...example Angular component minimal stub
  @Component({ selector: 'app-hello', template: `<p>Hello</p>` })
  export class HelloComponent {}
  ```

How to update this file

- Edit this file directly and create a short entry in its change log (top) when making behavioral or policy changes.
- Notify repository maintainers when you change testing or build requirements that affect CI.

Related links

- Workspace AGENTS docs: `AGENTS.md`
- Repository README: `README.md`
- Nx docs: https://nx.dev
- Angular docs: https://angular.io


