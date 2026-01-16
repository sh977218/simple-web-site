import {
  Routes,
} from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'mongodb',
    loadComponent: () =>
      import('./mongodb/mongodb.component').then((m) => m.MongodbComponent),
    title: 'Mongo DB',
  },
  {
    path: 'elasticsearch',
    loadComponent: () =>
      import('./elasticsearch/elasticsearch.component').then(
        (m) => m.ElasticsearchComponent,
      ),
    title: 'Elastic Search',
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
