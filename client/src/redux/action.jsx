// import axios from "axios";

// export const GET_POKEMON = "GET_POKEMON";

// export function getPokemon() {
//   return async function (dispatch) {
//     const response = await axios("https://pokeapi.co/api/v2/pokemon");
//     return dispatch({
//       type: "GET_POKEMON",
//       payload: response.data.results,
//     });
//   };
// }

import axios from "axios";

export const GET_POKEMON = "GET_POKEMON";

export function getPokemon() {
  return async function (dispatch) {
    try {
      const response = await axios("https://pokeapi.co/api/v2/pokemon");
      const results = response.data.results;
      const pokemonPromises = results.map(async (pokemon) => {
        const detailsResponse = await axios(pokemon.url);
        const details = detailsResponse.data;
        return {
          name: pokemon.name,
          url: pokemon.url,
          details: details,
        };
      });

      const pokemonData = await Promise.all(pokemonPromises);

      dispatch({
        type: GET_POKEMON,
        payload: pokemonData,
      });
    } catch (error) {
      // Manejar errores aquí si es necesario
    }
  };
}
