import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaptismformPage } from './baptismform.page';

const routes: Routes = [
  {
    path: '',
    component: BaptismformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaptismformPageRoutingModule {}
