import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo-sizelarge.png";
import { menuHandler } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const openMenu = () => dispatch(menuHandler());
  const menu = useSelector((state) => state.menu);
  return (
    <div className="header">
      <div className="header-menu" onClick={() => openMenu()}>
        <i className={`fas fa-list ${menu ? "rotated" : "unrotated"}`} />
      </div>
      <Link to="/" className="header-logo__container">
        <img src={logo} alt="logo" />
        <div>
          <span>Poke</span>
          <span>Drip</span>
        </div>
      </Link>
      <div className="header-buttons">
        <Link to="/">Inicio</Link>
        <Link to="/pokedex">Pokedex</Link>
        <Link to="/news">Noticias</Link>
      </div>
      <div className="header-search">
        <label htmlFor="name">
          <i className="fas fa-search" />
        </label>
        <input
          placeholder="Busque un pokemon"
          name="name"
          type="text"
          id="name"
        />
      </div>
    </div>
  );
}
