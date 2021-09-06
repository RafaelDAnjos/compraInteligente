import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
})
export class ListaComprasPage implements OnInit {
  listas_compra: any[] = []
  constructor(private navCtrl:NavController, private alertCtrl:AlertController,private carService:CarrinhoService, private toastCtrl:ToastController) { 
    setTimeout(() => { this.buscarCarrinhos(); }, 1000);
    
  }
  ngOnInit() {}

  async buscarCarrinhos(){
    this.listas_compra = await this.carService.buscarCarrinhos();
    console.log(this.listas_compra);
  }

  showComprasPassadas(){
    this.navCtrl.navigateForward('compras-passadas');
    
  }
  logout(){
    localStorage.removeItem('authorization');
    this.navCtrl.navigateForward('home');
  }
  async addCart(){

    const alerta = await this.alertCtrl.create({
      message: "Adicionar um Carrinho",
      inputs:[{
        name: 'Carrinho',
        type: 'text',
        placeholder: 'Entre com o nome do seu carrinho',
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel:');
        }

      },
      {
        text: 'Adicionar',
        handler: (form) => {
          this.add(form.Carrinho);
        }


      }],
    });
    alerta.present();
  }

  async add(newCarrinho:any){
    try{
      let car = {
        nome: newCarrinho
      }
      this.carService.criarCarrinhos(car);
      setTimeout(() => { this.buscarCarrinhos(); }, 1000);
      
    }catch(err){
      const alerta = await this.toastCtrl.create({
        message: err.error,
        position: 'top',
        duration: 2000,
        color: 'danger'
      });
      alerta.present();

    }
    
    

  }

  async showPageCarrinho(lista:any){

    localStorage.setItem('lista-visualizada',JSON.stringify(lista));
    this.navCtrl.navigateForward('carrinho');
    

  }
  async deletarCarrinho(lista:any){
    this.carService.deletarCarrinho(lista);
    setTimeout(() => { this.buscarCarrinhos(); }, 1000);
    this.buscarCarrinhos();
  }

}
