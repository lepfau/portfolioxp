import React from "react";
import trashlogo from "../assets/trash.png";

function Trash(props) {
  return (
    <div
      className="trashcontainer noselect"
      onDoubleClick={() => props.showtrash()}
    >
      <img className="icone" src={trashlogo} alt="corbeille" />
      <p style={{ color: "white", fontSize: "13px" }}>Corbeille</p>
    </div>
  );
}

export default Trash;
