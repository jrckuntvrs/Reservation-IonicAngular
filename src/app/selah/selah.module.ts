import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelahPageRoutingModule } from './selah-routing.module';

import { SelahPage } from './selah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelahPageRoutingModule
  ],
  declarations: [SelahPage]
})
export class SelahPageModule {}
