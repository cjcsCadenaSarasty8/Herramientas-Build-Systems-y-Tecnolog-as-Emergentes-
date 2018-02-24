import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { delay } from 'q';
import { CarroCompras } from '../modelos/CarroCompras';
import { Articulo } from '../modelos/Articulo';
import { totalmem } from 'os';

@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.css']
})
export class CarroComprasComponent implements OnInit {

  CarroCompras:Articulo[]=this.dataService.ArticuloCarro;
    
  Total:number=this.dataService.ValorCarro;
  
  constructor(private dataService :DataService) 
  {
  
  }

  ngOnInit() {
    setTimeout(() => {
      this.CarroCompras=this.dataService.ArticuloCarro;
      this.Total=this.dataService.ValorCarro;
    }, 500);
  }
}