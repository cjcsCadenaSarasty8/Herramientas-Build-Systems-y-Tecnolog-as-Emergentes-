import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { InputGroup, Input } from 'reactstrap';
import './catalogo.css';
import Articulo from './Articulo';


class catalogo extends Component {

    constructor(){
        super();
        this.state={
            Articulo: [
                
                {id:1,nombre:"ajo",precio:55,unidades:5,urlImagen:"../../recursos/imagen/ajo.jpg"},
                {id:2,nombre:"almendras",precio:30,unidades:10,urlImagen:"../../recursos/imagen/almendras.jpg"},
                {id:3,nombre:"arandanos",precio:30,unidades:10,urlImagen:"../recursos/imagen/arandanos.jpg"},
                {id:4,nombre:"brocoli",precio:50,unidades:10,urlImagen:"../recursos/imagen/brocoli.jpg"},
                {id:5,nombre:"calabaza",precio:30,unidades:10,urlImagen:"../recursos/imagen/calabaza.jpg"},
                {id:6,nombre:"canela",precio:30,unidades:10,urlImagen:"../recursos/imagen/canela.jpg"},
                {id:7,nombre:"cebolla",precio:30,unidades:10,urlImagen:"../recursos/imagen/cebolla.jpg"},
                {id:8,nombre:"fresa",precio:30,unidades:10,urlImagen:"../recursos/imagen/fresa.jpg"},
                {id:9,nombre:"kiwi",precio:30,unidades:10,urlImagen:"../recursos/imagen/kiwi.jpg"},
                {id:10,nombre:"limon",precio:30,unidades:10,urlImagen:"../recursos/imagen/limon.jpg"},
                {id:11,nombre:"lychee",precio:30,unidades:10,urlImagen:"../recursos/imagen/lychee.jpg"},
                {id:12,nombre:"maiz",precio:30,unidades:10,urlImagen:"../recursos/imagen/maiz.jpg"},
                {id:13,nombre:"manzana",precio:30,unidades:10,urlImagen:"../recursos/imagen/manzana.jpg"},
                {id:14,nombre:"naranja",precio:30,unidades:10,urlImagen:"../recursos/imagen/naranja.jpg"},
                {id:15,nombre:"papa",precio:30,unidades:10,urlImagen:"../recursos/imagen/papa.jpg"},
                {id:16,nombre:"pasta",precio:30,unidades:10,urlImagen:"../recursos/imagen/pasta.jpg"},
                {id:17,nombre:"pimienta",precio:30,unidades:10,urlImagen:"../recursos/imagen/pimienta.jpg"},
                {id:18,nombre:"repollo",precio:30,unidades:10,urlImagen:"../recursos/imagen/repollo.jpg"},
                {id:19,nombre:"tomate",precio:30,unidades:10,urlImagen:"../recursos/imagen/tomate.jpg"}
            ]
        }
    }

    render() {
      return (
        <div className="Fondo">
            <Container>
                <div id="BarraNavegacion"></div>
                <br/>
                <Card>
                    <CardBody>
                    <Row>
                      <Col md="8"><h1>Catálogo Productos</h1></Col>
                      <Col md="4">
                        <label for="subject">¿Que estas buscando?</label>
                        <br/>
                        <InputGroup>
                            <Input name="CampoBusqueda" placeholder="Busqueda" />
                        </InputGroup>
                      </Col>
                    </Row>
                    <br/>
                    <Row>
                        {this.state.Articulo.map((Articulo) => (
                        <Col md="4">
                            <Card>
                            <CardImg top width="100%" urlImagen={Articulo.urlImagen} />
                                <CardBody>
                                    <CardTitle>{Articulo.nombre}</CardTitle>
                                    <CardText>
                                    <strong>Precio: </strong>${Articulo.precio}<br/>
                                    <strong>Unidades Disponibles: </strong>{Articulo.unidades}<br/>
                                    </CardText>
                                    <Button color="primary">Ver Mas</Button>
                                    <Button color="warning">Añadir</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        ))}

                        
                    </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
      );
    }
  }
  
  export default catalogo;
  