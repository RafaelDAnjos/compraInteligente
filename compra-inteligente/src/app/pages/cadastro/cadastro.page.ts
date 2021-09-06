import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  inputNome:string;
  inputEmail:string;
  inputSenha:string;
  inputRepetirSenha:string;
  constructor(private navCtrl:NavController, private usuarioService:UsuarioService, private alertaCtrl:AlertController) { }

  ngOnInit() {
  }
  async verificar(){
    let usuario = {
      nome: this.inputNome,
      email: this.inputEmail,
      senha: this.inputSenha,
    }
    if(this.inputSenha != this.inputRepetirSenha){
      const alerta = await this.alertaCtrl.create({
        message: "Senhas diferentes!"
      });
      alerta.present();
    }else{

      try{
        await this.usuarioService.criarUsuario(usuario);
        let user = {
          email:usuario.email,
          senha: usuario.senha
        }
        let token:any = await this.usuarioService.validarUsuario(user);
        localStorage.setItem('authorization',token);
        this.showlistaCompras();
      }catch(err){
        const alerta = await this.alertaCtrl.create({
          message: err.error
        });
        alerta.present();
      }
    }
    //verificar se senha estão iguais
    //chamar funcao de ir pra pagina inicial do usuario(pagina de carrinhos)

  }
  showlistaCompras(){
    this.navCtrl.navigateForward('lista-compras')
  }
}

