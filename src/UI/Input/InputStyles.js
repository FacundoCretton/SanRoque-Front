import styled from 'styled-components';

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 1rem auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const InputLabelStyled = styled.label`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  color: #2e2e2e;
  opacity: 0.8;
`;

export const InputStyled = styled.input`
  background-color: #f0f0f0; /* Cambiamos el color de fondo del input a un tono más claro */
  outline: none;
  border: ${({ isError }) => (isError ? '1px solid #fb103d' : 'none')};
  border-radius: 8px;
  height: 40px;
  padding: 0.7rem 1rem;
  color: #2e2e2e;
  font-size: 16px;
  width: 100%;
  margin-top: 1rem;
  opacity: 0.9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Añadimos un sombreado sutil al input */

  ::placeholder {
    opacity: 80%;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #f0f0f0 inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
  opacity: 0.8;
`;
