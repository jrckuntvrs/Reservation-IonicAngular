import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadPage } from './head.page';

const routes: Routes = [
  {
    path: '',
    component: HeadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadPageRoutingModule {}
