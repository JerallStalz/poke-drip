import {
  MENU_SIDER_HANDLER,
  GET_POKEMONS,
  GET_POKEMONS_ERROR,
  GET_POKEMONS_SUCCESS,
  GET_MORE_POKEMONS,
  GET_MORE_POKEMONS_ERROR,
  GET_MORE_POKEMONS_SUCCESS
} from "../types";

const initialState = {
  posts: [],
  notice: [
    {
      name:
        "Estos son todos los juegos de Pokémon que están actualmente en desarrollo",
      category: "Noticia",
      url:
        "https://images.nintendolife.com/505ca16081ae5/best-pokemon-games.original.jpg"
    },
    {
      name: "Pokémon Unite (versión Android/iOS)",
      category: "Noticia",
      url:
        "https://esports.as.com/2021/07/23/pokemon/Pokemon-Unite_1485461460_725471_1440x600.png"
    },
    {
      name: "Secuela de Detective Pikachu",
      category: "Noticia",
      url: "https://images8.alphacoders.com/969/thumb-1920-969049.png"
    },
    {
      name: "Nintendo Switch (Diseño OLED)",
      category: "Noticia",
      url:
        "https://www.nintenderos.com/wp-content/uploads/2021/08/slider124.png"
    },
    {
      name: "Nuevo Remake de Spirit",
      category: "Noticia",
      url:
        "https://www.nintenderos.com/wp-content/uploads/2021/08/slider131.png"
    }
  ],
  displayDefault: 12,
  offset: 0,
  display: 12,
  pokemons: [],
  error: false,
  loading: false,
  menu: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MENU_SIDER_HANDLER:
      return {
        ...state,
        menu: !state.menu
      };
    case GET_POKEMONS:
      return {
        ...state,
        loading: true,
        offset: 0,
        display: 12
      };
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
        offset: state.offset + state.displayDefault,
        display: state.display + state.displayDefault
      };
    case GET_POKEMONS_ERROR:
      return {
        ...state,
        loading: false
      };
    case GET_MORE_POKEMONS:
      return {
        ...state,
        loading: true
      };
    case GET_MORE_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons: [...state.pokemons, ...action.payload],
        offset: state.offset + state.displayDefault,
        display: state.display + state.displayDefault
      };
    default:
      return state;
  }
}
