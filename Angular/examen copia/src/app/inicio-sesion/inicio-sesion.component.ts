import { Component, OnInit } from '@angular/core';

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
      alert("Inicio Correcto");
    }else{
      alert("Usuario o Contraseña incorrecta");
    }

  }

}
