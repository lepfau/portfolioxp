import React from "react";
import trashlogo from "../assets/trash.png";

function Trash(props) {
  return (
    <div
      className="trashcontainer noselect"
      onDoubleClick={() => props.showtrash()}
      onClick={() => props.trashselect()}
    >
      {props.trashboolean ? (
        <div
          className="trashhh"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img className="icone" src={trashlogo} alt="corbeille" />
          <p style={{ color: "white", fontSize: "13px", margin: "6px" }}>
            Corbeille
          </p>
        </div>
      ) : (
        <div
          className="trashh"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img className="icone" src={trashlogo} alt="corbeille" />
          <p style={{ color: "white", fontSize: "13px", margin: "6px" }}>
            Corbeille
          </p>
        </div>
      )}
    </div>
  );
}

export default Trash;
