
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero',

  imports: [RouterLink, MatCardModule, MatListModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',

})
export class HeroComponent {
  hero = input.required<Hero>();
}
