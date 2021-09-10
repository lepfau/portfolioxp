import React, { useState } from "react";
import Draggable from "react-draggable";

function Fenetre(props) {
  const [defaultStyle, setDefaultstyle] = useState({
    width: props.width || "700px",
    height: props.height || "500px",
    transform: "translate(-369px, -203px)",
    position: "absolute",
  });

  const fullScreenStyle = {
    width: "100%",
    height: "100%",
  };

  const [fullScreen, setFullscreen] = useState(false);

  // const fullScreen = () => {
  //   setDefaultstyle({
  //     width: "1030px",
  //     height: "730px",
  //     transform: "translate(0px, 0px)",
  //   });
  // };

  return (
    <div className={fullScreen ? "fullscreenwindow" : "basicwindow"}>
      {fullScreen ? (
        <div style={{ width: "100%", height: "100%" }}>
          <div className="window" style={fullScreenStyle}>
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
                <button
                  aria-label="Maximize"
                  onClick={() => setFullscreen(false)}
                ></button>
                <button
                  aria-label="Close"
                  onClick={() => props.closeWindow(props.text)}
                ></button>
              </div>
            </div>
            <div className="window-body">{props.content}</div>
          </div>
        </div>
      ) : (
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
                <button
                  aria-label="Maximize"
                  onClick={() => setFullscreen(true)}
                ></button>
                <button
                  aria-label="Close"
                  onClick={() => props.closeWindow(props.text)}
                ></button>
              </div>
            </div>
            <div className="window-body">{props.content}</div>
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default Fenetre;
