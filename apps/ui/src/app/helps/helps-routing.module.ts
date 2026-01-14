import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('../about/about.component').then(m => m.AboutComponent),
    title: 'About',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpsRoutingModule {}
