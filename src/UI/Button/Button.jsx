import React from "react";
import { StyledButton } from './ButtonStyles';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Button1 = ({
    children,
    radius = '32',
    secondary,
    disabled = false,
    onClick = e => e.preventDefault(),
    padding = '0.5rem 1rem',
    icon = null,
    margin = '0',
    direction = 'down' // añadimos una prop para especificar la dirección del icono
}) => {
    const iconVariants = {
        hover: {
            y: direction === 'down' ? 2 : -2, // cambiamos la dirección del movimiento según la prop
        }
    };

    return (
        <StyledButton
            disabled={disabled}
            onClick={onClick}
            secondary={secondary}
            radius={radius}
            margin={margin}
            whileTap={{ scale: 0.95 }}
            style={{ padding: padding, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <span>{children}</span>
            {icon && (
                <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    style={{ marginLeft: '5px' }} // añadimos un pequeño espacio entre el texto y el icono
                >
                    {direction === 'down' ? <FaChevronDown /> : <FaChevronUp />}
                </motion.div>
            )}
        </StyledButton>
    );
};

export default Button1;
