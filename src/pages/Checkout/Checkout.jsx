import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import CheckoutForm from '../../components/Checkout/Form/CheckoutForm';
import ProductsCheckout from '../../components/Checkout/Products/ProductsCheckout';
import { ContainerCheckoutStyled, FormContainerStyled, SummaryContainerStyled } from './CheckoutStyles';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { clearCart } from '../../redux/cart/cartSlide.js';
import { BASE_URL } from '../../utils/constants.js';

const Checkout = () => {
  const { cartItems, shippingCost } = useSelector(state => state.cart);
  const [preferenceId, setPreferenceId] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + shippingCost;

  useEffect(() => {
    initMercadoPago("APP_USR-4f590577-3c9d-48e5-9c59-f5cb935b870a", {
      locale: 'es-AR',
    });
  }, []);

  const handleSubmit = async (values) => {
    try {
      const orderData = {
        name: values.name,
        cellphone: values.cellphone,
        location: values.location,
        address: values.address,
        email: values.email,
        cartItems,
        price: totalPrice,
        shippingCost,
        totalPrice,
      };

      // Primero creamos la orden en el backend
      const response = await axios.post(`${BASE_URL}/api/orders`, orderData);
      if (response.data && response.data.id) {
        setOrderId(response.data.id); // Guardamos el ID de la orden
        const id = await createPreference(cartItems, shippingCost, response.data.id); // Pasamos el ID de la orden a la preferencia
        if (id) {
          setPreferenceId(id);
        }
      }
    } catch (error) {
      console.error('Error al crear la orden:', error);
    }
  };

  const createPreference = async (cartItems, shippingCost, orderId) => {
    try {
      const items = cartItems.map(item => ({
        title: item.name,
        quantity: item.quantity,
        currency_id: 'ARS',
        unit_price: item.price,
      }));

      const response = await axios.post(`${BASE_URL}/api/mercadoPago/create_preference`, {
        items,
        shippingCost,
        orderId,
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.error('Error al crear la preferencia', error);
      throw error;
    }
  };

  return (
    <ContainerCheckoutStyled>
      <FormContainerStyled>
        <CheckoutForm onSubmit={handleSubmit} />
      </FormContainerStyled>
      <SummaryContainerStyled>
        <ProductsCheckout cartItems={cartItems} shippingCost={shippingCost} price={totalPrice} />
        {preferenceId && <Wallet initialization={{ preferenceId }} />}
      </SummaryContainerStyled>
    </ContainerCheckoutStyled>
  );
};

export default Checkout;
