import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Hero } from '@shared/shared-models';
import { MatButton, MatIconButton } from '@angular/material/button';
import { HeroDialog } from './hero.dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MemberComponent } from '../member/member.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  host: {
    class: 'flex flex-col flex-wrap justify-between my-2',
  },
  imports: [
    MatCardModule,
    MatListModule,
    MatButton,
    MatIconButton,
    MatIcon,
    MemberComponent,
  ],
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
