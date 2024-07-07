import { useState, useEffect, useRef } from "react";
import { NavbarContainer, LogoStyle, NavbarMenuUl, NavbarItem, BarrsMenu, CartStyled } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import CartIcon from "../Cart/CartIcon";
import ModalCart from "../Cart/ModalCart/ModalCart";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeTransparent = scrollTop === 0;
      setIsTransparent(shouldBeTransparent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (target) => {
    let destination = target === "#" ? "/" : target;

    const offset = navbarRef.current.offsetHeight + 1; // Altura de la barra de navegación + 80px adicionales
    const element = document.querySelector(destination);
    const y = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    setMenuOpen(false); // Cerrar el menú después de hacer clic en un enlace
  };

  return (
    <NavbarContainer ref={navbarRef} isTransparent={isTransparent}>
      <ModalCart />
      <LogoStyle src="/Logo_13.png" alt="logo" />
      <NavbarMenuUl isOpen={isMenuOpen}> 
      <NavbarItem isTransparent={isTransparent}>
          <Link to="/#" onClick={() => setMenuOpen(false)}><span>Home</span></Link>
        </NavbarItem>
        <NavbarItem isTransparent={isTransparent} onClick={() => handleNavigation("#productos")}>
          <span>Productos</span>
        </NavbarItem>
        <NavbarItem isTransparent={isTransparent} onClick={() => handleNavigation("#about")}>
        <span>Conocenos</span>
        </NavbarItem>
        <NavbarItem isTransparent={isTransparent} onClick={() => handleNavigation("#contacto")}>
        <span> Contactanos</span>
        </NavbarItem>
      </NavbarMenuUl>
      <CartStyled>
      <CartIcon isTransparent={isTransparent} />
      </CartStyled>
      <BarrsMenu onClick={handleMenuClick}>
        <GiHamburgerMenu />
      </BarrsMenu>
    </NavbarContainer>
  );
};

export default Navbar;
