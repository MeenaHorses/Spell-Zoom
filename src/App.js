import React, { useState, useRef } from "react";
import Spellingshow from "./Spellingshow";
import "./App.css";

function App() {
  const [spellings, setSpellings] = useState([]);

  const spellingNameRef = useRef();

  function handleAddSpelling(e) {
    const word = spellingNameRef.current.value;
    if (word === "") return alert("Empty field");
    setSpellings((prevSpellings) => {
      return [
        ...prevSpellings,
        { id: new Date().getTime().toString(), nam: word },
      ];
    });
    spellingNameRef.current.value = null;
  }

  function handleDelete(id) {
    const newWords = spellings.filter((i) => i.id !== id);
    setSpellings(newWords);
  }

  return (
    <>
      <h1>Spell & Zoom</h1>
      <input ref={spellingNameRef} placeholder="Enter word" autoFocus></input>
      <button className="btn-enter" onClick={handleAddSpelling}>
        Enter
      </button>
      <fieldset>
        <legend>
          <div>Spellings</div>
        </legend>
        <Spellingshow spellings={spellings} handleDelete={handleDelete} />
      </fieldset>
    </>
  );
}

export default App;
