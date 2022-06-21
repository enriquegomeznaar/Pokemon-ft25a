const axios = require("axios");
const API_URL_POKES = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";

// 1. Get pokemon (imagen, nombre, tipo)
async function getAllApiPokes() {
  const getApiInfo = await axios.get(
    `${API_URL_POKES}`
  );
  //console.log(getApiInfo)
  const apiInfo = getApiInfo.data.results;
  //console.log(apiInfo);
  const poke = apiInfo.map((e) => axios.get(e.url));
  //console.log(poke);
  const urlInfo = await axios.all(poke);
  //console.log(urlInfo)
  const pokesInfo = urlInfo.map(d=>d.data)
  //console.log(pokesInfo)
  const pokesDetail = pokesInfo.map(p=>{
    return {
        id: p.id,
        image: p.sprites.other.home.front_default,
        type: p.types.map(t => t.type.name),
        name: p.name,
        hp: p.stats[0].base_stat,
        strength: p.stats[1].base_stat,
        defense: p.stats[2].base_stat,
        speed: p.stats[5].base_stat,
        height: p.height,
        weight: p.weight
}
});
//console.log(pokesDetail)
return pokesDetail
}

// 2. Get pokemon por id ( .Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
//                      .Número de Pokemon (id)
//                      .Estadísticas (vida, ataque, defensa, velocidad)
//                      .Altura y peso)
// 3. Get pokemon por nombre
// 4. Post pokemon

// module.exports de las funciones creadas
module.exports = {
  getAllApiPokes,
};
