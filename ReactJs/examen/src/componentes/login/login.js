import React, { Component } from 'react';

import { InputGroup,  Input } from 'reactstrap';
import { Button } from 'reactstrap';

import './login.css';

class login extends Component {

    constructor(){
        super();
        var Usuario="";
        var Contrasena="";
    }

    render() {
      return (
        <div className="Fondo">
            <div class="container">
                <div class="Contenedor-InicioSesion">
                    <br/>
                    <label for="subject">Correo Electronico:</label>
                    <br/>
                    <InputGroup>
                        <Input id="Correo" name="Correo" placeholder="Correo Electronico"  onChange={this.AlmacenarUsuario.bind(this)} />
                    </InputGroup>
                    <br/>
                    <label for="subject">Contraseña:</label>
                    <br/>
                    <InputGroup>
                        <Input id="Contrasena" name="Contrasena" placeholder="Contrasena" type="password" onChange={this.AlmacenarContrasena.bind(this)} />
                    </InputGroup>
                    <br/>
                    <Button onClick={this.InicioSesion} color="success" class="ingresar btn btn-success" type="submit">Ingresar</Button >
                </div>
            </div>
      </div>
      );
    }
    AlmacenarUsuario(event){
        this.Usuario=event.target.value
    }
    AlmacenarContrasena(event){
        this.Contrasena=event.target.value;
    }
    InicioSesion(){
        var CorreoIngresado=document.getElementById('Correo').value;
        var ContrasenaIngresado=document.getElementById('Contrasena').value;
        var CorreoConsulta="cjcs@dominio.com";
        var ContrasenaConsulta="123456";
        if(CorreoIngresado==CorreoConsulta && ContrasenaIngresado==ContrasenaConsulta){
            window.localStorage.setItem("idUsuario","1");
            window.location.href = "/catalogo";
        }else{
            alert("Usuario o contraseña incorrecta");
        }
        
        
    }
  }
  
  export default login;
  