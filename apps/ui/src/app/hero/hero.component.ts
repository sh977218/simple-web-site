import { Component, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberComponent } from '@shared/shared-components/member';
import { Hero } from '@shared/shared-models';

import { MaterialModule } from '../material.module';

import { HeroDialog } from './hero.dialog';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  host: {
    class: 'flex flex-col flex-wrap justify-between my-2',
  },
  imports: [MaterialModule, MemberComponent],
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
