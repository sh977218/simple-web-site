import { bootstrapApplication, Title } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { VERSION as CDK_VERSION } from '@angular/cdk';
import { VERSION as MAT_VERSION } from '@angular/material/core';
import { AppComponent } from 'src/app/app.component';
import {
  provideRouter,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { SearchComponent } from 'src/app/search/search.component';
import { Injectable } from '@angular/core';

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'search',
    component: SearchComponent,
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
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    this.title.setTitle(`${title ? title : 'AngularWithPlaywright'}`);
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
