import axios from 'axios';
import { BASE_URL } from "../utils/constants";

//Aquí (en este .js) vamos a guardar las peticiones a la API de usuarios

export const createUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}auth/register`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.errors[0].msg);
  }

  //{ nombre,email,password, esta parte que es el 2do parametro es lo que la API va a recibir como body(que es lo que solicita en este caso) usando un metodo post.
  
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.msg);
  }
};

export const verifyUser = async (email, code) => {
  try {
    const response = await axios.patch(`${BASE_URL}auth/verify`, {
      email,
      code,
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 400) {
      throw new Error('Código de verificación incorrecto.');
    } else {
      throw error;
    }
  }
};
