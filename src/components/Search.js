import React, { useState } from "react";
import itemData from "../data/items";


function Search() {
  let storedInput
  const [input, setInput] = useState("Search");

  function handleInput(event) {
    setInput(event.target.value)
  }

  storedInput = []
  itemData.filter(item => {
    if (item.name === input) {
      storedInput.push(item)
    } else if (input === "Search") {
      storedInput = [...itemData]
    }
    return storedInput
  })

  console.log(storedInput)

  return (
    <input type="text" name="search" placeholder="Search..." value={input} onChange={handleInput}/>
  )
}

export default Search