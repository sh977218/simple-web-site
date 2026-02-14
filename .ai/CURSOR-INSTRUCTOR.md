# Cursor AI Instructor for NX Workspace

Guidelines for Cursor IDE AI when working on this NX workspace Angular project.

## Three Core Requirements for Angular Components

### 1️⃣ ALWAYS Add: ChangeDetectionStrategy.OnPush

```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush  // ← REQUIRED
})
export class ExampleComponent { }
```

If you see a component without this, add it immediately.

### 2️⃣ ALWAYS Use: New Control Flow Syntax (@if, @for, @switch)

**Old Syntax (❌ DELETE):**
```angular
<div *ngIf="condition">Content</div>
<div *ngFor="let item of items">{{ item }}</div>
<div [ngSwitch]="status"><div *ngSwitchCase="'active'">Active</div></div>
```

**New Syntax (✅ USE):**
```angular
@if (condition) {
  <div>Content</div>
}

@for (let item of items; track item.id) {
  <div>{{ item }}</div>
} @empty {
  <div>Empty list</div>
}

@switch (status) {
  @case ('active') {
    <div>Active</div>
  }
  @default {
    <div>Other</div>
  }
}
```

### 3️⃣ NEVER Create: CSS/SCSS Files - Use Tailwind Only

❌ **DO NOT:**
```typescript
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']  // ← DELETE THIS!
})
```

✅ **DO THIS:**
```typescript
@Component({
  selector: 'app-card',
  template: `
    <div class="bg-white rounded-lg shadow-md p-6">
      <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
      <p class="text-gray-600">{{ content }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
}
```

## Tailwind Quick Cheat Sheet

```
Layout:     flex  flex-col  grid  gap-4  p-4  m-2
Colors:     bg-blue-600  text-gray-900  border-gray-300
States:     hover:bg-blue-700  focus:ring-2  disabled:opacity-50
Responsive: sm:  md:  lg:  xl:  (e.g., md:grid-cols-2)
Typography: text-sm  font-bold  font-semibold
Borders:    rounded-lg  border-2  border-gray-200
Shadows:    shadow-md  shadow-lg  hover:shadow-xl
```

Examples:
```html
<button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
  Click Me
</button>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  @for (let card of cards; track card.id) {
    <div class="bg-white rounded-lg shadow-md p-6">
      {{ card.title }}
    </div>
  }
</div>

<input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
```

## Real-World Component Example

```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { signal } from '@angular/core';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  template: `
    <div class="max-w-2xl mx-auto p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">My Todos</h1>
      
      <div class="flex gap-2 mb-6">
        <input 
          #input
          type="text"
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new todo..."
          (keyup.enter)="add(input.value); input.value = ''"
        />
        <button 
          (click)="add(input.value); input.value = ''"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Add
        </button>
      </div>

      @if (todos().length > 0) {
        <ul class="space-y-2">
          @for (let todo of todos(); track todo.id) {
            <li class="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <input 
                type="checkbox"
                [checked]="todo.done"
                (change)="toggle(todo.id)"
                class="w-4 h-4 cursor-pointer"
              />
              <span 
                [class.line-through]="todo.done"
                [class.text-gray-500]="todo.done"
                class="flex-1"
              >
                {{ todo.text }}
              </span>
              <button 
                (click)="delete(todo.id)"
                class="text-red-600 hover:text-red-700 font-medium"
              >
                Delete
              </button>
            </li>
          }
        </ul>
      } @else {
        <p class="text-center text-gray-500 py-12 bg-gray-50 rounded-lg border border-gray-200">
          No todos yet. Add one to get started!
        </p>
      }

      @if (todos().length > 0) {
        <div class="mt-4 text-sm text-gray-600">
          {{ todos().filter(t => !t.done).length }} of {{ todos().length }} remaining
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  todos = signal<Todo[]>([]);
  private nextId = 1;

  add(text: string) {
    if (text.trim()) {
      this.todos.update(todos => [
        ...todos,
        { id: this.nextId++, text: text.trim(), done: false }
      ]);
    }
  }

  toggle(id: number) {
    this.todos.update(todos =>
      todos.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  }

  delete(id: number) {
    this.todos.update(todos => todos.filter(t => t.id !== id));
  }
}
```

## Migration Checklist

When updating old components:

- [ ] Add `changeDetection: ChangeDetectionStrategy.OnPush`
- [ ] Replace all `*ngIf` with `@if`
- [ ] Replace all `*ngFor` with `@for` (add `track`)
- [ ] Replace all `[ngSwitch]` with `@switch`
- [ ] Remove `styleUrls` property
- [ ] Delete `.css`/`.scss` files
- [ ] Move all styles to Tailwind classes in template
- [ ] Update to Signals if using mutable state

## Performance Patterns

```typescript
// ✅ Good: Signals for reactive state
data = signal<Data[]>([]);
count = computed(() => this.data().length);

// ✅ Good: Observables with async pipe
items$ = this.service.getItems();
// Template: @for (let item of (items$ | async); track item.id)

// ❌ Bad: Plain properties with manual change detection
data: Data[] = [];
```

## File Structure

```
src/app/
├── feature/
│   ├── feature.component.ts        (with OnPush)
│   ├── feature.component.html      (with Tailwind, @if/@for/@switch)
│   ├── feature.service.ts
│   └── feature.types.ts            (TypeScript interfaces)
└── shared/
    ├── components/
    └── services/
```

## Links & Reference

- Full guidelines: `AI-INSTRUCTOR.md`
- Workspace guidelines: `AGENTS.md`
- Angular docs: https://angular.io/guide/control-flow

