import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatList, MatListItem } from '@angular/material/list';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatList,
    MatListItem,
    NgForOf,
    RouterLink,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  hero = input.required<Hero>();
}
