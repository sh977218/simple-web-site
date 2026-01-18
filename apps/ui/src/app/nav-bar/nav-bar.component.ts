import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeService } from '../theme-service';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

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
  private breakpointObserver = inject(BreakpointObserver);
  themeService = inject(ThemeService);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

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
