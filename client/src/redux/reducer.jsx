import { GET_POKEMON, GET_POKEMON_BY_NAME } from "./action";

let inicialState = { allPokemon: [] };

function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        allPokemon: action.payload,
      };
    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        allPokemon: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
