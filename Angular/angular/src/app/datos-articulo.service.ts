import { Injectable } from '@angular/core';

import {Http,Response} from '@angular/http';
import  'rxjs/Rx';

import { Articulo,Articulos} from './modelos/Articulo';

@Injectable()
export class DatosArticuloService {

  constructor(private http:Http) { }

  public getArticulos(){
  
    return this.http.get('https://angularcarlos-6b6a8.firebaseio.com/.json').map((response:Response)=>response.json())
    
  }
}
