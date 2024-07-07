import { css, styled } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
    /* padding: 0.5rem 1rem; */
    border-radius: ${({ radius }) => `${radius}px`};
    outline: none;
    border: none;
    cursor: pointer;
    font-family: "Quicksand", sans-serif;
    /* text-transform: uppercase; */
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    background-color: #1976d2;
    transition: background-color 0.3s ease;

    &:hover {
        background-color:#5e97f6;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${({ primary }) => primary && css`
        background-color: #4caf50;

        &:hover {
            background-color: #388e3c;
        }
    `}
    
`;
