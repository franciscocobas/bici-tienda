import './ItemDetailContainer.css';

import { useState, useEffect } from 'react';
import { getItems } from '../api/index';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
  const [item, setItem] = useState();
  // El useParams es un hoook de react-router-dom que nos provee para obtener los 
  // parametros de la URL. 
  // El nombre "itemId" es arbitrario y lo tengo que definir en el App.js
  const { productId } = useParams();

  useEffect(() => {
    getItems().then((items) => {
      const item = items.find((i) => i.id === Number(productId));
      setItem(item);
    }).catch((error) => {
      console.log(error);
    });

  }, [productId]);

  return (
    <div className='item-detail-container'>
      {!item ? <p>Cargando producto...</p> :  <ItemDetail item={item} />}
    </div>
  )
};
