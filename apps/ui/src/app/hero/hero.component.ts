import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { HeroType } from '@shared/shared-models';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, MatCardModule, MatListModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  hero = input.required<HeroType>();
}
