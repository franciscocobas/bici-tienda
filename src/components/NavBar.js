import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

export default function Menu() {
  return (
    <ul>
      <li><a href="#">Bicicletas</a></li>
      <li><a href="#">Accesorios</a></li>
      <li><a href="#">Ropa</a></li>
      <li><a href="#"><CartWidget /></a></li>
    </ul>
  );
};
