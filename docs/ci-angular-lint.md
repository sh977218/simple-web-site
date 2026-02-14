CI Enforcement for Angular component conventions

This document describes lightweight CI checks and ESLint rules you can add to help enforce the conventions in `docs/ANGULAR_INSTRUCTIONS.md`.

Goals
- Ensure components use `ChangeDetectionStrategy.OnPush`.
- Prevent adding component `styleUrls` or separate CSS/SCSS files.
- Encourage use of `async` pipe in templates and `trackBy` usage for `*ngFor` where appropriate.

Recommended ESLint rules / config (add to your project's ESLint config or an override in the workspace `eslint` config):

1) Enforce OnPush change detection
- There's no built-in ESLint rule that perfectly enforces OnPush for all components, but you can use `@angular-eslint/component-class-suffix` and a custom rule to check the decorator's `changeDetection` property.
- Example configuration (add under `overrides` for TS/TSX files that contain Angular components):

```json
{
  "files": ["**/*.ts"],
  "rules": {
    "@angular-eslint/component-class-suffix": ["error", {"suffixes": ["Component"]}]
  }
}
```

To enforce `ChangeDetectionStrategy.OnPush`, add a custom ESLint rule or a code-mod check in CI that scans for `@Component` decorators without `changeDetection: ChangeDetectionStrategy.OnPush` and fails the build. A simple Node.js script can parse TS files with TypeScript compiler API and detect the decorator configuration.

2) Disallow `styleUrls` / `styleUrls: []` and `styleUrls` files
- Use an ESLint rule to forbid `styleUrls` property in `@Component` decorator. There is an existing rule `@angular-eslint/no-host-metadata-property` but not exactly this one — you can implement a small custom rule called `ng/no-style-urls` in your workspace ESLint plugin that checks decorators.

3) Encourage async pipe and trackBy
- There are template-level rules in `angular-eslint` that can help, for example `@angular-eslint/template/no-call-expression` and other template rules.
- `trackBy` usage is not easily enforced by ESLint reliably; prefer a reviewer checklist (PR template) and optional AST checks if necessary.

Quick CI wiring suggestions
- Add an Nx target to run `eslint` for all Angular projects: `nx run-many --target=lint --all --parallel` (or `nx format:check` depending on your workspace config).
- In GitHub Actions (or your CI), run `npm ci` and then `npm run lint` (or the Nx run-many command). Fail the job when lint returns a non-zero exit code.

Example GitHub Actions job snippet:

```yaml
name: Lint
on: [pull_request]
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run Nx lint for Angular projects
        run: npx nx run-many --target=lint --all --parallel
```

Custom helper scripts
- If you want a fast guard for OnPush and styleUrls, add a small script `tools/check-angular-conventions.js` that will scan Angular files and fail with an exit code when violations are found. Add it to `package.json` scripts and call it from CI before lint.

Example script outline (implement in `tools/check-angular-conventions.js`):
- Walk `apps/` and `libs/` for `*.component.ts` files
- Parse the file with the TypeScript compiler API
- For each `@Component` decorator:
  - Ensure `changeDetection` is present and equals `ChangeDetectionStrategy.OnPush`
  - Ensure `styleUrls` is not present
  - Optionally warn if `async` pipe is not used in templates (harder — can inspect inline templates only)

Next steps (recommended)
- Add a simple `tools/check-angular-conventions.js` to the repo and call it from CI.
- Optionally implement the checks as custom ESLint rules under a workspace-specific plugin so that editors surface violations immediately.

If you'd like, I can:
- Implement the `tools/check-angular-conventions.js` script and wire it into `package.json` and the GitHub Actions job above.
- Create the custom ESLint rule files and an example override to add to the workspace eslint config.

