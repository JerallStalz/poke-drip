import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, cleanPokemons } from "../actions";
import Pokemon from "./Pokemon";
import PokedexSearchBar from "./PokedexSearchBar";
import pokeball from "../assets/pokeball.png";

export default function Pokedex() {
  const dispatch = useDispatch();

  // Redux States
  const display = useSelector((state) => state.display);
  const offset = useSelector((state) => state.offset);
  const loading = useSelector((state) => state.loading);
  const pokemons = useSelector((state) => state.pokemons);
  const loadingMore = useSelector( state => state.loadingMore)

  // Redux Functions
  const getMore = (display, offset, loading) =>
    dispatch(getPokemons(display, offset, loading));
  const cleanPoke = () => dispatch(cleanPokemons());
  return (
    <div className="pokedex">
      <div className="pokedex-container">
        <PokedexSearchBar />
        {loading ? (
          <div className="pokeball__container">
            <img src={pokeball} />
          </div>
        ) : null}
        <div className={`pokedex-container__pokemons ${loading ? 'loading' : ''}`}>
          { pokemons === 'error'
          ? (
            <div className="error-pokedex"><h1>No se encontro el pokemon que buscaba, intente de nuevo</h1></div>
          )
          : pokemons.map((pokemon) => (
            <Pokemon pokemon={pokemon} key={pokemon.pokedex} />
          ))
        }
        </div>
        {loadingMore ? (
          <div className="pokeball__container-more">
            <img src={pokeball} />
          </div>
        ) : null}
        <div className="pokedex-container__button-container">
          <button
            className={loading ? "disable" : "btn"}
            onClick={() => getMore(display, offset, loading)}
          >
            Cargar más Pokémons
          </button>
        </div>
      </div>
    </div>
  );
}
