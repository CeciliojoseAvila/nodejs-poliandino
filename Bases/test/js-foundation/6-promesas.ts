const { httpClietPlugin } = require("../plugins"); // Asegúrate de importar el módulo correcto
/* 
interface User {
  // Define la estructura del objeto de usuario
  id: number;
  name: string;
  // Agrega más propiedades si es necesario
} */

export const getPokemonById = async (id: string | number): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await httpClietPlugin.get(url); // Especifica el tipo de respuesta esperada
  return pokemon.name;
};

