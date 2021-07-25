import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
})
export class ListaComprasPage implements OnInit {
  listas_compra: any[] = [{
    titulo:'compra 1'
  },
  {
    titulo:'compra 2'
  },
  {
    titulo:'compra 3'
  },
]
  constructor(private navCtrl:NavController, private alertCtrl:AlertController) { }

  ngOnInit() {
  }
  showComprasPassadas(){
    this.navCtrl.navigateForward('compras-passadas');
    
  }
  logout(){
    this.navCtrl.navigateForward('home');
  }
  async addCart(){
    const alerta = await this.alertCtrl.create({
      message: "Adicionado"
    });
    alerta.present();
  }
}
