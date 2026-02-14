# 🚀 AI Instructor - Quick Reference Card

**For AI agents working on Angular components in this NX workspace**

## Three Non-Negotiable Requirements

```typescript
// ✅ EVERY Component MUST have this
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush  // ← MANDATORY
})
export class ExampleComponent { }
```

```angular
<!-- ✅ Templates MUST use this syntax -->
@if (condition) {
  <div>Content</div>
} @else {
  <div>Alternative</div>
}

@for (let item of items; track item.id) {  <!-- ← track is REQUIRED -->
  <div>{{ item.name }}</div>
} @empty {
  <p>No items</p>
}

@switch (value) {
  @case ('option1') { <div>Option 1</div> }
  @case ('option2') { <div>Option 2</div> }
  @default { <div>Default</div> }
}
```

```html
<!-- ✅ Styling MUST use Tailwind in templates -->
<div class="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
  Content here
</div>
<!-- NO .css files, NO styleUrls, NO inline styles -->
```

---

## Component Checklist Before Commit

- [ ] Has `changeDetection: ChangeDetectionStrategy.OnPush`
- [ ] Template uses `@if`, `@for`, `@switch` syntax
- [ ] Every `@for` includes `track` function
- [ ] No `styleUrls` property
- [ ] No `.css` or `.scss` files created
- [ ] All styles use Tailwind classes
- [ ] Uses Signals or Observables for state
- [ ] Proper TypeScript types

---

## Common Tailwind Patterns

| Element | Tailwind Classes |
|---------|------------------|
| Button | `px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700` |
| Input | `w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500` |
| Card | `bg-white rounded-lg shadow-md p-6 hover:shadow-lg` |
| Grid | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4` |
| Flex | `flex flex-col items-center justify-between gap-2` |
| Badge | `inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full` |

---

## Migration: Old → New

```typescript
// OLD (Delete) → NEW (Use)
*ngIf="x"                           → @if (x)
*ngFor="let item of items"          → @for (let item of items; track item.id)
[ngSwitch]="x" *ngSwitchCase="'a'"  → @switch (x) @case ('a')
[ngClass]="{'active': isActive}"    → [class.active]="isActive"
[style.color]="color"               → [style]="{'color': color}"
styleUrls: ['./x.css']              → ← DELETE THIS
```

---

## State Management

**Use Signals (Recommended):**
```typescript
count = signal(0);
doubled = computed(() => this.count() * 2);

increment() { this.count.update(c => c + 1); }
```

**Use Observables:**
```typescript
items$ = this.service.getItems();
// In template: @for (let item of (items$ | async); track item.id)
```

---

## Complete Component Template

```angular
<div class="max-w-4xl mx-auto p-6">
  <h1 class="text-3xl font-bold text-gray-900 mb-6">{{ title }}</h1>
  
  @if (isLoading()) {
    <div class="flex justify-center py-8">
      <div class="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
  } @else if (error()) {
    <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
      {{ error() }}
    </div>
  } @else {
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      @for (let item of items(); track item.id) {
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 class="font-semibold text-gray-900 mb-2">{{ item.name }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ item.description }}</p>
          <button class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
            Action
          </button>
        </div>
      } @empty {
        <p class="col-span-full text-center text-gray-500 py-12">
          No items found
        </p>
      }
    </div>
  }
</div>
```

---

## Where to Find Full Guidelines

| File | Purpose | Location |
|------|---------|----------|
| `AI-INSTRUCTOR.md` | Comprehensive master guide | Workspace root |
| `CLAUDE.md` | Claude-specific guidelines | Workspace root |
| `AGENTS.md` | Nx & general guidelines | Workspace root |
| `.gemini/INSTRUCTOR.md` | Gemini-specific guidelines | `.gemini/` |
| `.opencode/INSTRUCTOR.md` | OpenCode/Copilot guidelines | `.opencode/` |
| `.opencode/CODEIUM-INSTRUCTOR.md` | Codeium-specific guidelines | `.opencode/` |
| `.ai/CURSOR-INSTRUCTOR.md` | Cursor IDE guidelines | `.ai/` |

---

## Quick Dos and Don'ts

| ✅ DO | ❌ DON'T |
|------|---------|
| `@if (condition)` | `*ngIf="condition"` |
| `@for (...; track item.id)` | `*ngFor` without track |
| Tailwind: `class="p-4 bg-white"` | CSS files: `styleUrls: ['./x.css']` |
| `ChangeDetectionStrategy.OnPush` | Default change detection |
| `signal()` for state | Plain properties |
| `computed()` for derived state | Manual getters |
| `track item.id` in loops | No track function |
| Component template | Inline HTML |
| Flexible Tailwind | Fixed CSS dimensions |

---

## Real World Example

```typescript
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Users</h1>
      
      @if (users().length > 0) {
        <div class="space-y-2">
          @for (let user of users(); track user.id) {
            <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div>
                <p class="font-semibold text-gray-900">{{ user.name }}</p>
                <p class="text-sm text-gray-600">{{ user.email }}</p>
              </div>
              <button 
                (click)="deleteUser(user.id)"
                class="text-red-600 hover:text-red-700 font-medium"
              >
                Delete
              </button>
            </div>
          }
        </div>
      } @else {
        <p class="text-center text-gray-500 py-8">No users</p>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  users = signal([
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' }
  ]);

  deleteUser(id: number) {
    this.users.update(users => users.filter(u => u.id !== id));
  }
}
```

---

## No Exception Policy

These are **MANDATORY** for all components:

1. ✅ `ChangeDetectionStrategy.OnPush` - **NO EXCEPTIONS**
2. ✅ `@if`, `@for`, `@switch` syntax - **NO EXCEPTIONS**
3. ✅ Tailwind classes only - **NO EXCEPTIONS**

---

**Last Updated**: February 14, 2026  
**Status**: Active for all AI agents

Use this card as a quick reference. For details, see `AI-INSTRUCTOR.md`.

