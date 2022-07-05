import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const FILTER_NAME = "FILTER_NAME";
export const FILTER_STRENGTH = "FILTER_STRENGTH";
export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_BY_TYPES = "FILTER_BY_TYPES";

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
      console.log("json")
      dispatch({
        type: GET_TYPES,
        payload: json.data,
      });
      {console.log(json)}
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
