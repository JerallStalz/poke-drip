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
  news: [
    {
      id: 1,
      title: "Pokémon Masters EX detalla más contenidos de su segundo aniversario",
      description: "Nos llegan más novedades que DeNA ha confirmado hoy mismo para esta aplicación para móviles. Se trata de los eventos que...",
      imgUrl: "https://www.nintenderos.com/wp-content/uploads/2021/09/pokemon-masters-ex.jpg"
    },
    {
      id: 2,
      title: "Pokémon GO: Conoce todos los detalles de la Semana de la Moda",
      description: "Vuelve a llegarnos un interesante mensaje relacionado con uno de los juegos más destacados del mercado de móviles. Estamos hablando en...",
      imgUrl: "https://www.nintenderos.com/wp-content/uploads/2021/09/unnamed-1-Cropped-1-347x195.jpg"
    },
    {
      id: 3,
      title: "Consigue tu Nintendo Switch por solo 299,99 € con packs de juegos",
      description: "Si aún no tienes la consola de Nintendo no esperes más y aprovecha la bajada de precio de Nintendo Switch Además...",
      imgUrl: "https://www.nintenderos.com/wp-content/uploads/2021/09/switchbajadanintenderos-347x195.jpg"
    },
    {
      id: 4,
      title: "Tetris 99 confirma Maximus Cup de WarioWare: Get It Together!",
      description: "Parece que Tetris 99 ha confirmado recientemente un nuevo evento: se trata de un evento protagonizado por WarioWare: Get It Together!. Este...",
      imgUrl: "https://www.nintenderos.com/wp-content/uploads/2021/09/wa-1-347x195.jpg"
    },
    {
      id: 5,
      title: "Pokémon 25 The Album confirma novedades",
      description: "Vuelve a llegarnos un interesante mensaje relacionado con una de las franquicias más queridas por parte de los nintenderos. Se trata...",
      imgUrl: "https://www.nintenderos.com/wp-content/uploads/2021/02/pokemon-25-360x202.jpg"
    },
    {
      id: 6,
      title: "Imágenes de cartas V, VMAX y del Starter Deck 100 del JCC Pokémon",
      description: "Para muchos niños de los años 90, Pokémon fue un fenómeno absoluto. La adictiva jugabilidad del querido RPG con su popular...",
      imgUrl: "https://www.nintenderos.com/wp-content/uploads/2021/09/E_FLJdrXoAkwSCg-Cropped.jpg"
    },
  ],
  firstLaunch: false,
  selectedOffset: 0,
  baseDisplay: 12,
  baseOffset: 0,
  offset: 0,
  display: 12,
  pokemons: [],
  error: false,
  loadingMore:  false,
  loading: false,
  menu: false,
  selectedPokemon: null,
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
        loadingMore: true,
      };
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        display: state.display + state.baseDisplay,
        offset: state.offset + state.baseDisplay,
        pokemons: state.pokemons === 'error' ? action.payload : [...state.pokemons, ...action.payload],
        loadingMore: false,
      };
    case GET_POKEMONS_ERROR:
      return {
        ...state,
        loadingMore: false,
      };
    case CLEAN_POKEMONS:
      return {
        ...state,
        offset: state.baseOffset,
        display: state.baseDisplay,
      };
    case SELECT_REGION:
      return {
        ...state,
        selectedOffset: action.payload,
        offset: action.payload,
        display: action.payload + state.baseDisplay,
        pokemons: [],
      };
    case GET_REGION:
      return {
        ...state,
        loading: true,
        pokemons: []
      };
    case GET_REGION_SUCCESS:
      return {
        ...state,
        offset: state.offset + state.baseDisplay,
        display: state.display + state.baseDisplay,
        pokemons: action.payload,
        firstLaunch: true,
        loading: false,
      };
    case GET_REGION_ERROR:
      return {
        ...state,
        loading: false,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        loading: true,
        menu: false,
        pokemons: []

      };
    case SEARCH_POKEMON_SUCCESS:
      return {
        ...state,
        offset: state.baseOffset,
        display: state.baseDisplay,
        pokemons: [action.payload],
        loading: false,
      };
    case SEARCH_POKEMON_ERROR:
      return {
        ...state,
        offset: state.baseOffset,
        display: state.baseDisplay,
        loading: false,
        pokemons: 'error'
      };

    default:
      return state;
  }
}
