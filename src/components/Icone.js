import React, { useState } from "react";
import Draggable from "react-draggable";

function Icone(props) {
  const [selected, setSelected] = useState(false);

  return (
    <Draggable scale={1}>
      <div
        className="trashcontainer noselect"
        onClick={() => setSelected(!selected)}
        onDoubleClick={() => props.showWindow(props.name)}
      >
        <div
          className={selected ? "icone_selected noselect" : "icone noselect"}
        >
          <img className="icone_logo" src={props.logo} alt="icon logo" />
          <p>{props.name}</p>
        </div>
      </div>
    </Draggable>
  );
}

export default Icone;
