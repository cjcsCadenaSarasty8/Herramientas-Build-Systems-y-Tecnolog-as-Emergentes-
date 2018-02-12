import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Articulo,Articulos} from '../modelos/Articulo';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})
export class VerMasComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) { }
  
  id: number;
  articulo= this.route.params.subscribe(params => {
    this.id = +params['id'];
 });
  ArticuloDetalles=Articulos.find((elemento)=>elemento.id==this.id);
  ngOnInit() {
   
  
  }
  
}
