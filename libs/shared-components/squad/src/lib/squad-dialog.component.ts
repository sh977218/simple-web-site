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
    <h2 matDialogTitle>{{ hero.squadName }}</h2>
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
      <button matButton matDialogClose cdkFocusInitial>Ok</button>
    </mat-dialog-actions>
  `,
})
export class SquadDialog {
  readonly data = inject<{ hero: any }>(MAT_DIALOG_DATA);
  readonly hero = this.data.hero;
}
