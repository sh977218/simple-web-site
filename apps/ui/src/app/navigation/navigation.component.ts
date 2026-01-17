import { Component, inject } from '@angular/core';
import { ThemeService } from '../theme-service';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  imports: [
    MatMiniFabButton,
    MatButton,
    RouterLinkActive,
    RouterLink,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatSlideToggle,
    FormsModule,
    MatToolbar,
    MatIcon,
    MatToolbarRow,
  ],
  host: {
    class: 'fixed top-0 left-0 right-0 z-10',
  },
})
export class NavigationComponent {
  themeService = inject(ThemeService);
  routes = [
    {
      path: 'mongodb',
      label: 'Mongodb',
    },
    {
      path: 'elasticsearch',
      label: 'Elasticsearch',
    },
    {
      path: 'threeJs',
      label: 'Three JS',
    },
    {
      path: 'excel',
      label: 'Excel',
    },
  ];
}
