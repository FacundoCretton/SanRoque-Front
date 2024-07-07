import React, { useState } from 'react';
import Modal from './Modal';
import { Caard, CardContainer, Eminem, IconoCard } from './CardStyles';




const Card = ({ icon, title, modalId, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CardContainer className={image ? 'hasImage' : ''} onClick={toggleModal}>
      {icon && <IconoCard>{icon}</IconoCard>}
        {image && <img src={image} alt={title} />} {/* Renderiza la imagen si se proporciona */}
        <Eminem>
            <Caard>

            <p>{title}</p>
            <span>Ver más</span>
            </Caard>

        </Eminem>
                
      </CardContainer>
      {isOpen && (
        <Modal closeModal={toggleModal}>
          <p>Aquí va la información sobre {title}.</p>
        </Modal>
      )}
    </>
  );
};

export default Card;
