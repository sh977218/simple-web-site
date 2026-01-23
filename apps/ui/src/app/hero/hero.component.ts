import { Component, inject, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { Hero } from '@shared/shared-models';

import { MemberComponent } from '../member/member.component';

import { HeroDialog } from './hero.dialog';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  host: {
    class: 'flex flex-col flex-wrap justify-between my-2',
  },
  imports: [MatCardModule, MatListModule, MatButton, MemberComponent],
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
