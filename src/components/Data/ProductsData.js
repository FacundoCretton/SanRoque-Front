import bone from '../Products/ListProductos/icons/bone.gif'
import hair1 from '../Products/ListProductos/icons/Gato1.gif'
import energy from '../Products/ListProductos/icons/heart.gif'
import intestinal from '../Products/ListProductos/icons/intestine.gif'
import taurina from '../Products/ListProductos/icons/bull.gif'
import saludurinario from '../Products/ListProductos/icons/cystitis.gif'
import pielsana from '../Products/ListProductos/icons/Perro9.gif'
import bolasdepelos from '../Products/ListProductos/icons/Gato4.gif'
import cordero1 from '../Products/ListProductos/icons/oveja.png'
import piel from '../Products/ListProductos/icons/veterinary.gif'
import dogplay from '../Products/ListProductos/icons/dogplay.png'
import preotection from '../Products/ListProductos/icons/protection.gif'
import vitaminas from '../Products/ListProductos/icons/vitamins.gif'
import omega3 from '../Products/ListProductos/icons/omega-3.gif'
import yuca1 from '../Products/ListProductos/icons/yuca.png'
import beet from '../Products/ListProductos/icons/beet.gif'

const energia = { nombre: 'Energia y Vitalidad', icono: energy };
const peloBrillante = { nombre: 'Pelo Brillante', icono: hair1 };
const huesosFuertes = { nombre: 'Huesos Fuertes', icono: bone };
const saludIntestinal = { nombre: 'Salud Intestinal', icono: intestinal };
const saludUrinario = { nombre: 'Salud del tracto urinario', icono: saludurinario };
const contieneTaurina = { nombre: 'Taurina', icono: taurina };
const pielSana = { nombre: 'Piel sana y pelo brillante', icono: pielsana };
const bolaPelos = { nombre: 'Control de bolas de pelos', icono: bolasdepelos };
const cordero = { nombre: 'Proteina de Cordero', icono: cordero1 };
const pielSana1 = { nombre: 'Piel sana', icono: piel };
const masaMuscular = { nombre: 'Masa Muscular Magra', icono: dogplay };
const defensas = { nombre: 'Mejora las Defensas', icono: preotection };
const antioxidantes = { nombre: 'Rico en Antioxidantes', icono: vitaminas };
const omega = { nombre: 'Con Omega 3 y 6', icono: omega3 };
const yuca = { nombre: 'Extracto de Yuca', icono: yuca1 };
const remolacha = { nombre: 'Pulpa de Remolacha', icono: beet };

export const products = [
  {
    id: 1,
    name: "Perro adulto de raza grande",
    tags: ["PREMIUM"],    
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory: 'Alimentos',
    price: 100,
    img: "https://ibb.co/jhxx2Tx" ,
    imgDorso: new URL('../../Assets/Productos/Alimentos/1-D.png', import.meta.url).href,
    stock: true,
    beneficios: [energia, peloBrillante, huesosFuertes, saludIntestinal]
  },
  {
    id: 2,
    name: "Perro adulto de raza pequeña ",
    tags: ["PREMIUM"],    
    category: 'Perros',
    desc:'Acà va un texto de prueba',      
    subcategory: 'Alimentos',
    price: 200,
    img: import('../../Assets/Productos/Alimentos/2.png'),
    imgDorso: import('../../Assets/Productos/Alimentos/2-D.png'),
    stock: true,
    beneficios: [energia, peloBrillante, huesosFuertes, saludIntestinal]
  },
  {
    id: 3,
    name: "Gato adulto todas las razas", 
    tags:["URINARIO"],    
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    subcategory: 'Alimentos',
    price: 300,
    img: import('../../Assets/Productos/Alimentos/101.png'),
    imgDorso: import('../../Assets/Productos/Alimentos/101-D.png'),
    stock: true,
    beneficios: [saludUrinario, contieneTaurina, pielSana, bolaPelos]
  },
  {
    id: 4,
    name:"Cachorro todas las razas", 
    tags:["PREMIUM"],      
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory:'Alimentos',
    price: 300,
    img: import('../../Assets/Productos/Alimentos/3.png'),
    imgDorso: import('../../Assets/Productos/Alimentos/3-D.png'),
    stock: false,
    beneficios: [energia, peloBrillante, huesosFuertes, saludIntestinal]
  },
  {
    id: 5,
    name:"Perro adulto de raza pequeña", 
    tags:["HIPOALERGÉNICO"],      
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory: 'Alimentos',
    price: 300,
    img: import('../../Assets/Productos/Alimentos/4.png'),
    imgDorso: import('../../Assets/Productos/Alimentos/4-D.png'),
    stock: false,
    beneficios: [cordero, pielSana1, masaMuscular]
  },
  {
    id: 6,
    name: 'Perro adulto de raza grande',
    tags: ["HIPOALERGÉNICO"],
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory: 'Alimentos',
    price: 300,
    img: import('../../Assets/Productos/Alimentos/5.png'),
    imgDorso: import('../../Assets/Productos/Alimentos/5-D.png'),
    stock: false,
    beneficios: [cordero, pielSana1, masaMuscular]
  },
  {
    id: 7,
    name: 'Perro adulto raza gigante',
    tags: ["PREMIUM"],
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory:'Alimentos',
    price: 300,
    img: import('../../Assets/Productos/Alimentos/6.png'),
    imgDorso: import('../../Assets/Productos/Alimentos/6-D.png'),
    stock: false,
    beneficios: [defensas, peloBrillante, antioxidantes, saludIntestinal]
  },
  {
    id: 8,
    name: 'Gato adulto todas las razas',
    tags: ["PREMIUM"],
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    subcategory: 'Alimentos',
    price: 300,
    img: import('../../Assets/Productos/Alimentos/102.png'),
    imgDorso: import('../../Assets/Productos/Alimentos/102-D.png'),
    stock: false,
  },
  {
    id: 9,
    name: 'Cachorro de raza Gigante',
    tags: ["PREMIUM"],
    category: 'Perros',
    desc:'Perros que en edad adulta van a tener un peso de +40 kg',
    subcategory: 'Alimentos',
    price: 30,
    img: import('../../Assets/Productos/Alimentos/7.png'),
    imgDorso: import('../../Assets/Productos/Alimentos/7-D.png'),
    stock: false,
    beneficios: [peloBrillante, antioxidantes, saludIntestinal]
  },
  {
    id: 10,
    name: 'Advance Adulto. Weight Control',
    tags: ["PREMIUM"],
    category: 'Perros',
    desc:'Perros que en edad adulta van a tener un peso de +40 kg',
    subcategory: 'Alimentos',
    price: 300,
    img: import('../../Assets/Productos/Alimentos/8.png'),
    imgDorso: import('../../Assets/Productos/Alimentos/8-D.png'),
    stock: true,
    beneficios: [omega, yuca, remolacha]
  },
  {
    id: 11,
    name: 'Juguete para perros',
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory:'Juguetes',
    price: 600,
    img:'/animales.jpg',
    stock: false,
  },
  {
    id: 12,
    name: 'Juguete para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    subcategory:'Juguetes',
    price: 700,
    img:'/animales.jpg',
    stock: false,
  },
  {
    id: 13,
    name: 'Cama para perros',
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory:'Camas', 
    price: 800,
    img:'/animales.jpg',
    stock: false,
  },
  {
    id: 14,
    name: 'Cama para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    subcategory:'Camas',
    price: 900,
    img:'/animales.jpg',
    stock: false,
  },
  {
    id: 15,
    name: 'Rascador para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    subcategory: 'Juguetes',
    price: 1000,
    img:'/animales.jpg',
    stock: false,
  },
  {
    id: 16,
    name: 'Rascador para gatos 2',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    subcategory: 'Juguetes',
    price: 1100,
    img:'/animales.jpg',
    stock: false,
  }
];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category] = [...acc[product.category], product];
  return acc;
}, {});

export const getNextProductId = () => {
  const maxId = Math.max(...products.map(product => product.id));
  return maxId + 1;
};
