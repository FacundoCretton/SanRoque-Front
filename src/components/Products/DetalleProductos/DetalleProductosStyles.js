import { Typography } from 'antd';
import styled, { keyframes } from 'styled-components';

export const TituloH1 = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

// export const DetallesWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 2fr 1fr; /* Divide el contenido en tres columnas */
//   gap: 20px; /* Espacio entre las columnas */
//   margin: 2rem 0;
// `;



// export const ProductDetails = styled.div`
//   flex-grow: 1;
//   margin: 0 1rem;

//   h2 {
//     margin-top: 1rem;
//   }
// `;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Specifications = styled.div`
  margin-top: 1rem;
`;

// export const AdditionalInfo = styled.div`
//   width: 30%;
//   border: 1px solid #ccc;
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
// `;

export const AddToCartButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: auto;
  align-self: stretch;
`;

export const CustomQuantityInput = styled.input`
  width: 50px;
  padding: 5px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const DescriptionWrapper = styled.div`
  margin-top: 1rem;
`;

export const DescriptionTitle = styled(Typography)`
  && {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
  }
`;

export const DescriptionText = styled(Typography)`
  && {
    font-size: 1.4rem;
    line-height: 1.6;
  }
`;

export const BeneficiosWrapper = styled.div`
  margin-top: 1rem;
`;

export const BeneficioItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

export const BeneficioIcon = styled.span`
  background: #cccccc;
  font-size: 1rem;
  margin-right: 0.5rem;
  align-self: flex-start;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Efecto de sombra */
  padding: 4px;
`;

export const BeneficioText = styled(Typography)`
  && {
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 0.5rem;
  }
`;




export const ImageColumn = styled.div`
  grid-area: images; /* Asignar el área 'images' a esta columna */

`;

export const ProductDetails = styled.div`
    grid-area: product-info; /* Asignar el área 'product-info' a esta columna */

`;




export const DetallesWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%; /* Tres columnas de igual tamaño */
  grid-gap: 20px; /* Espacio entre las columnas */
  grid-template-areas: "images product-info additional-info"; /* Definir las áreas de la cuadrícula */
  margin: 2rem 0;
`;



export const AdditionalInfo = styled.div`
  /* Alinear arriba */
  height: 30%; /* Ocupar toda la altura del contenedor */
  border: 1px solid #ccc;
  border-radius: 15px;
  grid-area: additional-info; /* Asignar el área 'additional-info' a esta columna */
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;

export const AdditionalInfoTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

export const AdditionalInfoText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

export const TotalPrice = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 20px;
`;

// -------------------

export const rotateAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`;

export const ProductImage = styled.img`
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









