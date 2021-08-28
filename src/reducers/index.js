import {
  MENU_SIDER_HANDLER,
  GET_POKEMONS,
  GET_POKEMONS_ERROR,
  GET_POKEMONS_SUCCESS,
  GET_MORE_POKEMONS,
  GET_MORE_POKEMONS_ERROR,
  GET_MORE_POKEMONS_SUCCESS,
} from "../types";

const initialState = {
  posts: [],
  notice: [
    {
      id: 1,
      name: "Juegos de Pokémon que están actualmente en desarrollo",
      category: "Noticia",
      url: "https://images.nintendolife.com/505ca16081ae5/best-pokemon-games.original.jpg",
    },
    {
      id: 2,
      name: "Pokémon Unite (versión Android/iOS)",
      category: "Noticia",
      url: "https://media.vandal.net/i/640x360/8-2021/2021891145065_1.jpg",
    },
    {
      id: 3,
      name: "Secuela de Detective Pikachu",
      category: "Noticia",
      url: "https://images8.alphacoders.com/969/thumb-1920-969049.png",
    },
    {
      id: 4,
      name: "Nintendo Switch (Diseño OLED)",
      category: "Noticia",
      url: "https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/07/E5nXkxtWEAER98n.jpg?fit=1200%2C581&ssl=1",
    },
    {
      id: 5,
      name: "Blissey ya está disponible en Pokémon UNITE",
      category: "Noticia",
      url: "https://assets.pokemon.com/assets/cms2-es-es/img/video-games/_tiles/pokemon-unite/08182021/pokemon-unite-169.jpg",
    },
    {
      id: 6,
      name: "La aplicación TV Pokémon ya está disponible en Nintendo Switch",
      category: "Noticia",
      url: "https://assets.pokemon.com/assets/cms2-es-es/img/watch-pokemon-tv/_tiles/pokemon-tv-app/nintendo-switch/nintendo-switch-169-es.jpg",
    },
  ],
  displayDefault: 12,
  offset: 0,
  display: 12,
  pokemons: [],
  error: false,
  loading: false,
  menu: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MENU_SIDER_HANDLER:
      return {
        ...state,
        menu: !state.menu,
      };
    case GET_POKEMONS:
      return {
        ...state,
        loading: true,
      };
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload],
        loading: false,
        offset: state.offset + state.displayDefault,
        display: state.display + state.displayDefault,
      };
    case GET_POKEMONS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case GET_MORE_POKEMONS:
      return {
        ...state,
        loading: true,
      };
    case GET_MORE_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons: [...state.pokemons, ...action.payload],
        offset: state.offset + state.displayDefault,
        display: state.display + state.displayDefault,
      };
    default:
      return state;
  }
}
