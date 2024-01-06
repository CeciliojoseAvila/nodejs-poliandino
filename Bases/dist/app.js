"use strict";
/* const express = require('express');
const axios = require('axios');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Configura el uso de Morgan
app.use(morgan('dev'));

// Define una función Factory para crear objetos basados en la respuesta de la API
function createObjectFromApiResponse(response) {
  return {
    id: response.id,
    title: response.title,
    // Agrega más campos según la respuesta de la API
  };
}

// Ruta para obtener datos de la API
app.get('/api/data', async (req, res) => {
  try {
    const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/your-endpoint');
    const dataArray = apiResponse.data.map(item => createObjectFromApiResponse(item));
    res.json(dataArray);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});


 */
/* const { emailTemplate } = require('./js-foundation/template');
//require("./js-foundation/destructuring");
//require("./js-foundation/factory");

/* console.log(emailTemplate) */
/* getUserById(3, function (error, user) {
    if (error) throw new Error(error);
    console.log(user)
});

const getPokemonId = require("./js-foundation/promesas");
getPokemonId().then(response => console.log(response))

*/ 
