import React from 'react';
import PropTypes from 'prop-types';
import { ProductListImage } from './ListProductosStyles';
import Button1 from '../../../UI/Button/Button';

const ProductImageComponent = ({ src, alt, mostrarDorso, onToggleDorso }) => {
  return (
    <div>
      <ProductListImage src={src} alt={alt} className={mostrarDorso ? 'dorso-visible' : ''} />
      <Button1 onClick={() => onToggleDorso(!mostrarDorso)}>
        {mostrarDorso ? 'Mostrar Frente' : 'Mostrar Dorso'}
      </Button1>
    </div>
  );
};

ProductImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  mostrarDorso: PropTypes.bool.isRequired,
  onToggleDorso: PropTypes.func.isRequired,
};

export default ProductImageComponent;
