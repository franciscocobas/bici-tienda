import './ItemList.css';
import Item from './Item';

export default function ItemList({ items }) {
  return (
    <div className='item-list-conatiner'>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
