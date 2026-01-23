import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Member } from '@shared/shared-models';
import { MatChip, MatChipSet } from '@angular/material/chips';

@Component({
  imports: [
    MatCardModule,
    MatListModule,
    MatButton,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatChip,
    MatChipSet,
  ],
  template: `
    <h2 mat-dialog-title>{{ member.name }}</h2>
    <mat-dialog-content>
      <mat-list>
        <mat-list-item>
          <span matListItemTitle>age</span>
          <span matListItemLine>{{ member.age }}</span>
        </mat-list-item>
        <mat-list-item>
          <span matListItemTitle>secret identity</span>
          <span matListItemLine>{{ member.secretIdentity }}</span>
        </mat-list-item>
      </mat-list>
      <mat-chip-set aria-label="member powers">
        @for (power of member.powers; track power) {
          <mat-chip>{{ power }}</mat-chip>
        }
      </mat-chip-set>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button matButton mat-dialog-close cdkFocusInitial>Ok</button>
    </mat-dialog-actions>
  `,
})
export class MemberDialog {
  readonly data = inject<{ member: Member }>(MAT_DIALOG_DATA);
  readonly member = this.data.member;
}
