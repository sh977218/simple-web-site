import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'mongodb',
    loadComponent: () =>
      import('./search/search.component').then((m) => m.SearchComponent),
    title: 'Mongo DB',
  },
  {
    path: 'threeJs',
    loadComponent: () =>
      import('./three-js/three-js.component').then((m) => m.ThreeJsComponent),
    title: 'Three Js',
  },
  {
    path: 'excel',
    loadComponent: () =>
      import('./excel/excel.component').then((m) => m.ExcelComponent),
    title: 'Excel',
  },
];
