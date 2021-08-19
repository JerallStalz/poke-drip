import {
  MENU_SIDER_HANDLER,
  GET_POKEMONS,
  GET_POKEMONS_ERROR,
  GET_POKEMONS_SUCCESS,
  GET_MORE_POKEMONS,
  GET_MORE_POKEMONS_ERROR,
  GET_MORE_POKEMONS_SUCCESS
} from "../types";
import axios from "axios";

export function menuHandler() {
  return (dispatch) => {
    dispatch({ type: MENU_SIDER_HANDLER });
  };
}

export function getPokemons(offset, display) {
  return async (dispatch) => {
    dispatch({ type: GET_POKEMONS });
    try {
      const pokemons = await axios.get(
        "https://poke-drip-server.herokuapp.com/pokemons/get",
        {
          params: { offset, display }
        }
      );
      dispatch({ type: GET_POKEMONS_SUCCESS, payload: pokemons.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_POKEMONS_ERROR });
    }
  };
}

export function getMorePokemons(offset, display) {
  return async (dispatch) => {
    console.log(offset, display);
    dispatch({ type: GET_MORE_POKEMONS });
    try {
      const pokemons = await axios.get(
        "https://poke-drip-server.herokuapp.com/pokemons/get",
        {
          params: { offset, display }
        }
      );
      console.log(pokemons.data);
      dispatch({ type: GET_MORE_POKEMONS_SUCCESS, payload: pokemons.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_POKEMONS_ERROR });
    }
  };
}
