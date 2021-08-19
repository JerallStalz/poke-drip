import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, getMorePokemons } from "../actions";
import Pokemon from "./Pokemon";

export default function Pokedex() {
  const dispatch = useDispatch();
  const offset = useSelector((state) => state.offset);
  const display = useSelector((state) => state.display);
  const pokemons = useSelector((state) => state.pokemons);

  console.log(offset, display);
  const getPoke = (offset, display) => dispatch(getPokemons(offset, display));
  const getMorePoke = (offset, display) =>
    dispatch(getMorePokemons(offset, display));
  useEffect(() => {
    getPoke(offset, display);
  }, []);
  return (
    <div className="pokedex">
      <div className="pokedex-container">
        <div className="pokedex-container__pokemons">
          {pokemons.map((pokemon) => (
            <Pokemon pokemon={pokemon} key={pokemon.pokedex} />
          ))}
          <button
            style={{
              height: "40px",
              width: "120px",
              background: "#ffccff",
              fontSize: "24px"
            }}
            onClick={() => getMorePoke(offset, display)}
          >
            Ver mas
          </button>
        </div>
      </div>
    </div>
  );
}
