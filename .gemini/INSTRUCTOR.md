# Gemini AI Instructor for NX Workspace

This file provides specific guidelines for Gemini when working on this NX workspace Angular project.

## Angular Component Requirements

### 1. ChangeDetectionStrategy.OnPush - REQUIRED

Every single Angular component must include:

```typescript
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush  // ← REQUIRED
})
export class MyComponent { }
```

Forgetting this is not acceptable. All components must have it.

### 2. New Control Flow Syntax (Angular 17+) - REQUIRED

Templates MUST use the new control flow syntax, NOT the old structural directives:

❌ **DO NOT USE:**
```angular
<div *ngIf="condition">Content</div>
<div *ngFor="let item of items">{{ item }}</div>
<div [ngSwitch]="value"><div *ngSwitchCase="'a'">A</div></div>
```

✅ **USE THIS:**
```angular
@if (condition) {
  <div>Content</div>
}

@for (let item of items; track item.id) {
  <div>{{ item }}</div>
} @empty {
  <p>No items</p>
}

@switch (value) {
  @case ('a') {
    <div>A</div>
  }
  @default {
    <div>Other</div>
  }
}
```

**Key points:**
- `@if` / `@else if` / `@else` instead of `*ngIf`
- `@for` instead of `*ngFor` - track function is MANDATORY
- `@switch` / `@case` / `@default` instead of `[ngSwitch]`
- `@empty` block in `@for` for empty list handling

### 3. Tailwind CSS Only - NO SEPARATE CSS FILES

All styling must be done with Tailwind utility classes. Do NOT create .css or .scss files.

❌ **DO NOT DO:**
```typescript
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']  // ❌ NO!
})
```

```css
/* ❌ DO NOT CREATE THIS FILE */
.card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}
```

✅ **DO THIS:**
```typescript
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
  // NO styleUrls
})
```

```html
<!-- Use Tailwind classes in template -->
<div class="p-4 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
  <h3 class="text-lg font-semibold text-gray-900">Card Title</h3>
  <p class="text-gray-600 text-sm">Card content</p>
</div>
```

### Tailwind Utility Classes Reference

```html
<!-- Spacing -->
<div class="p-4">Padding 1rem</div>
<div class="m-2">Margin 0.5rem</div>
<div class="gap-3">Gap 0.75rem</div>

<!-- Colors -->
<div class="bg-blue-600">Background</div>
<div class="text-gray-900">Text color</div>
<div class="border-gray-300">Border color</div>

<!-- Responsive -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Responsive grid</div>
<div class="text-sm md:text-base lg:text-lg">Responsive text</div>

<!-- States -->
<button class="bg-blue-600 hover:bg-blue-700 focus:ring-2">Button</button>
<input class="border focus:outline-none focus:ring-2 focus:ring-blue-500" />

<!-- Transitions -->
<div class="transition-shadow hover:shadow-lg">Hover effect</div>
```

## When Creating Components:

1. ✅ Add `ChangeDetectionStrategy.OnPush` to every component
2. ✅ Use `@if`, `@for`, `@switch` syntax in templates  
3. ✅ Add `track` to every `@for` loop
4. ✅ Use Tailwind classes for all styling
5. ✅ Never create CSS files

## When Modifying Existing Components:

1. Replace `*ngIf` with `@if`
2. Replace `*ngFor` with `@for` + track
3. Add `ChangeDetectionStrategy.OnPush` if missing
4. Remove `styleUrls` from components
5. Delete component CSS files
6. Migrate styles to Tailwind classes in templates

## State Management with Signals

```typescript
import { signal, computed } from '@angular/core';

export class MyComponent {
  // Create signals for state
  count = signal(0);
  items = signal<Item[]>([]);
  
  // Create computed values
  doubledCount = computed(() => this.count() * 2);
  itemCount = computed(() => this.items().length);
  
  // Update signals
  increment() {
    this.count.update(c => c + 1);
  }
  
  // Set signals
  loadItems(newItems: Item[]) {
    this.items.set(newItems);
  }
}
```

In template:
```angular
<p>Count: {{ count() }}</p>
<p>Doubled: {{ doubledCount() }}</p>
@for (let item of items(); track item.id) {
  <div>{{ item.name }}</div>
}
```

## Complete Component Example

```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  template: `
    <div class="max-w-2xl mx-auto p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">My Todos</h1>
      
      <div class="flex gap-2 mb-4">
        <input 
          #todoInput
          type="text"
          class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new todo"
        />
        <button 
          (click)="addTodo(todoInput.value); todoInput.value = ''"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </div>
      
      @if (todos().length > 0) {
        <div class="space-y-2">
          @for (let todo of todos(); track todo.id) {
            <div class="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <input 
                type="checkbox" 
                [checked]="todo.done"
                (change)="toggleTodo(todo.id)"
                class="w-4 h-4"
              />
              <span [class.line-through]="todo.done" class="flex-1">{{ todo.text }}</span>
              <button 
                (click)="deleteTodo(todo.id)"
                class="text-red-600 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          }
        </div>
      } @else {
        <p class="text-center text-gray-500 py-8">No todos yet. Add one to get started!</p>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  todos = signal<Todo[]>([]);
  private nextId = 1;

  addTodo(text: string) {
    if (text.trim()) {
      this.todos.update(todos => [...todos, { id: this.nextId++, text, done: false }]);
    }
  }

  deleteTodo(id: number) {
    this.todos.update(todos => todos.filter(t => t.id !== id));
  }

  toggleTodo(id: number) {
    this.todos.update(todos =>
      todos.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  }
}

interface Todo {
  id: number;
  text: string;
  done: boolean;
}
```

## Important Reminders

- **No exceptions**: Every component needs `ChangeDetectionStrategy.OnPush`
- **No CSS files**: All styling is Tailwind in templates
- **New syntax only**: Never use `*ngIf`, `*ngFor`, or `[ngSwitch]`
- **Track is mandatory**: Every `@for` loop must have `track item.id` or similar
- **Check existing code**: When modifying, update old syntax to new syntax

## For More Details

See `AI-INSTRUCTOR.md` in the workspace root for comprehensive guidelines.

