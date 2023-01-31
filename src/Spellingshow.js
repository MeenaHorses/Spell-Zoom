import React from "react";
import Spelling from "./Spelling";

function Spellingshow({ spellings, handleDelete, style }) {
  return spellings.map((spelling) => {
    return (
      <Spelling
        key={spelling.id}
        spelling={spelling}
        handleDelete={handleDelete}
        style={style}
      />
    );
  });
}

export default Spellingshow;
