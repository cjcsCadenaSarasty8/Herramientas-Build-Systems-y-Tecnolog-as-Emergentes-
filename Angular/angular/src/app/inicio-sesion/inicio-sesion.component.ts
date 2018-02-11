import { Component, OnInit } from '@angular/core';
import { Articulo } from 'app/modelos/Articulo';

@Component({
  selector: 'inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
  Validar(emailIngresado:string, contrasenaIngresado:string){
    let emailConsulta="cjcs@dominio.com";
    let contrasenaConsulta="123456";
    if(emailIngresado==emailConsulta && contrasenaIngresado==contrasenaConsulta){
      window.location.href="/catalogo";
    }else{
      alert("Usuario o Contraseña incorrecta");
    }

  }

}
