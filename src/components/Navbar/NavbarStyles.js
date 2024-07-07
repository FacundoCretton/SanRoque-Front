import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
// rgba(67, 83, 41, 0.9)
export const NavbarContainer = styled.header`
  /* background-color:#ffd700 ; */

  background-color: ${({ isTransparent }) => (isTransparent ? "#dbc4ff" : "rgba(220, 204, 255, 0.4)")};

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin: auto;
  font-family: "Poppins";
  font-weight: 600;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;



export const LogoStyle = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin: auto;
`;

export const NavbarMenu = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavbarMenuUl = styled.ul`
  display: flex;
  margin: auto;
  padding: 0px 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 821px) {
    display: none;

    ${(props) =>
      props.isOpen &&
      css`
        position: absolute;
        display: flex;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: rgba(67, 83, 41, 0.9);
        flex-direction: column;
        align-items: center;
        padding: 10px 0;
        z-index: 10000;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
        
        ${NavbarItem} {
          margin: 10px 0;
        }
      `}
  }
`;

export const NavbarItem = styled.li`
    display: flex;
    margin: auto;
    padding: 0px 20px;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    span {
        position: relative;
        padding: 10px 15px;
        display: inline-block;
        text-decoration: none;
        font-size: 1rem;
        color:${({ isTransparent }) => (isTransparent ?"#f2f2f2":"#777" )};        
        transition: color 0.6s ease, background-color 0.3s ease;

        &:hover {
            color: ${({ isTransparent }) => (isTransparent ? "white" : "#ffd700 ")};
            background-color: ${({ isTransparent }) =>
                isTransparent ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.3)"};
            border-radius: 5px;
        }
    }
`;




export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;
  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const CartStyled = styled.div`
  position: relative;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin: auto;

  span {
    position: absolute;
    top: 0;
    height: 20px;
    width: 20px;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: orange;
    font-size: 0.9rem;
  }

  .cart-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    z-index: 1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    width: 250px; 
  }

  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  .cart-items {
    margin-bottom: 10px;
  }

  .cart-actions {
    text-align: right;
  }

  .cart-total {
    font-weight: bold;
  }

  .cart-product {
    margin-bottom: 5px;
  }

  .cart-buttons button {
    margin-left: 5px;
  }
`;
export const ButtonBase = css`
  position: relative;
  padding: 10px 15px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: ${props => (props.isActive ? "#C2DAAF" : "rgba(107, 142, 35, 0.6)")};

  &:hover {
    background-color: ${props => (props.isActive ? "#AFCF94" : "rgba(107, 142, 35, 0.8)")};
  }
`;

export const ActiveButton = css`
  background-color: #AFCF94;
  &:hover {
    background-color: #C2DAAF;
  }
`;

// export const CustomButton = styled.button`
//   ${ButtonBase}
//   ${props => props.isActive && ActiveButton}
// `;

export const BarrsMenu = styled.div`
  display: none;

  @media (max-width: 821px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    color: #fff;
  }
`;