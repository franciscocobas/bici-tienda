import './Item.css';

import { Link } from 'react-router-dom';

export default function Item({ item }) {
  return (
    <div className='item-container'>
      <Link to={`/producto/${item.id}`}>
        <img src={item.pictureUrl} alt="Imagen del artículo" />
        <div className='detail-container'>
          <p className='item-price'>USD {item.price}</p>
          <p className='item-title'>{item.title}</p>
        </div>
      </Link>
    </div>
  );
}
