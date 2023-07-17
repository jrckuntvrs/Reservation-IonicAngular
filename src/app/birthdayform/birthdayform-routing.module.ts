import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthdayformPage } from './birthdayform.page';

const routes: Routes = [
  {
    path: '',
    component: BirthdayformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthdayformPageRoutingModule {}
