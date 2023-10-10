import { GET_POKEMON } from "./action";

let inicialState = { allPokemon: [] };

function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        allPokemon: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
