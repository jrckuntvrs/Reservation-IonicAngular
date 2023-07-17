import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChosenPageRoutingModule } from './chosen-routing.module';

import { ChosenPage } from './chosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChosenPageRoutingModule
  ],
  declarations: [ChosenPage]
})
export class ChosenPageModule {}
