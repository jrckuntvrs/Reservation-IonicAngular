import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChosenPage } from './chosen.page';

const routes: Routes = [
  {
    path: '',
    component: ChosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChosenPageRoutingModule {}
