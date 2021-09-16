import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { menuHandler } from "../actions";
import { searchPokemon } from "../actions";

export default function MenuSider({props}) {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const openMenu = () => dispatch(menuHandler());
    const searchPoke = (pokemonName) => dispatch(searchPokemon(pokemonName))

  const sendPokemon = (e) => {
    e.preventDefault()
    searchPoke(name)
    if( window.location.pathname !== '/pokedex') (
      props.history.push('/pokedex')
    )

  };
  const Handler = e => {
    setName(e.target.value)
  }

  const [ name, setName ] = useState("");


  return (
    <div className={`menu-sider ${menu ? "opened" : "closed"}`}>
      <form className="menu-sider__search" onSubmit={sendPokemon}>
        <label htmlFor="name2">
          <i className="fas fa-search" />
        </label>
        <input placeholder="Buscar un Pokémon" name="name" id="name2" value={name} onChange={Handler} />
      </form>
      <div className="menu-sider__buttons">
        <Link
          className={window.location.pathname === "/" ? "active" : null}
          onClick={openMenu}
          to="/"
        >
          <i className="fas fa-home" />
          <span>Inicio</span>
        </Link>
        <Link
          to="/pokedex"
          onClick={openMenu}
          className={window.location.pathname === "/pokedex" ? "active" : null}
        >
          <i className="fas fa-gamepad" />
          <span>Pokedex</span>
        </Link>
      </div>
    </div>
  );
}
