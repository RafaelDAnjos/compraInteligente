import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  listarUsuarios(): Promise<any> {
    return this.http.get(`${this.url}/usuarios`).toPromise();
  }

  criarUsuario(usuario:any) {

    return this.http.post(`${this.url}/criarUsuario`,usuario).toPromise();
  }
  validarUsuario(usuario:any){
    return this.http.post(`${this.url}/autorizar`,usuario).toPromise();
  }

}
