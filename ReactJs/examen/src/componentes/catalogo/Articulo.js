import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { InputGroup, Input } from 'reactstrap';

const Articulo = (props) => (

    <Col md="4">
    <Card>
    <CardImg top width="100%" src={props.urlImagen}/>
        <CardBody>
            <CardTitle>{props.nombre}</CardTitle>
            <CardText>
            <strong>Precio: </strong>$ {props.precio}<br/>
            <strong>Unidades Disponibles: {props.unidades}</strong><br/>
            </CardText>
            <Button color="primary">Ver Mas</Button>
            <Button color="warning">Añadir</Button>
        </CardBody>
    </Card>
</Col>
    );

export default Articulo;