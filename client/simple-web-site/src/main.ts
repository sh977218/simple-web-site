import {VERSION as CDK_VERSION} from '@angular/cdk';
import {provideHttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {VERSION as MAT_VERSION} from '@angular/material/core';
import {bootstrapApplication, Title} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {
  provideRouter,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';

import {AppComponent} from 'app/app.component';
import {HomeComponent} from 'app/home/home.component';
import {SearchComponent} from 'app/search/search.component';
import {ThreeJsComponent} from 'app/three-js/three-js.component';

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
    path: 'threeJs',
    component: ThreeJsComponent,
    title: 'Three Js',
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

@Injectable({providedIn: 'root'})
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
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ],
}).catch((err) => console.error(err));
