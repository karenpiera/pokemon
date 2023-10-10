/* eslint-disable react/prop-types */

// function Card({ personaje }) {
//   const { abilities, name } = personaje;

//   console.log(personaje);

//   return (
//     <div>
//       <h2>{name} </h2>
//       <h3>{abilities} </h3>
//     </div>
//   );
// }

// export default Card;

import "./Card.css";

function Card({ name, details }) {
  const abilities = details.abilities;
  const frontDefaultImage =
    details.sprites.other["official-artwork"].front_default;
  return (
    <div className="card-container">
      <div className="card">
        <h2>{name}</h2>
        <div className="image-container">
          {frontDefaultImage && (
            <img
              src={frontDefaultImage}
              alt={`Imagen de ${name}`}
              className="pokemon-image"
            />
          )}
        </div>
        <div className="abilities">
          {abilities.map((abilityData, index) => (
            <div key={index} className="ability">
              <p> {abilityData.ability.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
