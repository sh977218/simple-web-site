import { Component, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Member } from '@shared/shared-models';

import { MaterialModule } from '../material.module';

import { MemberDialog } from './member.dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  host: {
    class: 'flex flex-col flex-wrap justify-between my-2',
  },
  imports: [MaterialModule],
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
