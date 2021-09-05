import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  comprar(itens:any){
    return this.http.post(`${this.url}/criarCompra`,itens).toPromise();
  }
  buscarCompras():Promise<any>{
    const token:any = localStorage.getItem('authorization');
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:token
      })
    };
    return this.http.get(`${this.url}/buscarCompras`,httpOptions).toPromise();
  }

}
