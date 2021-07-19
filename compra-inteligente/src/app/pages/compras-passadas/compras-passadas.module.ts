import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprasPassadasPageRoutingModule } from './compras-passadas-routing.module';

import { ComprasPassadasPage } from './compras-passadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprasPassadasPageRoutingModule
  ],
  declarations: [ComprasPassadasPage]
})
export class ComprasPassadasPageModule {}
