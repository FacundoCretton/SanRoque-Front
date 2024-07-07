import React, { useState } from 'react';
import {
  CarouselContainer,
  CarouselSlide,
  InfoContainer,
  LeftContainer,
  RightContainer,
  AnimatedPetImage as StyledAnimatedPetImage,
  InfoTitle,
  InfoDescription,
  FoodContainer,
  FoodImage,
} from './HeroStyles';
import textData from '../Data/FirstSlideData/textData';

// Estilos reutilizables
const dogImageStyles = { width: 90, height: 120 };
const catImageStyles = { width: 90, height: 120, marginTop: 24 };

// Componente reutilizable de imagen animada
const AnimatedPetImage = ({ animal, onClick, active, ...props }) => {
  return (
    <StyledAnimatedPetImage
      src={textData[animal].image}
      alt={animal}
      onClick={() => onClick(animal)}
      style={{
        ...(animal === 'dog' ? dogImageStyles : catImageStyles),
      }}
      className={active ? 'active' : ''}

      {...props}
    />
  );
};



// Componente reutilizable de la sección de información del animal
const AnimalInfoSection = ({ animal, selectedFood }) => {
  return (
    <RightContainer>
      <InfoTitle>
        {animal ? textData[animal]?.title : 'Alimento para Perros y Gatos'}
      </InfoTitle>
      <InfoDescription>
        {animal && selectedFood
          ? textData[animal]?.foods.find((food) => food.id === selectedFood)?.description
          : null}
      </InfoDescription>
    </RightContainer>
  );
};



const InteractiveCarousel = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isInfoLocked, setIsInfoLocked] = useState(false);
  
  const handleOutsideClick = (event) => {
    const infoContainer = event.target.closest('.InfoContainer');
    if (isInfoLocked && !infoContainer) {
      setIsInfoLocked(false);
    }
  };
  // Funciones para manejar los cambios de estado
  const handleAnimalSelection = (animal) => {
    setSelectedAnimal(animal);
    setIsInfoLocked(true);
  };


  const handleFoodSelection = (foodId) => {
    setSelectedFood(foodId);
  };

  // Funciones para controlar el comportamiento del carousel
  const handleInfoClick = () => {
    if (!isInfoLocked) {
      setIsInfoLocked(true);
    }
  };

  return (
    <CarouselContainer onClick={handleOutsideClick}>
      <CarouselSlide>
        <InfoContainer onClick={handleInfoClick}>
          <LeftContainer>
            {selectedAnimal ? (
              <FoodContainer>
                {textData[selectedAnimal]?.foods.map((food) => (
                  <FoodImage
                    key={food.id}
                    src={food.image}
                    alt={food.description}
                    onClick={() => handleFoodSelection(food.id)}
                    selected={selectedFood === food.id}
                  />
                ))}
              </FoodContainer>
            ) : null}
          </LeftContainer>
          <AnimalInfoSection animal={selectedAnimal} selectedFood={selectedFood} />
        </InfoContainer>
        <RightContainer>
          <AnimatedPetImage
            animal="dog"
            active={selectedAnimal === 'dog'}
            onClick={handleAnimalSelection}
          />
          <AnimatedPetImage
            animal="cat"
            active={selectedAnimal === 'cat'}
            onClick={handleAnimalSelection}
          />
        </RightContainer>
      </CarouselSlide>
    </CarouselContainer>
  );
};

export default InteractiveCarousel;
