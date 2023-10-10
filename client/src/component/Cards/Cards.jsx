/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Card from "../Card/Card";

function Cards({ allPokemon }) {
  console.log(allPokemon);
  return (
    <div>
      {allPokemon.map((pokemon) => (
        <Card
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
          details={pokemon.details}
        />
      ))}
    </div>
  );
}

export default Cards;
