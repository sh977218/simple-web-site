import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { MaterialModule } from '../material.module';
import { ThemeService } from '../theme-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  imports: [
    AsyncPipe,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    FormsModule,
    MaterialModule,
  ],
})
export class NavBarComponent {
  themeService = inject(ThemeService);
  routes = [
    {
      path: 'search',
      label: 'Search',
    },
    {
      path: 'threeJs',
      label: 'Three JS',
    },
    {
      path: 'excel',
      label: 'Excel',
    },
    {
      path: 'video',
      label: 'Video',
    }
  ];
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
