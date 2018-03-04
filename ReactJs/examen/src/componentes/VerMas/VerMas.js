import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardText, CardBody, Button } from 'reactstrap';
import './VerMas.css';

class catalogo extends Component {

    constructor(){
        super();
    }

    componentDidMount(){
        this.CargarArticulos();
    }
 
    render() {
      return (
        <div className="Fondo">
            <Container>
                <div id="BarraNavegacion"></div>
                <br/>
                <Card>
                    <CardBody>
                    <div id="contenido"></div>
                    </CardBody>
                </Card>
            </Container>
        </div>
      );
    }

    BaseArticulo= [
        {id:1,nombre:"ajo",precio:55,unidades:5,urlImagen:"../../recursos/imagen/ajo.jpg"},
        {id:2,nombre:"almendras",precio:30,unidades:10,urlImagen:"../../recursos/imagen/almendras.jpg"},
        {id:3,nombre:"arandanos",precio:30,unidades:10,urlImagen:"../../recursos/imagen/arandanos.jpg"},
        {id:4,nombre:"brocoli",precio:50,unidades:10,urlImagen:"../../recursos/imagen/brocoli.jpg"},
        {id:5,nombre:"calabaza",precio:30,unidades:10,urlImagen:"../../recursos/imagen/calabaza.jpg"},
        {id:6,nombre:"canela",precio:30,unidades:10,urlImagen:"../../recursos/imagen/canela.jpg"},
        {id:7,nombre:"cebolla",precio:30,unidades:10,urlImagen:"../../recursos/imagen/cebolla.jpg"},
        {id:8,nombre:"fresa",precio:30,unidades:10,urlImagen:"../../recursos/imagen/fresa.jpg"},
        {id:9,nombre:"kiwi",precio:30,unidades:10,urlImagen:"../../recursos/imagen/kiwi.jpg"},
        {id:10,nombre:"limon",precio:30,unidades:10,urlImagen:"../../recursos/imagen/limon.jpg"},
        {id:11,nombre:"lychee",precio:30,unidades:10,urlImagen:"../../recursos/imagen/lychee.jpg"},
        {id:12,nombre:"maiz",precio:30,unidades:10,urlImagen:"../../recursos/imagen/maiz.jpg"},
        {id:13,nombre:"manzana",precio:30,unidades:10,urlImagen:"../../recursos/imagen/manzana.jpg"},
        {id:14,nombre:"naranja",precio:30,unidades:10,urlImagen:"../../recursos/imagen/naranja.jpg"},
        {id:15,nombre:"papa",precio:30,unidades:10,urlImagen:"../../recursos/imagen/papa.jpg"},
        {id:16,nombre:"pasta",precio:30,unidades:10,urlImagen:"../../recursos/imagen/pasta.jpg"},
        {id:17,nombre:"pimienta",precio:30,unidades:10,urlImagen:"../../recursos/imagen/pimienta.jpg"},
        {id:18,nombre:"repollo",precio:30,unidades:10,urlImagen:"../../recursos/imagen/repollo.jpg"},
        {id:19,nombre:"tomate",precio:30,unidades:10,urlImagen:"../../recursos/imagen/tomate.jpg"}
    ]
    Articulo="";

    CargarArticulos(event) {
        var ID=Number(window.localStorage.getItem("idVermas"));
        this.Articulo=this.BaseArticulo.find((Element)=>Element.id==ID);
        const contenido=
        <div>
            <Row>
                <br/>
                <Card>
                    <CardBody>
                        <h1>{this.Articulo.nombre}</h1>
                        <Col md="6">
                            {/* <img src={require(this.Articulo.urlImagen)} width="100%" height="auto"/> */}
                        </Col>
                        <Col md="6">
                            <CardText>
                            <strong>Precio: </strong>${this.Articulo.precio}<br/>
                            <strong>Unidades Disponibles: </strong>{this.Articulo.unidades}<br/>
                            </CardText>
                        </Col>
                        </CardBody>
                </Card>
            </Row>
             <Button onClick={this.Regresar} >Atras</Button>
        </div>
        ReactDOM.render(contenido, document.getElementById('contenido'));
    }
    Regresar(){
        window.location.href="/catalogo";
    }
    
  }
  
  export default catalogo;
  