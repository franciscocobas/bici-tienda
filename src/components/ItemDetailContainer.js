import './ItemDetailContainer.css';

import { useState, useEffect } from 'react';
import { getItems } from '../api/index';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const [item, setItem] = useState();

  useEffect(() => {
    const itemId = 2;

    getItems().then((items) => {
      const item = items.find((i) => i.id === itemId);
      setItem(item);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <div className='item-detail-container'>
      {!item ? <p>Cargando producto...</p> :  <ItemDetail item={item} />}
    </div>
  )
};
