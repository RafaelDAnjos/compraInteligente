import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputEmail: string;
  inputSenha: string;
  usuarios:any[] = [];
  constructor(private navCtrl:NavController,private usuarioService :UsuarioService, private alertCtrl:AlertController){}

  showTelaCadastro(){
    this.navCtrl.navigateForward('cadastro');
  }
  async verificar(){
    let usuario = {
      email: this.inputEmail,
      senha: this.inputSenha
    }

    try{
      let token = await this.usuarioService.validarUsuario(usuario);
      console.log(token);
      localStorage.setItem('authorization',JSON.stringify(token));
      this.showlistaCompras();
    

    }catch(err){
      const alerta = await this.alertCtrl.create({
        message: err.error
      });
      alerta.present();
    }
    


  }
  showlistaCompras(){
    this.navCtrl.navigateForward('lista-compras');
  }

}
