import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Articulo} from './modelos/Articulo';
import {Usuario} from './modelos/Usuario';
import  'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http:Http) { }

  ObtenerUsuarios(){
    return this.http.get('https://angularcarlos-6b6a8.firebaseio.com/usuario/.json')
    .map((response:Response)=>response.json())
  }

  // NuevoCarro(usuario:Usuario){
  //   const datos=JSON.stringify(usuario);
  //   return this.http.post('https://angularcarlos-6b6a8.firebaseio.com/usuario/.json',datos)
  //   .map((response:Response)=>)
  // }

  ObtenerArticulos(){
    return this.http.get('https://angularcarlos-6b6a8.firebaseio.com/articulo/.json')
    .map((response:Response)=>response.json())
  }
}
