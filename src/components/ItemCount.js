import { useState } from 'react';
import './ItemCount.css';

export default function ItemCount({ stock, initial, onAdd }) {
  const [itemCounter, setItemCounter] = useState(initial);

  function sumar() {
    if (itemCounter < stock) {
      setItemCounter(itemCounter + 1);
    }
  }

  function restar() {
    if (itemCounter > 0) {
      setItemCounter(itemCounter - 1);
    }
  }

  function addToCart() {
    onAdd(itemCounter);
  }
  
  return (
    <div className='item-count-container'>
      <div className='counter-container'>
        <button onClick={restar}>-</button>
        <p>{itemCounter}</p>
        <button onClick={sumar}>+</button>
      </div>
      <button className='add-to-cart-button' onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
}
