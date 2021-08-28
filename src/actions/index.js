import {
  MENU_SIDER_HANDLER,
  GET_POKEMONS,
  GET_POKEMONS_ERROR,
  GET_POKEMONS_SUCCESS,
  GET_MORE_POKEMONS_ERROR,
} from "../types";
import axios from "axios";

export function menuHandler() {
  return (dispatch) => {
    dispatch({ type: MENU_SIDER_HANDLER });
  };
}

export function getPokemons(offset, display, loading, realOffset) {
  return async (dispatch) => {
    dispatch({ type: GET_POKEMONS });
    if (loading === true) {
      return dispatch({ type: GET_MORE_POKEMONS_ERROR });
    } else if (realOffset !== 0 && loading === null) {
      return dispatch({ type: GET_POKEMONS_ERROR });
    } else {
      try {
        const pokemons = await axios.get(
          "https://poke-drip-server.herokuapp.com/pokemons/get",
          {
            params: { offset, display },
          }
        );
        dispatch({ type: GET_POKEMONS_SUCCESS, payload: pokemons.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: GET_POKEMONS_ERROR });
      }
    }
  };
}
