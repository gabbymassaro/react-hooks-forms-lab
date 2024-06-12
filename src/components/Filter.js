import React, { useState } from "react";

function Filter({ onCategoryChange }) {

  const [input, setInput] = useState("Search");

  function handleInput(event) {
    setInput(event.target.value)
  }

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={input} onChange={handleInput}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
