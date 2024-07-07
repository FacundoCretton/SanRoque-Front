import CatFood from '../../Hero/HeroImg/CatFood.png';
import DogFood1 from '../../Hero/HeroImg/DogFood1.png';
import DogFood2 from '../../Hero/HeroImg/DogFood2.png';
import Dog from '../../Hero/HeroImg/Perro Canva 2.png';
import Cat from '../../Hero/HeroImg/Gato Canva 2.png';


const textData = {
    dog: {
      image: Dog,
      foods: [
        { id: 'dog-food-1', image: DogFood1, description: 'Comida para perros - Tipo 1' },
        { id: 'dog-food-2', image: DogFood2, description: 'Comida para perros - Tipo 2' },
      ],
    },
    cat: {
      image: Cat,
      foods: [
        { id: 'cat-food-1', image: CatFood, description: 'Comida para gatos - Tipo único' },
      ],
    },
  };


  export default textData;