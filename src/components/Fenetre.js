import React, { useState } from "react";
import Draggable from "react-draggable";

function Fenetre(props) {
  const [defaultStyle, setDefaultstyle] = useState({
    width: "700px",
    height: "500px",
    transform: "translate(0px, 0px)",
  });

  const fullScreen = () => {
    setDefaultstyle({
      width: "1030px",
      height: "730px",
      transform: "translate(0px, 0px)",
    });
  };

  return (
    <Draggable handle="#imhandle">
      <div className="window" style={defaultStyle}>
        <div className="title-bar" id="imhandle">
          <div className="title-bar-text">
            <img
              className="fenetre_topbar_image"
              src={props.logo}
              alt="super"
            />
            {props.text}
          </div>
          <div className="title-bar-controls">
            <button
              aria-label="Minimize"
              onClick={() => props.hideWindow(props.text)}
            ></button>
            <button aria-label="Maximize" onClick={() => fullScreen()}></button>
            <button
              aria-label="Close"
              onClick={() => props.closeWindow(props.text)}
            ></button>
          </div>
        </div>
        <div className="window-body">{props.content}</div>
      </div>
    </Draggable>
  );
}

export default Fenetre;
