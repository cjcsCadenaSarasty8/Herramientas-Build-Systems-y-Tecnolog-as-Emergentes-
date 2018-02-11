import { Component, OnInit } from '@angular/core';
import {Articulo,Articulos} from '../modelos/Articulo';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  ListaArticulos:any=Articulos;
  onKey(event: KeyboardEvent) { // with type info
    var parametro= (<HTMLInputElement>event.target).value;
    if(parametro!=""){
    this.ListaArticulos=Articulos.filter((elemento)=>elemento.nombre.indexOf(parametro)!=-1);
    }else{
      this.ListaArticulos=Articulos;
    }
  }
  //ListaArticulos=this.prueba;  
  
  
  constructor() {
    
   }

  ngOnInit() {
    
  }
  
}
 


