import { useState } from 'react';
import dotenv from 'dotenv';
//import OpenAI from 'openai';
dotenv.config({ path: '../.env' });



// Esta función debe devolver un objeto con las siguientes propiedades:
// - url: la URL de la imagen generada
// - created_at:

const generateImage = async () => {
    try {
      // Aquí deberías incluir la lógica para llamar a la API de OpenAI
      // Puedes usar la biblioteca 'axios' u otra para realizar la solicitud HTTP
  
      // Ejemplo de llamada a la API de OpenAI (necesitarás tu propia clave de API)
      const author = 'Bearer '+process.env.REACT_APP_AZURE_OPENAI_API_KEY?? '';
      const response = await fetch('https://api.openai.com/v1/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': author,
        },
        // Puedes ajustar el cuerpo según la API de OpenAI
        body: JSON.stringify({
          // ... datos de la solicitud ...
          prompt: Text,
        }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error calling OpenAI API:', error.message);
      throw error;
    }
  };
  
  export default generateImage;