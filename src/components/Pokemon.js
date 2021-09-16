import React from "react";

export default function Pokemon({ pokemon }) {
  return (
    <div className={`pokemon-container type-${pokemon.types.en.first}`}>
      <div className="pokemon-container__name">
        <p>n.º{pokemon.pokedex}</p>
        <h3>{pokemon.name}</h3>
      </div>
      <div className="pokemon-container__img">
        <img src={pokemon.imageUrl} alt={`Imagen de un ${pokemon.name}`} />
      </div>

      <div className="pokemon-container__types">
        <div className={`background type-${pokemon.types.en.first}`}>
          {pokemon.types.es.first}
        </div>
        {pokemon.types.es.second ? (
          <div className={`background type-${pokemon.types.en.second}`}>
            {pokemon.types.es.second}
          </div>
        ) : null}
      </div>
      <div className="pokemon-container__stats">
        <div>
          <span>{pokemon.stats.hp}</span>
          <p>Vida</p>
        </div>
        <div>
          <span>{pokemon.stats.attack}</span>
          <p>Ataque</p>
        </div>
        <div>
          <span>{pokemon.stats.specialAttack}</span>
          <p>Atq Esp</p>
        </div>
      </div>
    </div>
  );
}
