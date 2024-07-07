


import styled, { keyframes } from "styled-components";
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;



export const rotateAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`;

export const ImgComponent = styled.img`
  max-width: 400px;
  max-height: 400px;
  overflow: hidden;
  transition: transform 0.5s ease;
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