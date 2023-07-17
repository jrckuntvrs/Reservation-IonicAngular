import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaptismformPageRoutingModule } from './baptismform-routing.module';

import { BaptismformPage } from './baptismform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaptismformPageRoutingModule
  ],
  declarations: [BaptismformPage]
})
export class BaptismformPageModule {}
