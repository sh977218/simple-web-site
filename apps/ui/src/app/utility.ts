import { Signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

export function debounceSignal<T>(
  source: Signal<T>,
  time_in_million_second: number,
): Signal<T | undefined> {
  return toSignal(
    toObservable(source).pipe(debounceTime(time_in_million_second)),
  );
}
