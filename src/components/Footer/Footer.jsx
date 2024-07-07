import React from 'react';
import { FooterContainer, FooterContent, FooterLogo, FooterMenu, FooterMenuItem, FooterText } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
      <FooterMenu>
          <FooterMenuItem><a href="/politica-privacidad">Política de privacidad</a></FooterMenuItem>
          <FooterMenuItem><a href="/terminos-servicio">Términos de servicio</a></FooterMenuItem>
          <FooterMenuItem><a href="/politica-devolucion">Política de devolución</a></FooterMenuItem>
        </FooterMenu>
        <FooterLogo src="/Logo_13.png" alt="Logo" />
        <FooterMenu>
          <FooterMenuItem><a href="/politica-privacidad">Política de privacidad</a></FooterMenuItem>
          <FooterMenuItem><a href="/terminos-servicio">Términos de servicio</a></FooterMenuItem>
          <FooterMenuItem><a href="/politica-devolucion">Política de devolución</a></FooterMenuItem>
        </FooterMenu>
      </FooterContent>
      <FooterText>

        <p>© 2024 San Roque. Todos los derechos reservados</p>

      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
