const  axios  = require("axios");
const API_URL_POKES = "https://pokeapi.co/api/v2/pokemon";


// 1. Get pokemon (imagen, nombre, tipo)

// async function getAllApiPokes() {
//   try {
//     const apiAllPokes = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");
//     /* console.log('apiAllPokes')
//         console.log(apiAllPokes) */
//     const apiPokes = apiAllPokes.data?.results.map((e) => axios.get(e.url)); //ingreso a todos los urls
//     /* console.log('apiPokes')
//         console.log(apiPokes)  */
//     const pokesUrlInfo = await axios.all(apiPokes); //espero a que se cumplan todas las promises
//     /* console.log('pokesUrlInfo')
//         console.log(pokesUrlInfo.length) */
//     let pokesData = pokesUrlInfo?.map((e) => e.data); // guardo en un array todas las promesas resueltas
//     /* console.log('pokesData')
//         console.log(pokesData.length) */
//     let pokesInfo = pokesData?.map((p) => pokeApiTemplate(p));
//     /* console.log('pokesInfo')
//         console.log(pokesInfo.length) */

//     return pokesInfo;
//   } catch (e) {
//     console.log("error en pokesapi");
//     console.log(e);
//     return e;
//   }
// }
// const pokeApiTemplate = (poke) => {
//   return {
//     id: poke.id,
//     name: poke.name,
//     height: poke.height,
//     weight: poke.weight,
//     hp: poke.stats[0].base_stat,
//     speed: poke.stats[5].base_stat,
//     attack: poke.stats[1].base_stat,
//     defense: poke.stats[2].base_stat,
//     types: poke.types.map((t) => t.type.name),
//     image:
//       poke.sprites.other.dream_world
//         .front_default /* sprites.other["official-artwork"].front_default / / sprites.other.dream_world.front_default */,
//   };
// };
// 2. Get pokemon por id ( .Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
//                      .Número de Pokemon (id)
//                      .Estadísticas (vida, ataque, defensa, velocidad)
//                      .Altura y peso)
// 3. Get pokemon por nombre
// 4. Post pokemon

// module.exports de las funciones creadas
//     async function getAllApiPokes(){
//     try{
//         const apiAllPokes = await axios.get(`${API_URL_POKES}?limit=40`);
//         /* console.log('apiAllPokes')
//         console.log(apiAllPokes) */
//         const apiPokes = apiAllPokes.data?.results.map(e => axios.get(e.url)); //ingreso a todos los urls
//         /* console.log('apiPokes')
//         console.log(apiPokes)  */
//         const pokesUrlInfo = await axios.all(apiPokes) //espero a que se cumplan todas las promises
//         /* console.log('pokesUrlInfo')
//         console.log(pokesUrlInfo.length) */
//         let pokesData = pokesUrlInfo?.map(e => e.data) // guardo en un array todas las promesas resueltas
//         /* console.log('pokesData')
//         console.log(pokesData.length) */
//         let pokesInfo = pokesData?.map( p => pokeApiTemplate(p))
//         /* console.log('pokesInfo')
//         console.log(pokesInfo.length) */

//         return pokesInfo

//     }catch(e){
//         console.log('error en pokesapi')
//         console.log(e)
//         return e
//     }

// }
//          const pokeApiTemplate = (poke)=>{
//     return {
//         id: poke.id,
//         name: poke.name,
//         height: poke.height,
//         weight: poke.weight,
//         hp: poke.stats[0].base_stat,
//         speed: poke.stats[5].base_stat,
//         attack: poke.stats[1].base_stat,
//         defense: poke.stats[2].base_stat,
//         types: poke.types.map(t=> t.type.name),
//         image: poke.sprites.other.dream_world.front_default,/* sprites.other["official-artwork"].front_default / / sprites.other.dream_world.front_default */
//     }
// }
module.exports = {
  getAllApiPokes,
  
};
