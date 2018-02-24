import { Component, OnInit } from '@angular/core';
import {Articulo} from '../modelos/Articulo';
import { DataService } from 'app/data.service';
//import {DatosArticuloService} from '../datos-articulo.service'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  ListaArticulos=this.dataService.Articulos;

  onKey(event: KeyboardEvent) {
    var parametro= (<HTMLInputElement>event.target).value;
    if(parametro!=""){
    this.ListaArticulos=this.dataService.Articulos.filter((elemento)=>elemento.nombre.indexOf(parametro)!=-1);
    }else{
      this.ListaArticulos=this.dataService.Articulos;
    }
  }

  AgregarArticulo(Articulo:Articulo){
    // alert(Articulo.nombre);
    // ArticulosCarro.push(Articulo);
  }
   
  constructor(private dataService :DataService) {
    this.dataService.ObtenerArticulos;
  }
  ngOnInit() {
    this.dataService.ObtenerArticulos();
    this.ListaArticulos=this.dataService.Articulos;

   console.log(window.localStorage.getItem('id'));
  }
  
}
 


