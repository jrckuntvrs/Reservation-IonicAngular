import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceformPage } from './serviceform.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceformPageRoutingModule {}
