import React from 'react';
import { ImgSlide } from '../CarouselStyles';

const Slide1 = () => {
  return (
    <ImgSlide
      src="./Collage.png"
      alt="Slide 1"
    />
  );
}

const Slide2 = () =>{    return (
  <ImgSlide
  src="./animales.jpg"
  alt="Slide 2"
  />
);}


const Slide3 = () => {
    return (
        <ImgSlide
        src="./animales3.jpg"
        alt="Slide 3"
        />
    );
}


export { Slide1, Slide2 , Slide3 };