import React from "react";
import trashlogo from "../assets/trash.png";
import Draggable from "react-draggable";

function Trash(props) {
  return (
    <Draggable scale={1}>
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
    </Draggable>
  );
}

export default Trash;
