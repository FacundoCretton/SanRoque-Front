import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import Input from '../../../UI/Input/Input';
import Submit from '../../../UI/Submit/Submit';
import { CheckoutDatosStyled, TituloH2 } from './CheckoutFormStyles';
import { checkoutInitialValues } from '../../../Formik/initialValues';
import { checkoutValidationSchema } from '../../../Formik/validationSchema';

const CheckoutForm = ({ onSubmit }) => {
  return (
    <CheckoutDatosStyled>
      <TituloH2>Dejanos tus datos!</TituloH2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input htmlFor='nombre' type='text' id='nombre' placeholder='Tu nombre' name='name'>Nombre</Input>
            <Input htmlFor='celular' type='text' id='celular' placeholder='Tu celular' name='cellphone'>Celular</Input>
            <Input htmlFor='localidad' type='text' id='localidad' placeholder='Tu localidad' name='location'>Localidad</Input>
            <Input htmlFor='direccion' type='text' id='dirección' placeholder='Tu dirección' name='address'>Dirección</Input>
            <Input htmlFor='email' type='email' id='email' placeholder='Tu email' name='email'>Tu email</Input>
            <div>
              <Submit disabled={isSubmitting}>Iniciar Pedido</Submit>
            </div>
          </Form>
        )}
      </Formik>
    </CheckoutDatosStyled>
  );
};

// Añadir prop-types
CheckoutForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CheckoutForm;
