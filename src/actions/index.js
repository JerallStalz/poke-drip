import {
  MENU_SIDER_HANDLER,
  GET_POKEMONS,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
  CLEAN_POKEMONS,
  SELECT_REGION,
  GET_REGION,
  GET_REGION_SUCCESS,
  GET_REGION_ERROR,
  SEARCH_POKEMON,
  SEARCH_POKEMON_ERROR,
  SEARCH_POKEMON_SUCCESS,
} from "../types";

import instance from "../config/instance";

export function menuHandler() {
  return (dispatch) => {
    dispatch({ type: MENU_SIDER_HANDLER });
  };
}

export function getPokemons(display, offset, loading) {
  return async (dispatch) => {
    if (loading === false) {
      dispatch({ type: GET_POKEMONS });
      try {
        const pokemons = await instance.get("pokemons/get", {
          params: { display, offset },
        });
        dispatch({ type: GET_POKEMONS_SUCCESS, payload: pokemons.data });
      } catch (error) {
        dispatch({ type: GET_POKEMONS_ERROR });
      }
    }
  };
}

export function getPokemonsRegion(display, offset) {
  return async (dispatch) => {
    dispatch({ type: GET_REGION });
    try {
      const pokemones = await instance.get("pokemons/get", {
        params: { display, offset },
      });
      dispatch({ type: GET_REGION_SUCCESS, payload: pokemones.data });
    } catch (error) {
      dispatch({ type: GET_REGION_ERROR });
    }
  };
}

export function cleanPokemons() {
  return (dispatch) => {
    dispatch({ type: CLEAN_POKEMONS });
  };
}

export function pickRegion(regionOffset) {
  return (dispatch) => {
    dispatch({ type: SELECT_REGION, payload: regionOffset });
  };
}

export function searchPokemon(pokemonName) {
  return async (dispatch) => {
    dispatch({ type: SEARCH_POKEMON });
    try {
      const pokemonLower = pokemonName.toLowerCase();
      const pokemon = await instance.get("/pokemons/search", {
        params: { pokemonName: pokemonLower },
      });
      if( pokemon.data.error ) {
      dispatch({ type: SEARCH_POKEMON_ERROR });
      } else {
      dispatch({ type: SEARCH_POKEMON_SUCCESS, payload: pokemon.data });
      }
    } catch (e) {
      dispatch({ type: SEARCH_POKEMON_ERROR });
    }
  };
}
