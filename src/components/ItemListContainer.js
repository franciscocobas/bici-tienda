import './ItemListContainer.css';

import { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { getItems } from '../api';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greetings }) {
  const [itemsList, setItemsList] = useState([]);
  const { categoryName } = useParams();


  useEffect(() => {
    // En el montaje del componente voy a traer los productos del archivo api
    getItems().then((items) => {
      if (!categoryName) {
        setItemsList(items);
      } else {
        const itemsPorCategoria = items.filter((producto) => {
          return producto.category === categoryName;
        });

        setItemsList(itemsPorCategoria);
      }
    }).catch((error) => {
      console.log(error);
    });

  }, [categoryName]);

  function onAddItem(itemCount) {
    console.log(itemCount);
  }

  return (
    <div>
      <h1>{greetings}</h1>

      {
        itemsList.length === 0 ? 
          <p>Cargando productos...</p> : 
          <ItemList items={itemsList} />
      }

      {/* Lo seguimos manteniendo acá por el momento */}
      <ItemCount stock={5} initial={1} onAdd={onAddItem} />
    </div>
  )
}
