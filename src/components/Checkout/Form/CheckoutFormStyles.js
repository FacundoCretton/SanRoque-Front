import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled = styled.div`
  /* width: 50%; */
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  justify-content: center;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TituloH2 = styled.h2`
  color: #333; 
  text-align: center;
  margin-bottom: 1rem;
`;