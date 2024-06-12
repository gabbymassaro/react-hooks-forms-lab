import React, { useState } from "react";
import itemData from "../data/items";


function Search() {

  console.log(itemData)

  const [input, setInput] = useState("Search");

  function handleInput(event) {
    setInput(event.target.value)
  }
  return (
    <input type="text" name="search" placeholder="Search..." value={input} onChange={handleInput}/>
  )
}

export default Search