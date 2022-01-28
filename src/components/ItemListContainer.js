import './ItemListContainer.css';

import ItemCount from './ItemCount';

export default function ItemListContainer({ greetings }) {
  function onAddItem(itemCount) {
    console.log(itemCount);
  }

  return (
    <div>
      <h1>{greetings}</h1>
      <ItemCount stock={5} initial={1} onAdd={onAddItem} />
    </div>
  )
}
