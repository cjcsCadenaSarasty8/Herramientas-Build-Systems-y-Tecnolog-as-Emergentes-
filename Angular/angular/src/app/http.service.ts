import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import  'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http:Http) { }

  ObtenerUsuarios(){
    return this.http.get('https://angularcarlos-6b6a8.firebaseio.com/usuario/.json')
    .map((response:Response)=>response.json())
  }
  ObtenerArticulos(){
    return this.http.get('https://angularcarlos-6b6a8.firebaseio.com/articulo/.json')
    .map((response:Response)=>response.json())
  }
}
