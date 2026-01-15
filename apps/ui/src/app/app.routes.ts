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
    path: 'spreadsheet',
    loadComponent: () =>
      import('./spreadsheet/spreadsheet.component').then(
        (m) => m.SpreadsheetComponent,
      ),
    title: 'Spread Sheet',
  },
];
