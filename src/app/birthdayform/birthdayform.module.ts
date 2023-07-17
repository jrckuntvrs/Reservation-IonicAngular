import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthdayformPageRoutingModule } from './birthdayform-routing.module';

import { BirthdayformPage } from './birthdayform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthdayformPageRoutingModule
  ],
  declarations: [BirthdayformPage]
})
export class BirthdayformPageModule {}
