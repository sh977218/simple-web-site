import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from 'app/about/about.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpsRoutingModule {}
