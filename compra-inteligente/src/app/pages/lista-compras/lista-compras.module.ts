import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaComprasPageRoutingModule } from './lista-compras-routing.module';

import { ListaComprasPage } from './lista-compras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaComprasPageRoutingModule
  ],
  declarations: [ListaComprasPage]
})
export class ListaComprasPageModule {}
