import React from "react";
import { handleBackClick, handleForwardClick } from "../../Products/Flechas";
import { ImageContainer, ImgComponent } from "./ProductImageComponentStyles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

const Flecha = styled.div`
  font-size: 24px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.5);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1) translateX(${({ isLeft }) => (isLeft ? "-2px" : "2px")});
  }
`;

const ProductImageComponent = ({ src, alt, mostrarDorso, onToggleDorso }) => {
  return (
    <ImageContainer>
      <Flecha isLeft onClick={() => handleBackClick(mostrarDorso, onToggleDorso)}>
        <FaChevronLeft />
      </Flecha>
      
      <ImgComponent src={src} alt={alt} className={`${mostrarDorso ? "rotar dorso-visible" : ""}`} />
      
      <Flecha onClick={() => handleForwardClick(mostrarDorso, onToggleDorso)}>
        <FaChevronRight />
      </Flecha>
    </ImageContainer>
  );
};

export default ProductImageComponent;
