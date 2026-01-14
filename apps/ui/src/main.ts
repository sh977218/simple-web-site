import { VERSION as CDK_VERSION } from '@angular/cdk';
import { provideHttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { VERSION as MAT_VERSION } from '@angular/material/core';
import { bootstrapApplication, Title } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';

import { AppComponent } from './app/app.component';



/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./app/home/home.component').then(m => m.HomeComponent),
    title: 'Home',
  },
  {
    path: 'search',
    loadComponent: () => import('./app/search/search.component').then(m => m.SearchComponent),
    title: 'Search',
  },
  {
    path: 'helps',
    loadChildren: () =>
      import('./app/helps/helps.module').then((m) => m.HelpsModule),
  },
];

@Injectable({ providedIn: 'root' })
class TemplatePageTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    this.title.setTitle(`${title ? title : 'SimpleWebSite'}`);
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(routes),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ],
}).catch((err) => console.error(err));
