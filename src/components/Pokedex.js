import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../actions";
import Pokemon from "./Pokemon";

export default function Pokedex() {
  const dispatch = useDispatch();
  const displayDefault = useSelector((state) => state.displayDefault);
  const offset = useSelector((state) => state.offset);
  const loading = useSelector((state) => state.loading);
  const display = useSelector((state) => state.display);
  const pokemons = useSelector((state) => state.pokemons);

  const getPoke = (offset, display, loading, realOffset) =>
    dispatch(getPokemons(offset, display, loading, realOffset));

  useEffect(() => {
    getPoke(0, displayDefault, null, offset);
    console.log("ejecutando");
  }, []);

  return (
    <div className="pokedex">
      <div className="pokedex-container">
        <div className="pokedex-container__pokemons">
          {pokemons.map((pokemon) => (
            <Pokemon pokemon={pokemon} key={pokemon.pokedex} />
          ))}
        </div>
        <div className="pokedex-container__button-container">
          <button
            className={loading ? "disable" : "btn"}
            onClick={() => getPoke(offset, display, loading)}
          >
            Cargar más Pokémons
          </button>
        </div>
      </div>
    </div>
  );
}
