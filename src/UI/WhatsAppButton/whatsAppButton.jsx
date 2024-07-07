import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import guasap from './guasap.png';

const WhatsAppIcon = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
  cursor: pointer;

  img {
    width: 60px;
    height: auto;
  }
`;

const WhatsAppButton = ({ phoneNumber }) => (
  <WhatsAppIcon href={`https://api.whatsapp.com/send?phone=${phoneNumber}`} target="_blank">
    <img src={guasap} alt="WhatsApp" />
  </WhatsAppIcon>
);

WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired
};

export default WhatsAppButton;
