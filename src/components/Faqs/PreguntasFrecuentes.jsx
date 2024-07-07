import React, { useState } from "react";
import FaqsData from "../Data/Faqs";
import {
  Container,
  CategoryHeader,
  QuestionContent,
  QuestionHeader,
  AccordionContent,
  Answer,
  AnswerContainer,
  StyledCategoryContainer,
  StyledAccordionContainer,
  CategoryTitle,
  CategoryIcon,
  QuestionTitle,
} from "./PreguntasFrecuentesStyles";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { motion } from "framer-motion";

export const PreguntasFrecuentes = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleCategoryAccordion = (index) => {
    setActiveCategoryIndex(activeCategoryIndex === index ? null : index);
  };

  const toggleQuestionAccordion = (index) => {
    setActiveQuestionIndex(activeQuestionIndex === index ? null : index);
  };

  return (
<Container>
  <h2>Preguntas Frecuentes</h2>
  <div>
    {FaqsData.map((categoria, categoryIndex) => (
      <div key={categoryIndex}>
        <StyledCategoryContainer>
          <CategoryHeader onClick={() => toggleCategoryAccordion(categoryIndex)} isActive={activeCategoryIndex === categoryIndex}>
          <CategoryTitle
                  as={motion.h3} // Usamos motion.h3 como el elemento renderizado para CategoryTitle
                  initial="hidden" // Establecemos la animación inicial
                  animate={activeCategoryIndex === categoryIndex ? "visible" : "hidden"} // Controlamos la animación basada en isActive
                  variants={{ // Definimos las variantes de la animación
                    hidden: { x: "0%" },
                    visible: { x: "-50%", transition: { duration: 1.2 } }
                  }}
                >
                  {categoria.titulo}
                </CategoryTitle>
            <CategoryIcon> {activeCategoryIndex === categoryIndex ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</CategoryIcon>
          </CategoryHeader>
        </StyledCategoryContainer>
        <StyledAccordionContainer>
          <AccordionContent
            animate={{ height: activeCategoryIndex === categoryIndex ? "auto" : 0, opacity: activeCategoryIndex === categoryIndex ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            {categoria.preguntas.map((pregunta, questionIndex) => (
              <QuestionContent key={questionIndex}>
              <QuestionHeader onClick={() => toggleQuestionAccordion(questionIndex)}>
              <QuestionTitle                  
                as={motion.h4}
                initial="hidden"
                animate={activeCategoryIndex === categoryIndex ? "visible" : "hidden"}
                variants={{
                hidden: { x: "0%" },
                visible: { x: "400%", transition: { duration: 1.2 } }
            }}
              >{pregunta.pregunta}
              </QuestionTitle>
                {activeQuestionIndex === questionIndex ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </QuestionHeader>
                {activeQuestionIndex === questionIndex && (
                  <AnswerContainer>
                    <Answer>{pregunta.respuesta}</Answer>
                  </AnswerContainer>
                )}
              </QuestionContent>
            ))}
          </AccordionContent>
        </StyledAccordionContainer>
      </div>
    ))}
  </div>
</Container>

  );
};