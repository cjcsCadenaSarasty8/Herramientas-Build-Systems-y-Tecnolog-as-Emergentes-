import React, { Component } from 'react';

import './login.css';

//import Imagen from './recursos/imagen/login-fondo.jpg'


class login extends Component {
    render() {
      return (
        <div className="Fondo">
            <div className="container">
            
                <div className="Contenedor-InicioSesion">
                    <form>
                        <div className="form-group">
                            <label for="subject">Correo Electrónico:</label>
                            <br/>
                            <input name="email" type="email" class="form-control" required/>
                        </div>
                        <div class="form-group">
                            <label for="subject">Contraseña:</label>
                            <br/>
                            <input name="contrasena" type="password" class="form-control" required/>
                        </div>
                        <input class="ingresar btn btn-success" type="submit" title="Ingresar"/>
                    </form>
                </div>
            </div>
        </div>
  
      );
    }
  }
  
  export default login;
  