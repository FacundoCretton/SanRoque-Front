import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  width: 85%;

  background: transparent;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 240px;
`;

export const ProductTitleStyled = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  margin-bottom: 2px;
  font-weight: 500;
`;

export const TextStyled = styled.h3`
  margin: 0;
  color: #666;
  font-size: 1rem;
`;

export const PriceStyled = styled.span`
  font-weight: 700;
  font-size: 0.7rem;
  line-height: 2rem;
  color: #666;
 
`;

export const QuantityContainerStyled = styled.span`
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: block;

  }
`;
