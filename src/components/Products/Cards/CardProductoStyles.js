import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  width: 23rem;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  color: #000;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  
  ${({ stock }) =>
    stock
      ? css`
          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }
        `
      : css`
          filter: brightness(60%);
          &:hover {
            transform: none;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            filter: brightness(50%);
          }
        `}
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
  color: #4caf50;
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

export const StockText = styled.span`
  color: red;
  font-weight: 600;
  font-style: italic;
  font-family: "Noto Sans";
  display: flex;
  align-items: center;
`;

export const CardsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
`;

export const StockMessage = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 5px 10px;
  border-radius: 5px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;

`;

export const AccordionHeader = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  margin-top: 1rem;
  text-align: center;
  font-weight: 600;
`;

export const AccordionContent = styled.div`
  padding: 10px;
  background-color: #fafafa;
  border-radius: 5px;
  margin-top: 0.5rem;
`;

export const CustomCardTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  font-weight: 600;
  margin: 1rem 0;
`;

export const SpanTag = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;

  span {
    font-size: 0.8em;
    background-color: #e0e0e0;
    border-radius: 5px;
    padding: 2px 6px;
    margin-left: 0.5rem;
  }
`;
