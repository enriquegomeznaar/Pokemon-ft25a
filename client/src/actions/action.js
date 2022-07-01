import axios from "axios";
export const  GET_POKEMONS = "GET_POKEMONS"

export function getPokemons() {
  return async function (dispatch) {
 try {
  console.log('entre a la action get pokemon')
  let json = await axios.get('http://localhost:3001/pokemons');
  console.log(json.data);
  dispatch({
    type: GET_POKEMONS,
    payload: json.data,
  });
 } catch (error) {
   console.log(error.response.data)
 }
  };
}
