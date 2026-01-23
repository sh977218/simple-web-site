import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { Hero } from '@shared/shared-models';

@Component({
  imports: [
    MatCardModule,
    MatListModule,
    MatButton,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
  ],
  template: `
    <h2 mat-dialog-title>{{ hero.squadName }}</h2>
    <mat-dialog-content>
      <mat-list>
        <mat-list-item>
          <span matListItemTitle>home town</span>
          <span matListItemLine>{{ hero.homeTown }}</span>
        </mat-list-item>
        <mat-list-item>
          <span matListItemTitle>secret base</span>
          <span matListItemLine>{{ hero.secretBase }}</span>
        </mat-list-item>
        <mat-list-item>
          <span matListItemTitle>members</span>
          <span matListItemLine>{{ hero.members.length }}</span>
        </mat-list-item>
      </mat-list>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button matButton mat-dialog-close cdkFocusInitial>Ok</button>
    </mat-dialog-actions>
  `,
})
export class HeroDialog {
  readonly data = inject<{ hero: Hero }>(MAT_DIALOG_DATA);
  readonly hero = this.data.hero;
}
