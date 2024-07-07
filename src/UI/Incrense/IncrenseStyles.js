import styled from 'styled-components';
import { motion } from 'framer-motion';

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