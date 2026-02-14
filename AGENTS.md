<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- For navigating/exploring the workspace, invoke the `nx-workspace` skill first - it has patterns for querying projects, targets, and dependencies
- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- Prefix nx commands with the workspace's package manager (e.g., `pnpm nx build`, `npm exec nx test`) - avoids using globally installed CLI
- You have access to the Nx MCP server and its tools, use them to help the user
- For Nx plugin best practices, check `node_modules/@nx/<plugin>/PLUGIN.md`. Not all plugins have this file - proceed without it if unavailable.
- NEVER guess CLI flags - always check nx_docs or `--help` first when unsure

## Scaffolding & Generators

- For scaffolding tasks (creating apps, libs, project structure, setup), ALWAYS invoke the `nx-generate` skill FIRST before exploring or calling MCP tools

## When to use nx_docs

- USE for: advanced config options, unfamiliar flags, migration guides, plugin configuration, edge cases
- DON'T USE for: basic generator syntax (`nx g @nx/react:app`), standard commands, things you already know
- The `nx-generate` skill handles generator discovery internally - don't call nx_docs just to look up generator syntax

## Angular Component Guidelines (CRITICAL)

All AI agents MUST follow these rules when creating or modifying Angular components:

### 1. Change Detection Strategy - MANDATORY

Every component must have:
```typescript
changeDetection: ChangeDetectionStrategy.OnPush
```

This is **required** on all components. No exceptions.

### 2. Control Flow Syntax - MANDATORY

Templates must use Angular 17+ control flow:
- Use `@if` instead of `*ngIf`
- Use `@for` instead of `*ngFor` with `track` function
- Use `@switch` instead of `[ngSwitch]`

Example:
```angular
@if (items.length > 0) {
  @for (let item of items; track item.id) {
    <div>{{ item.name }}</div>
  }
} @else {
  <p>No items</p>
}
```

### 3. Styling - NO CSS FILES

**All styling must use Tailwind utility classes. Do NOT create .css or .scss files.**

- ✅ Use: Tailwind classes in templates
- ❌ Never: `styleUrls` property
- ❌ Never: Create `.css` or `.scss` files

Example:
```html
<div class="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <h3 class="text-lg font-semibold text-gray-900">Title</h3>
</div>
```

For comprehensive guidelines, refer to `AI-INSTRUCTOR.md`

<!-- nx configuration end-->
