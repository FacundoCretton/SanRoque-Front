import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";

import { Slide1, Slide2, Slide3 } from './Slides/Slide1';
import { CaptionBackground, StyledCarousel } from './CarouselStyles';
const Carousell =()=> {
  return (
    <StyledCarousel>
      
      <Carousel.Item>
        <Slide1 text="First slide" />
        <Carousel.Caption>
        <CaptionBackground>
            <h3>Primer slide</h3>
            <p>Acá va un texto de prueba.</p>
          </CaptionBackground>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="no-width">
        <Slide2 text="Second slide" />
        <Carousel.Caption>
          <CaptionBackground>

            <h3>Segundo slide</h3>
            <p>Acá va un texto de prueba.</p>
          </CaptionBackground>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Slide3 text="Third slide" />
        <Carousel.Caption>
          <CaptionBackground>

            <h3>Tercer slide label</h3>
            <p>Acá va un texto de prueba.</p>
          </CaptionBackground>

        </Carousel.Caption>
      </Carousel.Item>
      
    </StyledCarousel>
  );
}

export default Carousell;