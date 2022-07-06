import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const FILTER_NAME = "FILTER_NAME";
export const FILTER_STRENGTH = "FILTER_STRENGTH";
export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_BY_TYPES = "FILTER_BY_TYPES";
export const GET_POKEMONS_NAME = "GET_POKEMONS_NAME";
export const POST_POKEMON = "POST_POKEMON"

export function getPokemons() {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/pokemons");
      dispatch({
        type: GET_POKEMONS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
}
export function getTypes() {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/types");
      dispatch({
        type: GET_TYPES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function postPokemon(payload) {
  return async function (dispatch) {
    const json = await axios.post("http://localhost:3001/pokemons", payload);
    console.log(json);
    return json;
  };
}
export function getPokemonsName(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        "http://localhost:3001/pokemons?search=" + name
      );

      dispatch({
        type: GET_POKEMONS_NAME,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByTypes(payload) {
  return {
    type: FILTER_BY_TYPES,
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: FILTER_NAME,
    payload,
  };
}

export function orderByStrength(payload) {
  return {
    type: FILTER_STRENGTH,
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}
