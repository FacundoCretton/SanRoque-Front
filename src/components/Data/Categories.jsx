import { FaDog, FaCat } from "react-icons/fa";
import pets from '../../Assets/pets.png';
import alimentos from '../../Assets/SubcategoriasIcons/Todos/pet-food.png';
import accesorios from '../../Assets/SubcategoriasIcons/Todos/pet-grooming.png';
import juguetes from '../../Assets/SubcategoriasIcons/Todos/pet-toy.png';
import cuchas from '../../Assets/SubcategoriasIcons/Todos/petshelter.png';
import camas from '../../Assets/SubcategoriasIcons/Todos/pet-bed.png';

import alimentogatos from '../../Assets/SubcategoriasIcons/Gatos/alimento-gato.png';
import accesoriosgatos from '../../Assets/SubcategoriasIcons/Gatos/accesorio-gato.png';
import juguetesgatos from '../../Assets/SubcategoriasIcons/Gatos/juguete-gato.png';
import cuchasgatos from '../../Assets/SubcategoriasIcons/Gatos/cucha-gato.png';
import camasgatos from '../../Assets/SubcategoriasIcons/Gatos/cama-gato.png';
import rascadoresgatos from '../../Assets/SubcategoriasIcons/Gatos/rascador-gato.png';

import alimentoperros from '../../Assets/SubcategoriasIcons/Perros/alimento-perro.png';
import accesoriosperros from '../../Assets/SubcategoriasIcons/Perros/accesorios-dog.png';
import juguetesperros from '../../Assets/SubcategoriasIcons/Perros/dog-toy.png';
import cuchasperros from '../../Assets/SubcategoriasIcons/Perros/dog-house.png';
import camasperros from '../../Assets/SubcategoriasIcons/Perros/pet-bed.png';

export const Categories = [
  {
    id: 1,
    name: 'Todos',
    icon: <img src={pets} alt="Pets" />,
    category: 'Todos',
    subcategories: 
    [
      {
        id:101,
        name:"Alimentos",
        icon: <img src={alimentos} alt="Alimentos" />,

      }, 
      {
        id: 102,
        name:'Accesorios',
        icon: <img src={accesorios} alt="Accesorios" />,
      }, 
      {
        id:103,
        name:'Juguetes',
        icon: <img src={juguetes} alt="Juguetes" />,
      }, 
        
      {
        id:104,
        name:'Cuchas',
        icon: <img src={cuchas} alt="Cuchas" />,
      }, 
      {
        id:105,
        name:'Camas',
        icon: <img src={camas} alt="Camas" />,
      }, 
      {
        id:106,
        name:'Rascadores',
        icon: <img src={rascadoresgatos} alt="Rascadores" />,

      },
    ],

  },
  {
    id: 2,
    name: 'Perros',
    icon: <FaDog/>,
    category: 'Perros',
    subcategories:     [
      {
        id:201,
        name:"Alimentos",
        icon: <img src={alimentoperros} alt="Alimentos" />,

      }, 
      {
        id: 202,
        name:'Accesorios',
        icon: <img src={accesoriosperros} alt="Accesorios" />,
      }, 
      {
        id:203,
        name:'Juguetes',
        icon: <img src={juguetesperros} alt="Juguetes" />,
      }, 
        
      {
        id:204,
        name:'Cuchas',
        icon: <img src={cuchasperros} alt="Cuchas" />,

      }, 
      {
        id:205,
        name:'Camas',
        icon: <img src={camasperros} alt="Camas" />,
      }, 
    
    ],

 },
  {
    id: 3,
    name: 'Gatos',
    icon: <FaCat/>,
    category: 'Gatos',
    subcategories:     
    [
      {
        id:301,
        name:"Alimentos",
        icon: <img src={alimentogatos} alt="Alimentos" />,
      }, 
      {
        id: 302,
        name:'Accesorios',
        icon: <img src={accesoriosgatos} alt="Accesorios" />,
      }, 
      {
        id:303,
        name:'Juguetes',
        icon: <img src={juguetesgatos} alt="Juguetes" />,
      }, 
        
      {
        id:304,
        name:'Cuchas',
        icon: <img src={cuchasgatos} alt="Cuchas" />,
      }, 
      {
        id:305,
        name:'Camas',
        icon: <img src={camasgatos} alt="Camas" />,
      }, 
      {
        id:306,
        name:'Rascadores',
        icon: <img src={rascadoresgatos} alt="Rascadores" />,
      },
    ],

  },
];
