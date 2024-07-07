import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 100%;
  max-width: 400px;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  margin-bottom: 1rem;
  color: #B5651D; 
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
  max-height: 440px;
  margin: 0 auto;
  overflow-y: auto;
  scrollbar-color: #B5651D #2e2e2e;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #2e2e2e;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #B5651D;
    border-radius: 20px;
  }

  @media (max-height: 800px) {
    max-height: 270px;
  }

  @media (max-width: 1500px) {
    width: 100%;
  }
`;

export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #B5651D; 
`;

export const SubtotalContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
`;

export const SubtotalTitleStyled = styled.p`
  font-weight: 700;
`;

export const SubtotalPriceStyled = styled.p`
  font-weight: 700;
`;

export const ShippingContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
`;

export const ShippingTitleStyled = styled.p`
  font-weight: 700;
`;

export const ShippingPriceStyled = styled.p`
  font-weight: 700;
`;

export const TotalContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
`;

export const TotalTitleStyled = styled.p`
  font-weight: 700;
`;

export const TotalPriceStyled = styled.p`
  font-weight: 700;
`;






export const HrStyled = styled.hr`
  margin: 1rem 0;
  border: none;
  height: 2px;
  background-color: #B5651D;
`;



export const PClearStyled = styled.p`
  color: #B5651D;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
`;