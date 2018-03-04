import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
     } from 'reactstrap';
import './BarraNavegacion.css';


class Barranavegacion extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
      return (
        <div >
            <Navbar color="light" light expand="xs" >
                <NavbarBrand href="/catalogo">La bodega</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavLink href="/catalogo"><img width="20px" height="20px" src={require("../../recursos/iconos/002-show-apps-button.svg")}/></NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#"><img width="20px" height="20px" src={require("../../recursos/iconos/004-commerce.svg")}/><span class="badge badge-danger badge-pill"></span></NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#"><img width="20px" height="20px" src={require("../../recursos/iconos/001-inbox.svg")}/></NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink onClick={this.CerrarSesion} ><img width="20px" height="20px" src={require("../../recursos/iconos/003-logout.svg")}/></NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
      );
    }
  
  CerrarSesion(){
    window.localStorage.setItem("idUsuario","0");
    window.location.pathname="/login";
  }
}
  
  export default Barranavegacion;