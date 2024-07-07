import React from 'react';
import Card from './Card';
import { FaCreditCard, FaMoneyBillAlt } from 'react-icons/fa';
import { FiCreditCard } from 'react-icons/fi';
import { Container } from './MediosDePagoStyles';
import MercadoPagoImage from './mercadopago.png'



const PaymentMethods = () => {
    return (
      <Container>
        <Card icon={<FaCreditCard />} title="Tarjeta de Crédito" modalId="modal-credito" isFirst />
        <Card icon={<FiCreditCard />} title="Tarjeta de Débito" modalId="modal-debito" />
        <Card image={MercadoPagoImage} title="Mercado Pago" modalId="modal-mercadopago" />
        
        <Card icon={<FaMoneyBillAlt />} title="Efectivo" modalId="modal-efectivo" isLast />
      </Container>
    );
  };
  
  export default PaymentMethods;
    