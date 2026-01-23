import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { ThemeService } from '../theme-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    MatSlideToggle,
    FormsModule,
    MatMenu,
    MatMenuTrigger,
    MatRadioGroup,
    MatRadioButton,
  ],
})
export class NavBarComponent {
  themeService = inject(ThemeService);
  routes = [
    {
      path: 'mongodb',
      label: 'Mongodb',
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
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
