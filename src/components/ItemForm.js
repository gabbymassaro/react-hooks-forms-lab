import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  // const newItem = {
  //   id: uuid(), // the `uuid` library can be used to generate a unique id
  //   name: itemName,
  //   category: itemCategory,
  // };

  const [newFood, setNewFood] = useState("");

  function handleValue(event) {
    setNewFood(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(newFood)
  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleValue}/>
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit" onClick={handleSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
