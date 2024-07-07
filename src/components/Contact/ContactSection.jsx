// ContactSection.js
import React from 'react';
import { ContactForm, ContactIcons } from './ContactComponent';
import { ContactContainer, ContactFormContainer, ContactWrapper, Description, FilaSuperior, InfoDiv, InformacionContacto, MapContainer, Title, TitleBackground, TitleSection } from './ContactStyles';
import { FaAt, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';


const ContactSection = () => {
  return (
    <>

    <ContactWrapper id='contacto'>
    <FilaSuperior>
        <TitleSection>Contáctanos</TitleSection>
        <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iure, sunt nulla porro qui numquam adipisci minima impedit odio similique, totam doloremque eos veritatis nesciunt rerum molestiae, quo nisi culpa!</Description>
    </FilaSuperior>
      <ContactContainer>

        
        <InformacionContacto>
            <h2>Información de contacto</h2>
            <InfoDiv>
              <FaAt className='InfoIcon' />
              <span>ventaslp.sanroque@gmail.com</span>
            </InfoDiv>
            <InfoDiv>
              <FaMapMarkerAlt className='InfoIcon' />
              <span>Dirección de ejemplo, Ciudad</span>
            </InfoDiv>
            <InfoDiv>
              <FaPhone className='InfoIcon' />
              <span>(123) 456-7890</span>
            </InfoDiv>
        </InformacionContacto>
        
      </ContactContainer>
      <MapContainer>
        
        <ContactFormContainer>
            
            <TitleBackground><Title><FaEnvelope style={{ marginRight: '5px' }} />
            Escribinos!</Title>
            </TitleBackground>
          <ContactForm />
        </ContactFormContainer>
        
        <ContactIcons />
      </MapContainer>
    </ContactWrapper>
    </>
  );
};

export default ContactSection;
