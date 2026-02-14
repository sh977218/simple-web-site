<!-- claude configuration start-->
<!-- This file contains AI instructor guidelines for Claude. Leave the markers to allow auto-updates. -->

# Claude AI Instructor for NX Workspace

This document provides specific guidelines for Claude when working on this NX workspace Angular project.

## Critical Requirements for All Angular Components

### 1. Control Flow Syntax (Angular 17+)

**All component templates MUST use the new control flow syntax:**

- ✅ Use: `@if`, `@else if`, `@else`
- ✅ Use: `@for` with mandatory `track` function  
- ✅ Use: `@switch` and `@case`
- ❌ Never: `*ngIf`, `*ngFor`, `[ngSwitch]`

Example:
```angular
@if (isLoading) {
  <div>Loading...</div>
} @else {
  @for (let item of items; track item.id) {
    <div>{{ item.name }}</div>
  } @empty {
    <p>No items</p>
  }
}
```

### 2. Change Detection Strategy

**Every component MUST have `ChangeDetectionStrategy.OnPush`:**

```typescript
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent { }
```

**Never omit this property. It's mandatory.**

### 3. Styling with Tailwind Only

**No CSS files. Use Tailwind utility classes exclusively:**

- ✅ Use Tailwind classes in templates: `class="p-4 bg-white rounded-lg shadow"`
- ❌ Never create `.css` or `.scss` files for components
- ❌ Never use `styleUrls` property
- ❌ Never use inline style attribute

Common Tailwind patterns:
```html
<!-- Spacing: p-4 (padding), m-2 (margin), gap-3 -->
<!-- Colors: bg-blue-600, text-gray-900, border-gray-300 -->
<!-- Responsive: md:grid-cols-2, lg:text-lg -->
<!-- Hover/Focus: hover:bg-blue-700, focus:ring-2 -->
```

## When Creating Angular Components:

1. **Always include** `ChangeDetectionStrategy.OnPush` in the decorator
2. **Never create** CSS/SCSS files
3. **Always use** `@if`, `@for`, `@switch` syntax in templates
4. **Always add** `track` function to every `@for` loop
5. **Use Tailwind** for all styling in the template

## When Modifying Existing Components:

1. Update `*ngIf` to `@if`
2. Update `*ngFor` to `@for` with proper track
3. Add `ChangeDetectionStrategy.OnPush` if missing
4. Remove any `styleUrls` properties
5. Delete any component CSS files and migrate styles to Tailwind classes

## State Management Best Practices:

```typescript
// Use Signals for reactive state
import { signal, computed } from '@angular/core';

export class MyComponent {
  count = signal(0);
  doubled = computed(() => this.count() * 2);
  
  increment() {
    this.count.update(c => c + 1);
  }
}

// Or use Observables with async pipe
items$ = this.service.getItems();

// In template: {{ items$ | async }}
```

## Nx Workspace Guidelines:

- For navigating/exploring the workspace, use the workspace structure in `AI-INSTRUCTOR.md`
- When running tasks, use `npm exec nx` commands
- Always follow the code standards in the workspace

## Reference Files:

- See `AI-INSTRUCTOR.md` for comprehensive guidelines and examples
- See `package.json` for dependencies (Angular 21+, Tailwind 4)

<!-- claude configuration end-->
