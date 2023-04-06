import { useState } from "react";

const AddNames = ({ setListItems, listItems }) => {
    const [name, setName] = useState("");
    const [generatedName, setGeneratedName] = useState(null);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newName = {
        id: listItems.length + 1,
        name: name,
      };
      setListItems([...listItems, newName]);
      setName("");
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const pickName = (event) => {
        const randomNumber = getRandomInt(listItems.length);
        setGeneratedName(listItems[randomNumber].name);

    }
  
    return (
    <article>
      <section>
        <form className="AddNames" onSubmit={handleSubmit}>
          <input
            
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button type="submit" disabled={!name}>
            Add Name
          </button>
        
        </form>
      </section>
      <section>
          <button className="generate" onClick={pickName} disabled={listItems.length < 2}>
            Generate random name
          </button>
          <p>{generatedName ? generatedName : undefined}</p>
      </section>
      </article>
    );
  };
  
  export default AddNames;