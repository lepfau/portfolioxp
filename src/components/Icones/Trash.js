import React, { useState, useContext } from "react";
import trashlogo from "../../assets/ModernXP-76-Trash-Full-icon.png";
import Draggable from "react-draggable";
import LangContext from "../Context/LangContext";

function Trash(props) {
  const [style, setStyle] = useState("trashh");
const lang = useContext(LangContext);
  return (
    <Draggable scale={1}>
      <div
        className="trashcontainer noselect"
        onDoubleClick={() => props.showWindow("Corbeille")}
        onClick={() => props.trashselect()}
      >
        {props.boolean ? (
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
            {lang.language === "English" ? "Trash" : "Corbeille" }
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
            {lang.language === "English" ? "Trash" : "Corbeille" }
            </p>
          </div>
        )}
      </div>
    </Draggable>
  );
}

export default Trash;
