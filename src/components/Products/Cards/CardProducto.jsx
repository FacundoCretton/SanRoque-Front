import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../../../utils/formatPrice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Button from "../../../UI/Button/Button"
import { addToCart } from "../../../redux/cart/cartSlide";
import {
  AccordionContent,
  AccordionHeader,
  CardPrice,
  CardsStyle,
  ContainerPrice,
  CustomCardTitle,
  SpanTag,
  StockMessage,
  StockText,
  StyledButtonContainer,
  StyledCard,
  StyledImage
} from "./CardProductoStyles";
import { FaExclamationTriangle } from "react-icons/fa";

const CardProducto = ({ img, name, tags, price, desc, id, stock }) => {
  const dispatch = useDispatch();

  const [isDescriptionOpen, setIsDescriptionOpen] = React.useState(false);
  const [isToolsOpen, setIsToolsOpen] = React.useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleTools = () => {
    setIsToolsOpen(!isToolsOpen);
  };

  return (
    <CardsStyle stock={stock}>
      <StyledCard stock={stock}>
        <div style={{ position: "relative", textAlign: "center" }}>
          <CustomCardTitle>{name}</CustomCardTitle>
          <SpanTag>
            {tags && tags.map(tag => (
              <span key={tag} style={{ fontSize: "0.8em", marginLeft: "0.5rem" }}>{tag}</span>
            ))}
          </SpanTag>
        </div>
        <StyledImage src={img} alt={name} />
        {!stock && (
          <StockMessage>
            <p style={{ color: "red", fontWeight: "bold", margin: "0" }}>Sin stock</p>
          </StockMessage>
        )}
        <AccordionHeader onClick={toggleDescription}>
          Descripción
        </AccordionHeader>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isDescriptionOpen ? "auto" : 0, opacity: isDescriptionOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <AccordionContent>
            <p>{desc}</p>
          </AccordionContent>
        </motion.div>
        <AccordionHeader onClick={toggleTools}>
          Datos del producto
        </AccordionHeader>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isToolsOpen ? "auto" : 0, opacity: isToolsOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <AccordionContent>
            <p>Peso: 13kg</p>
            <p>Otra herramienta: Valor</p>
          </AccordionContent>
        </motion.div>
        <ContainerPrice>
          {stock ? "" : <StockText><FaExclamationTriangle />Sin stock</StockText>}
          <CardPrice>{formatPrice(price)}</CardPrice>
        </ContainerPrice>
        <StyledButtonContainer>
          {stock ? (
            <Button onClick={() => dispatch(addToCart({ img, name, desc, price, id }))} disabled={!stock}  margin="15px">
              Agregar al Carro
            </Button>
          ) : (
            <Button disabled>
              <span style={{ fontWeight: "600", fontSize: "14px" }}>Sin stock</span>
            </Button>
          )}
        </StyledButtonContainer>
      </StyledCard>
    </CardsStyle>
  );
}


// prototype for CardProducto
CardProducto.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  stock: PropTypes.bool.isRequired,
};

export default CardProducto;
