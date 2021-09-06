import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { CompraService } from 'src/app/services/compra.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  private carrinho:any;
  private itens:any[] = [];
  constructor(private alertCtrl:AlertController, private toastCtrl:ToastController, private itemService:ItemService, private carService:CarrinhoService, private compraService:CompraService) { 
    this.buscarCarrinho();
    this.buscarItens();
  }

  ngOnInit() {
  }
  buscarCarrinho(){
    this.carrinho = JSON.parse(localStorage.getItem('lista-visualizada'));
    console.log(this.carrinho);
  }
  async buscarItens(){
    let item = {
      id_carrinho: this.carrinho.id_carrinho
    }
    let aux = await this.itemService.buscarItem(item);
    let aux2 = aux.itens;
    let itens_finais = []
    for(let i=0; i<aux2.length;i++){
      let item = {
        nome:aux2[i].nome,
        id_item: aux2[i].id_item,
        checked: false
      }
      itens_finais.push(item);
    }
  this.itens  = itens_finais;
  console.log(this.itens);
  }
  async adicionarItem(){
    let alerta = await this.alertCtrl.create({
      message: "Adicionar alerta",
      inputs:[{
        name: "Item",
        type:'text',
        placeholder: "Entre com o nome do Item da lista!"
      }],
      buttons:[
        {
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
            this.add(form.Item);
          }
        }
      ]

    });
    alerta.present();
  }
  async add(newitem:any){
    try{
      let item={
        nome: newitem,
        id_carrinho: this.carrinho.id_carrinho
      } 
      console.log(item);
      await this.itemService.criarItem(item);

    }catch(err){

      const alerta = await this.toastCtrl.create({
        message: err.error,
        position: 'top',
        duration: 2000,
        color: 'danger'
      });
      alerta.present();
    }
    this.buscarItens();
  }

  trocarCheck(item:any,event:any){
    item.checked = !item.checked;
    console.log(this.itens);
  }

  deletarItem(item:any){
    let itemDel = {
      nome:item.nome,
      id_item: item.id_item,
      id_carrinho: this.carrinho.id_carrinho
    }
    this.itemService.deletarItem(itemDel);
    console.log(itemDel);
    setTimeout(() => { this.buscarItens(); }, 1000);
    this.buscarItens();
    console.log(this.itens);
  }
  async efetuarCompra(){
    let itensComprados =  this.itens.filter(Item=> Item.checked == true);
    console.log(itensComprados);
    let item = {
      itens: itensComprados,
      id_usuario: this.carrinho.id_usuario
    }
    this.compraService.comprar(item);
    

  }
}
