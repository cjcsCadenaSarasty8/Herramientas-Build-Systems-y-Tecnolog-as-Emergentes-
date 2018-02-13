import { Component, OnInit } from '@angular/core';
import {ArticulosCarro} from '../modelos/Articulo';

@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.css']
})
export class CarroComprasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(ArticulosCarro);
  }

}
