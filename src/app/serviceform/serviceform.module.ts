import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceformPageRoutingModule } from './serviceform-routing.module';

import { ServiceformPage } from './serviceform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceformPageRoutingModule
  ],
  declarations: [ServiceformPage]
})
export class ServiceformPageModule {}
