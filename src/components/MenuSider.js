import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { menuHandler } from "../actions";

export default function MenuSider() {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const openMenu = () => dispatch(menuHandler());

  return (
    <div className={`menu-sider ${menu ? "opened" : "closed"}`}>
      <div className="menu-sider__search">
        <label htmlFor="name2">
          <i className="fas fa-search" />
        </label>
        <input placeholder="Buscar un Pokémon" name="name" id="name2" />
      </div>
      <div className="menu-sider__buttons">
        <Link onClick={openMenu} to="/">
          <i className="fas fa-home" />
          <span>Inicio</span>
        </Link>
        <Link to="/pokedex" onClick={openMenu}>
          <i className="fas fa-gamepad" />
          <span>Pokedex</span>
        </Link>
        <Link to="/news" onClick={openMenu}>
          <i className="fas fa-newspaper" />
          <span>Noticias</span>
        </Link>
      </div>
    </div>
  );
}
