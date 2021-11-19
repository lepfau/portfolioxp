import React, { useState } from "react";
import Draggable from "react-draggable";

function Icone(props) {
  const [selected, setSelected] = useState(false);

const showWindowLang = (text) => {
  if(text === "Trash") {
    props.showWindow("Corbeille")
  }
  else if (text === "Resume.pdf") {
    props.showWindow("Mon Cv.pdf")
  }
  else props.showWindow(text)
}

  return (
    <Draggable scale={1}>
      <div
        style={{
          bottom: props.bottom,
          right: props.right,
          top: props.top,
          left: props.left,
        }}
        className="trashcontainer noselect"
        onClick={() => setSelected(!selected)}
        onDoubleClick={() => showWindowLang(props.name)}
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
