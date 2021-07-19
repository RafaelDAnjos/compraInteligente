import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
})
export class ListaComprasPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  showComprasPassadas(){
    this.navCtrl.navigateForward('compras-passadas');
    
  }
  logout(){
    this.navCtrl.navigateForward('home');
  }

}
