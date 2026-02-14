# AI Instructor Guidelines for All Agents

This document provides comprehensive guidelines for AI agents (Claude, GitHub Copilot, Gemini, etc.) working on this NX workspace. All agents must follow these instructions when generating code, particularly for Angular components and related code modifications.

---

## 1. Angular Component Specifications

### 1.1 Control Flow Syntax

**REQUIREMENT**: All Angular components MUST use the latest control flow syntax (Angular 17+).

#### DO NOT USE (Deprecated):

```angular
<!-- ❌ DEPRECATED - Do NOT use -->
<div *ngIf="isVisible">Content</div>
<div *ngFor="let item of items; trackBy: trackByFn">{{ item }}</div>
<div [ngSwitch]="status">
  <div *ngSwitchCase="'active'">Active</div>
  <div *ngSwitchDefault>Inactive</div>
</div>
```

#### USE INSTEAD (New Control Flow Syntax):

```angular
<!-- ✅ NEW SYNTAX - Always use this -->
@if (isVisible) {
  <div>Content</div>
}

@for (let item of items; track item.id) {
  <div>{{ item }}</div>
}

@switch (status) {
  @case ('active') {
    <div>Active</div>
  }
  @default {
    <div>Inactive</div>
  }
}
```

#### Key Points:

- Use `@if`, `@else if`, `@else` instead of `*ngIf`
- Use `@for` instead of `*ngFor` with proper `track` function
- Use `@switch` and `@case` instead of `[ngSwitch]` and `*ngSwitchCase`
- The `track` function in `@for` is **mandatory** for performance
- Use `@empty` block in `@for` for empty list scenarios when applicable

#### Example: Complete Component Template

```angular
<div class="container">
  @if (isLoading) {
    <div class="spinner">Loading...</div>
  } @else if (hasError) {
    <div class="error">{{ errorMessage }}</div>
  } @else {
    @for (let user of users; track user.id) {
      <div class="user-card">
        <h3>{{ user.name }}</h3>
        @if (user.isAdmin) {
          <span class="badge">Admin</span>
        }
      </div>
    } @empty {
      <p>No users found</p>
    }
  }
</div>
```

---

### 1.2 Change Detection Strategy

**REQUIREMENT**: All Angular components MUST use `ChangeDetectionStrategy.OnPush`.

#### DO NOT USE (Default Strategy):

```typescript
// ❌ DO NOT USE - Default change detection
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  // ...
}
```

#### USE INSTEAD (OnPush Strategy):

```typescript
// ✅ ALWAYS USE - OnPush change detection
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent {
  // ...
}
```

#### When Using OnPush:

1. **Always use Signals or Observables with `async` pipe for mutable state**
   ```typescript
   // ✅ Good: Using signals
   count = signal(0);
   
   // ✅ Good: Using observables with async pipe
   items$ = this.apiService.getItems();
   ```

2. **Mark component as needing update when changing state imperatively**
   ```typescript
   constructor(private cdr: ChangeDetectorRef) {}
   
   updateValue() {
     this.value = newValue;
     this.cdr.markForCheck(); // Only if needed
   }
   ```

3. **Use Signals API for reactive state (recommended)**
   ```typescript
   import { signal, computed, effect } from '@angular/core';
   
   count = signal(0);
   doubled = computed(() => this.count() * 2);
   
   increment() {
     this.count.update(c => c + 1);
   }
   ```

#### Benefits:

- Improved performance (less change detection runs)
- More predictable behavior
- Better for large applications
- Works seamlessly with OnPush parent components

---

### 1.3 Styling: Tailwind Utilities Only

**REQUIREMENT**: Do NOT create CSS files. Use Tailwind CSS utility classes exclusively.

#### DO NOT DO:

```typescript
// ❌ DO NOT CREATE CSS/SCSS FILES
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']  // ❌ Do NOT use this
})
```

```css
/* ❌ DO NOT create card.component.css */
.card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

#### DO THIS INSTEAD:

```typescript
// ✅ Use Tailwind classes in template
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
  // ❌ NO styleUrls property
})
```

```html
<!-- ✅ Use Tailwind utility classes -->
<div class="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow">
  <h3 class="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
  <p class="text-gray-600">Card content goes here</p>
</div>
```

#### Common Tailwind Patterns:

```html
<!-- Responsive Layout -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- content -->
</div>

<!-- Flexbox Container -->
<div class="flex items-center justify-between gap-2">
  <!-- content -->
</div>

<!-- Button Styling -->
<button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
  Click Me
</button>

<!-- Form Input -->
<input 
  type="text" 
  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Enter text"
/>

<!-- Card Component -->
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  <!-- content -->
</div>

<!-- Badge/Label -->
<span class="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
  Active
</span>
```

#### Guidelines:

- Use Tailwind's spacing scale (px, py, p, m, etc.)
- Use Tailwind's color palette (consistent colors)
- Use responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- Use dark mode classes if needed (`dark:`)
- Use transition utilities for animations (`transition-*`)
- Use hover, focus, and active states (`hover:`, `focus:`, `active:`)
- Never create component-specific CSS files for styling

---

## 2. Project Structure Guidelines

### 2.1 Directory Organization

```
apps/ui/src/app/
├── [feature-name]/
│   ├── [component-name].component.ts       # Component with OnPush, no CSS file
│   ├── [component-name].component.html     # Template with Tailwind classes
│   └── [service-name].service.ts           # Services for business logic
└── shared/                                 # Shared utilities
```

### 2.2 Component Template Structure

All templates should follow this pattern:

```html
<!-- Root container with Tailwind utility classes -->
<div class="flex flex-col gap-4 p-4">
  <!-- Use semantic HTML with Tailwind classes -->
  
  <!-- Control Flow with New Syntax -->
  @if (condition) {
    <!-- content -->
  } @else {
    <!-- fallback -->
  }
  
  <!-- Lists with track -->
  @for (let item of items; track item.id) {
    <!-- item content -->
  } @empty {
    <p class="text-gray-500 text-center py-8">No items found</p>
  }
</div>
```

---

## 3. General Code Standards

### 3.1 Imports and Dependencies

- Use Angular's latest APIs
- Prefer standalone components when appropriate
- Use typed Reactive Forms or Template-driven Forms properly

### 3.2 TypeScript Best Practices

```typescript
// ✅ Use strong typing
interface User {
  id: string;
  name: string;
  email: string;
}

// ✅ Use const assertions for types
const roles = ['admin', 'user', 'guest'] as const;

// ✅ Use strict null checks
value: string | null = null;
```

### 3.3 RxJS and Observables

```typescript
// ✅ Use modern RxJS patterns
items$ = this.apiService.getItems().pipe(
  shareReplay(1),
  catchError(error => {
    console.error(error);
    return of([]);
  })
);
```

---

## 4. Testing Guidelines

### 4.1 Unit Tests for Components

```typescript
// ✅ Use modern Angular testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy } from '@angular/core';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent], // Standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display items', () => {
    component.items.set([{ id: '1', name: 'Test' }]);
    fixture.detectChanges();
    
    const element = fixture.nativeElement.querySelector('.item');
    expect(element).toBeTruthy();
  });
});
```

---

## 5. NX Workspace Integration

### 5.1 Running Commands

Always use NX commands for consistency:

```bash
# ✅ DO use NX
npm exec nx generate @nx/angular:component my-component
npm exec nx lint
npm exec nx test
npm exec nx build

# ❌ DO NOT use direct Angular CLI
ng generate component my-component
ng build
```

### 5.2 Project Configuration

Ensure `project.json` includes proper linting and testing configurations.

---

## 6. File Naming Conventions

- **Components**: `feature-name.component.ts`
- **Services**: `feature-name.service.ts`
- **Modules**: `feature-name.module.ts` (if using modules)
- **Styles**: Use Tailwind only, no separate CSS files
- **Templates**: `feature-name.component.html`

---

## 7. Checklist for Component Creation

- [ ] Component uses `ChangeDetectionStrategy.OnPush`
- [ ] Template uses new control flow syntax (`@if`, `@for`, `@switch`)
- [ ] All styling uses Tailwind utility classes
- [ ] No CSS/SCSS files created
- [ ] All `@for` loops include `track` function
- [ ] Component follows TypeScript typing standards
- [ ] Service is used for API calls and business logic
- [ ] Observable/Signal patterns used for state management
- [ ] Component is properly tested

---

## 8. Examples

### Example: Complete Feature Component

```typescript
// ✅ user-list.component.ts
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Users</h1>
      
      @if (isLoading()) {
        <div class="flex items-center justify-center py-8">
          <div class="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      } @else if (error()) {
        <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {{ error() }}
        </div>
      } @else {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          @for (let user of users(); track user.id) {
            <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 class="font-semibold text-gray-900">{{ user.name }}</h3>
              <p class="text-gray-600 text-sm">{{ user.email }}</p>
            </div>
          } @empty {
            <p class="text-gray-500 col-span-full text-center py-8">No users found</p>
          }
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  users = signal<User[]>([]);
  isLoading = signal(false);
  error = signal<string | null>(null);

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.isLoading.set(true);
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users.set(users);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load users');
        this.isLoading.set(false);
      }
    });
  }
}

interface User {
  id: string;
  name: string;
  email: string;
}
```

---

## 9. Important Notes for AI Agents

### When Creating/Modifying Components:

1. **ALWAYS check for existing CSS/SCSS files** - If they exist, remove them and migrate styles to Tailwind classes in the template
2. **ALWAYS add `ChangeDetectionStrategy.OnPush`** - Every single component should have this
3. **ALWAYS use new control flow syntax** - Even if existing code uses `*ngIf` or `*ngFor`, update it to new syntax
4. **NEVER remove `@` decorator** - The `@` syntax is Angular 17+, not optional
5. **NEVER create new CSS files** - All styling goes into the template with Tailwind classes
6. **ALWAYS include proper track functions** - Every `@for` loop must have `track`

### When Reviewing Code:

- Check that all components have `changeDetection: ChangeDetectionStrategy.OnPush`
- Verify templates use `@if`, `@for`, `@switch` syntax
- Ensure no CSS files are present for component styling
- Confirm all styles use Tailwind utility classes

---

## 10. Migration Guide for Existing Code

If you encounter older code that doesn't follow these guidelines:

```typescript
// OLD CODE (❌)
@Component({
  selector: 'app-old',
  templateUrl: './old.component.html',
  styleUrls: ['./old.component.css']
})
export class OldComponent {
  items: any[] = [];
}

// NEW CODE (✅)
@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewComponent {
  items = signal<Item[]>([]);
}
```

---

## 11. Links and Resources

- [Angular Control Flow Documentation](https://angular.io/guide/control-flow)
- [Angular Change Detection Strategy](https://angular.io/api/core/ChangeDetectionStrategy)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Angular Signals](https://angular.io/guide/signals)
- [Angular Testing Guide](https://angular.io/guide/testing)

---

**Last Updated**: February 14, 2026
**Version**: 1.0
**Status**: Active for all AI agents working on this workspace

