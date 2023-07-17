import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlessingformPageRoutingModule } from './blessingform-routing.module';

import { BlessingformPage } from './blessingform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlessingformPageRoutingModule
  ],
  declarations: [BlessingformPage]
})
export class BlessingformPageModule {}
