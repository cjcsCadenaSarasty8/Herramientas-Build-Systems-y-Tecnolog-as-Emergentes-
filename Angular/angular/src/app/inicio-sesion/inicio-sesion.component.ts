import { Component, OnInit } from '@angular/core';
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
    if(emailIngresado==Usuario["usuario"] && contrasenaIngresado==Usuario["contrasena"]){
      //alert(this.dataService.retorno['contrasena']);
      this.dataService.IdUsuario=Usuario["id"];
      window.location.href="/catalogo";
    }else{
      alert("Usuario o Contraseña incorrecta");
    }

  }

}
