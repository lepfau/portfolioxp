import React from "react";
import Draggable from "react-draggable";

function Fenetre(props) {
  let widthh = props.width;
  let index = props.index;

  return (
    <Draggable>
      <div
        className="window"
        style={{ width: widthh, zIndex: index }}
        onClick={() => props.closemenu(props.text)}
      >
        <div className="title-bar">
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
              onClick={() => props.hidewindow()}
            ></button>
            <button aria-label="Maximize"></button>
            <button
              aria-label="Close"
              onClick={() => props.closePdt()}
            ></button>
          </div>
        </div>
        <div className="window-body">{props.content}</div>
      </div>
    </Draggable>
  );
}

export default Fenetre;
