import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Response} from '@angular/http';
import { Usuario } from 'app/modelos/Usuario';

@Injectable()
export class DataService {

  public static IdUsuario:number;
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
}
