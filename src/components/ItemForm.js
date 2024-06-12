import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm() {

  const [food, setNewFood] = useState("");
  const [category, setNewCategory] = useState("Produce");

  function handleValue(event) {
    setNewFood(event.target.value);
  }

  function handleCategoryChange(event){
    setNewCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newItem = ({
      id: uuid(),
      name: food,
      category: category
    })
    console.log(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleValue}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
