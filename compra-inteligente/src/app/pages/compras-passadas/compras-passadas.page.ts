import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-compras-passadas',
  templateUrl: './compras-passadas.page.html',
  styleUrls: ['./compras-passadas.page.scss'],
})
export class ComprasPassadasPage implements OnInit {
  private compras:any[];
  constructor(private compraService:CompraService) { 
    this.buscarCompras();
  }

  ngOnInit() {
  }
  async buscarCompras(){
    this.compras = await this.compraService.buscarCompras();
    console.log(this.compras);
  }
}
