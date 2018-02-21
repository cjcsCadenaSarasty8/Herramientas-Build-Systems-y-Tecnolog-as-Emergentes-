import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Response} from '@angular/http';
import { Usuario } from 'app/modelos/Usuario';
import { Articulo } from 'app/modelos/Articulo';

@Injectable()
export class DataService {

  public static IdUsuario:number;
  public Usuarios:Usuario[]=[];
  public Articulos:Articulo[]=[];
  constructor(private httpService:HttpService) {this.ObtenerUsuarios();this.ObtenerArticulos(); }
  
  ObtenerUsuarios():void{
     this.httpService.ObtenerUsuarios()
    .subscribe(
      (data:Response)=>this.CargarUsuarios(data)
     )
  }
  CargarUsuarios(datos:any):void{
    let Usuarios:any=datos;
    for(let i=1;i<Usuarios.length;i++){
      this.Usuarios.push(Usuarios[i]);
    }
  }

  ObtenerArticulos():void{
     this.httpService.ObtenerArticulos()
    .subscribe(
      (data:Response)=>this.CargarArticulos(data)
     )
  }
  CargarArticulos(datos:any):void{
    let Articulos:any=datos;
    for(let i=1;i<Articulos.length;i++){
      this.Articulos.push(Articulos[i]);
    }
  }
}
