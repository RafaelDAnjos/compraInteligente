import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComprasPage } from './lista-compras.page';

const routes: Routes = [
  {
    path: '',
    component: ListaComprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaComprasPageRoutingModule {}
