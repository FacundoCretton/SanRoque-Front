import React from 'react';
import { IncrenseStyled } from './IncrenseStyles';

const Increase = ({
  children,
  bgColor,
  disabled = false,
  onClick = e => e.preventDefault(),
  size = "30px", 
borderRadius= "10px",
}) => {
  return (
    <IncrenseStyled
      whileTap={{ scale: 0.95 }}
      bgColor={bgColor}
      disabled={disabled}
      onClick={onClick}
      style={{ width: size, height: size, borderRadius: borderRadius  }} 

    >
      {children}
    </IncrenseStyled>
  );
};

export default Increase;