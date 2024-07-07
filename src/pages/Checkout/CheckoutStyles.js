import styled from 'styled-components';

export const ContainerCheckoutStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 5rem;
  background-image: url(/claro.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
  }
`;

export const FormContainerStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SummaryContainerStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(120, 0, 0, 0.5);
  margin-left: 3rem;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`;
