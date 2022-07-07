import {
  FILTER_CREATED,
  FILTER_NAME,
  FILTER_STRENGTH,
  GET_POKEMONS,
  GET_TYPES,
  FILTER_BY_TYPES,
  GET_POKEMONS_NAME,
  POST_POKEMON,
} from "../actions/action";
const initialState = {
  pokemons: [],
  allPokemons: [],
  pokemonTypes: [],
  details: [],
  filters: [],
};

export default function rootReducer(state = { initialState }, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        pokemonTypes: action.payload,
      };
    case POST_POKEMON:
      return {
        ...state,
      };
    case FILTER_BY_TYPES:
      const allPokemons = state.allPokemons;
      const filterTypes =
        action.payload === "default"
          ? allPokemons
          : allPokemons.filter((t) =>
              t.type
                ? t.type.includes(action.payload)
                : t.pokemonTypes.map((t) => t.name).includes(action.payload)
            );
      return {
        ...state,
        pokemons: filterTypes,
      };
    case GET_POKEMONS_NAME:
      return {
        ...state,
        allPokemons: action.name,
      };
    case FILTER_NAME:
      const sortArr =
        action.payload === "asc"
          ? state.allPokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
          : state.allPokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: action.payload === "default" ? state.allPokemons : sortArr,
      };

    case FILTER_STRENGTH:
      const strArr =
        action.payload === "stronger"
          ? state.allPokemons.sort(function (a, b) {
              if (a.strength > b.strength) {
                return -1;
              }
              if (a.strength < b.strength) {
                return 1;
              }
              return 0;
            })
          : state.allPokemons.sort(function (a, b) {
              if (a.strength > b.strength) {
                return 1;
              }
              if (a.strength < b.strength) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: action.payload === "default" ? state.allPokemons : strArr,
      };
    case FILTER_CREATED:
      const filterCreated =
        action.payload === "created"
          ? state.allPokemons.filter((el) => el.createdInDb)
          : state.allPokemons.filter((el) => !el.createdInDb);
      return {
        ...state,
        pokemons:
          action.payload === "default" ? state.allPokemons : filterCreated,
      };

    default:
      return state;
  }
}
