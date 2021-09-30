import React, { useState } from "react";
import Draggable from "react-draggable";

function Fenetre(props) {


  return (
    <div className="window_elements">
      {props.fullScreen ?
        <div style={{ height: "100%", width: "100%" }}>
          <div className="window_container_fullscreen">
            <div className="window_basic">
              <div className="title-bar" id="imhandle" onDoubleClick={() => props.makefullScreen(props.text)}>
                <div className="title-bar-text">
                  <img
                    className="fenetre_topbar_image"
                    src={props.logo}
                    alt="super"
                  />
                  <p>{props.text}</p>
                </div>
                <div className="title-bar-controls">
                  <button
                    aria-label="Minimize"
                    onClick={() => props.hideWindow(props.text)}
                  ></button>
                  <button
                    aria-label="Maximize"
                    onClick={() => props.makefullScreen(props.text)}
                  ></button>
                  <button
                    aria-label="Close"
                    onClick={() => props.closeWindow(props.text)}
                  ></button>
                </div>
              </div>
              <div className="window_content">
                {props.content}
              </div>
            </div>
          </div>
        </div> :
        <Draggable handle="#imhandle">
          <div className="window_container" style={{ width: props.width, height: props.height }}>
            <div className="window_basic">
              <div className="title-bar" id="imhandle" onDoubleClick={() => props.makefullScreen(props.text)}>
                <div className="title-bar-text" >
                  <img
                    className="fenetre_topbar_image"
                    src={props.logo}
                    alt="super"
                  />
                  <p className="textewindowtopbar">{props.text}</p>
                </div>
                <div className="title-bar-controls">
                  <button
                    aria-label="Minimize"
                    onClick={() => props.hideWindow(props.text)}
                  ></button>
                  <button
                    aria-label="Maximize"
                    onClick={() => props.makefullScreen(props.text)}
                  ></button>
                  <button
                    aria-label="Close"
                    onClick={() => props.closeWindow(props.text)}
                  ></button>
                </div>
              </div>
              <div className="window_content" onClick={() => props.moveItem(props.array, props.text)}>
                {props.content}
              </div>
            </div>
          </div>
        </Draggable>
      }

    </div>

    // <div className={fullScreen ? "fullscreenwindow" : "basicwindow"}>
    //   {fullScreen ? (
    //     <div style={{ width: "100%", height: "100%" }}>
    //       <div className="window" style={fullScreenStyle}>
    //         <div className="title-bar" id="imhandle">
    //           <div className="title-bar-text">
    //             <img
    //               className="fenetre_topbar_image"
    //               src={props.logo}
    //               alt="super"
    //             />
    //             {props.text}
    //           </div>
    //           <div className="title-bar-controls">
    //             <button
    //               aria-label="Minimize"
    //               onClick={() => props.hideWindow(props.text)}
    //             ></button>
    //             <button
    //               aria-label="Maximize"
    //               onClick={() => setFullscreen(false)}
    //             ></button>
    //             <button
    //               aria-label="Close"
    //               onClick={() => props.closeWindow(props.text)}
    //             ></button>
    //           </div>
    //         </div>
    //         <div className="window-body">{props.content}</div>
    //       </div>
    //     </div>
    //   ) : (
    //     <Draggable handle="#imhandle">
    //       <div className="window" style={defaultStyle}>
    //         <div className="title-bar" id="imhandle"  onClick={() => props.moveItem(props.array, props.text)}>
    //           <div className="title-bar-text">
    //             <img
    //               className="fenetre_topbar_image"
    //               src={props.logo}
    //               alt="super"
    //             />
    //             {props.text}
    //           </div>
    //           <div className="title-bar-controls">
    //             <button
    //               aria-label="Minimize"
    //               onClick={() => props.hideWindow(props.text)}
    //             ></button>
    //             <button
    //               aria-label="Maximize"
    //               onClick={() => setFullscreen(true)}
    //             ></button>
    //             <button
    //               aria-label="Close"
    //               onClick={() => props.closeWindow(props.text)}
    //             ></button>
    //           </div>
    //         </div>
    //         <div className="window-body" onClick={() => props.moveItem(props.array, props.text)}  >{props.content}</div>
    //       </div>
    //     </Draggable>
    //   )}
    // </div>
  );
}

export default Fenetre;
