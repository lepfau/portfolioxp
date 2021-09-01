import React from "react";
import Draggable from "react-draggable";

function Fenetre(props) {
  return (
    <Draggable>
      <div className="fenetre">
        <p className="noselect" onClick={() => props.closePdt()}>
          X
        </p>
        <p>{props.text}</p>
      </div>
    </Draggable>
  );
}

export default Fenetre;
