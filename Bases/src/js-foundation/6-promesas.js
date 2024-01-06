const { http } = require("../plugins");

const getPokemonId = async () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const pokemon = await http.get(url);
  return pokemon;
};

module.exports = getPokemonId;
