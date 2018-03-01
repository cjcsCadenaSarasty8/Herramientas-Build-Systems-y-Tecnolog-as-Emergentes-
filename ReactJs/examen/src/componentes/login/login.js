import React, { Component } from 'react';

import { InputGroup,  Input } from 'reactstrap';
import { Button } from 'reactstrap';

import './login.css';

class login extends Component {
    render() {
      return (
        <div className="Fondo">
            <div class="container">
    
                <div class="Contenedor-InicioSesion">
                    <br/>
                    <label for="subject">Correo Electronico:</label>
                    <br/>
                    <InputGroup>
                        <Input name="Correo" placeholder="Correo Electronico" />
                    </InputGroup>
                    <br/>
                    <label for="subject">Contraseña:</label>
                    <br/>
                    <InputGroup>
                        <Input placeholder="Contraseña" type="password" />
                    </InputGroup>
                    <br/>
                    <Button color="success" class="ingresar btn btn-success" type="submit">Ingresar</Button >
                </div>
            </div>
      </div>
  
      );
    }
  }
  
  export default login;
  