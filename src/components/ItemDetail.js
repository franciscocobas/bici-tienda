import './ItemDetail.css';

export default function ItemDetail({ item }) {
  return (
    <div className='item-detail'>
      <img src={item.pictureUrl} alt="Imagen del producto" />
      <div className='right-column'>
        <div className='details'>
          <h1>{item.title}</h1>
          <p className='price'>USD {item.price}</p>
          <p className='description'>{item.description}</p>
        </div>
        <button>Comprar</button>
      </div>
    </div>
  )
}
