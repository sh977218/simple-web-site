import { Component, inject, input } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Member } from '@shared/shared-models';

import { MemberDialog } from './member.dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  host: {
    class: 'flex flex-col flex-wrap justify-between my-2',
  },
  imports: [
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatButton,
    MatIconButton,
    MatIcon,
  ],
})
export class MemberComponent {
  readonly dialog = inject(MatDialog);

  member = input.required<Member>();

  openMemberDetailDialog() {
    this.dialog.open(MemberDialog, {
      data: { member: this.member() },
    });
  }
}
