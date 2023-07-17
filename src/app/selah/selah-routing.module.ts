import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelahPage } from './selah.page';

const routes: Routes = [
  {
    path: '',
    component: SelahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelahPageRoutingModule {}
