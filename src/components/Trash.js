import React from "react";
import trashlogo from "../assets/trash.png";

function Trash(props) {
  return (
    <div
      className="trashcontainer noselect"
      onDoubleClick={() => props.showtrash()}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img className="icone" src={trashlogo} alt="corbeille" />
        <p style={{ color: "white", fontSize: "13px" }}>Corbeille</p>
      </div>
    </div>
  );
}

export default Trash;
