import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  buscarCarrinhos():Promise<any>{
    const token = localStorage.getItem('authorization');
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:token
      })
    };
    return this.http.get(`${this.url}/buscarCarrinhos`,httpOptions).toPromise();

  }

  criarCarrinhos(js:any):Promise<any>{
    console.log(js);
    let token = localStorage.getItem('authorization');
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: token
      })
    };

    return this.http.post(`${this.url}/criarCarrinho`,js,httpOptions).toPromise();
  }

}
