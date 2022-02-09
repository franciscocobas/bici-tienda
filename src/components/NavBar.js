import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <ul>
      <li><NavLink to="/category/bicicletas">Bicicletas</NavLink></li>
      <li><NavLink to="/category/accesorios">Accesorios</NavLink></li>
      <li><NavLink to="/category/ropa">Ropa</NavLink></li>
      <li><a href="#"><CartWidget /></a></li>
    </ul>
  );
};
