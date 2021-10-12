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
<div className="header-container">
  <div 
    className="header-menu"
    onClick={() => openMenu()}
  >
    <i
      className={`fas fa-bars ${menu ? "rotated" : "unrotated"}`}
    />
  </div>
  <Link to="/" className="header-logo__container">
      <img src={logo} alt="logo" />
    <div>
      <span>Poke</span>
      <span>Drip</span>
    </div>
  </Link>
  </div>
</div>
  );
}
