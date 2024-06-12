import React, { useState } from "react";

function Search({ }) {

  const [input, setInput] = useState("Search");

  function handleInput(event) {
    setInput(event.target.value)
  }

  // console.log(input)

  return (
    <input type="text" name="search" placeholder="Search..." value={input} onChange={handleInput}/>
  )
}

export default Search