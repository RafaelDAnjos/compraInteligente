import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  criarItem(item:any):Promise<any>{
    console.log(item);
    return this.http.post(`${this.url}/criarItem`,item).toPromise();
  }

  buscarItem(item:any):Promise<any>{

    return this.http.post(`${this.url}/buscarItens`,item).toPromise();

  }
  deletarItem(item:any):Promise<any>{
    return this.http.post(`${this.url}/deletarItemCarrinho`,item).toPromise();
    
  }


}
