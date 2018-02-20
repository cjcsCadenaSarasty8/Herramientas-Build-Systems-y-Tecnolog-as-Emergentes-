import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Response} from '@angular/http';
import { Usuario } from 'app/modelos/Usuario';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class DataService {

  public IdUsuario:number=0;
  public Usuarios:Usuario[]=[];
  constructor(private httpService:HttpService) { }

  ObtenerUsuarios():void{
    let prueba:any;
     this.httpService.ObtenerUsuarios()
    .subscribe(
      (data:Response)=>this.AlmacenarVariable(data)
     )
  }
  AlmacenarVariable(datos:any):void{
    let Usuarios:any=datos;
    for(let i=1;i<Usuarios.length;i++){
      this.Usuarios.push(Usuarios[i]);
    }
  }
  ObtenerProductos():void{
    console.log(this.IdUsuario);
  }

}
