# OpenCode AI Instructor for NX Workspace

This file provides specific guidelines for OpenCode (GitHub Copilot, VS Code) AI assistant when working on this NX workspace Angular project.

## Angular Component Critical Requirements

### 1. ChangeDetectionStrategy.OnPush

**EVERY component must have this:**

```typescript
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush  // ← ALWAYS ADD THIS
})
export class ExampleComponent { }
```

### 2. Modern Control Flow Syntax (Angular 17+)

Use new control flow syntax in all templates:

```angular
@if (isLoading) {
  <p>Loading...</p>
} @else if (hasError) {
  <p class="text-red-600">Error: {{ error }}</p>
} @else {
  @for (let item of items; track item.id) {
    <div class="p-4 bg-white rounded-lg">{{ item.name }}</div>
  } @empty {
    <p class="text-gray-500">No items</p>
  }
}

@switch (status) {
  @case ('active') {
    <span class="bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
  }
  @default {
    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded">Inactive</span>
  }
}
```

### 3. Tailwind CSS Only - NO Separate Style Files

✅ **CORRECT:**
```typescript
@Component({
  selector: 'app-button',
  template: `
    <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
      Click Me
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent { }
```

❌ **WRONG:**
```typescript
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']  // ❌ NEVER DO THIS
})
export class ButtonComponent { }
```

Never create `.css` or `.scss` files for components. All styling goes in templates using Tailwind classes.

## Quick Reference

| DO ✅ | DON'T ❌ |
|------|---------|
| `@if (condition)` | `*ngIf="condition"` |
| `@for (let x of arr; track x.id)` | `*ngFor="let x of arr"` |
| `@switch (value)` | `[ngSwitch]="value"` |
| Tailwind classes: `class="p-4 bg-white rounded-lg"` | CSS files with styleUrls |
| `changeDetection: ChangeDetectionStrategy.OnPush` | Default change detection |
| Signal: `count = signal(0)` | Plain properties |
| Template: `{{ count() }}` | No automatic getters |

## Tailwind Common Classes

```
Spacing: p-4 m-2 gap-3 px-2 py-1
Colors: bg-blue-600 text-gray-900 border-gray-300
States: hover: focus: active: disabled:
Responsive: sm: md: lg: xl:
Display: flex flex-col grid block hidden
Size: w-full h-auto max-w-2xl
```

## Component Checklist

Before submitting code:

- [ ] `ChangeDetectionStrategy.OnPush` present
- [ ] Using `@if`, `@for`, `@switch` syntax
- [ ] Every `@for` has `track` function
- [ ] No CSS files created
- [ ] All styles use Tailwind classes
- [ ] Using Signals or Observables for state
- [ ] Proper TypeScript typing

## State Management Examples

**Using Signals:**
```typescript
items = signal<Item[]>([]);
count = computed(() => this.items().length);

addItem(item: Item) {
  this.items.update(items => [...items, item]);
}
```

**Using Observables:**
```typescript
items$ = this.service.getItems();

// In template: @for (let item of (items$ | async); track item.id)
```

## See Also

- `AI-INSTRUCTOR.md` - Comprehensive guidelines
- `AGENTS.md` - Nx workspace guidelines

