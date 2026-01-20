import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'mongodb',
    renderMode: RenderMode.Client,
  },
  {
    path: 'elasticsearch',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'threeJs',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'excel',
    renderMode: RenderMode.Prerender,
  },
];
