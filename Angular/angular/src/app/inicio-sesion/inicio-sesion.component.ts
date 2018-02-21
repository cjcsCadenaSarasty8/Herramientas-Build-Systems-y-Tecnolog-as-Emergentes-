import { Component, OnInit,  } from '@angular/core';
import { Articulo } from 'app/modelos/Articulo';
import { DataService } from '../data.service';

@Component({
  selector: 'inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
  
})
export class InicioSesionComponent implements OnInit {

  
  constructor(private dataService :DataService) { }
  ngOnInit() {
    this.dataService.ObtenerUsuarios();
    
  }
  Validar(emailIngresado:string, contrasenaIngresado:string){
    let Usuario= this.dataService.Usuarios.filter((Registro)=>Registro.usuario==emailIngresado)[0];
    if(JSON.stringify(Usuario)!=""){
      if(emailIngresado==Usuario["usuario"] && contrasenaIngresado==Usuario["contrasena"]){
        DataService.IdUsuario=Usuario["id"];
        window.localStorage.setItem('id',Usuario["id"].toString());
        window.location.href="/catalogo";
      }else{
        alert("Usuario o Contraseña incorrecta");
      }
    }else{
      alert("Usuario o Contraseña incorrecta");
    }
  }
}