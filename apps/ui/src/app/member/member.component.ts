import { Component, input } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import { Member } from '@shared/shared-models';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  imports: [MatList, MatListItem],
})
export class MemberComponent {
  member = input.required<Member>();
}
