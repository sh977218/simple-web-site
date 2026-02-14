# Codeium AI Instructor for NX Workspace

Guidelines for Codeium when working on this NX workspace Angular project.

## Angular Component Standards (MANDATORY)

### Requirement 1: ChangeDetectionStrategy.OnPush

Every component must include this decorator property:

```typescript
@Component({
  selector: 'app-my-feature',
  templateUrl: './my-feature.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyFeatureComponent { }
```

**This is not optional.** Every single component in this workspace must have OnPush.

### Requirement 2: Angular 17+ Control Flow Syntax

Templates must use the new control flow syntax:

```angular
<!-- Conditionals -->
@if (isVisible) {
  <div>Visible content</div>
} @else if (isPending) {
  <div>Pending content</div>
} @else {
  <div>Default content</div>
}

<!-- Lists with track -->
@for (let user of users(); track user.id) {
  <div class="p-4">{{ user.name }}</div>
}

<!-- Switch statements -->
@switch (role) {
  @case ('admin') {
    <div>Admin panel</div>
  }
  @case ('user') {
    <div>User dashboard</div>
  }
  @default {
    <div>Guest view</div>
  }
}
```

**Never use:** `*ngIf`, `*ngFor`, `[ngSwitch]`, `*ngSwitchCase`, `*ngSwitchDefault`

### Requirement 3: Tailwind CSS - No Component CSS Files

All styling must use Tailwind utility classes in templates. Do NOT create `.css` or `.scss` files.

```typescript
// ✅ CORRECT
@Component({
  selector: 'app-card',
  template: `
    <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">
        {{ cardTitle }}
      </h3>
      <p class="text-gray-600">{{ cardContent }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent { }

// ❌ WRONG - Don't do this
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']  // ❌ NO!
})
export class CardComponent { }
```

## Common Tailwind Patterns

```html
<!-- Containers and Layout -->
<div class="flex flex-col gap-4">Grid with gap</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Responsive grid</div>

<!-- Buttons -->
<button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">
  Action
</button>

<!-- Forms -->
<input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

<!-- Cards -->
<div class="bg-white rounded-lg shadow-md p-6">Card content</div>

<!-- Lists -->
<ul class="space-y-2">
  @for (let item of items; track item.id) {
    <li class="px-4 py-2 bg-gray-50 rounded border border-gray-200">{{ item }}</li>
  }
</ul>

<!-- Badges -->
<span class="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
  Badge
</span>
```

## Implementation Checklist

Before committing component code:

- [ ] Component has `changeDetection: ChangeDetectionStrategy.OnPush`
- [ ] Template uses `@if`, `@for`, `@switch` syntax
- [ ] All `@for` loops include `track` expression
- [ ] No `styleUrls` property in component
- [ ] No separate `.css` or `.scss` files
- [ ] All styling uses Tailwind classes
- [ ] State uses Signals or Observables
- [ ] Proper TypeScript types defined

## Signal-Based State Example

```typescript
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="flex flex-col items-center gap-4 p-8">
      <p class="text-2xl font-bold">Count: {{ count() }}</p>
      <p class="text-lg text-gray-600">Doubled: {{ doubled() }}</p>
      
      <div class="flex gap-2">
        <button 
          (click)="increment()"
          class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Increment
        </button>
        <button 
          (click)="decrement()"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Decrement
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  count = signal(0);
  doubled = computed(() => this.count() * 2);

  increment() {
    this.count.update(c => c + 1);
  }

  decrement() {
    this.count.update(c => c - 1);
  }
}
```

## Common Mistakes to Avoid

❌ **DON'T:**
- Add `styleUrls` to components
- Create CSS files for component styling
- Use `*ngIf`, `*ngFor`, `[ngSwitch]`
- Forget `track` in `@for` loops
- Forget `ChangeDetectionStrategy.OnPush`
- Use default change detection strategy
- Define component styles outside Tailwind classes

✅ **DO:**
- Use Tailwind classes in templates
- Add `ChangeDetectionStrategy.OnPush` to all components
- Use `@if`, `@for`, `@switch` syntax
- Include `track` in every `@for` loop
- Use Signals for state management
- Follow TypeScript best practices

## Resources

- `AI-INSTRUCTOR.md` - Full guidelines with examples
- `AGENTS.md` - General workspace guidelines
- `package.json` - Dependencies (Angular 21, Tailwind 4)

