import {useState} from 'react';
import AddNames from './AddNames';

const Names = () => {

    const initialList = [];
    const [listItems, setListItems] = useState(initialList);

    function handleRemove(id) {
      const newList = listItems.filter((item) => item.id !== id);
  
      setListItems(newList);
    }
    return (
      <section>
        <ul>
          {listItems.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <button type="button" onClick={() => handleRemove(item.id)}>
                X
              </button>
            </li>
          ))}
        </ul>
        <AddNames setListItems={setListItems} listItems={listItems} />
      </section>
    );
}

export default Names;