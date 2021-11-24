import React, { useState } from "react";
import Draggable from "react-draggable";

function Fenetre(props) {

  //adapter fonction move item qui remets la fenetre au premier plan pour compatibilité avec mot anglais
  const moveItemFront = (array, text) => {
    if (text === "Notepad") props.moveItem(array, "Bloc-notes");
    else if (text === "Computer") props.moveItem(array, "Poste de travail")
    else if (text === "My Skills") props.moveItem(array, "Mes compétences")
    else if (text === "My Projects") props.moveItem(array, "Mes Projets")
    else if (text === "My Pictures") props.moveItem(array, "Mes Images")
    else if (text === "My Education") props.moveItem(array, "Mes Formations")
    else if (text === "Trash") props.moveItem(array, "Corbeille")
    else if (text === "Resume.pdf") props.moveItem(array, "Mon Cv.pdf")
    else props.moveItem(array, text)
  }

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
              <div className="window_content" onClick={() => moveItemFront(props.array, props.text)}>
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
