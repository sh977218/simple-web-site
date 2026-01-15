import {
  Routes,
} from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    title: 'Home',
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./search/search.component').then((m) => m.SearchComponent),
    title: 'Search',
  },
  {
    path: 'threeJs',
    loadComponent: () =>
      import('./three-js/three-js.component').then((m) => m.ThreeJsComponent),
    title: 'ThreeJs',
  },
  {
    path: 'helps',
    loadChildren: () =>
      import('./helps/helps.module').then((m) => m.HelpsModule),
  },
];
