import './Item.css';

export default function Item({ item }) {
  return (
    <div className='item-container'>
      <img src={item.pictureUrl} alt="Imagen del artículo" />
      <div className='detail-container'>
        <p className='item-price'>USD {item.price}</p>
        <p className='item-title'>{item.title}</p>
      </div>
    </div>
  );
}
