import { Component, OnInit } from '@angular/core';
import {Articulo,Articulos} from '../modelos/Articulo';
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
  
  
  constructor() {}

  ngOnInit() {
    
  }
  
}
 


