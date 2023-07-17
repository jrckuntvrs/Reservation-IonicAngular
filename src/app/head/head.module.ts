import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadPageRoutingModule } from './head-routing.module';

import { HeadPage } from './head.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadPageRoutingModule
  ],
  declarations: [HeadPage]
})
export class HeadPageModule {}
