import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlessingformPage } from './blessingform.page';

const routes: Routes = [
  {
    path: '',
    component: BlessingformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlessingformPageRoutingModule {}
