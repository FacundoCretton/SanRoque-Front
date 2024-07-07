import React from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import Count from '../../../UI/Count/Count';
import Increase from '../../../UI/Incrense/Incrense';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/cart/cartSlide';
import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  TextStyled,
  PriceStyled,
  QuantityContainerStyled,
} from './ModalCartStyles';

const ModalCardCart = ({ img, name, price, id, quantity }) => {
  const dispatch = useDispatch();
  return (
    <ProductContainerStyled>
      <img src={img} alt={name} />
      <TextContainerStyled>
        <CardTitleStyled>{name}</CardTitleStyled>
        <TextStyled></TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor='#ff6347' /* Tomato red for decrease button */
          onClick={() => dispatch(removeFromCart(id))}
        >
          <FaMinus />
        </Increase>
        <Count>{quantity}</Count>
        <Increase
          bgColor='#32cd32' /* Lime green for increase button */
          onClick={() => dispatch(addToCart({ img, name, price, id, quantity }))}
        >
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};


// Añadir prop-types
ModalCardCart.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ModalCardCart;