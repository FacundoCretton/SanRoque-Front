import React from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes
import { formatPrice } from '../../../utils/formatPrice';
import CardProductCheckout from '../../CardProductCheckout/CardProductCheckout';
import {
  ProductosContainerStyled,
  ProductsTitleStyled,
  CardsWrapperStyled,
  PriceContainerStyled,
  SubtotalContainerStyled,
  SubtotalTitleStyled,
  SubtotalPriceStyled,
  ShippingContainerStyled,
  ShippingTitleStyled,
  ShippingPriceStyled,
  HrStyled,
  TotalContainerStyled,
  TotalTitleStyled,
  TotalPriceStyled,
  PClearStyled,
} from './ProductsCkeckoutStyles';

const ProductsCheckout = ({ cartItems, shippingCost, price }) => {
  const total = price + shippingCost;

  return (
    <ProductosContainerStyled>
      <ProductsTitleStyled>Tu compra</ProductsTitleStyled>
      <CardsWrapperStyled>
        {cartItems.length ? (
          cartItems.map((item) => <CardProductCheckout {...item} key={item.id} />)
        ) : (
          <PClearStyled>Nada por aquí</PClearStyled>
        )}
      </CardsWrapperStyled>
      <PriceContainerStyled>
        <SubtotalContainerStyled>
          <SubtotalTitleStyled>Subtotal:</SubtotalTitleStyled>
          <SubtotalPriceStyled>{formatPrice(price)}</SubtotalPriceStyled>
        </SubtotalContainerStyled>
        <ShippingContainerStyled>
          <ShippingTitleStyled>Envío:</ShippingTitleStyled>
          <ShippingPriceStyled>{formatPrice(shippingCost)}</ShippingPriceStyled>
        </ShippingContainerStyled>
        <HrStyled />
        <TotalContainerStyled>
          <TotalTitleStyled>Total:</TotalTitleStyled>
          <TotalPriceStyled>{formatPrice(total)}</TotalPriceStyled>
        </TotalContainerStyled>
      </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

// Añadir prop-types
ProductsCheckout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  shippingCost: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductsCheckout;
