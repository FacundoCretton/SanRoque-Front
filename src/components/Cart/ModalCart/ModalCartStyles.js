import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  width: 450px;
  height: auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9); /* Soft white background */
  border-radius: 0 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.1); /* Light shadow */
  z-index: 1000;
  @media (max-width: 500px) {
    max-width: 350px;
  }
`;

export const CloseButtonContainerStyled = styled.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: #333; /* Darker text color */
  cursor: pointer;
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 2rem 0;
  & h1 {
    margin-top: 0;
    color: #333; /* Darker text color */
  }
`;

export const MainContainerStyled = styled.div`
  height: 55%;
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 400px;
  margin: 0 auto;
  padding: 1rem;
  padding-left: 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    background: transparent;
  }
  &::-webkit-scrollbar:horizontal {
    display: none;
  }
  @media (max-height: 800px) {
    height: 235px;
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  max-width: 360px;
  background: #f4f4f4; /* Light grey background */
  padding: 1rem;
  border-radius: 15px;
  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    & img {
      width: 60px;
      height: 60px;
    }
    max-width: 320px;
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 190px;
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 1px;
  font-weight: 500;
  font-size: 1rem;
  color: #333; /* Darker text color */
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const TextStyled = styled.p`
  margin: 0;
  color: #666; /* Medium grey text color */
  font-size: 1rem;
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 0.9rem;
  color: #333; /* Darker text color */
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const PriceContainerStyled = styled.div`
  z-index: 1000;
  & p {
    text-align: center;
    margin-bottom: 0;
    color: #333; /* Darker text color */
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const IncrenseStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: ${({ bgColor }) => bgColor || '#008000'};
  border: none;
  font-size: 0.8rem;
  font-weight: 800;
  color: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media screen and (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

export const ButtonSubmitStyled = styled(motion.button)`
  background-color: #333; /* Darker background color */
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #555; /* Slightly lighter hover color */
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
