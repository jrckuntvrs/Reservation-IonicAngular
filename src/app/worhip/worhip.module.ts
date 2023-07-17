import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorhipPageRoutingModule } from './worhip-routing.module';

import { WorhipPage } from './worhip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorhipPageRoutingModule
  ],
  declarations: [WorhipPage]
})
export class WorhipPageModule {}
