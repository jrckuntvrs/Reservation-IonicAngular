import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorhipPage } from './worhip.page';

const routes: Routes = [
  {
    path: '',
    component: WorhipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorhipPageRoutingModule {}
