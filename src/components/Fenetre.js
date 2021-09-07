import React from "react";
import Draggable from "react-draggable";

function Fenetre(props) {
  let widthh = props.width;
  let index = props.index;

  return (
    <Draggable
      handle="#imhandle"
      // bounds={{ top: -100, left: -400, right: 100, bottom: 10 }}
    >
      <div
        className="window"
        style={{ width: widthh, zIndex: index }}
        onClick={() => props.putOnTop(props.text)}
      >
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
