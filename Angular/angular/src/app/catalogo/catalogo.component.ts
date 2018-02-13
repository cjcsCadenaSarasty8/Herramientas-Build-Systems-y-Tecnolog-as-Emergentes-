import { Component, OnInit } from '@angular/core';
import {Articulo,Articulos,ArticulosCarro} from '../modelos/Articulo';
import { forEach } from '@angular/router/src/utils/collection';
//import {DatosArticuloService} from '../datos-articulo.service'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  ListaArticulos=Articulos;

  onKey(event: KeyboardEvent) { // with type info
    var parametro= (<HTMLInputElement>event.target).value;
    if(parametro!=""){
    this.ListaArticulos=Articulos.filter((elemento)=>elemento.nombre.indexOf(parametro)!=-1);
    }else{
      this.ListaArticulos=Articulos;
    }
  }

  AgregarArticulo(Articulo:Articulo){
    alert(Articulo.nombre);
    ArticulosCarro.push(Articulo);
  }
  constructor() {}
  texto=[];
  ngOnInit() {

    function autocompletar(){
      
      for(let Articulo of Articulos ){
        this.texto.push(Articulo.nombre);
      }
    }
    
  }
  
}
 


