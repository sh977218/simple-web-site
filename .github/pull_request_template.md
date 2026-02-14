## Summary

Please describe the change and why it's needed.

## Related issues

- Fixes: 

## PR Checklist (Angular conventions)

- [ ] Component uses `ChangeDetectionStrategy.OnPush`.
- [ ] Templates use the modern control-flow micro-syntax (e.g. `*ngIf="(obs$ | async) as value"`).
- [ ] `*ngFor` uses `trackBy` when rendering lists that can change.
- [ ] No `.css`/`.scss` files were added for the component; styling uses Tailwind utilities.
- [ ] Observables are used with the `async` pipe where appropriate.
- [ ] If any of the above checks cannot be satisfied, add an explanation in the PR description.

---

Please add test coverage and update docs where appropriate.

