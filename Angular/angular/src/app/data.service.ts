import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Response} from '@angular/http';
import { Usuario } from 'app/modelos/Usuario';
import { Articulo } from 'app/modelos/Articulo';
import { CarroCompras } from './modelos/CarroCompras';

@Injectable()
export class DataService {

  public static IdUsuario:number;
  public Usuarios:Usuario[]=[];
  public Articulos:Articulo[]=[];
  public ListaCarroCompras:CarroCompras[]=[];
  public ValorCarro:number=0;
  public ArticuloCarro:Articulo[]=[];
  constructor(private httpService:HttpService) 
  {
    this.ObtenerArticulos();
    this.ObtenerCarroCompras();
  }
  
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

  ObtenerCarroCompras():void{
    this.httpService.ObtenerCarroCompras()
   .subscribe(
     (data:Response)=>this.CargarCarroCompras(data)
    )
 }
 
 CargarCarroCompras(datos:any):void{
    let Conteo:number=0;
    let IdUsuario=Number(window.localStorage.getItem('id'))
    datos.shift();
    this.ListaCarroCompras=datos.filter((elemento)=>elemento.idUsuario==IdUsuario);
    for(var i:number=0;i<this.ListaCarroCompras.length;i++){
      let Articulo=this.Articulos.find((elemento)=>elemento.id==this.ListaCarroCompras[i].idProducto);
      if(Articulo!=undefined){
        Articulo.Subtotal=Articulo.precio*this.ListaCarroCompras[i].Cantidad;
        Articulo.Cantidad=this.ListaCarroCompras[i].Cantidad;
        this.ValorCarro=this.ValorCarro+Articulo.Subtotal;
        this.ArticuloCarro.push(Articulo);
      }
    }
    window.sessionStorage.setItem('ConteoCarrito',this.ListaCarroCompras.length.toString());
  }
}