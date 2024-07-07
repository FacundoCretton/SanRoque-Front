import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ListProductosContainer = styled.div`
  display: flex;
  flex-direction: column;  
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 90%;
  margin: 0 auto;
`;

export const ListItem = styled.div`
  display: flex;
  background-color: rgba(249, 249, 249, 0.8); /* Transparencia del 50% */
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  flex-direction: column;
`;

export const DivDeArriba = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DivDelMedio = styled.div`

  display: flex;
  /* justify-content: space-between; */
`;

export const BeneficioIcono = styled.img`
  width: 50px; 
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  background-image: linear-gradient(90deg, rgba(216, 180, 224, 0.5), rgba(248, 187, 208, 0.5));

  /* padding: 9px; */
  margin: auto;
  transition: transform 0.3s, background-color 0.3s; /* Agrega una transición suave */

  &:hover {
    transform: scale(1.1);
    background-color: #f0f0f0; /* Color de fondo en gris claro más claro */
    border-color: #999; /* Color de borde más oscuro en hover */
  }
`;

export const ElBeneficio = styled.div`
  margin-top: 10px; /* Espacio entre beneficios */
  display: flex;
  flex-direction: column;
  margin-right: 10px;


  span{
    font-size: 0.8rem;
    font-weight: bold;
    color: #333;
    text-transform: uppercase;
    font-family: "Noto Sans";

  
  }
`;



export const ProductName = styled.h3`
  color: transparent; /* Hace que el texto sea transparente */
  margin-bottom: 10px;
  font-family: "Comfortaa";
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-image: linear-gradient(90deg, rgba(156, 39, 176, 1), rgba(233, 30, 99, 1));
  -webkit-background-clip: text; /* Aplica el gradiente solo al texto en navegadores WebKit (Safari) */
  background-clip: text; /* Aplica el gradiente solo al texto */

`;


export const ProductDescription = styled.p`
  margin-bottom: 10px;
  font-family: "Noto Sans";
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  color: #666;
`;

export const OutOfStockMessage = styled.p`
  color: red;
  font-style: italic;
  font-weight: bold;
  font-family: "Noto Sans";
  display: flex;
  align-items: center;
  gap: 10px;
`;


export const ProductListImage = styled.img`
  position: relative;
  max-width: 500px;
  max-height: 500px;
  overflow: hidden;
  transition: transform 0.5s ease; // Transición suave para la transformación
  &:before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    border: 2px solid black;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    pointer-events: none;
    display: none;
  }
  &:hover:before {
    display: block;
  }
  &.dorso-visible {
    transform: rotateY(180deg) scaleX(-1); // Aplicamos la transformación para mostrar el dorso y la inversión horizontal
  }
`;




export const AirtonSenna = styled.div`

  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  gap: 20px;
  align-items: center;

`;

export const SpanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

`;


export const ConsejosContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  svg{

    color: green;
  }

  p{
    font-size: 15px;
    font-weight: bold;
    font-family: "Noto Sans";
  
  }
  
`;

export const ConsejoItem = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Noto Sans";
  font-style: italic;

`;

export const ExpandButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  padding: 5px;
  transition: color 0.3s;

  &:hover {
    color: #333;
  }

  span {
    font-size: 10px;
  }
`;

export const ExpandButtonContainer = styled.div`

  display: flex;
  justify-content: center;



`;

export const DivDeAbajo = styled.div`

  display: flex;
flex-direction: column;
`;


const ExpandedContentContainer = styled(motion.div)`
  padding: 10px;
  /* background-color: #f9f9f9;
  border: 1px solid #ddd; */
`;

const ExpandedContentText = styled.p`
  color: #333;
  font-size: 16px;
`;

export const ExpandedContent = () => {
  return (
    <ExpandedContentContainer
      initial={{ height: 0, opacity: 0 }} 
      animate={{ height: "auto", opacity: 1 }} 
      transition={{ duration: 0.4 }} 
    >
      <ExpandedContentText>
        Aquí va tu contenido adicional...
      </ExpandedContentText>
    </ExpandedContentContainer>
  );
};