import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import './catalogo.css';


class catalogo extends Component {
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
                        <Col md="4">
                            <Card>
                                <CardImg top width="100%" src="../../recursos/imagen/ajo.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Aguacate</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        
                    </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
      );
    }
  }
  
  export default catalogo;
  