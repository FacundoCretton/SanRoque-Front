// import axios from 'axios';
// import { products } from './ProductsData';

// const validateProducts = (products) => {
//     return products.every(product => 
//         product.name && 
//         product.category && 
//         product.price && 
//         product.stock !== undefined && 
//         product.desc && 
//         product.img && 
//         typeof product.price === 'number' && 
//         typeof product.stock === 'boolean' && 
//         typeof product.img === 'string'
//     );
// };



// export const sendProductsToBackend = async (products) => {
//     if (!validateProducts(products)) {
//         console.error("Validation failed: Some products are missing required fields or have invalid data.");
//         return;
//     }

//     try {
//         const response = await axios.post("http://localhost:8080/api/products/bulk", { products });
//         console.log("Productos enviados con éxito:", response.data);
//     } catch (error) {
//         console.error("Error al enviar los productos:", error.response ? error.response.data : error.message);
//     }
// };

// sendProductsToBackend(products);

