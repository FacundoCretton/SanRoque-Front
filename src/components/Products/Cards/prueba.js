import React from "react";
import { formatPrice } from "../../../utils/formatPrice";
import { useDispatch } from "react-redux";

import Button from "../../UI/Button/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
  ButtonContainer,
  CardPrice,
  CardText,
  CardsStyle,
  ContainerPrice,
  CustomCardTitle,
  Ingrid,
  PTag,
  // Patricio,
  StyledAccordionHeader,
} from "../ProductsStyles";
import { addToCart } from "../../redux/cart/cartSlide";

const CardProducto = ({ img, name,tags, price, desc, id, stock }) => {
  const dispatch = useDispatch();
  return (
    <CardsStyle stock={stock}>
      <Card style={{ width: '23rem', background: '#f5f5f5', border: '1px solid #cccccc ', color: '#000000' }}>
        <Card.Body>
          <CustomCardTitle>{name} 
          {tags && tags.map(tag => (
          <PTag key={tag} style={{ fontSize: '0.8em', marginLeft: '0.5rem' }}>{tag}</PTag>
      ))}
      </CustomCardTitle>
          <div style={{ position: "relative", textAlign: 'center' }}>
            <Card.Img variant="top" src={img} style={{ width: '100px', height: '180px' }} />
            {!stock && ( // Mostrar el texto "Sin stock" solo cuando no haya stock
              <div style={{ position: "absolute", bottom: 0, left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '5px', borderRadius: '5px' }}>
                <p style={{ color: 'red', fontWeight: 'bold', margin: '0' }}>Sin stock</p>
              </div>
            )}
          </div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <StyledAccordionHeader><span>Descripción</span></StyledAccordionHeader>
              <Accordion.Body>
                <CardText>
                  {desc}
                </CardText>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <StyledAccordionHeader>Herramientas utilizadas</StyledAccordionHeader>
              <Accordion.Body>
                <ListGroup>
                  <ListGroup.Item><p>Peso</p> <span>13kg </span></ListGroup.Item>
                  <ListGroup.Item><p>Peso</p> <span>13kg </span></ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
        <Card.Body>
          <Ingrid>
          <ContainerPrice>
            {/* <Patricio>Precio por unidad</Patricio> */}
            {stock ? "" : <p style={{color: 'red', fontWeight: '600', fontStyle: 'italic'}}>Sin stock</p>}
            <CardPrice>{formatPrice(price)}</CardPrice>
          </ContainerPrice>
          <ButtonContainer>
            {stock ? (
              <Button
                onClick={() =>
                  dispatch(addToCart({ img, name, desc, price, id} ))

                }
                disabled={!stock}
              >
                Agregar al Carro
              </Button>
            ) : (
              <Button disabled ><span style={{fontWeight: '600', fontSize:'14px'}}>Sin stock</span></Button>
            )}
          </ButtonContainer>
          </Ingrid>
        </Card.Body>
      </Card>
    </CardsStyle>
  );
}

export default CardProducto;