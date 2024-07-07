import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
  background-color: #c55f5f; 
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8b4513; 
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
