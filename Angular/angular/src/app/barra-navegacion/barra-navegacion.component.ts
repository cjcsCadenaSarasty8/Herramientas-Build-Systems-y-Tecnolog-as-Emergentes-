import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class barranavegacionComponent implements OnInit {

  ConteoArticulos=window.sessionStorage.getItem('ConteoCarrito');
  
  constructor() {
    if(window.localStorage.getItem('id')==""){
      window.location.href="/";    
    }
   }

  cerrarSesion(){
    window.localStorage.setItem('id','');
    window.location.href="/";    
  }

  ngOnInit() {
   
  }
}