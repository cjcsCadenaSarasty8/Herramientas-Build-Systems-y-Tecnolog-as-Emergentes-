import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Articulo} from '../modelos/Articulo';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})
export class VerMasComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,private dataService:DataService) { }
  
  id: number;
  articulo= this.route.params.subscribe(params => {
    this.id = +params['id'];
 });
  ArticuloDetalles=this.dataService.Articulos.find((elemento)=>elemento.id==this.id);
  ngOnInit() {
   
  
  }
  
}
