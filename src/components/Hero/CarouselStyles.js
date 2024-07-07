import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'



export const StyledCarousel = styled(Carousel)`


    width: 90%;
    max-width: 1200px; /* Establece el ancho máximo en 1200px */
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    
    .carousel-item {
    height: 450px;
    /* border-radius: 15px; */
    overflow: hidden; 
    position: relative;

    }

    .carousel-indicators {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
      display: flex;
      justify-content: center;
      padding: 0;
      margin-right: 15%;
      margin-bottom: 1rem;
      margin-left: 15%;

  }

    .carousel-indicators .active {
      background-color: yellow;
      /* box-shadow: #d3fbff 0px 0px 40px 0px; */

    }
    




  /* &.no-width img {
    width: auto;
  } */


  h3{
    color: #fefefe;
    font-family:"Comfortaa";

  }

  p{
    color: white;
    font-family:"Noto Sans";


  }
`;


export const ImgSlide = styled.img`

  width: 100%;
  height: 100%;

`;

export const CaptionBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5); /* Color de fondo semitransparente */
  padding: 10px; /* Ajusta el espaciado dentro del fondo */
  border-radius: 5px; /* Añade bordes redondeados para suavizar los bordes */
`;

