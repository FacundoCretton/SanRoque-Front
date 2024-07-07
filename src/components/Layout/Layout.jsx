import React from "react";
import PropTypes from 'prop-types'; // Importar PropTypes
import { LayoutStyled } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  );
};

// Añadir prop-types para validar la prop `children`
Layout.propTypes = {
  children: PropTypes.node.isRequired, // `node` permite cualquier tipo de React: string, elemento, etc.
};

export default Layout;
