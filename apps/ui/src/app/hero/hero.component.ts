import { Component, inject, input } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { Hero } from '@shared/shared-models';

import { MemberComponent } from '../member/member.component';

import { HeroDialog } from './hero.dialog';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  host: {
    class: 'flex flex-col flex-wrap justify-between my-2',
  },
  imports: [
    MatButton,
    MatIconButton,
    MatIcon,
    MemberComponent,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelActionRow,
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
