import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { Hero } from '@shared/shared-models';

import { HeroDialog } from './hero.dialog';
import { MatButton } from '@angular/material/button';
import { MemberComponent } from '../member/member.component';

@Component({
  selector: 'app-hero',
  imports: [
    RouterLink,
    MatCardModule,
    MatListModule,
    MatButton,
    MemberComponent,
  ],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly dialog = inject(MatDialog);

  hero = input.required<Hero>();

  openHeroDetailDialog() {
    this.dialog.open(HeroDialog, {
      data: { hero: this.hero() },
    });
  }
}
