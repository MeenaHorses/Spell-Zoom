import React, { useState } from "react";
import style from "./Style";
import "./Spelling.css";

function Spelling({ spelling, handleDelete }) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div>
        <li
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          style={{
            ...(hover ? style.hover : style.normal),
          }}
        >
          {spelling.nam}
        </li>
      </div>
      <button
        className="spellings-btn"
        onClick={() => handleDelete(spelling.id)}
      >
        Delete
      </button>
    </>
  );
}

export default Spelling;
