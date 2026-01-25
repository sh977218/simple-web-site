import { Routes } from '@angular/router';

export const appRoutes: Routes = [
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
    title: 'Three Js',
  },
  {
    path: 'excel',
    loadComponent: () =>
      import('./excel/excel.component').then((m) => m.ExcelComponent),
    title: 'Excel',
  },
  {
    path: 'video',
    loadComponent: () =>
      import('./video/video.component').then((m) => m.VideoComponent),
    title: 'Video',
  }
];
