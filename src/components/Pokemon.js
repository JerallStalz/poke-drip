import React from "react";

export default function Pokemon({ pokemon }) {
  return (
    <div className="pokemon-container">
      <div className="pokemon-container__img">
        <img src={pokemon.imageUrl} alt={`Imagen de un ${pokemon.name}`} />
      </div>
      <div className="pokemon-container__name">
        <p>n.º{pokemon.pokedex}</p>
        <h3>{pokemon.name}</h3>
      </div>
      <div className="pokemon-container__types">
        <div>{pokemon.types.es.first}</div>
        {pokemon.types.es.second ? <div>{pokemon.types.es.second}</div> : null}
      </div>
      <div className="pokemon-container__stats">
        <div>
          <h3>{pokemon.stats.hp}</h3>
          <p>Vida</p>
        </div>
        <div>
          <h3>{pokemon.stats.attack}</h3>
          <p>Ataque</p>
        </div>
        <div>
          <h3>{pokemon.stats.specialAttack}</h3>
          <p>Ataque especial</p>
        </div>
      </div>
    </div>
  );
}
