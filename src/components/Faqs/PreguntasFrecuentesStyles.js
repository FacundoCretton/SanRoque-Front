import { motion } from "framer-motion";
import styled from "styled-components";

// const slideInFromStart = keyframes`
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(130%);
//   }
// `;

// const slideInFromEnd = keyframes`
//   0% {
//     transform: translateX(130%);
//   }
//   100% {
//     transform: translateX(0);
//   }
// `;

export const StyledCategoryContainer = styled.div`
  width: 100%; /* Ocupa el ancho completo */
`;

export const StyledAccordionContainer = styled.div`
  width: 100%; /* Ocupa el ancho completo */
  overflow: hidden; /* Oculta el contenido que sobresale */
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;

  h2 {
    font-family: "Comfortaa";
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const CategoryHeader = styled(motion.div)`
  padding: 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  justify-content: ${props => (props.isActive ? 'center' : 'space-between')};
`;

export const CategoryTitle = styled.h3`
  font-family: "Comfortaa";
  font-size: 1.2rem;
`;

export const CategoryIcon = styled.div`
  font-size: 1.2rem;
`;
export const QuestionHeader = styled.div`
  background-color: #F8F8F8;
  border-bottom: 1.8px solid #fff;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 5px;
  font-family: "Noto Sans";
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

`;
export const QuestionTitle = styled.h4`
  font-size: 1rem;
  margin: 0;


`;

export const QuestionContent = styled.div`
  padding: 10px;
  /* background-color: #f0f0f0; */
  border-radius: 5px;
  font-family: "Noto Sans";
  font-size: 1.2rem;
`;

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
`;

export const Answer = styled(motion.p)`
  margin-top: 10px;
  transform-origin: top;
`;

export const AnswerContainer = styled(motion.div)`
  overflow: hidden;
  padding: 10px;
  border-radius: 5px;
  background-color: #f0f0f0; /* Color de fondo */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Sombra */
  font-size: 1rem;
  margin-top: 10px; /* Ajuste de margen superior */
  border: 1.8px solid #f0f0f0; /* Borde */
`;