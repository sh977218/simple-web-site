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
<<<<<<< HEAD
      import('./elasticsearch/elasticsearch.component').then((m) => m.ElasticsearchComponent),
=======
      import('./search/search.component').then((m) => m.SearchComponent),
>>>>>>> 491b533459388b55277fb792d3e4f6f3b7e29d40
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
