import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, initMercadoPago } from '@mercadopago/sdk-react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductsCheckout from '../../components/Checkout/Products/ProductsCheckout';
import { ResumenContainer } from './Resumen';
import { clearCart } from '../../redux/cart/cartSlide';
import { BASE_URL } from '../../utils/constants';

const CheckoutResumen = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const { cartItems, shippingCost } = useSelector((state) => state.cart);
  const price = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // Inicializar Mercado Pago
  //   initMercadoPago("TEST-4174124f-930a-416a-8e19-b9d50e1ad65e", {
  //     locale: 'es-AR',
  //   });
  // }, []);

  initMercadoPago("APP_USR-4f590577-3c9d-48e5-9c59-f5cb935b870a", {
    locale: 'es-AR',
  });

  const createPreference = async (cartItems) => {
    try {
      // Construir el array de items para Mercado Pago
      const items = cartItems.map((item) => ({
        title: item.name,
        quantity: item.quantity,
        currency_id: 'ARS', // Establecer la moneda, en este caso pesos argentinos
        unit_price: item.price, // Precio unitario por producto
      }));

      // Realizar la solicitud a Mercado Pago para crear la preferencia
      const response = await axios.post(`${BASE_URL}/api/mercadoPago/create_preference`,
        {
          items, shippingCost
        }

      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.error('Error al crear la preferencia', error);
      throw error; 
    }
  };

  const handlebuy = async () => {
    try {
      console.log("Datos a enviar al backend:", { cartItems, price, shippingCost });

      const id = await createPreference(cartItems);
      if (id) {
        setPreferenceId(id);
      }
    } catch (error) {
      console.error('Error al procesar la preferencia de pago:', error);
    }
  };

  return (
    <div>
      <ResumenContainer>
        <ProductsCheckout
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={price}
        />
        <button onClick={async() =>{
          try {
                await handlebuy(); 
                      // dispatch(clearCart());
                         
              } catch (error) {
            console.log(error);}



        }
          
        }>
          Iniciar Pedido
        </button>

        {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} 
          
        />}
      </ResumenContainer>
    </div>
  );
};

export default CheckoutResumen;
